import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { Amplify } from "aws-amplify";
import Navigation from "./src/navigation/Navigation";
import store from "./src/app/store";
import awsExports from "./src/aws-exports";

Amplify.configure(awsExports);

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
