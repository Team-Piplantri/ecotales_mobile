import React,{useContext} from 'react';
import { View,Text,Button } from 'react-native';
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
        <View>
            <Text>Sure you want to logout?</Text>
            <Button onPress={handleLogout} title='Logout'/>
        </View>
        );

}
 
export default Logout;