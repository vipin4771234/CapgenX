import { View, Text, Image } from 'react-native'
import React from 'react'
import IMAGES from '../../assets/image'
import { scale } from '../../utils/mixins'
import CONSTANTS from '../../style/GlobalStyle'

const HeaderBack = ({text}: any) => {
  return (
    <View style={{flexDirection: 'row',alignItems: 'center', padding: scale(20), paddingBottom: scale(30)}}>
      <IMAGES.arrowLeft color={CONSTANTS.offWhite} />
      <Text style={{color: CONSTANTS.offWhite, marginLeft: scale(20)}}>{text}</Text>
    </View>
  )
}

export default HeaderBack