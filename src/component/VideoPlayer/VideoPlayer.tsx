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
  const hideTimerRef = useRef<number>(null);

  const [paused, setPaused] = useState(true);
  const [duration, setDuration] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const [time, setTime] = useState(0);
// const duration = 100;

useEffect(() => {
  const interval = setInterval(() => {
    setTime(prev => (prev < 100 ? prev + 1 : prev));
  }, 1000);

  return () => clearInterval(interval);
}, []);

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
    console.log("data.duration",data.duration)
    setDuration(data.duration);
      setPaused(false);
      setLoading(false);
  };

  const onBuffer = ({ isBuffering }: any) => {
    console.log({isBuffering})
    setLoading(isBuffering)
  };

  const onProgress = (data: any) => {
    console.log("data.currentTime", data.currentTime)
    setCurrentTime(data.currentTime)
  };

  return (
    <Pressable style={styles.videoPressable} onPress={onToggleControls}>
      <Video
        ref={videoRef}
        source={{
          uri: 'https://res.cloudinary.com/dggdsksa1/video/upload/v1766384267/Back_End_Developer_Roadmap_-_freeCodeCamp.org_1080p_h264_gutwkt.mp4',
        }}
        style={styles.video}
        paused={paused}
        resizeMode="contain"
        onLoad={(videoData) => {
          console.log({videoData})
          onLoad(videoData)
        }}
        onBuffer={onBuffer}
        onProgress={(progress) => {
          console.log({progress})
          onProgress(progress)
        }}
        onError={(error) => {
          console.log({error})
        }}
      />

      <Pressable onPress={onToggleControls} style={styles.controlPressable}>
        {showControls && (
          <View style={styles.controlsOverlay}>
            <TouchableOpacity
              onPress={e => {
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
                  style={{ width: scale(30), height: scale(30), }}
                />
              ) : (
                <Image
                  source={IMAGES.pause}
                  style={{ width: scale(30), height: scale(30), }}
                />
              )}
            </TouchableOpacity>

            <View style={styles.bottomControls}>
              <VideoPlayerSlider
                currentTime={time}
                duration={duration}
                onSlide={()=> console.log("slide")}
                onSlideComplete={()=> console.log("slideComplete")}
                // onChange={(time: any, isFinished: any) => {
                //   if (isFinished) {
                //     videoRef.current.seek(time);
                //   }
                //   setCurrentTime(time);
                // }}
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
    zIndex: 9999
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
