import React, {
  SetStateAction,
  Dispatch,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {Text, View, StyleSheet, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  runOnJS,
  useDerivedValue,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const VideoFooter = ({
  duration,
  currentTime,
}: {
  duration: any;
  currentTime: any;
}) => {
  const minute = Math.floor(duration / 60);
  const second = Math.floor(duration - minute * 60);
  const currentSecond = Math.floor(currentTime % 60);
  const currentMinute = Math.floor((currentTime - currentSecond) / 60);
  

  
  const onPressFullScreen =() =>{
      console.log('onPressFullScreen')
  }
    
  return (
    <View style={[styles.container]}>
      <View style={styles.timesContainer}>
        <Text style={styles.timeText}>
          {currentMinute}:{currentSecond} /{minute}:{second}
        </Text>
        <Pressable onPress={onPressFullScreen}> 

        <Icon name="fullscreen" size={30} color="white" />
        </Pressable>
      </View>

     
    </View>
  );
};

export default VideoFooter;

const styles = StyleSheet.create({
  container: {
    width: '100%',

    bottom: 0,
    marginBottom: 26,
    position: 'absolute',
  },
  timesContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },

  progress: {
    width: '100%',
    height: 10,
    backgroundColor: 'gray',
  },
  progressTracer: {
    width: 0,
    height: 10,
    backgroundColor: 'red',
  },
  roll: {
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 10,
    top: 0,
  },
});
