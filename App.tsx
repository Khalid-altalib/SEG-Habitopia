import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import store from "./src/app/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar />
      </NativeBaseProvider>
    </Provider>
  );
}
