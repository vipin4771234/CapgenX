import Error from '../assets/animation/error.json';
import Success from '../assets/animation/success.json';
import Loading from '../assets/animation/loading.json';
import Wallet from '../assets/animation/coins-effect.json';
import { Platform } from 'react-native';

export const errorToastStyle = {
  lottie: Error,
  mainWrapper: {
    width: '95%',
    borderRadius: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    flex: 1,
  },
  lottieStyle: {
    width: Platform.OS === 'android'? '20%' :'auto',
    height: Platform.OS === 'android'? 40 :60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1Style: {
    width: '80%',
  },
};

export const successToastStyle = {
  lottie: Success,
  mainWrapper: {
    width: '95%',
    borderRadius: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    flex: 1,
  },
  lottieStyle: {
    width: Platform.OS === 'android'? '20%' :'auto',
    height: Platform.OS === 'android'? 40 :60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1Style: {
    width: '80%',
  },
};

export const loadingToastStyle = {
  lottie: Loading,
  mainWrapper: {
    width: '95%',
    borderRadius: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  lottieWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  lottieStyle: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1Style: {
    width: '0%',
  },
};

export const mediaToggleToastStyle = {
  lottie: Wallet,
  mainWrapper: {
    width: '95%',
    borderRadius: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  lottieStyle: {
    width: '20%',
    height: 40,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1Style: {
    width: '80%',
  },
};
