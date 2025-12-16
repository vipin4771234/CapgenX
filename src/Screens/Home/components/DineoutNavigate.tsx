import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import IconComponent from '../../../component/Icon/IconComponent';
import {scale} from '../../../utils/mixins';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const DineoutNavigate = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('DineoutScreen')}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(20),
        borderWidth: 0.5,
        paddingHorizontal: scale(20),
        paddingVertical: scale(10),
        borderRadius: scale(20),
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 50,
            height: scale(50),
            borderRadius: scale(10),
            marginRight: scale(15),
          }}>
          <Image
            source={require('../../../assets/restaurant.png')}
            resizeMode="stretch"
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'flex-end',
              borderRadius: scale(20),
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: scale(14),
            // marginTop: scale(10),
            textAlign: 'center',
          }}>
          Dineout
        </Text>
      </View>
      <IconComponent
        // style={{alignSelf: 'flex-end'}}
        iconType="Ionicons"
        iconName={'arrow-forward-outline'}
        size={25}
        color={'#3c3c3c'}
      />
    </Pressable>
  );
};

export default DineoutNavigate;
