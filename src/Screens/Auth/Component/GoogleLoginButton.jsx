import React, {useEffect} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import Toast from 'react-native-toast-message';
import {errorToastStyle, loadingToastStyle} from '../../Style/ToastStyle';
import {PrimaryButton} from '../../Style/index.style';
import {pixelSizeVertical} from '../../utils/normalize';
import {CONSTANTS} from '../../Style/GlobalStyle';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const GoogleLoginButton = ({handleLogin, login = true}) => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/user.phonenumbers.read',
      ], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '417300525576-dfpkc4qh63oj82g274go2ik263ahlfuf.apps.googleusercontent.com',
      // iosClientId:
      //   '139027047038-35l7h988dcieb4ki27hi106dn5oehrvh.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
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
    } catch (error) {
      console.log({error});
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
      title={
        login ? (
          <Text style={styles.buttonTextStyle}>
            Login with <Text style={styles.buttonBoldText}>Google</Text>
          </Text>
        ) : (
          <Text style={styles.buttonTextStyle}>
            Sign up with <Text style={styles.buttonBoldText}>Google</Text>
          </Text>
        )
      }
      titleStyle={{
        fontSize: pixelSizeVertical(11),
        color: CONSTANTS.borderColor,
      }}
      buttonStyle={{
        backgroundColor: CONSTANTS.offWhite,
      }}
      containerStyle={{marginTop: 10}}
      onPress={signIn}
      icon={
        <Image
          style={{height: 14, width: 14, marginRight: 8}}
          source={require('../../../assets/icons/google-img.png')}
        />
        // <FontAwesome5Icon
        //   style={{marginRight: 10}}
        //   name="google"
        //   backgroundColor={CONSTANTS.primaryColor}
        //   color={CONSTANTS.primaryColor}
        // />
      }
      // this.setState({
      //   statShow: !this.state.statShow,
      // })
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
