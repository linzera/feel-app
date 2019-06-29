import * as React from "react";
import { Provider } from "mobx-react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import Store from "../store";
import MainRoute from "../navigation";

export interface AppProps {}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

export default function App(props: AppProps) {
  return (
    <Provider {...Store}>
      <PaperProvider theme={theme}>
        <MainRoute />
      </PaperProvider>
    </Provider>
  );
}
