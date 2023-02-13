import { NativeBaseProvider, extendTheme } from "native-base";
import { Provider } from "react-redux";
import { Amplify } from "aws-amplify";
import Navigation from "./src/navigation/Navigation";
import store from "./src/app/store";
import awsExports from "./src/aws-exports";

Amplify.configure(awsExports);

export default function App() {
  const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
  };

  const customTheme = extendTheme({ config });

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={customTheme}>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
}
