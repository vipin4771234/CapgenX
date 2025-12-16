import {View, Text, Pressable} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Auth/LoginScreen';
import BootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {login} from '../store/UserSlice';
import OtpScreen from '../Screens/Auth/OtpScreen';
import UserNameScreen from '../Screens/Auth/UserNameScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import HomeNavigator from '../Screens/Home/HomeNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconComponent from '../component/Icon/IconComponent';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import DineoutScreen from '../Screens/Dineout/DineoutScreen';
import { scale } from '../utils/mixins';
import SignupScreen from '../Screens/Auth/SignupScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigators = () => {
  const user = useSelector((state: RootState) => state.users.user);
  console.log({user}, "fromselecetor")
  const dispatch = useDispatch();

  // const setRecent = async () => {
  //   const recentSearch = await JSON.parse(await AsyncStorage.getItem('recentSearches') || 'null');
  //   console.log({recentSearch});
  //   if(!recentSearch) return console.log('nullll');
  //   dispatch(setAddSearches(recentSearch));
  // }

  // useEffect(() => {
  //   const init = async () => {
  //     let user = await JSON.parse(
  //       (await AsyncStorage.getItem('user')) || 'null',
  //     );
  //     if (user) {
  //       dispatch(login({name: 'vipin', email: 'mainvipin@gmail.com', ...user}));
  //     }
  //   };

  //   init().then(async () => {
  //     setTimeout(async () => {
  //       // setRecent();
  //       await BootSplash.hide({fade: true});
  //     }, 2000);
  //   });
  // }, []);

  const hide = async () => {
    const user = await AsyncStorage.getItem('user');
    console.log({user})
    if (user) {
      dispatch(login(user));
    }
    await BootSplash.hide({fade: true});
  };
console.log("navigator")
  useEffect(() => {
    hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {!user ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="LoginScreen"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="SignupScreen"
              component={SignupScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="OtpScreen"
              component={OtpScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="UserNameScreen"
              component={UserNameScreen}
            />
          </>
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="MainTabBar"
            component={TabBarNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;

const TabBarNavigator: FC = () => {
  // const {userState, mailCountUnread} = useInboxScreen();

  // TODO: create hook for status bar on each screen style
  // useEffect(() => {
  //   if (Platform.OS == 'android') {
  //     StatusBar.setBackgroundColor('white');
  //   }
  //   StatusBar.setBarStyle('dark-content');
  // }, []);

  // const styleHeader = useMemo(() => {
  //   return {
  //     headerStyle: {
  //       backgroundColor: Colors.primary,
  //     },
  //     headerRight: () => {
  //       return (
  //         <BaseBookmarkSearchActions
  //           color="white"
  //           onPressBookMark={() => {
  //             console.log('onPressBookMark');
  //           }}
  //           onPressSearch={() => {
  //             console.log('onPressSearch');
  //           }}
  //         />
  //       );
  //     },
  //     headerRightContainerStyle: {
  //       paddingRight: scale(15),
  //     },
  //     headerTitleStyle: styles.headerScreenTitle,
  //     headerTitleAlign: 'left',
  //     headerTintColor: '#fff',
  //   };
  // }, []);

  // const inBoxTabBarOptions = {
  //   ...styleHeader,
  //   title: t('screen:inboxScreen'),
  //   ...(mailCountUnread
  //     ? {tabBarBadge: mailCountUnread}
  //     : {tabBarBadgeStyle: {display: 'none'}}),
  //   tabBarIcon: ({color, focused}: any) =>
  //     userState.connectedMails.length === userState.syncedMailAddress.length ? (
  //       <TabBarIconWrapper>
  //         {focused ? (
  //           <IMAGES.IcInboxFilled color={color} />
  //         ) : (
  //           <IMAGES.IcInbox color={color} />
  //         )}
  //       </TabBarIconWrapper>
  //     ) : (
  //       <ProgressCircle />
  //     ),
  // };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#4c3f8a',
        tabBarAllowFontScaling: true,
      }}>
      <Tab.Screen
        name={'HomeNavigator'}
        component={HomeNavigator}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarLabelStyle : {
            fontFamily: 'Montserrat-Bold',
            fontSize: scale(12)
          },
          tabBarIcon: ({color,focused}: any) => {
            return (
              <IconComponent
                // style={{alignSelf: 'flex-end'}}
                iconType="FontAwesome6"
                iconName={'house'}
                size={scale(22)}
                color={focused? '#4c3f8a':'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={'FoodScreen'}
        component={DineoutScreen}
        options={{
          title: 'Food',
          tabBarLabelStyle : {
            fontFamily: 'Montserrat-Bold',
            fontSize: scale(12)
          },
          tabBarIcon: ({color,focused}: any) => (
            <IconComponent
              // style={{alignSelf: 'flex-end'}}
              iconType="FontAwesome6"
              iconName={'plate-wheat'}
              size={scale(22)}
              color={focused? '#4c3f8a':'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'DineoutScreen'}
        component={DineoutScreen}
        options={{
          title: 'Dineout',
          tabBarLabelStyle : {
            fontFamily: 'Montserrat-Bold',
            fontSize: scale(12)
          },
          tabBarIcon: ({color,focused}: any) => (
            <IconComponent
              // style={{alignSelf: 'flex-end'}}
              iconType="FontAwesome6"
              iconName={'bowl-food'}
              size={scale(22)}
              color={focused? '#4c3f8a':'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarLabelStyle : {
            fontFamily: 'Montserrat-Bold',
            fontSize: scale(12)
          },
          tabBarIcon: ({color,focused}: any) => (
            <IconComponent
              // style={{alignSelf: 'flex-end'}}
              iconType="FontAwesome"
              iconName={'user'}
              size={scale(25)}
              color={focused? '#4c3f8a':'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
