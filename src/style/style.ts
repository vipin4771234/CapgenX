import {CONSTANTS} from './GlobalStyle';
import {StyleSheet} from 'react-native';
import { scale } from '../utils/mixins';

export const GlobalStyle = StyleSheet.create({
  h1: {
    fontFamily: CONSTANTS.poppins500,
    color: CONSTANTS.textLightPrimary,
    fontSize: scale(16),
  },
  h2: {
    fontFamily: CONSTANTS.poppins500,
    fontSize: scale(14),
    color: CONSTANTS.textLightPrimary,
  },
  h3: {
    fontFamily: CONSTANTS.poppins500,
    color: CONSTANTS.textLightPrimary,
    fontSize: scale(12),
  },
  h4: {
    fontFamily: CONSTANTS.poppins500,
    fontSize: scale(10),
    color: CONSTANTS.textLightPrimary,
  },
  h5: {
    fontFamily: CONSTANTS.poppins500,
    fontSize: scale(8),
    color: CONSTANTS.textLightPrimary,
  },

  primaryh1: {
    fontFamily: CONSTANTS.poppins500,
    color: CONSTANTS.primaryColor,
    fontSize: scale(16),
  },
  primaryh2: {
    fontFamily: CONSTANTS.poppins500,
    fontSize: scale(14),
    color: CONSTANTS.primaryColor,
  },
  primaryh3: {
    fontFamily: CONSTANTS.poppins500,
    fontSize: scale(12),
    color: CONSTANTS.primaryColor,
  },
  primaryh4: {
    fontFamily: CONSTANTS.poppins500,
    fontSize: scale(10),
    color: CONSTANTS.primaryColor,
  },
  primaryh5: {
    fontFamily: CONSTANTS.poppins500,
    color: CONSTANTS.primaryColor,
    fontSize: scale(8),
  },

  solidBorder: {
    borderStyle: 'solid',
    backgroundColor: CONSTANTS.bgSecondry,
    borderColor: CONSTANTS.borderColor,
    borderWidth: 1,
  },

  dottedBorderBottom: {
    borderTopColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: CONSTANTS.borderColor,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },

  dottedBorder: {
    borderColor: CONSTANTS.borderColor,
    borderWidth: scale(1),
    // bordeStyle: 'solid',
    borderRadius: scale(4),
  },
  // old classes
  flex1: {
    flex: 1,
  },
  textDark: {
    color: CONSTANTS.textDark,
  },
  textLight: {
    color: CONSTANTS.textLight,
  },
  primaryColor: {
    color: CONSTANTS.primaryColor,
  },
  bgPrimary: {
    // backgroundColor: CONSTANTS.bgPrimary,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  width100: {
    width: '100%',
  },
  mt1: {
    marginTop: 10,
  },
  mb1: {
    marginBottom: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mb2: {
    marginBottom: 20,
  },
  mt3: {
    marginTop: 30,
  },
  mb3: {
    marginBottom: 30,
  },
  mt4: {
    marginTop: 40,
  },
  mb4: {
    marginBottom: 40,
  },
  mtb1: {
    marginVertical: 10,
  },
  mtb2: {
    marginVertical: 20,
  },
  mtb3: {
    marginVertical: 30,
  },
  mtb4: {
    marginVertical: 40,
  },
  mlr1: {
    marginHorizontal: 10,
  },
  mlr2: {
    marginHorizontal: 20,
  },
  mlr3: {
    marginHorizontal: 30,
  },
  mlr4: {
    marginHorizontal: 40,
  },
  pt1: {
    paddingTop: 10,
  },
  pb1: {
    paddingBottom: 10,
  },
  pt2: {
    paddingTop: 20,
  },
  pb2: {
    paddingBottom: 20,
  },
  pt3: {
    paddingTop: 30,
  },
  pb3: {
    paddingBottom: 30,
  },
  pt4: {
    paddingTop: 40,
  },
  pb4: {
    paddingBottom: 40,
  },
  ptb1: {
    paddingVertical: 10,
  },
  ptb2: {
    paddingVertical: 20,
  },
  ptb3: {
    paddingVertical: 30,
  },
  ptb4: {
    paddingVertical: 40,
  },
  plr1: {
    paddingHorizontal: 10,
  },
  plr2: {
    paddingHorizontal: 20,
  },
  plr3: {
    paddingHorizontal: 30,
  },
  plr4: {
    paddingHorizontal: 40,
  },
  poppins100: {
    fontFamily: 'Poppins-Regular',
  },
  poppins200: {
    fontFamily: 'Poppins-Regular',
  },
  poppins300: {
    fontFamily: 'Poppins-Regular',
  },
  poppins400: {
    fontFamily: 'Poppins-Regular',
  },
  poppins500: {
    fontFamily: 'Poppins-Regular',
  },
  poppins600: {
    fontFamily: 'Poppins-Regular',
  },
  poppins700: {
    fontFamily: 'Poppins-Regular',
  },
  poppins800: {
    fontFamily: 'Poppins-Regular',
  },
  poppins900: {
    fontFamily: 'Poppins-Regular',
  },
  modalContainer: {
    backgroundColor: '#20232c',
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
  },

});
