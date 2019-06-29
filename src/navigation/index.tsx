import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Phill from "../screens/Phill";

const MainAppFlow = createBottomTabNavigator(
  {
    Home,
    Phill,
    Profile,
  },
  {
    initialRouteName: "Home",
  },
);

export default createAppContainer(MainAppFlow);
