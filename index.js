import { AppRegistry } from "react-native";
import App from "./App";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";

Amplify.configure(config);

AppRegistry.registerComponent("main", () => App);
