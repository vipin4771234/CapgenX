import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Pressable,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import CONSTANTS from '../../style/GlobalStyle';
import { scale } from '../../utils/mixins';
import VideoPlayerSilder from '../VideoPlayerSlider/VideoPlayerSilder';
import IMAGES from '../../assets/image';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const hideTimerRef = useRef<any>(null);

  const [paused, setPaused] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [loading, setLoading] = useState(true);

  const [showControls, setShowControls] = useState(true); // NEW

  // Auto hide controls after 3 seconds
  const startHideTimer = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // Toggle when tapping the video
  const onToggleControls = () => {
    console.log('pressed Show Controls');
    setShowControls(!showControls);

    if (!showControls) {
      // If controls become visible → restart timer
      startHideTimer();
    }
  };

  const onLoad = (data: any) => {
    setDuration(data.duration);

    setTimeout(() => {
      setPaused(false);
      setLoading(false);
    }, 2000);
  };

  const onBuffer = ({ isBuffering }: any) => {
    setLoading(isBuffering);
  };

  const onProgress = (data: any) => {
    setCurrentTime(data.currentTime);
  };

  const onSeek = (time: any) => {
    videoRef.current.seek(time);
    setCurrentTime(time);
  };

  return (
    <Pressable style={styles.videoPressable} onPress={onToggleControls}>
      {/* Video */}
      <Video
        ref={videoRef}
        source={{
          uri: 'https://drive.google.com/uc?export=download&id=1zRDo0nPyht3Y3LjCVyRGyDwytiQy8KuE',
        }}
        style={styles.video}
        paused={paused}
        onLoad={onLoad}
        onBuffer={onBuffer}
        onProgress={onProgress}
        resizeMode="contain"
      />
      <Pressable
        onPress={() => onToggleControls()}
        style={{
          position: 'absolute',
          zIndex: 9999,
          top: 0,
          width: '100%',
          height: 220,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {showControls && (
          <View style={styles.controlsOverlay}>
            <TouchableOpacity
              onPress={e => {
                e.stopPropagation(); // ← IMPORTANT
                setPaused(!paused);
                startHideTimer();
              }}
              style={styles.playButton}
            >
              {/* Loader */}
              {loading ? (
                <View style={styles.loaderContainer}>
                  <ActivityIndicator size="large" color="#fff" />
                </View>
              ) : paused ? (
                <Image
                  source={IMAGES.play}
                  style={{ width: scale(30), height: scale(30) }}
                />
              ) : (
                <Image
                  source={IMAGES.pause}
                  style={{ width: scale(30), height: scale(30) }}
                />
              )}
            </TouchableOpacity>

            <View style={styles.bottomControls}>
              <VideoPlayerSilder
                value={currentTime}
                max={duration}
                onChange={(val: any) => {
                  setCurrentTime(val);
                  videoRef.current.seek(val);
                }}
              />
              {/* <Text style={styles.time}>
                {Math.floor(currentTime)} / {Math.floor(duration)}
              </Text> */}
            </View>
          </View>
        )}
      </Pressable>

      {/* Overlay Controls */}
    </Pressable>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: { width: '100%', backgroundColor: '#000' },

  video: {
    width: '100%',
    height: 220,
    zIndex: -9999,
  },

  loaderContainer: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  // CONTROLS OVER VIDEO
  controlsOverlay: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    height: 220,
  },

  playButton: {
    alignSelf: 'center',
    marginTop: 70,
  },

  bottomControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    // paddingBottom: 10,
    // backgroundColor: 'red',
  },

  time: {
    color: '#fff',
    width: 60,
    textAlign: 'right',
  },
  videoPressable: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
