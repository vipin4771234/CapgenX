import {
  View,
  Text,
  Image,
  ToastAndroid,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';
import {login} from '../../store/UserSlice';
import {useDispatch} from 'react-redux';
import Input from '../../component/InputFields/Input';
import CommonButton from '../../component/Buttons/CommonButton';
import OtpInputs from 'react-native-otp-inputs';
// import {verifyOTP} from '../../api/api';
import {scale} from '../../utils/mixins';
import Modal from 'react-native-modal';
import IconComponent from '../../component/Icon/IconComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {PhoneSignIn} from '../../utils/hooks/PhoneAuth';
import WrapperComponent from '../../WrapperComponent/WrapperComponent';

const OtpScreen = ({route}: any) => {
  const {phone} = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverOtp, setServerOtp] = useState('336662');
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  // const {signInWithPhoneNumber, signOut} = PhoneSignIn();

  const resendOtp = () => {
    // signInWithPhoneNumber(`+91${phone}`);
  };

  const confirm = async () => {
    if (otp.length === 6) {
      // console.log({confirmation});
      // const res = await confirmation.confirm(otp);
      // console.log('res.user', res.user);
      // console.log('res?.additionalUserInfo?.isNewUser', res?.additionalUserInfo);
      // if (res && res?.additionalUserInfo?.isNewUser) {
      //   navigation.replace('UserNameScreen', {newUser: res.user});
      //   return;
      // }
      if (true) {
        dispatch(login({phone: phone}))
        // navigation.navigate('HomeScreen');
        return;
      }
    }
  };

  // useEffect(() => {
  //   confirm();
  // }, [otp]);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <WrapperComponent>
      <View
        style={{
          flex: 1,
          padding: scale(20),
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '100%',
          }}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              marginRight: scale(20),
              zIndex: 9999,
            }}>
            <IconComponent
              iconType="MaterialCommunityIcons"
              iconName={'arrow-left'}
              size={25}
              color={'#042b5b'}
            />
          </Pressable>
          <Text
            style={{color: '#3c3c3c',fontFamily: 'Montserrat-Bold', fontSize: scale(18)}}>
            OTP Verify
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: scale(15),
            color: '#3c3c3c',
            marginTop: scale(30),
          }}>
          We have sent the code to your number
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: scale(16),
            color: '#3c3c3c',
            marginTop: scale(5),
          }}>
          +91-{phone}
        </Text>
        <View style={{height: '5%'}} />
        <OtpInputs
          autofillFromClipboard
          style={{
            flexDirection: 'row',
            borderRadius: scale(1),
            marginBottom: scale(10),
          }}
          handleChange={code => {
            console.log(code);
            //   setServerOtp(code);
            if (code.length === 6) {
              setTimeout(() => {
                setOtp(code);
              }, 1);
            }
          }}
          inputStyles={{
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'gray',
          }}
          inputContainerStyles={{
            borderWidth: 1,
            width: scale(50),
            height: scale(50),
            margin: scale(2),
            borderRadius: scale(10),
            alignItems: 'center',
          }}
          numberOfInputs={6}
        />
          <CommonButton
            text={'Login'}
            loading={loading}
            onPress={() => confirm()}
          />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#225799',
              marginVertical: scale(20),
              textAlign: 'center',
              fontFamily: 'Montserrat-Bold'
            }}>
            Check your messages for the OTP
          </Text>
          <Text
            style={{fontFamily: 'Montserrat-Bold', color: '#3c3c3c'}}
            onPress={() => navigation.navigate('LoginScreen')}>
            Didn't get the OTP?{' '}
            <Text style={{color: 'gray'}} onPress={resendOtp}>
              Resend SMS in 30s
            </Text>
          </Text>
        </View>
        <View style={{height: '20%'}} />
      </View>
    </WrapperComponent>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 20,
    // position: 'absolute',
    // zIndex: 9999,
    // right: 0,
    // top: 20,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#adbadb',
    width: '100%',
    height: 80,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    elevation: 5,
  },
  barStyle: {
    width: 50,
    height: 6,
    borderRadius: 10,
    backgroundColor: 'gray',
    marginTop: 10,
  },
  descText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginTop: 15,
    color: '#3c3c3c',
  },
  text: {
    width: '100%',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    color: '#3c3c3c',
    padding: 10,
    fontSize: 20,
  },
});

export default OtpScreen;
