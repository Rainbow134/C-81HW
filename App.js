import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "@react-navigation/bottom-tabs";

export default function App() {
 return (
   <NavigationContainer>
    <BottomNavigator />
  </NavigationContainer>
 );
}
