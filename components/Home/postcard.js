import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors';

const PostCard = ({press}) => {
  return (
    <TouchableOpacity style={styles.postcard} onPress={press}>
        
        <ImageBackground 
            source={require('../../assets/homescreen.jpg')}
            style={styles.postImg}
            >

        </ImageBackground>
        <View style={styles.postDetails}>

            <View >
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'800', fontSize:18}}>Krugersdorp</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'800', fontSize:12, color:colors.MAIN_COLOR}}>Price:</Text><Text> R1350</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'800', fontSize:12, color:colors.MAIN_COLOR}}>Type:</Text><Text> Room</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'800', fontSize:12, color:colors.MAIN_COLOR}}>Room Dimensions:</Text><Text> 1350m x 900m</Text>
                </View>
                
                
                
                
                
            </View>
            <View >
                <TouchableOpacity style={styles.btnC}>
                    <Icon name='call' size={25} color='green'/>
                    <Text style={{fontSize:20, color:'white'}}>Call</Text>
                </TouchableOpacity>
                
                <View>
                    <Text onPress={() => Linking.openURL(url)} style={{color:'blue'}}>Click Card for 
                    </Text>
                    <Text style={{color:'blue'}}>More Details</Text>
                </View>
                
            </View>
            

        </View>        
    </TouchableOpacity>
  )
}

export default PostCard