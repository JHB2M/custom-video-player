import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
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

const {width} = Dimensions.get('window');

const VideoProgressBar = ({progressVal,onScrollFinish,setProgressValue}: {progressVal: number,onScrollFinish:(time:number)=>void,setProgressValue:any}) => {

  const [state,setState] = React.useState(1)  

  const translateX = useSharedValue(1);
  const rStyle = useAnimatedStyle(() => {
    return {
      width: progressVal,
    };
  });

  const _onScrollFinish = (a: any) => {
    onScrollFinish(a)

  };

  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: () => {},
      onActive: event => {
        const current = (600/width) * event.translationX
        runOnJS(setProgressValue)(current)
      },
      onFinish: event => {
        runOnJS(_onScrollFinish)(event.translationX);
      },
    });

  return (
    <GestureHandlerRootView style={{position: 'absolute', top: 274}}>
      <View style={styles.progress}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View
            style={[styles.progressTracer, rStyle]}></Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default VideoProgressBar;

const styles = StyleSheet.create({
  container: {},
  progress: {
    width: width,

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
