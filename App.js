import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default function App() {
  return (
    <View>
      <Header headerText="Authentication" />
      <LoginForm />
       <StatusBar style="auto" />
    </View>
  );
}
