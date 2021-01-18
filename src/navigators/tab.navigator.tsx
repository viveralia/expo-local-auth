import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ContentScreen from "../screens/content.screen";

export type BottomTabParamList = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigator: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={ContentScreen} />
      <Tab.Screen name="Tab2" component={ContentScreen} />
      <Tab.Screen name="Tab3" component={ContentScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
