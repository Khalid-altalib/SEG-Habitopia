import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";
import { Provider } from "react-redux";
import { Amplify } from "aws-amplify";
import Navigation from "./src/navigation/Navigation";
import store from "./src/app/store";
import awsExports from "./src/aws-exports";
import { Toast } from "react-native-toast-message/lib/src/Toast";

Amplify.configure(awsExports);

export default function App() {
  const config = {
    useSystemColorMode: false,
  };

  const customTheme = extendTheme({ config });

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={customTheme}>
        <StatusBar />
        <Navigation />
        <Toast />
      </NativeBaseProvider>
    </Provider>
  );
}
