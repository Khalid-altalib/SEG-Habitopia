// Native Base
import { Heading, View, VStack } from "native-base";

// Habitopia
import { useSelector } from "@app/hooks";
import ProfileStatistic from "./ProfileStatistic";

const ProfileStatistics = (): JSX.Element => {
  const { profile } = useSelector((state) => state.profile);
  return (
    <VStack>
      <Heading mb={4}>Statistics</Heading>
      <VStack space={12.5}>
        {profile?.statistics instanceof Array
          ? profile?.statistics.map((statistic, i) => (
              <ProfileStatistic statistic={statistic} key={i} />
            ))
          : null}
      </VStack>
    </VStack>
  );
};

export default ProfileStatistics;
