import React, { useState, Keyboard } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import { GOOGLE_PLACES_API_KEY } from "@env";

const GoogleAuto = ({ onPlaceSelect }) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState(false);

  const handleSearch = async (text) => {
    setInput(text);
    if (text.length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=${GOOGLE_PLACES_API_KEY}&language=en`
      );
      const data = await response.json();
      setResults(data.predictions || []);
    } catch (error) {
      console.log("Places API error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.searchHandler}>
      <TextInput
        onFocus={() => {
          setSuggestion(true);
        }}
        onBlur={() => {
          setTimeout(() => setSuggestion(false), 200);
        }}
        value={input}
        onChangeText={handleSearch}
        placeholder="Search places"
        style={styles.textInput}
      />
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
      {suggestion && input.length >= 2 && results.length > 0 && (
        <FlatList
          keyboardShouldPersistTaps="handled"
          data={results}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setInput(item.description);
                setResults([]);
                onPlaceSelect(item);
              }}
              style={styles.inputContainer}
            >
              <Text>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default GoogleAuto;
