import { StyleSheet, Dimensions } from "react-native";
const { width: screenWidth } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  scrollContainer: {
    backgroundColor: "#25292e",
    minHeight: "100%",
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
    height: 30,
    borderColor: "#fff",
    borderWidth: 1,
    color: "#fff",
    paddingLeft: 10,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
  },
  responseContainer: {
    marginTop: 20,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 8,
    width: screenWidth > 768 ? "70%" : "90%",
  },
  responseText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
