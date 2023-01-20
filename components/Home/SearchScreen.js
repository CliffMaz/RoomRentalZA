import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.bg}>

        <StatusBar translucent={false} backgroundColor='green' />
        
        

        <View style={styles.header}>
            <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                
                    <Text style={{fontSize:20, color:'black'}}>Welcome to </Text>
                    <Text style={{fontSize:30, color:'green'}}>Room<Text style={{fontSize:30, color:'grey'}}>ZA</Text></Text>
                
            </View>
            <TouchableOpacity style={styles.searchBar}>
                <Icon name='search' size={28} color='green' />
                <TextInput style={styles.searchInput} placeholder='Search Place' />
                
            </TouchableOpacity>
           
           
        </View>
        
            
        
    </SafeAreaView>
  )
}

export default SearchScreen