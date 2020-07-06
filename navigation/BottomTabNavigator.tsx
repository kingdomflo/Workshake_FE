import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors, { secondary, primary } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MainMapsScreen from '../screens/MainMapsScreen';
import OptionScreen from '../screens/OptionScreen';
import StoreScreen from '../screens/StoreScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Maps"
      tabBarOptions={{ activeTintColor: secondary, activeBackgroundColor: primary, inactiveBackgroundColor: primary }}>
      <BottomTab.Screen
        name="Maps"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-map" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Options"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-options" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabMapsScreen"
        component={MainMapsScreen}
        options={{ headerTitle: 'Main Maps', headerTintColor: secondary, headerStyle: { backgroundColor: primary } }}
      />
      <TabOneStack.Screen
        name="TabMapsDetailScreen"
        component={StoreScreen}
        options={{ headerTitle: 'Store', headerTintColor: secondary, headerStyle: { backgroundColor: primary } }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabOptionScreen"
        component={OptionScreen}
        options={{ headerTitle: 'Options', headerTintColor: secondary, headerStyle: { backgroundColor: primary } }}
      />
    </TabTwoStack.Navigator>
  );
}
