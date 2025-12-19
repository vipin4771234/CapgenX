import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import IMAGES from '../../assets/image';
import { scale } from '../../utils/mixins';
import CONSTANTS from '../../style/GlobalStyle';
import { GlobalStyle } from '../../style/style';

const HeaderBack = ({ text, onPressBack }: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: scale(20),
        paddingBottom: scale(30),
        borderBottomWidth: scale(0.5),
        borderBottomColor: CONSTANTS.offWhite,
      }}
    >
      <Pressable onPress={onPressBack}>
        <IMAGES.arrowLeft color={CONSTANTS.offWhite} />
      </Pressable>
      <Text
        style={[
          GlobalStyle.h1,
          {
            color: CONSTANTS.offWhite,
            marginLeft: scale(20),
            marginTop: scale(1),
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default HeaderBack;
