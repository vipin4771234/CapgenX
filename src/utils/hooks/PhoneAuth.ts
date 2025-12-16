import React, {useState, useEffect} from 'react';
import {Button, TextInput} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PhoneSignIn = () => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult>();

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  // Handle login
  function onAuthStateChanged(user: any) {
    if (user) {
      console.log({user});
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  const signInWithPhoneNumber = async (phone: string) => {
    console.log('rann', phone);
    try {
      const confirmation: FirebaseAuthTypes.ConfirmationResult =
        await auth().signInWithPhoneNumber(phone);
      console.log({confirmation});
      setConfirm(confirmation);
      return confirmation;
    } catch (error) {
      console.log({error});
      return false;
    }
  };

  const signOut = async () => {
    try {
      const res = await auth().signOut();
      console.log('signout', res);
    } catch (error) {
      console.log({error});
      console.log('Invalid code.');
    }
  };

  return {signInWithPhoneNumber, signOut};
};
