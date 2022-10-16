import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';


const First = () => {
    return (
        <View style={styles.Page}>
            <View style={styles.LoginButton}>
                <Button title="Login" type='outline' titleStyle={{ color: '#fff' }} containerStyle={{ backgroundColor: 'black' }}
                />
            </View>
            <View style={styles.SignupButton}>
                <Button title="Register" type='outline' titleStyle={{ color: "#fff" }} containerStyle={{ backgroundColor: "black" }}
                />
            </View>
            <View style={styles.Circle}>
                <Image source={require('E:/React-Native/ApnaGarden/src/assets/images/circle.png')} />
            </View>
            <View style={styles.SideImage}>
                <Image source={require('E:/React-Native/ApnaGarden/src/assets/images/girl_reading2.png')} />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    LoginButton: {
        left: -211,
        position: 'absolute',
        top: -200,
        width: 215,
    },
    SignupButton: {
        left: -211,
        position: 'absolute',
        top: -154,
        width: 215,
    },
    Circle: {
        position: 'absolute',
        left: 0,
        top: -730,
    },
    SideImage: {
        position: 'absolute',
        left: 110,
        top: -450,
    },

})


export default First