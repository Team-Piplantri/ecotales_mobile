import React, { useState, useContext,useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Modal,Pressable } from 'react-native';
import UserContext from '../UserContext';
import ActionButton from 'react-native-action-button';
// import Modal, {ModalManager } from 'react-native-root-modal';

const Home = ({ navigation }) => {
  const { isLoginContext, setLoginContext } = useContext(UserContext)
  const [showBot, setShowBot] = useState(false);
  const [quote, setQuote] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const userLogValue = useContext(UserContext);
  const [count, setCount] = React.useState(0);

  // if(isLoginContext){
  //     React.useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerRight: () => (
  //         <Button onPress={() => setCount(c => c + 1)} title="Logout" />
  //       ),
  //     });
  //   console.log("Logged in and inside")
  //   }, [navigation]);
  //   console.log("Logged in")
  //   }
  //     else{
  //       React.useLayoutEffect(() => {
  //       navigation.setOptions({
  //         headerRight: () => (
  //           <Button onPress={() => setCount(c => c + 1)} title="Login" />
  //         ),
  //       });
  //     }, [navigation]);
  //     console.log("Logged out")
  //     }
    

  return (
    <View style={styles.container}>
      <ImageBackground style={{ resizeMode: 'cover', flex: 1, alignItems: "center" }}
        source={{
          uri: 'https://i.imgur.com/ztAdVuc.jpeg',
        }}>
        <View style={styles.div}>
          <Text style={styles.h1}>Arthshastra</Text>
          {/* <Text style={styles.h2}>Login</Text> */}
        </View>
        <View style={styles.body}>
          <Text style={styles.h2}>Tales of Arthashastra</Text>
          <Text style={styles.h3}>Learn Economic Principles by Playing, and Enjoying!</Text>
          <Text style={styles.h3}>Multiple game modes, to relax, have fun, and learn, all at the same time!!</Text>
        </View>
        {isLoginContext ? (
          <>
            <View style={[{ marginBottom: '5%', width: 120, textAlign: "center" }]}>
              <Button
                style={styles.btn}
                onPress={() => navigation.navigate('Singlequiz')}
                title="Guess the Sector"
                color="#841584"
              />
            </View>
            <View style={[{ marginBottom: '5%', width: 120, textAlign: "center" }]}>
              <Button
                style={styles.btn}
                onPress={() => navigation.navigate('Multiplequiz')}
                title="Who's the economist"
                color="#841584"
              />
            </View>
            <View style={[{ marginBottom: '5%', width: 120, textAlign: "center" }]}>
              <Button
                style={styles.btn}
                // onPress={onPressLearnMore}
                title="Country Simulator"
                color="#841584"
              />
            </View>
            {/* <View style={[{ marginBottom: '5%', width: 120, textAlign: "center" }]}>
              <Button
                style={styles.btn}
                onPress={() => navigation.navigate('Logout')}
                title="Logout"
                color="#841584"
              />
            </View> */}
          </>
        ) : (
          <>
            {/* <View style={[{ marginBottom: '5%', width: '50%' }]}>
              <Button
                style={styles.btn}
                onPress={() => navigation.navigate('Login')}
                title="Login"
                color="#841584"
              />
            </View> */}
          </>
        )}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="ChanBot" onPress={() => navigation.navigate("Chanbot")}>
            {/* <Image style={{ resizeMode: 'cover'}}
        source={{
          uri: 'https://i.imgur.com/ztAdVuc.jpeg',
        }}></Image> */}
            <Text>CB</Text>
          </ActionButton.Item>
          {/* <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { }}>
            <Text>Hi</Text>
          </ActionButton.Item> */}
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
            <Text>Hi</Text>
          </ActionButton.Item>
        </ActionButton>
      </ImageBackground>
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

  body: {
    padding: '3%',
  },

  h1: {
    fontSize: 30,
    padding: '3%',
    textAlign: 'center',
    color: "black",
    fontWeight: "bold"
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
    backgroundColor: 'rgb(11,144,143)',
    height: 70,
    // justifyContent: 'center',  
  },

  btn: {
    width: 20,
  },
});


export default Home;
