import React, { Component, useState } from "react";
import axiosInstance from "../axiosApi";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Image,
} from "react-native";
import * as SecureStore from 'expo-secure-store';

import UserContext from "../UserContext";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false)

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  
    async function get(key) {
    let result = await SecureStore.getItemAsync(key);
  }

  async function handleSubmit() {
    try {
        const response = await axiosInstance.post('/token/obtain/', {
            username: username,
            password: password
        });
        console.log(response.status)
        axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
        save('access_token', response.data.access);
        console.log(response.data.access)
        save('refresh_token', response.data.refresh);
        console.log(response.data.refresh)

        return response;
    } catch (error) {
        throw error;
    }
}

    const redirect = () => {
        navigation.navigate('Home')
    }


  return (
    <>
    {success ? (
        <>
            {redirect}
        </>
    ): (<></>)}
      <View style={styles.div}>
        <Text style={styles.h1}>Arthshastra</Text>
        {/* <Text style={styles.h2}>Login</Text> */}
      </View>
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          placeholder="Username"
          value={username}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={[{ marginBottom: "5%", width: "50%" }]}>
          <Button
            style={styles.btn}
            onPress={handleSubmit}
            title="Submit"
            color="#841584"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlign: "center",
  },

  form: {
    alignItems: "center",
    marginTop: '25%',
    flex: 1,
  },

  h1: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black'
  },

  div: {
    width: '100%',
    backgroundColor: 'chartreuse',
    height: 70,
    justifyContent: 'center',  
  },
});

export default Login;
