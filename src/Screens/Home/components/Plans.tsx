import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {scale} from '../../../utils/mixins';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const plans = [
  {
    id: 1,
    description: 'Weekly Tiffin Plan',
    price: 1099,
    image: require('../../../assets/weeklyPlanCrop.png'),
  },
  {
    id: 2,
    description: 'Monthly Tiffin Plan',
    price: 4499,
    image: require('../../../assets/monthlyPlanCrop.png'),
  },
];

const Plans = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: scale(20),
        marginTop: scale(20),
      }}>
      {plans.map(plan => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate('PlanDetailsScreen', {id: plan?.id})
            }
            key={plan.id}
            style={{
              flex: 1,
              borderWidth: 0.5,
              //   padding: scale(10),
              borderRadius: scale(20),
            }}>
            <View
              style={{
                width: '100%',
                // height: scale(90),
                aspectRatio: 1,
                borderTopRightRadius: scale(20),
                borderTopLeftRadius: scale(20),
              }}>
              <Image
                source={plan.image}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                  alignSelf: 'flex-end',
                  borderTopRightRadius: scale(20),
                  borderTopLeftRadius: scale(20),
                }}
              />
            </View>
            <View style={{paddingBottom: scale(10)}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: scale(14),
                  marginTop: scale(10),
                  textAlign: 'center',
                }}>
                {plan.description}
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: scale(12),
                  textAlign: 'center',
                  marginTop: scale(5),
                }}>
                PRICE AT Rs {plan.price.toString()}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Plans;
