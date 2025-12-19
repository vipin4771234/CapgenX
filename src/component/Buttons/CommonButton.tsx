import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { scale } from '../../utils/mixins';
import CONSTANTS from '../../style/GlobalStyle';

const CommonButton = ({text, onPress, loading, containerStyle, buttonTextStyle}: any) => {
  return (
    <Pressable onPress={onPress} style={[localStyles.container, containerStyle]}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Text style={[localStyles.buttonTextStyle,buttonTextStyle]}>{text}</Text>
      )}
    </Pressable>
  );
};

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: CONSTANTS.primaryColor,
    width: '100%',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonTextStyle: {
    fontSize: scale(18),
    color: '#fff',
    fontFamily: 'Montserrat-Bold'
  },
});

export default CommonButton;
