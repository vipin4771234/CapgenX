import { View, Text, Image } from 'react-native'
import React from 'react'
import { scale } from '../../../utils/mixins'

const CourseCard = () => {
  return (
    <View style={{ backgroundColor: '#665d98ff', padding: scale(20),borderBottomWidth: 1, borderBottomColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../../../assets/Cap.png')} style={{ width: 50, height: 50, borderRadius: scale(50) }} />
        <View style={{ paddingHorizontal: scale(20) }}>
          <Text style={{ color: '#fff', fontSize: scale(18), fontWeight: 'bold' }}>AWS Fundamentals</Text>
          <Text style={{ color: '#fff', fontSize: scale(14), }}>Learn the fundamentals of Amazon Web Services and cloud computing</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: scale(20) }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../assets/clock-five.png')} style={{ width: 15, height: 15 }} />
          <Text style={{ color: '#fff', marginLeft: scale(10) }}>12 weeks</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../assets/star.png')} style={{ width: 15, height: 15 }} />
          <Text style={{ color: '#fff', marginLeft: scale(10) }}>4.8</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../assets/users.png')} style={{ width: 15, height: 15 }} />
          <Text style={{ color: '#fff', marginLeft: scale(10) }}>1.2k</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ borderRadius: scale(15), backgroundColor: '#4f4484ff', paddingVertical: scale(5), paddingHorizontal: scale(10) }}><Text style={{ color: '#fff' }}>EC2</Text></View>
        <View style={{ borderRadius: scale(15), backgroundColor: '#4f4484ff', paddingVertical: scale(5), paddingHorizontal: scale(10), marginLeft: scale(10) }}><Text style={{ color: '#fff' }}>S3</Text></View>
        <View style={{ borderRadius: scale(15), backgroundColor: '#4f4484ff', paddingVertical: scale(5), paddingHorizontal: scale(10), marginLeft: scale(10) }}><Text style={{ color: '#fff' }}>Lambda</Text></View>
      </View>
    </View>
  )
}

export default CourseCard