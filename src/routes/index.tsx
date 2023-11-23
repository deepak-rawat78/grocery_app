import {View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabScreensMap} from './routeUtils';
import Home from '../views/home/Home';
import ProductDetail from '../views/productDetail/ProductDetail';

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

const index = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={() => {
        return {
          headerShown: false,
          headerMode: 'screen',
        };
      }}>
      <Tab.Screen name={tabScreensMap.home} component={ProductDetail} />
      <Tab.Screen name={tabScreensMap.categories} component={EmptyStack} />

      <Tab.Screen name={tabScreensMap.favourite} component={EmptyStack} />
      <Tab.Screen name={tabScreensMap.more} component={EmptyStack} />
    </Tab.Navigator>
  );
};

export default index;
