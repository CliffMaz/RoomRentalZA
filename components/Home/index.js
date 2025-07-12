import "react-native-gesture-handler";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  SafeAreaView,
  ScrollView,
  Animated,
  Dimensions,
  Button,
  Pressable,
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import PostCard from "./postcard";
import rentalData from "../../assets/Database";

const MainScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [items, setItems] = useState([
    { label: "All", value: 1 },
    { label: "Rooms", value: 2 },
    { label: "Cottage", value: 3 },
  ]);

  [btnStatus, setBtnStatus] = useState("All");

  let width = Dimensions.get("window").width;
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  const rentalType = [
    {
      id: 1,
      type: "All",
    },
    {
      id: 2,
      type: "Rooms",
    },
    {
      id: 3,
      type: "Cottage",
    },
  ];
  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar translucent={false} backgroundColor="green" />

      <View style={styles.title}>
        <View style={styles.searchContent}>
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => navigation.push("SearchScreen")}
          >
            <Icon name="search" size={28} color="white" />
            <Text
              style={{
                backgroundColor: "black",
                color: "white",
                position: "absolute",
                top: 0,
                left: 40,
                fontSize: 19,
                padding: 13,
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              Search Place
            </Text>
          </TouchableOpacity>
          <DropDownPicker
            dropDownContainerStyle={{
              backgroundColor: "black",
            }}
            labelStyle={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
            }}
            containerStyle={{
              backgroundColor: "black",
              //color:'black',
              width: "30%",
              borderRadius: 40,
            }}
            textStyle={{
              fontSize: 15,
              color: "white",
              backgroundColor: "black",
            }}
            style={styles.filterPicker}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
      </View>

      <View style={styles.header}>
        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Text style={{ fontSize: 20, color: "black" }}>Welcome to </Text>
          <Text style={{ fontSize: 30, color: "green" }}>
            Room<Text style={{ fontSize: 30, color: "grey" }}>ZA</Text>
          </Text>
          <Icon name="person" size={38} color="green" />
        </View>
      </View>

      <View style={styles.visableFilter}>
        {rentalType.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={
              (onPressBtn = () => {
                setBtnStatus(item.type);
              })
            }
            style={
              btnStatus === item.type
                ? styles.underlinerFilter
                : styles.visableFilterLine
            }
          >
            <Text>{item.type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.roomBody}>
        <ScrollView style={{ flex: 1, marginTop: 25, width: "100%" }}>
          <View style={styles.cardView}>
            {rentalData.map((item) => {
              console.log(item);
              return (
                <PostCard
                  data={item}
                  press={() => navigation.push("CardScreen", { data: item })}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
