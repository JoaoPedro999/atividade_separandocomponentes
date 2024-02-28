import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

/*  estilos */
import styles from "./src/styles/component_style";
/* componentes */
import Component1 from "./src/components/component1";
import Component2 from "./src/components/component2";
import Component3 from "./src/components/component3";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/*  cabecalho */}
      <Component1 />

      {/*   corpo */}
      <Component2 />

      {/*  rodape */}
      <Component3 />
    </View>
  );
}
