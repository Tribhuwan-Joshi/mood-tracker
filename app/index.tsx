import { useState } from "react";
import styles from "../styles";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import Slider from "@react-native-community/slider";
import moodService from "../services/mood";

export default function Index() {
  const [mood, setMood] = useState<number>(4); // setting default mood to 4
  const [description, setDescription] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (description.trim().length == 0) {
      alert("Please provide description");
      setLoading(false);

      return;
    }
    try {
      const response = await moodService.getInsights(mood, description.trim());
      setResponseMessage(response);
    } catch (error) {
      console.error("Error submitting mood:", error);
      Alert.alert("Error", "Something went wrong while submitting your mood.");
    } finally {
      setLoading(false);
    }
  };

  const resetResponse = () => {
    setDescription("");
    setLoading(false);
    setResponseMessage("");
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          placeholder="Let me know that feeling..."
          placeholderTextColor="#aaa"
          value={description}
          onChangeText={setDescription}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#1EB1FC" />
        ) : (
          <View style={styles.buttonContainer}>
            <Button title={"Track it"} onPress={handleSubmit} />
            <Button title={"Clear"} onPress={resetResponse} />
          </View>
        )}

        {responseMessage && (
          <View style={styles.responseContainer}>
            <Text style={styles.responseText}>{responseMessage}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
