/* eslint-disable react/no-unstable-nested-components */
import {View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens, tabScreensMap} from './routeUtils';
import Home from '../views/home/Home';
import Shopping from '../views/shopping/Shopping';
import ProductDetail from '../views/productDetail/ProductDetail';
import BottomNav from './BottomTab';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const EmptyStack = () => {
  return <View />;
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={() => {
        return {
          headerShown: false,
          headerMode: 'screen',
        };
      }}
      tabBar={props => <BottomNav {...props} />}>
      <Tab.Screen name={tabScreensMap.home} component={HomeStack} />
      <Tab.Screen name={tabScreensMap.categories} component={EmptyStack} />

      <Tab.Screen name={tabScreensMap.favourite} component={EmptyStack} />
      <Tab.Screen name={tabScreensMap.more} component={EmptyStack} />
    </Tab.Navigator>
  );
};

const navigationRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Base" component={TabNavigator} />
      <Stack.Screen name={Screens.PRODUCT_DETAIL} component={ProductDetail} />
      <Stack.Screen name={Screens.SHOPPING} component={Shopping} />
    </Stack.Navigator>
  );
};

export default navigationRoutes;
