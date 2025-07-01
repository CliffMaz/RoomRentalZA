
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, {Marker, Callout} from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import Feather from 'react-native-vector-icons/Feather';
import GoogleAuto from './GoogleAuto';

const SearchScreen = () => {
  

    const [location, setLocation] = useState({coords: {longitude: 0, latitude: 0}});
  const [errorMsg, setErrorMsg] = useState(null);

  const [selectedPlace, setSelectedPlace] = useState(null);

  const [isFocused, setIsFocused] = useState(false);
  const [Address, setAddress] = useState("");

   const handleMarkerplacement = async (place) => {
    setSelectedPlace(place);
    
    }
  
    useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  },[]);

  let text = "wating...";
  if (errorMsg) {
    text = errorMsg;
  }

   useEffect(() => {
  fetch('https://www.google.com')
    .then(() => console.log('🌐 Device has internet'))
    .catch(() => console.log('❌ Device has no internet'));
}, [selectedPlace]);

console.log("component rendered")
console.log('kili: ',selectedPlace)
//console.log(selectedPlace)
  return (
    <SafeAreaView style={styles.bg} keyboardShouldPersistTaps="handled">

        <StatusBar translucent={false} backgroundColor='green' />
        
        

        <View style={styles.mapLay} keyboardShouldPersistTaps="handled">

           
            
            
            
                
           
            <View keyboardShouldPersistTaps="handled" 
            >
                
                
            <GoogleAuto onPlaceSelect={handleMarkerplacement}/>
      
            
            </View>
              <MapView 
                style={styles.map}
                
                showsUserLocation = {true}  
                initialRegion={{
                                                            latitude: -26.195246,
                                                            longitude: 28.034088,
                                                            latitudeDelta: 2.0922,
                                                            longitudeDelta: 3.0421,}}
    
                  
    >
      <Marker coordinate = {{latitude: location.coords.latitude,
            longitude: location.coords.longitude}} pinColor = 'black'>
              
          </Marker>

    </MapView>

           
           
        </View>
        
            
        
    </SafeAreaView>
  )
}





export default SearchScreen

