import React, { ElementType, ReactNode } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
} from 'react-native';
import CONSTANTS from './GlobalStyle';
import { scale } from '../utils/mixins';

// ---------- TYPES ----------
interface PrimaryButtonProps {
  title?: string;
  onPress?: (event?: GestureResponderEvent) => void;
  noDelay?: boolean;        // kept for structure, not used
  buttonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  icon: ReactNode
}

// ---------- COMPONENT ----------
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title = 'Button',
  onPress,
  buttonStyle,
  containerStyle,
  titleStyle,
  icon,
  ...rest
}) => {

  const handlePress = () => {
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity
      {...rest}
      onPress={handlePress}
      activeOpacity={0.8}
      style={[styles.containerStyle, buttonStyle, containerStyle]}
    >
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      {}
    </TouchableOpacity>
  );
};

// ---------- STYLES ----------
const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    backgroundColor: CONSTANTS.primaryColor,
    borderRadius: 10,
    paddingVertical: scale(10),
    borderWidth: 1,
    width: '100%',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontFamily: CONSTANTS.poppins500,
    fontSize: scale(12),
    color: '#fff',
    textAlign: 'center',
  },
});
