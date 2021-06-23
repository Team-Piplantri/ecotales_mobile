import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Image,
} from "react-native";
import axiosInstance from "../axiosApi";

const Signup = ({ navigation }) => {
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  async function handleSubmit() {
    const response = await axiosInstance.post('/user/create/', {
      username: country,
      password: password,
      password1: password1,
      currency: currency,
      email:email
    });
    navigation.navigate('Login')
  }

  return (
    <>
      <View style={styles.div}>
        <Text style={styles.h1}>Arthshastra</Text>
      </View>
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setCountry}
          placeholder="Country Name"
          value={country}
        />
        <TextInput
          style={styles.input}
          onChangeText={setCurrency}
          value={currency}
          placeholder="Currency"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword1}
          value={password1}
          placeholder="Re-enter Password"
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
}

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


export default Signup;