import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <Text style={{ color: "gray" }}>Release Please!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
