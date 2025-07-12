import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import "react-native-get-random-values";
import Feather from "react-native-vector-icons/Feather";
import GoogleAuto from "./GoogleAuto";
import { GOOGLE_PLACES_API_KEY } from "@env";

const SearchScreen = () => {
  const [location, setLocation] = useState({
    coords: { longitude: 0, latitude: 0 },
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const [selectedPlace, setSelectedPlace] = useState(null);

  const [region, setRegion] = useState({
    latitude: -26.195246,
    longitude: 28.034088,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  });

  const mapRef = useRef(null);
  const initialRegion = {
    latitude: -26.195246,
    longitude: 28.034088,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };
  const [Address, setAddress] = useState("");

  const handleMarkerplacement = async (place) => {
    console.log("📍 handleMarkerplacement called with:");
    setSelectedPlace(place);

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place.place_id}&key=${GOOGLE_PLACES_API_KEY}`
      );

      const data = await response.json();
      const locationData = data.results[0].geometry.location;

      const newRegion = {
        latitude: locationData.lat,
        longitude: locationData.lng,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      };
      setRegion(newRegion);

      if (mapRef.current) {
        mapRef.current.animateToRegion(newRegion, 1000);
      } else {
        console.log("mapRef not ready");
      }
    } catch {
      console.log("Error in handleMarkerplacement:", error);
    }

  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "wating...";
  if (errorMsg) {
    text = errorMsg;
  }

  useEffect(() => {
    fetch("https://www.google.com")
      .then(() => console.log("🌐 Device has internet"))
      .catch(() => console.log("❌ Device has no internet"));
  }, [selectedPlace]);

  console.log("component rendered");
  //console.log(selectedPlace)
  return (
    <SafeAreaView style={styles.bg} keyboardShouldPersistTaps="handled">
      <StatusBar translucent={false} backgroundColor="green" />

      <View style={styles.mapLay} keyboardShouldPersistTaps="handled">
        <View keyboardShouldPersistTaps="handled">
          <GoogleAuto onPlaceSelect={handleMarkerplacement} />
        </View>
        <MapView
          ref={mapRef}
          style={styles.map}
          region={region}
          //onRegionChange={setRegion}
          showsUserLocation={true}
          //initialRegion={initialRegion}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            pinColor="black"
          ></Marker>
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
