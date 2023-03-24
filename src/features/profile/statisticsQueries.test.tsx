import { DataStore, __modelMeta__ } from "@aws-amplify/datastore";
import { getUserFromDatabasebyID } from "../../app/util";
import { getCheckIns, getWins,getStatistics, checkStreak} from "./statisticsQueries"; 
import { ChallengeStatusEnum } from "../../models";
// import * as mockStatisticsQueries from "./statisticsQueries";

jest.mock("../../app/util", () => ({
    getUserFromDatabasebyID: jest.fn(),
}));
jest.resetAllMocks();

jest.mock("aws-amplify", () => ({
    DataStore: {
        query: jest.fn(),
        save: jest.fn(),
    },
}));


describe("getCheckIns", () => {
    it('should return the number of check-ins for a user', async () => {
        (getUserFromDatabasebyID as jest.Mock).mockResolvedValue({
            id: '123',
            name: 'Test User',
            Checkins: [
                { id: 'checkin1', isValidated: true },
                { id: 'checkin2', isValidated: false },
                { id: 'checkin3', isValidated: true },
            ],
            });

        const checkinCount = await getCheckIns('123');
        expect(checkinCount).toEqual(2);
    });
});



describe("getWins", () => {

    const mockUserChallenges = [
        {
            id: "1",
            name: "sleep",
            status: ChallengeStatusEnum.COMPLETED,
        },
        {
            id: "2",
            name: "exercise",
            status: ChallengeStatusEnum.COMPLETED,
        },
        {
            id: "3",
            name: "eat healthy",
            status: ChallengeStatusEnum.ACTIVE,
        },
    ];

    it("should return the number of wins", async () => {
        const winsQueryMock = jest.fn(() => Promise.resolve(mockUserChallenges));
        DataStore.query= (winsQueryMock);

        const result = await getWins("123");
        expect(result).toEqual(2);
    });
});
   
describe("getStatistics", () => {
    (getUserFromDatabasebyID as jest.Mock).mockResolvedValue({
        id: '123',
        name: 'Test User',
        Checkins: [
            { id: 'checkin1', isValidated: true, createdAt: "2020-01-01" },
            { id: 'checkin2', isValidated: false, createdAt: "2021-01-02" },
            { id: 'checkin3', isValidated: true, createdAt: "2021-01-23" },
        ],
        });

    
    it ("should return the number of wins, checkins and streak", async () => {
        const result = await getStatistics("123")
        const expected = {
            "checkIns": 2,
            "wins": 2,
            "streak": 0,
        }
        expect(result).toEqual(expected);
    });

});


describe("checkStreak", () => {

    let mockUserObject = {
        id: '123',
        name: 'Test User',
        streakStart: "2021-01-01" as any,
        Checkins: [
            { id: 'checkin1', isValidated: true, createdAt: "2020-01-01" },
            { id: 'checkin2', isValidated: false, createdAt: "2020-01-02"  },
            { id: 'checkin3', isValidated: true, createdAt: "2020-01-03"  },
        ] as any,
        };

    it("should return 0 if the lastCheckIn was over 1 day ago", async () => {
        DataStore.query = jest.fn(() => Promise.resolve(mockUserObject.Checkins));
        (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUserObject);
        const result = await checkStreak("123")
        expect(result).toEqual(0);
    })
    
    it("should return 0 if the lastCheckIn has no createdAt", async () => {
        mockUserObject.Checkins =[
            { id: 'checkin1', isValidated: true },
            { id: 'checkin3', isValidated: true},
            { id: 'checkin2', isValidated: false},
        ];

        DataStore.query = jest.fn(() => Promise.resolve(mockUserObject.Checkins));
        (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUserObject);
        const result = await checkStreak("123")
        expect(result).toEqual(0);
    })

    
    it("should return 0 if the streakstart is more recent than the last checkIn", async () => {
        mockUserObject.streakStart = "2022-01-01";
        DataStore.query = jest.fn(() => Promise.resolve(mockUserObject.Checkins));
        (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUserObject);
        const result = await checkStreak("123")
        expect(result).toEqual(0);
    })

    it("should return 0 if streakStart is in the future", async () => {
        const recentCheckin = new Date(); 
        const dayInFuture = new Date(); // 10 days later
        recentCheckin.setHours(recentCheckin.getHours() - 12);

        dayInFuture.setDate(dayInFuture.getDate() + 10);
        mockUserObject.streakStart = dayInFuture;

        mockUserObject.Checkins =[
            { id: 'checkin1', isValidated: true, createdAt: recentCheckin },
        ];
        DataStore.query = jest.fn(() => Promise.resolve(mockUserObject.Checkins));
        (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUserObject);
        const result = await checkStreak("123")
        expect(result).toEqual(0);
        
    })

    it("should return 1 if the last checkin was within a day", async () => {
        // set another day to 12 hours ago
        const anotherDay = new Date();
        anotherDay.setHours(anotherDay.getHours() - 12);
        mockUserObject.streakStart = anotherDay;

        mockUserObject.Checkins =[
            { id: 'checkin1', isValidated: true, createdAt: anotherDay },
        ];
        DataStore.query = jest.fn(() => Promise.resolve(mockUserObject.Checkins));
        (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUserObject);
        const result = await checkStreak("123")
        expect(result).toEqual(0);
        
    })
    

    
    it("should return 0 if streakStart is undefined", async () => {
        mockUserObject.streakStart = undefined;
        (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUserObject);
        const result = await checkStreak("123")
        expect(result).toEqual(0);
    });

    it("should return 0 if the user hasn't checked in", async () => {
        mockUserObject.Checkins = [];
        mockUserObject.streakStart = "2021-01-01";
        DataStore.query = jest.fn(() => Promise.resolve(mockUserObject.Checkins));
        (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUserObject);
        const result = await checkStreak("123")
        expect(result).toEqual(0);
    }) 



});

