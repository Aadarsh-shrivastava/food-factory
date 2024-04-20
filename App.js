import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Gltf, useGLTF } from "@react-three/drei/native";
import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import modal from "./assets/models/Bread_Slice_Bread_0.glb";
import Ingredient from "./components/Ingredient";
import { useSandwhich } from "./hooks/useSandwhich";
import SandWhich from "./components/SandWhich";
import BottomPanel from "./components/BottomPanel";
export default function App() {
  useGLTF.preload(modal);
  const ingredients = useSandwhich((state) => state.ingredients);
  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
        {/* <Ingredient ingredient={{ name: "bread" }} /> */}
        <SandWhich />
      </Canvas>
      <BottomPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 100, flex: 1, backgroundColor: "#fff" },
});
