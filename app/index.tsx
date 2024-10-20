import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Slider from "@react-native-community/slider";

export default function Index() {
  const [mood, setMood] = useState<number>(4); // setting default mood to 4
  const [description, setDescription] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>How are you feeling today?</Text>

      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={mood}
        onValueChange={(value) => setMood(value)}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#8e8e93"
      />
      <Text style={styles.text}>Mood: {mood}</Text>

      <TextInput
        style={styles.input}
        placeholder="Let me know the feeling..."
        placeholderTextColor="#aaa"
        value={description}
        onChangeText={setDescription}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },
  slider: {
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    color: "#fff",
    paddingLeft: 10,
    marginBottom: 20,
  },
});
