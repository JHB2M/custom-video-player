import * as React from 'react';
import { Pressable } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const PauseButton = ({onPress,isPause} :{onPress :()=>void,isPause:boolean}) => {

    // <Icon  name = 'home ' size   ={24} color = 'white'/>

  return (
    <Pressable style={styles.container} onPress={onPress}>
        <View style ={styles.iconContainer}>
            {isPause ? (

                <Icon  name='play' size={35} color={'white'}/>
            ):(
                <Icon  name='pause' size={35} color={'white'}/>
            )}
        </View>
    </Pressable>
  );
};

export default PauseButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    width:50,
    height:50,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    
    position:'absolute',
    alignSelf:'center',

  },
  iconContainer: {
    
  },
  icon:{

  }
});
