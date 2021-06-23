import React from 'react'
import { StyleSheet, Text, View, Button, Image, ImageBackground, Modal,Pressable } from 'react-native';


const Chanbot = () => {
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
                    <Text style={styles.h3}>Diversified economy should consist of productive forests, water 
                    reservoirs, mines, productive activities, trade, markets, roads, ports, and storage.</Text>
                    <View style={[{flex:1,alignItems:"center"}]}>
                    <Image style={{ width: 200, height: 200, resizeMode: 'contain' }}
                        source={{
                            uri: 'https://i.imgur.com/LmRc2Rr.png',
                        }}></Image>
                        </View>
                </View>
            </ImageBackground>
        </View>
    )
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

export default Chanbot

