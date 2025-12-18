import {View, Text, Pressable} from 'react-native';
import React from 'react';
import IconComponent from '../../component/Icon/IconComponent';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {scale} from '../../utils/mixins';
import PlanDetailsHeader from './components/PlanDetailsHeader';
import HeaderBack from '../../component/HeaderWithBackButton/HeaderBack';
import CONSTANTS from '../../style/GlobalStyle';

const CourseDetails = ({route}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={{backgroundColor: CONSTANTS.bgDark, flex: 1, borderBottomWidth: scale(2), borderBottomColor: CONSTANTS.offWhite}}>
      <HeaderBack text={'Back to Courses'} />
      <Text>PlanDetails</Text>
    </View>
  );
};

export default CourseDetails;
