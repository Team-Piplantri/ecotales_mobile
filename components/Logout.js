import React,{useContext} from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';
import axiosInstance from "../axiosApi";
import UserContext from '../UserContext';

const Logout = ({navigation}) => {
    const {isLoginContext,setLoginContext} = useContext(UserContext)
    
    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
      }
      
    async function get(key) {
    let result = await SecureStore.getItemAsync(key);
        return result;
    }

    async function remove(key) {
        let result = await SecureStore.deleteItemAsync(key);
    }
    
    async function handleLogout() {
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": get("refresh_token")
            });
        }
        catch (e) {
            console.log(e);
        };
        remove('access_token');
        remove('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        setLoginContext(false);
        navigation.navigate('Login')
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.div}>
                <Text style={styles.h3}>Sure you want to logout?</Text>
                <Button style={styles.btn} onPress={handleLogout} title='Logout' color="#841584"/>
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
        // marginTop: '10%'
    },

    h3: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: '4%',
        color: 'black',
        marginBottom: '4%'
    },

    div: {
        // width: '100%',
        // backgroundColor: 'rgb(11,144,143)',
        height: 200,
        justifyContent: 'center',  
    },

    btn: {
        width: '50%',
    },
});

 
export default Logout;