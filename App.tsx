// Native Base
import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";

// React Redux
import { Provider } from "react-redux";

// React Native Toast Message
import { Toast } from "react-native-toast-message/lib/src/Toast";

// Amplify
import { Amplify } from "aws-amplify";

// Habitopia
import Navigation from "./src/navigation/Navigation";
import store from "./src/app/store";
import awsExports from "./src/aws-exports";
import colorModeManager from "@app/colorModeManager";

/**
 * Shows the entire Habitopia app and does initial set up work.
 *
 * @returns - The container for the entire Habitopia app.
 */
export default function App() {
  // Set up initial AWS Amplify configuration
  Amplify.configure(awsExports);

  // Force Native Base to use the color mode we manually set
  const customTheme = extendTheme({
    config: {
      useSystemColorMode: false,
    },
  });

  return (
    <Provider store={store}>
      <NativeBaseProvider
        theme={customTheme}
        colorModeManager={colorModeManager}
      >
        <StatusBar />
        <Navigation />
        <Toast />
      </NativeBaseProvider>
    </Provider>
  );
}
