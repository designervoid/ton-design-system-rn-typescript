import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import "./styles";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}