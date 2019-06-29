import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Phill from "../screens/Phill";

const MainAppFlow = createBottomTabNavigator(
  {
    Home,
    Profile,
    Phill,
  },
  {
    initialRouteName: "Home",
  },
);

const AppContainer = createAppContainer(MainAppFlow);

export default AppContainer;
