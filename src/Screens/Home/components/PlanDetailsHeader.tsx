import { View, Text, Pressable } from 'react-native'
import React from 'react'
import IconComponent from '../../../component/Icon/IconComponent'
import { scale } from '../../../utils/mixins'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const PlanDetailsHeader = ({headerText}: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View
    style={{
      width: '100%',
      height: scale(60),
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#4c3f8a',
      paddingHorizontal: scale(20)
    }}>
    <Pressable
      onPress={() => navigation.goBack()}
      style={{paddingRight: scale(20)}}>
      <IconComponent
        // style={{alignSelf: 'flex-end'}}
        iconType="Ionicons"
        iconName={'arrow-back-outline'}
        size={scale(25)}
        color={'#3c3c3c'}
      />
    </Pressable>
    <Text
      style={{
        fontSize: scale(15),
        fontFamily: 'Montserrat-Bold',
        color: '#3c3c3c',
      }}>
      {headerText}
    </Text>
  </View>
  )
}

export default PlanDetailsHeader