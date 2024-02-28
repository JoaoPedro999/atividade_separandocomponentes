import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";

import styles from "./src/assets/styles/component_style";
import Component1 from "./src/components/component1";
import Component2 from "./src/components/component2";
import Component3 from "./src/components/component3";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Component1/>
      <Component2/>
      <Component3/>

    </View>
  );
}


