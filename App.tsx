import React, {useState, useEffect, useCallback, useRef} from 'react';
import {Text, View, StyleSheet, Dimensions, Pressable} from 'react-native';
import Video, {VideoProperties} from 'react-native-video';
import PauseButton from './src/components/PauseButton';
import VideoFooter from './src/components/VideoFooter';
import {runOnJS, runOnUI} from 'react-native-reanimated';
import VideoProgressBar from './src/components/VideoProgressBar';
const URI =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const {width} = Dimensions.get('window');
const App = () => {
  const [isPause, setIsPaused] = useState<boolean>(false);
  const [duration, setDuration] = useState<any>(0);
  const [currentTime, setCurrentTime] = useState<any>(0);
  const [progressValue, setProgressValue] = useState(1);
  const [hideElements, setHideElements] = useState(false);
  const [secondTime,setSecondTime]  =useState(10)

  const videoRef = useRef<any>(null);

  const PauseVideo = () => {
    setIsPaused((x) =>{
      if(x ==true){
        HideElements(true)
      }
      else if(x ==false){
        setHideElements(false)
      }
      return !x
    });  
 

  };

  function HideElements (bool:boolean){

        setTimeout(()=>{
          setHideElements(bool)
        },2000)
    }
  const onLoad = (data: any) => {
    setDuration(data.duration);
  };

  const onProgress = (data: any) => {
    setProgressValue(Math.floor((currentTime / duration) * width));
    setCurrentTime(data.currentTime);
  };

  
  const onPressbackWards = ()=>{
    setHideElements(false)
    console.log('onPressback')

  }

  const onScrollFinish = (time:number) =>{
      const current = (Math.floor(duration/width)*time)
      videoRef.current?.seek(current)
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.videoContainer} onPress={onPressbackWards}>
        <Video
          ref={videoRef}
          source={{uri: URI}}
          style={{width: '100%', height: 300}}
          paused={isPause}
          onLoad={onLoad}
          onProgress={onProgress}
        />
        {hideElements ?  (
          null
        ):(
          <>
          <PauseButton onPress={PauseVideo} isPause={isPause} />
          <VideoFooter
          duration={duration}
          currentTime={currentTime}
          />
          </>
        )}
      </Pressable>
          <VideoProgressBar setProgressValue   = {setProgressValue} onScrollFinish = {onScrollFinish} progressVal={progressValue}/>
   </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
  videoContainer: {
    justifyContent: 'center',
  },
  pauseContainer: {},
  footer: {
    bottom: 20,
  },
  roll: {
    backgroundColor: 'red',
    width: 30,
    height: 30,
    borderRadius: 15,
    bottom: -7,
  },
});
