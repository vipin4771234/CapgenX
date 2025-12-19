import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import IconComponent from '../../component/Icon/IconComponent';
import HomeScreen from './HomeScreen';
import CourseDetails from './CourseDetails';
import CourseVideoScreen from './CourseVideoScreen';

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
          name="CourseVideoScreen"
          component={CourseVideoScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CourseDetailsScreen"
          component={CourseDetails}
        />
      </Stack.Navigator>
  );
};

export default HomeNavigator;