import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal Screen</Text>
      <Text style={styles.subtitle}>This is a simple modal.</Text>

      <TouchableOpacity style={styles.btn} onPress={() => router.back()}>
        <Text style={styles.btnText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555"
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#007AFF",
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  }
});
