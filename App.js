import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState,useContext} from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Singlequiz from './components/Singlequiz';
import Login from './components/Login';
import UserContext from './UserContext';
import * as SecureStore from 'expo-secure-store';


const Stack = createStackNavigator();

export default function App() {

  const [login, setLogin] = useState(false)

  const {isLoginContext,setLoginContext} = useContext(UserContext)

  async function get(key) {
    let result = await SecureStore.getItemAsync(key);
    if(result){
      return true
    } else {
      return false
    }
  }

  useEffect(()=>{
    if(get('access_token')){
      setLogin(true)
      setLoginContext(true)
    }
    else{
      setLoginContext(false)
    }
  },[])


  return (
    <>
    <UserContext.Provider value = {login}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Singlequiz" component={Singlequiz} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // padding: '5%',
    marginTop: '10%'
  },

  body: {
    padding: '3%',
  },

  h1: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black'
  },

  h2: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: '4%',
    color: 'black'
  },

  h3: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: '4%',
    color: 'black'
  },

  h4: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: '4%',
    color: 'black'
  },

  div: {
    width: '100%',
    backgroundColor: 'chartreuse',
    height: 70,
    justifyContent: 'center',  
  },

  btn: {
    width: 20,
  },
});
