import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { scale } from '../../utils/mixins';
import SearchInput from '../../component/InputFields/SearchInput';
import HeaderBack from '../../component/HeaderWithBackButton/HeaderBack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CONSTANTS from '../../style/GlobalStyle';
import VideoPlayer from '../../component/VideoPlayer/VideoPlayer';

const CourseVideoScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <HeaderBack text={'Go Back'} onPressBack={() => navigation.goBack()} />
        <VideoPlayer />
    </View>
  );
};

export default CourseVideoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CONSTANTS.bgDark,
    flex: 1,
  },
});
