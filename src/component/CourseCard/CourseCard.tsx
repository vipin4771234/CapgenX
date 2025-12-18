import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { scale } from '../../utils/mixins';

const CourseCard = ({ course, goToCourseDetail }: any) => {
  console.log(course);

  const formatStudents = (num: any) => {
    if (num >= 1_000_000) {
      return parseFloat((num / 1_000_000).toFixed(1)) + 'M';
    }
    if (num >= 1000) {
      return parseFloat((num / 1000).toFixed(1)) + 'k';
    }
    return num.toString();
  };

  return (
    <Pressable
    onPress={goToCourseDetail}
      style={{
        backgroundColor: '#665d98ff',
        padding: scale(20),
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('../../assets/Cap.png')}
          style={{ width: 50, height: 50, borderRadius: scale(50) }}
        />
        <View style={{ paddingHorizontal: scale(20) }}>
          <Text
            style={{ color: '#fff', fontSize: scale(18), fontWeight: 'bold' }}
          >
            {course?.title}
          </Text>
          <Text style={{ color: '#fff', fontSize: scale(14) }}>
            {course?.subtitle}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: scale(20),
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../assets/clock-five.png')}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ color: '#fff', marginLeft: scale(10) }}>
            {course?.duration}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../assets/star.png')}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ color: '#fff', marginLeft: scale(10) }}>
            {course?.rating}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../assets/users.png')}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ color: '#fff', marginLeft: scale(10) }}>
            {formatStudents(course?.students)}
          </Text>
        </View>
      </View>
      {course.tags.length ? (
        <View style={{ flexDirection: 'row' }}>
          {course.tags.map((el: any) => {
            return (
              <View
                style={{
                  borderRadius: scale(15),
                  backgroundColor: '#4f4484ff',
                  paddingVertical: scale(5),
                  paddingHorizontal: scale(10),
                  marginRight: scale(8),
                }}
              >
                <Text style={{ color: '#fff', fontSize: scale(10) }}>{el}</Text>
              </View>
            );
          })}
        </View>
      ) : (
        <></>
      )}
    </Pressable>
  );
};

export default CourseCard;
