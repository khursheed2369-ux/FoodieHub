import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function SignupScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSignup = () => {

    if (!username || !email || !password || !confirmPassword) {
      Alert.alert(
        'Error',
        'Please fill all fields.'
      );
      return;
    }


    if (password !== confirmPassword) {
      Alert.alert(
        'Error',
        'Passwords do not match.'
      );
      return;
    }


    Alert.alert(
      'Success',
      'Account created successfully!'
    );

    navigation.navigate('Login');
  };


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Create Account
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />


      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />


      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />


      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />


      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>
          Sign Up
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>


    </View>

  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F5F5F5',
  },


  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 30,
  },


  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },


  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },


  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },


  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#4CAF50',
    fontWeight: 'bold',
  },

});