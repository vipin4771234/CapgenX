import React, { useEffect, useState } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  withSpring,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

const THUMB_SIZE = 24;

const VideoPlayerSlider = ({
  currentTime = 0,
  duration = 100,
  onSlide,
  onSlideComplete,
}: any) => {
  const translateX = useSharedValue<number>(0);
  const startX = useSharedValue(0);
  const isDragging = useSharedValue(false);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [time, setTime] = useState(0);

  // MOVE SLIDER BASED ON currentTime ONLY IF NOT DRAGGING
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev < 100 ? prev + 1 : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    translateX.value = withTiming(time + 1);
  }, [time]);

  // PAN HANDLER
  //   const panResponder = PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,

  //     onPanResponderGrant: () => {
  //       isDragging.value = true;
  //       startX.value = translateX.value;
  //     },

  //     onPanResponderMove: (_, gesture) => {
  //       let newX = startX.value + gesture.dx;
  //       newX = Math.max(0, Math.min(newX, sliderWidth - THUMB_SIZE));

  //       translateX.value = newX;

  //       const seekValue = Math.round(
  //         (newX / (sliderWidth - THUMB_SIZE)) * duration
  //       );

  //       if (onSlide) runOnJS(onSlide)(seekValue);
  //     },

  //     onPanResponderRelease: () => {
  //       isDragging.value = false;

  //       const seekValue = Math.round(
  //         (translateX.value / (sliderWidth - THUMB_SIZE)) * duration
  //       );

  //       if (onSlideComplete) runOnJS(onSlideComplete)(seekValue);
  //     },
  //   });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      style={styles.container}
      onLayout={e => setSliderWidth(e.nativeEvent.layout.width)}
    >
      <View style={styles.track} />
      <Animated.View style={[styles.thumb, animatedStyles]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: THUMB_SIZE,
    justifyContent: 'center',
    width: '100%',
  },
  track: {
    position: 'absolute',
    height: 5,
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 3,
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: 'lightblue',
  },
});

export default VideoPlayerSlider;
