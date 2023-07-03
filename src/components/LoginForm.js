import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Button, Card, CardSection, Input, Spinner } from "./common";
import { Text, StyleSheet } from "react-native";

const LoginForm = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onButtonPress = () => {
    setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(onLoginSucces)
      .catch(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            setError("Authentication Failed.");
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .finally(() => {
        setLoading(false);
      });
  };
    const onLoginSucces = () => {
        setEmail('')
        setPassword('')
        setLoading(false)
        setError('')
    }

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
      <CardSection>{renderButton()}</CardSection>
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
