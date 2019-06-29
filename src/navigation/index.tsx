import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Phill from "../screens/Phill";
import Wellcome from '../screens/Wellcome';

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

export default createAppContainer(
  createSwitchNavigator(
    { 
      App: MainAppFlow,
      Auth: Wellcome 
    },
    {
      initialRouteName: "App"
    }
  )
);
