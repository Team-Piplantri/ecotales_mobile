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


const Forgot = ({navigation}) => {
    const [email, setEmail] = useState('')

    async function handleSubmit() {
      const response = await axiosInstance.post('/password-mail/', {
        email:email
      });
      if(response.status == 200){
        navigation.navigate('Success')
      } else {
        navigation.navigate('Error')
      }
    }
    
    return ( 
        <View style={styles.container}>
            <SafeAreaView style={styles.form}>
            <Text style={styles.h3}>
                Enter your registered email
            </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          placeholder="Enter email"
          value={email}
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
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
      // padding: '5%',
      // marginTop: '10%'
    },

    h3: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: '4%',
      color: 'black',
      marginBottom: '4%'
    },

    btn: {
      width: 20,
    },

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
  });
 
export default Forgot;