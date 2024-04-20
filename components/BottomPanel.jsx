import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { star } from "react-native-vector-icons";
function BottomPanel() {
  return (
    <SafeAreaView edges={["bottom"]}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Text style={{ flexShrink: 1, fontSize: 22, fontWeight: "900" }}>
            Al SandWhich
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default BottomPanel;
