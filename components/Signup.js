import React,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    View,
    Button,
    Image,
  } from "react-native";

const Signup = () => {
    const [country, setCountry] = useState("");
    const [currency, setCurrency] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");

    async function handleSubmit() {
        // try {
        //     const response = await axiosInstance.post('/token/obtain/', {
        //         username: username,
        //         password: password
        //     });
        //     console.log('status'+response.status)
        //     axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
        //     save('access_token', response.data.access);
        //     console.log('access'+response.data.access)
        //     save('refresh_token', response.data.refresh);
        //     console.log('refresh'+response.data.refresh)
        //     setLoginContext(true);
        //     setSuccess(true)
        //     navigation.navigate('Home')
        //     // return response;
        // } catch (error) {
        //     throw error;
        // }
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