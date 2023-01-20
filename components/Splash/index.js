import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <ImageBackground 
        source={require('../../assets/homescreen.jpg')}
        style={styles.bgImg}
        >
            

            

            <View style={styles.searchbtnLogo}>
                <Icon name="house" size={80} color="green"/>
                <Text style={styles.title}>Room<Text style={{color:'grey'}}>ZA</Text></Text> 
             <TouchableOpacity style={styles.button} onPress={()=>navigation.push("HomeStackScreen")}>
               <Text style={styles.btnText} >
                EXPLORE NOW
                </Text> 
             </TouchableOpacity>
            </View>
          
        </ImageBackground>
    </View>
    
  )
}

export default HomeScreen