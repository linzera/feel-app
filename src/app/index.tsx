import * as React from "react";
import { Provider } from "mobx-react";
import { StatusBar } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import Store from "../store";
import MainRoute from "../navigation";

export interface AppProps {}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2ed573",
    accent: "yellow",
  },
};

export default function App(props: AppProps) {
  return (
    <Provider {...Store}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <MainRoute />
      </PaperProvider>
    </Provider>
  );
}
