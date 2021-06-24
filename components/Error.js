import React from 'react';
import { View ,Text,Button,StyleSheet} from 'react-native';

const Error = ({navigation}) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.h3}>
                The Email Entered is Not Found! or Internal Server Error, Please Contact Administrator
            </Text>
            <View style={[{ marginBottom: '5%', width: 120, textAlign: "center" }]}>
              <Button
                style={styles.btn}
                onPress={()=>navigation.navigate('Login')}
                title="Back to Login"
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
      // marginTop: '10%'
    },
  
    h3: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: '4%',
      color: 'black'
    },
  
    btn: {
      width: 20,
    },
  });
 
export default Error;