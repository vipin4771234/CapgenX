import React, { useRef } from "react";
import { View, PanResponder, Animated, StyleSheet } from "react-native";

const VideoPlayerSilder = ({ value, max, onChange }: any) => {
  const TRACK_WIDTH = 300;

  // mutable current position
  const currentX = useRef((value / max) * TRACK_WIDTH);

  // UI animated value
  const panX = useRef(new Animated.Value(currentX.current)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: (_, gesture) => {
        let newX = currentX.current + gesture.dx;

        // clamp
        if (newX < 0) newX = 0;
        if (newX > TRACK_WIDTH) newX = TRACK_WIDTH;

        panX.setValue(newX);
        onChange((newX / TRACK_WIDTH) * max);
      },

      onPanResponderRelease: (_, gesture) => {
        // update stored value
        currentX.current = currentX.current + gesture.dx;

        if (currentX.current < 0) currentX.current = 0;
        if (currentX.current > TRACK_WIDTH) currentX.current = TRACK_WIDTH;

        onChange((currentX.current / TRACK_WIDTH) * max);
      },
    })
  ).current;

  const translateX = panX.interpolate({
    inputRange: [0, TRACK_WIDTH],
    outputRange: [0, TRACK_WIDTH],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <View style={styles.track} />

      <Animated.View
        style={[styles.filledTrack, { width: translateX }]}
      />

      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.thumb, { transform: [{ translateX }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
    // borderRadius: 3,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    position: "absolute",
  },
  thumb: {
    width: 16,
    height: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    position: "absolute",
    // top: -5,
  },
});

export default VideoPlayerSilder;
