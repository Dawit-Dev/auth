import React from 'react'
import { Text, View } from 'react-native'
import { Button, Card, CardSection } from './common'

const LoginForm = () => {
  return (
    <Card>
      <CardSection />
      <CardSection />
          <CardSection>
              <Button>
                  Log In
              </Button>
      </CardSection>
    </Card>
  );
}

export default LoginForm
