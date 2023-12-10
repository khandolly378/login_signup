import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Add logic for handling sign-up, such as API calls or authentication
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setusername(text)}
        value={username}
        keyboardType="username"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email"
      
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        keyboardType="password"
        secureTextEntry
      />
      <Button title="SIGN UP" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor:'#186F65',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    color:"#D2DE32",
   // fontStyle:'',
    fontSize: 29,
    marginBottom: 25,
  },
  input: {
    height: 40,
    backgroundColor:"#FFC436",
    shadowColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 10,
  },
});

export default SignUpScreen;