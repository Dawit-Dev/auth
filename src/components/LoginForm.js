import React from "react";
import { Button, Card, CardSection, Input } from "./common";

const LoginForm = () => {
  state = { email: "" };

  return (
    <Card>
      <CardSection>
        <Input
          onChangeText={(email) => this.setstate({ email })}
          value={this.state.email}
          label="Email"
          placeholder="user@gmail.com"
        />
      </CardSection>
      <CardSection />
      <CardSection>
        <Button>Log In</Button>
      </CardSection>
    </Card>
  );
};

export default LoginForm;
