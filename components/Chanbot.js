import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, ImageBackground, Modal, Pressable } from 'react-native';
import axiosInstance from '../axiosApi';

const Chanbot = () => {
    const [Quote, setQuote] = useState("")

    useEffect(() => {
        const requestData = async () => {
            const response = await axiosInstance.get("/modes/chan-quote/");
            setQuote(response.data.quote);
          }
          requestData();
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground style={{ resizeMode: 'cover', flex: 1, alignItems: "center" }}
                source={{
                    uri: 'https://i.imgur.com/WKFJfD3.png',
                }}>
                <View style={styles.div}>
                    <Text style={styles.h1}>Arthshastra</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.h2}>Chanakya's Thoughts</Text>
                    <Text style={styles.h3}>{Quote}</Text>
                    <View style={[{ flex: 1, alignItems: "center" }]}>
                        {/* <Image style={{ width: 200, height: 200, resizeMode: 'contain' }}
                            source={{
                                uri: 'https://i.imgur.com/LmRc2Rr.png',
                            }}></Image> */}
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
        marginTop:"50%",
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

