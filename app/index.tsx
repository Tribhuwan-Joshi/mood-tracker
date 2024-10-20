import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import Slider from "@react-native-community/slider";
import axios from "axios";

export default function Index() {
  const [mood, setMood] = useState<number>(4); // setting default mood to 4
  const [description, setDescription] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/mood-insights", {
        mood,
        description,
      });
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("Error submitting mood:", error);
      Alert.alert("Error", "Something went wrong while submitting your mood.");
    } finally {
      setLoading(false);
    }
  };

  // get emoji according to the mood value (may remove in production)
  const getMoodEmoji = (moodValue: number): string => {
    switch (moodValue) {
      case 1:
        return "😭";
      case 2:
        return "😢";
      case 3:
        return "😐";
      case 4:
        return "😊";
      case 5:
        return "😄";
      default:
        return "";
    }
  };

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
      <Text style={styles.text}>
        Mood: {mood} {getMoodEmoji(mood)}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Let me know the feeling..."
        placeholderTextColor="#aaa"
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Track it" onPress={handleSubmit} />
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
