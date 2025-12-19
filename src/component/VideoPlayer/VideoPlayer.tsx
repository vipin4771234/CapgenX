import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import { scale } from '../../utils/mixins';
import IMAGES from '../../assets/image';
import VideoPlayerSlider from '../VideoPlayerSlider/VideoPlayerSilder';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const hideTimerRef = useRef(null);

  const [paused, setPaused] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);

  // Auto hide controls after 3 seconds
  const startHideTimer = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShowControls(false), 3000);
  };

  const onToggleControls = () => {
    setShowControls(prev => !prev);
    if (!showControls) startHideTimer();
  };

  const onLoad = (data: any) => {
    setDuration(data.duration);

    setTimeout(() => {
      setPaused(false);
      setLoading(false);
    }, 1500);
  };

  const onBuffer = ({ isBuffering }: any) => setLoading(isBuffering);

  const onProgress = (data: any) =>
    setCurrentTime(data.currentTime);

  return (
    <Pressable style={styles.videoPressable} onPress={onToggleControls}>
      <Video
        ref={videoRef}
        source={{
          uri: 'https://drive.google.com/uc?export=download&id=1zRDo0nPyht3Y3LjCVyRGyDwytiQy8KuE',
        }}
        style={styles.video}
        paused={paused}
        resizeMode="contain"
        onLoad={onLoad}
        onBuffer={onBuffer}
        onProgress={onProgress}
      />

      <Pressable
        onPress={onToggleControls}
        style={styles.controlPressable}
      >
        {showControls && (
          <View style={styles.controlsOverlay}>
            <TouchableOpacity
              onPress={(e) => {
                e.stopPropagation();
                setPaused(prev => !prev);
                startHideTimer();
              }}
              style={styles.playButton}
            >
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
              <VideoPlayerSlider
                value={currentTime}
                max={duration}
                onChange={(val: any, isRelease: any) => {
                  setCurrentTime(val);
                  if (isRelease) {
                    videoRef.current.seek(val);
                  }
                }}
              />
            </View>
          </View>
        )}
      </Pressable>
    </Pressable>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  videoPressable: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },

  video: {
    width: '100%',
    height: 220,
  },

  controlPressable: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },

  controlsOverlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 220,
    justifyContent: 'space-between',
    padding: 10,
  },

  playButton: {
    alignSelf: 'center',
    marginTop: 70,
  },

  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
