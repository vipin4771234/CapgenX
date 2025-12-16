import {View, Text, Pressable} from 'react-native';
import React from 'react';
import IconComponent from '../../component/Icon/IconComponent';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {scale} from '../../utils/mixins';
import PlanDetailsHeader from './components/PlanDetailsHeader';
const plans = [
  {
    id: 1,
    description: 'Weekly Tiffin Plan',
    price: 1099,
    image: require('../../assets/weeklyPlanCrop.png'),
  },
  {
    id: 2,
    description: 'Monthly Tiffin Plan',
    price: 4499,
    image: require('../../assets/monthlyPlanCrop.png'),
  },
];

const PlanDetails = ({route}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View>
      <PlanDetailsHeader
        headerText={plans.find(el => el?.id === route.params.id)?.description}
      />
      <Text>PlanDetails</Text>
    </View>
  );
};

export default PlanDetails;
