import PaddedContainer from "../PaddedContainer";
import Button from "../../Button";

import { shallow } from "enzyme";
import NameForm from "../../../features/auth/NameForm";
import MockStorage from "../../../mockStorage";

const storageCache = {};
const AsyncStorage = new MockStorage(storageCache);

jest.setMock("AsyncStorage", AsyncStorage);
it("works", () => {
  let wrap = shallow(<NameForm />);

  expect(wrap).toMatchSnapshot();
});
