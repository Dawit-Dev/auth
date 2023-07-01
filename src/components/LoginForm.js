import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Button, Card, CardSection, Input, Spinner } from "./common";
import { Text, StyleSheet } from "react-native";

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
  const [loading, setLoading] = useState(false);

  const onButtonPress = () => {
    setLoading(true); // Set loading to true before the asynchronous operation
    signInWithEmailAndPassword(auth, email, password)
      .catch(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            setError("Authentication Failed.");
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => {
            setLoading(false); // Set loading to false after the operation is completed
          });
      })
      .finally(() => {
        setLoading(false); // Set loading to false after an error occurs
      });
  };




    
    const renderButton = () => {
      if (loading) {
        return <Spinner size="small" />;
      }
      return <Button onPress={onButtonPress}>Log In</Button>;
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
              {renderButton()}
      </CardSection>
      {error ? <Text style={styles.errorTextStyle}>{error}</Text> : null}
    </Card>
  );
};

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    margin: 10,
    alignSelf: "center",
    color: "red",
  },
});

export default LoginForm;
