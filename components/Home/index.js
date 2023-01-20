import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput, SafeAreaView, ScrollView, Animated, Dimensions, Button, Pressable} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import PostCard from './postcard';





const MainScreen = ({navigation}) => {

    [btnStatus, setBtnStatus] = useState("All");

    let width = Dimensions.get('window').width
    const scrollX = new Animated.Value(0)
    let position= Animated.divide(scrollX, width)

    

    const rentalType=[
        {
            id:1,
            type: 'All'
        },
        {
            id:2,
            type: 'Rooms'
        },
        {
            id:3,
            type: 'Cottage'
        }
    ]
  return (
    
    
    <SafeAreaView style={styles.bg}>

        <StatusBar translucent={false} backgroundColor='green' />
        
        
            <View style={styles.title}>
                <Feather name='filter'size={28} color='green'/>
                <Icon name='person' size={38} color='green'/>
            </View>

        <View style={styles.header}>
            <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                
                    <Text style={{fontSize:20, color:'black'}}>Welcome to </Text>
                    <Text style={{fontSize:30, color:'green'}}>Room<Text style={{fontSize:30, color:'grey'}}>ZA</Text></Text>
                
            </View>
            <TouchableOpacity style={styles.searchBar} onPress={()=>navigation.push("SearchScreen")}>
            <Icon name="search" size={28} color='green'/><Text style={{fontSize:14}}>Search location</Text>
            </TouchableOpacity>
           
           
        </View>
        
            <View style={styles.visableFilter}>
                {rentalType.map((item, i) => (
                
                    <TouchableOpacity key={i} onPress={onPressBtn= ()=>{setBtnStatus(item.type)}} style={btnStatus === item.type ? styles.underlinerFilter: styles.visableFilterLine}>
                        <Text   >{item.type}</Text>
                        
                    </TouchableOpacity>
                    
                ))
                }
            </View>
            

<ScrollView style={{flex:1, marginTop:25, width:'100%'}}>
    
            <View style={styles.cardView}>
            
                
               
                <PostCard press={()=>navigation.push("CardScreen")}/>
                <PostCard press={()=>navigation.push("CardScreen")}/>
                <PostCard press={()=>navigation.push("CardScreen")}/>
                <PostCard  press={()=>navigation.push("CardScreen")}/>
                <PostCard press={()=>navigation.push("CardScreen")}/>
                <PostCard press={()=>navigation.push("CardScreen")}/>
                <PostCard/>
                <PostCard/>
            </View>
        </ScrollView>
        
        
        
        
    </SafeAreaView>
    
      
  )
}

export default MainScreen