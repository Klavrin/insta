import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window')

function Logo() {
    return (
            <Image 
                source={require('/home/gherasim/Public/Node.js/instagram-clone/assets/Instagram_logo.png')} 
                style={{
                    marginLeft: 10,
                    width: width / 3, // ???
                    height: 40, // ???
                }}
            />
    )
}

export default Logo;