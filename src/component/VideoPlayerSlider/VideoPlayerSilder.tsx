import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

const VideoPlayerSlider = ({ value, max, onChange }: any) => {
  const [trackWidth, setTrackWidth] = useState(0);

  const translateX = useSharedValue(0);
  const isSliding = useSharedValue(false);

  // Sync slider with video progress ONLY when not sliding
  useEffect(() => {
    if (trackWidth === 0 || max === 0) return;
    if (isSliding.value) return;

    const x = (value / max) * trackWidth;
    translateX.value = withTiming(x, { duration: 80 });
  }, [value, max, trackWidth]);

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      isSliding.value = true;
    })
    .onUpdate((e: any) => {
      let newX = e.translationX + translateX.value;

      if (newX < 0) newX = 0;
      if (newX > trackWidth) newX = trackWidth;

      translateX.value = newX;

      const newTime = (newX / trackWidth) * max;
      runOnJS(onChange)(newTime, false);
    })
    .onEnd(() => {
      const finalX = translateX.value;
      const finalTime = (finalX / trackWidth) * max;

      isSliding.value = false;

      runOnJS(onChange)(finalTime, true);
    });

  const filledStyle = useAnimatedStyle(() => ({
    width: translateX.value,
  }));

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      style={styles.container}
      onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}
    >
      {/* Background Track */}
      <View style={styles.track} />

      {/* Filled Track */}
      <Animated.View style={[styles.filledTrack, filledStyle]} />

      {/* Thumb */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.thumb, thumbStyle]} />
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    justifyContent: "center",
  },
  track: {
    width: "100%",
    height: 6,
    backgroundColor: "#ffffff40",
    borderRadius: 3,
    position: "absolute",
  },
  filledTrack: {
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 3,
    position: "absolute",
  },
  thumb: {
    width: 18,
    height: 18,
    backgroundColor: "#fff",
    borderRadius: 9,
    position: "absolute",
    top: -6,
  },
});

export default VideoPlayerSlider;
