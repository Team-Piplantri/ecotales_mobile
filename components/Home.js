import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';

const Home = ({navigation}) => {
    return ( 
        <View style={styles.container}>
        <View style={styles.div}>
        <Text style={styles.h1}>Arthshastra</Text>
        {/* <Text style={styles.h2}>Login</Text> */}
      </View>
          <View style={styles.body}>
            <Text style={styles.h2}>Tales of Arthashastra</Text>
            <Text style={styles.h3}>Learn Economic Principles by Playing, and Enjoying!</Text>
            <Text style={styles.h3}>Multiple game modes, to relax, have fun, and learn, all at the same time!!</Text>
          </View>
          <View style={[{marginBottom: '5%', width: '50%'}]}>
            <Button
              style={styles.btn}
              onPress={() => navigation.navigate('Singlequiz')}
              title="Guess the Sector"
              color="#841584"
              />
          </View>
          <View style={[{marginBottom: '5%', width: '50%'}]}>
            <Button
              style={styles.btn}
            //   onPress={() => navigation.navigate('Login')}
              title="Who's the economist"
              color="#841584"
              />
          </View>
          <View style={[{marginBottom: '5%', width: '50%'}]}>
            <Button
              style={styles.btn}
              // onPress={onPressLearnMore}
              title="Country Simulator"
              color="#841584"
              />
          </View>
          <View style={[{marginBottom: '5%', width: '50%'}]}>
            <Button
              style={styles.btn}
              onPress={() => navigation.navigate('Login')}
              title="Login"
              color="#841584"
              />
          </View>
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
      marginTop: '10%'
    },
  
    body: {
      padding: '3%',
    },
  
    h1: {
      fontSize: 30,
      padding: '3%',
    //   textAlign: 'center',
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
  
 
export default Home;