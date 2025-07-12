import "react-native-gesture-handler";
import React, { Rou } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Feather";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import CardPoster from "./cardPoster";
import colors from "../../assets/colors";

const images = [
  {
    id: 1,
    pic: require("../../assets/homescreen.png"),
  },

  {
    id: 2,
    pic: require("../../assets/hous.jpg"),
  },
  {
    id: 3,
    pic: require("../../assets/homescreen.png"),
  },

  {
    id: 4,
    pic: require("../../assets/hous.jpg"),
  },
];

const CardScreen = ({ route }) => {
  const { data } = route.params;
  let width = Dimensions.get("window").width;
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  const renderItem = ({ item }) => (
    <View>
      <Image resizeMode={"cover"} style={styles.card_img} source={item.pic} />
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } },
        ])}
      />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {images.map((item, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: colors.MAIN_COLOR,
                margin: 5,
                borderRadius: 50,
              }}
              key={i}
            />
          );
        })}
      </View>

      <View style={styles.info_card}>
        <View style={styles.info_head}>
          <Text style={{ fontSize: 30 }}>
            <EvilIcon name="location" size={25} color="green" />
            {data.location}
          </Text>
          <View style={styles.info_head_price}>
            <Text style={{ color: "white", fontSize: 15 }}>R{data.price}</Text>
          </View>
        </View>

        <CardPoster />

        <View style={styles.info_main}>
          <Text style={styles.info}>Type: </Text>
          <Text style={styles.info_text}>{data.type}</Text>
        </View>

        <View style={styles.info_main}>
          <Text style={styles.info}>Room Dimensions: </Text>
          <Text style={styles.info_text}>{data.room_dimensions}</Text>
        </View>

        <View style={styles.info_main}>
          <Text style={styles.info}>Parking: </Text>
          <Text style={styles.info_text}>
            {data.parking ? "Available" : "Not Available"}
          </Text>
        </View>

        <View style={styles.info_main}>
          <Text style={styles.info}>Deposit: </Text>
          <Text style={styles.info_text}>{data.deposit ? "Required" : "Not Required"}</Text>
        </View>

        <View style={styles.info_main}>
          <Text style={styles.info}>Address: </Text>
          <Text style={styles.info_text}>{data.address}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardScreen;
