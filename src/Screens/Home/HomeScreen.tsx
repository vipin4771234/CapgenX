import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  RefreshControl,
  Pressable,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { scale } from '../../utils/mixins';
import Search from './components/Search';
import DividerLine from './components/DividerLine';
import Plans from './components/Plans';
import IconComponent from '../../component/Icon/IconComponent';
import DineoutNavigate from './components/DineoutNavigate';
import FoodNavigate from './components/FoodNavigate';
import CourseCard from '../../component/CourseCard/CourseCard';
import { logOut } from '../../store/UserSlice';
import { useDispatch } from 'react-redux';
import courses from '../../../data';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [value, setValue] = useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();

  const goToCourseDetail = (course: any) => {
    navigation.navigate('CourseDetailsScreen', { course: course });
  };

  useEffect(() => {
    //
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, backgroundColor: '#2f265e' }}>
        <View
          style={{
            padding: 20,
            borderBottomWidth: scale(1),
            borderBottomColor: '#4c3f8a',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{ color: '#fff', fontSize: scale(18), fontWeight: '500' }}
            >
              Welcome back,{' '}
            </Text>
            <Text
              style={{
                color: '#8e87b0',
                fontWeight: '500',
                fontSize: scale(18),
              }}
            >
              Learner
            </Text>
          </View>
          <Pressable
            onPress={() => dispatch(logOut())}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 20,
              paddingHorizontal: scale(10),
              paddingVertical: scale(5),
              borderWidth: 1,
              borderColor: 'gray',
            }}
          >
            <Text
              style={{ color: '#fff', fontWeight: 'bold', fontSize: scale(16) }}
            >
              logout
            </Text>
            <Image
              source={require('../../assets/exit.png')}
              style={{ width: 15, height: 15, marginLeft: 10 }}
            />
          </Pressable>
        </View>
        <View style={styles.container}>
          {courses.length ? (
            <FlatList
              data={courses}
              renderItem={({ item }) => (
                <CourseCard course={item} goToCourseDetail={()=>goToCourseDetail(item)} />
              )}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // padding: scale(20),
  },
  imageContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
    position: 'absolute',
    top: 0,
    zIndex: -5,
    borderBottomRightRadius: scale(20),
    borderBottomLeftRadius: scale(20),
  },
  image: {
    padding: scale(20),
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
    borderBottomRightRadius: scale(20),
    borderBottomLeftRadius: scale(20),
  },
});
