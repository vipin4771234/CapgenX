import React, { useEffect } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';
import { errorToastStyle, loadingToastStyle } from '../../../style/ToastStyle';
import { PrimaryButton } from '../../../style/index.style';
import CONSTANTS from '../../../style/GlobalStyle';
import { scale } from '../../../utils/mixins';

type GoogleLoginButtonProps = {
  handleLogin: (user: any, token: string) => void;
  login?: boolean; // optional with default true
};

const GoogleLoginButton = ({
  handleLogin,
  login = true,
}: GoogleLoginButtonProps) => {
  useEffect(() => {
    GoogleSignin.configure({
      // scopes: [
      //   'https://www.googleapis.com/auth/userinfo.email',
      //   'https://www.googleapis.com/auth/userinfo.profile',
      //   // 'https://www.googleapis.com/auth/user.phonenumbers.read',
      // ], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '417300525576-dfpkc4qh63oj82g274go2ik263ahlfuf.apps.googleusercontent.com',
      // iosClientId:
      //   '139027047038-35l7h988dcieb4ki27hi106dn5oehrvh.apps.googleusercontent.com',
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    // isSignedIn();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      // await GoogleSignin.clearCachedAccessToken();
      const userInfo = await GoogleSignin.signIn();
      // https://stackoverflow.com/questions/62173155/get-access-token-with-react-native-google-signin
      const accessToken = await GoogleSignin.getTokens();
      Toast.show({
        type: 'lottie',
        props: loadingToastStyle,
        visibilityTime: 6000,
      });
      // const {email, photo, name} = userInfo.user;
      handleLogin(userInfo, accessToken.accessToken);
      // setUser(userInfo);
    } catch (error: any) {
      console.log({ error });
      // GoogleSignin.revokeAccess();
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Toast.show({
          type: 'lottie',
          props: errorToastStyle,
          text1: 'Play services are either unavailable or outdated..',
          visibilityTime: 3000,
        });
      } else {
        Toast.show({
          type: 'lottie',
          props: errorToastStyle,
          text1: 'Login with Google failed.',
          visibilityTime: 4000,
        });
      }
    }
  };

  return (
    <PrimaryButton
      title={login ? 'Login with Google' : 'Sign up with Google'}
      titleStyle={{
        fontSize: scale(11),
        color: CONSTANTS.borderColor,
      }}
      buttonStyle={{
        backgroundColor: CONSTANTS.offWhite,
      }}
      containerStyle={{ marginTop: 10, marginBottom: 10 }}
      onPress={signIn}
      icon={
        <Image
          style={{ height: 14, width: 14, marginRight: 8 }}
          source={require('../../../assets/icons/google-img.png')}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontFamily: CONSTANTS.poppins500,
    fontSize: 14,
    color: CONSTANTS.bgDark,
  },
  buttonBoldText: {
    fontFamily: CONSTANTS.poppins700,
  },
});
export default GoogleLoginButton;
