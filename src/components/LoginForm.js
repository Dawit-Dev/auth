import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Button, Card, CardSection, Input } from "./common";
import { Text, StyleSheet } from 'react-native'

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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onButtonPress = () => {
    signInWithEmailAndPassword(auth, email, password).catch(() => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setError("Authentication Failed.");
        })
        .catch((error) => {
          setError(error.message);
        });
    });
  };

  return (
    <Card>
      <CardSection>
        <Input
          onChangeText={(text) => setEmail(text)}
          value={email}
          label="Email"
          placeholder="user@gmail.com"
        />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </CardSection>
      <CardSection>
        <Button onPress={onButtonPress}>Log In</Button>
      </CardSection>
      {error ? <Text style={styles.errorTextStyle}>{error}</Text> : null}
    </Card>
  );
};

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        margin: 10,
        alignSelf: 'center',
        color: 'red'
    }
})

export default LoginForm;
