import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import { Button, Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyC2-Z7K-4ZEJ1E7EysXhjyN-dU1VTC_CIc",
    authDomain: "auth-cfecb.firebaseapp.com",
    databaseURL:
      "https://auth-cfecb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "auth-cfecb",
    storageBucket: "auth-cfecb.appspot.com",
    messagingSenderId: "1035625868022",
    appId: "1:1035625868022:web:ec47312d5488344d97dad7",
    measurementId: "G-7M5FLN52QF",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const renderContent = () => {
    if (loggedIn) {
      return <Button>Log Out</Button>;
    }
    return <LoginForm auth={auth} />;
  };

  return (
    <View>
      <Header headerText="Authentication" />
      {renderContent()}
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
 

