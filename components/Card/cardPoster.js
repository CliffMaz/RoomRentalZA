import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'

const CardPoster = () => {
  return (
    <View style={styles.owner_container}>
        <Image style={styles.owner_pic} source={require('../../assets/hous.jpg')}/>
        <View>
            <Text style={{fontSize:15}}>Cliford Mazibuko</Text>
            <View style={{flexDirection:'row'}}>
                <Icon name='call' size={20}/>
                <Text style={{fontSize:15}}>067 017 3408</Text>
            </View>
            
        </View>
    </View>
  )
}

export default CardPoster