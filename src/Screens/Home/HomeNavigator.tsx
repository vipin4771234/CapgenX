import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import IconComponent from '../../component/Icon/IconComponent';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import PlanDetails from './PlanDetails';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {

    const navigation = useNavigation();

  return (
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SearchScreen"
          component={SearchScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PlanDetailsScreen"
          component={PlanDetails}
        />
      </Stack.Navigator>
  );
};

export default HomeNavigator;