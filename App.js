/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./src/components/Login";
import MainChat from "./src/components/MainChat";
import Register from "./src/components/Register";
import OTP from "./src/components/OTP";
const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    MainChat: {
      screen: MainChat
    },
    Register: {
      screen: Register
    },
    OTP: {
      screen: OTP
    }
  },
  {
    initialRouteName: "OTP"
  }
);
export default createAppContainer(AppNavigator);
