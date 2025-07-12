import React from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../assets/colors";

const PostCard = ({ press, data }) => {
  return (
    <TouchableOpacity style={styles.postcard} onPress={press}>
      <ImageBackground
        source={require("../../assets/homescreen.png")}
        style={styles.postImg}
      ></ImageBackground>
      <View style={styles.postDetails}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "800", fontSize: 18 }}>Krugersdorp</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 12,
                color: colors.MAIN_COLOR,
              }}
            >
              Price:
            </Text>
            <Text> R{data.price}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 12,
                color: colors.MAIN_COLOR,
              }}
            >
              Type:
            </Text>
            <Text> {data.type}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 12,
                color: colors.MAIN_COLOR,
              }}
            >
              Room Dimensions:
            </Text>
            <Text> {data.room_dimensions}</Text>
          </View>

          <View>
            <Text
              onPress={() => Linking.openURL(url)}
              style={{ color: "blue" }}
            >
              Click Card for More Details
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnC}>
            <Icon name="call" size={25} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
