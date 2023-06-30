import React, { useState } from "react";
import { Button, Card, CardSection, Input } from "./common";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card>
      <CardSection>
        <Input
          onChangeText={(email) => setEmail(email)}
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
          onChangeText={(password) => setPassword(password)}
        />
      </CardSection>
      <CardSection>
        <Button>Log In</Button>
      </CardSection>
    </Card>
  );
};

export default LoginForm;
