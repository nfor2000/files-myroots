import React from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const DrawerLayout = () => {
     return (
          <GestureHandlerRootView>
               <Drawer />
          </GestureHandlerRootView>
     );
};

export default DrawerLayout;
