import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import React from 'react';
import IconComponent from '../../component/Icon/IconComponent';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { scale } from '../../utils/mixins';
import PlanDetailsHeader from './components/PlanDetailsHeader';
import HeaderBack from '../../component/HeaderWithBackButton/HeaderBack';
import CONSTANTS from '../../style/GlobalStyle';
import CardWrapper from '../../component/Card/CardWrapper';
import IMAGES from '../../assets/image';
import { GlobalStyle } from '../../style/style';
import CommonButton from '../../component/Buttons/CommonButton';

const CourseDetails = ({ route }: any) => {
  const { course } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  console.log('course==>>', course);
  return (
    <View key={course.id} style={{ backgroundColor: CONSTANTS.bgDark, flex: 1 }}>
      <HeaderBack
        text={'Back to Courses'}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView
        style={{ padding: scale(20) }}
        contentContainerStyle={{ paddingBottom: scale(40) }}
      >
        <CardWrapper>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={IMAGES.cloud}
              style={{ width: scale(50), height: scale(50) }}
            />
            <View style={{ marginLeft: scale(15) }}>
              <Text style={GlobalStyle.l1}>{course.title}</Text>
              <Text style={{ color: CONSTANTS.offWhite }}>
                {course.subtitle}
              </Text>
            </View>
          </View>
        </CardWrapper>
        <View style={{ alignItems: 'center', marginTop: scale(25) }}>
          <Text style={GlobalStyle.l1}>Choose Your Learning Path</Text>
        </View>
        <CardWrapper>
          <View
            style={{
              backgroundColor: CONSTANTS.primaryColorTransparent,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 6,
              alignSelf: 'flex-start',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={GlobalStyle.h1600}>AI-Powered</Text>
          </View>
          <Image
            source={IMAGES.bot}
            style={{
              width: scale(80),
              height: scale(80),
              marginTop: scale(20),
            }}
          />
          <View
            style={{
              // backgroundColor: CONSTANTS.primaryColorTransparent,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 6,
              alignSelf: 'flex-start',
            }}
          >
            <Text
              style={[
                GlobalStyle.l1,
                { color: CONSTANTS.offWhite, marginVertical: scale(10) },
              ]}
            >
              AI Tailored Course
            </Text>
            <Text style={[GlobalStyle.h2, { color: CONSTANTS.offWhite }]}>
              Get a personalized learning experience with Al-generated content
              tailored to your skil level.
            </Text>
          </View>
          <CommonButton
            onPress={() =>
              navigation.navigate('CourseVideoScreen', { course: course })
            }
            text={'Start AI Journey'}
            buttonTextStyle={[GlobalStyle.h1600, { color: CONSTANTS.offWhite }]}
          />
        </CardWrapper>
        <CardWrapper>
          <View
            style={{
              backgroundColor: CONSTANTS.primaryColorTransparent,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 6,
              alignSelf: 'flex-start',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={GlobalStyle.h1600}>AI-Powered</Text>
          </View>
          <Image
            source={IMAGES.record}
            style={{
              width: scale(80),
              height: scale(80),
              marginTop: scale(20),
            }}
          />
          <View
            style={{
              // backgroundColor: CONSTANTS.primaryColorTransparent,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 6,
              alignSelf: 'flex-start',
            }}
          >
            <Text
              style={[
                GlobalStyle.l1,
                { color: CONSTANTS.offWhite, marginVertical: scale(10) },
              ]}
            >
              Continue with Lectures
            </Text>
            <Text style={[GlobalStyle.h2, { color: CONSTANTS.offWhite }]}>
              Folow the structured video lectures with Al assistant support.
            </Text>
          </View>
          <CommonButton
            onPress={() =>
              navigation.navigate('CourseVideoScreen', { course: course })
            }
            text={'Start Learning'}
            buttonTextStyle={[GlobalStyle.h1600, { color: CONSTANTS.offWhite }]}
          />
        </CardWrapper>
      </ScrollView>
    </View>
  );
};

export default CourseDetails;
