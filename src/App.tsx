import Message from './message'
import React from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";


interface AppProps {
  signOut: () => void;
}

const App: React.FC<AppProps> = ({ signOut }) => {
  return (
    <View className="App">
      <Card>
        <Message></Message>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);