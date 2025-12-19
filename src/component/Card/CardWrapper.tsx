import React from 'react';
import { View, StyleSheet } from 'react-native';
import CONSTANTS from '../../style/GlobalStyle';

const CardWrapper = ({ children, style }: any) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: CONSTANTS.secondryColor,
    padding: 16,
    borderRadius: 12,
    elevation: 4,              // Android shadow
    shadowColor: '#000',       // iOS shadow
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    marginVertical: 10,
  },
});

export default CardWrapper;
