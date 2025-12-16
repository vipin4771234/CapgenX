import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import IconComponent from '../../component/Icon/IconComponent';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {scale} from '../../utils/mixins';
import Input from '../../component/InputFields/Input';
import CommonButton from '../../component/Buttons/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {login} from '../../store/UserSlice';
import {loginOrSignup} from '../../api/auth';

const UserNameScreen = ({route}: any) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      let newUser = route.params.newUser;
      newUser.displayName = name;
      console.log('1111', {
        name: name,
        phone: newUser.phoneNumber,
        userId: newUser.uid
      })
      setLoading(true);
      const data = await loginOrSignup({
        name: name,
        phone: newUser.phoneNumber,
        userId: newUser.uid
      });
      console.log('11112222s')
      console.log({data})
      console.log("newuser",newUser)
      AsyncStorage.setItem('user', JSON.stringify(newUser));
      dispatch(login(newUser));
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: scale(20),
        alignItems: 'center',
      }}>
      <View style={{flex: 1, width: '100%'}}>
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
            style={{
              color: '#3c3c3c',
              fontFamily: 'Montserrat-Bold',
              fontSize: scale(18),
            }}>
            Personal Details
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: scale(16),
            color: '#3c3c3c',
            marginTop: scale(30),
            width: '100%',
            marginBottom: scale(18),
          }}>
          What is your name ?
        </Text>
        <Input
          placeholder="Enter your name"
          onChangeText={(val: any) => setName(val)}
        />
      </View>
      <KeyboardAvoidingView
        style={{width: '100%'}}
        keyboardVerticalOffset={40}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
        <CommonButton
          text={'Save'}
          loading={loading}
          onPress={() => onSubmit()}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default UserNameScreen;
