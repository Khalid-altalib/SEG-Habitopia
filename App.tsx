import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";

import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import Navigation from "./src/navigation/Navigation";
import store from "./src/aws-exports";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <StatusBar />
          <Navigation />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  );
}
