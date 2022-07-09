import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { requireNativeModule } from 'expo-modules-core';

import MessagesScreen from './Messages';

export default function NavigationBarButtons({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}>
                <Image 
                    source={require('/home/gherasim/Public/Node.js/instagram-clone/assets/heart.png')} 
                    style={{
                        width: 25,
                        height: 25
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('MessagesScreen')}
                style={styles.button}>
                <Image 
                    source={require('/home/gherasim/Public/Node.js/instagram-clone/assets/chat-bubble.png')} 
                    style={{
                        width: 25,
                        height: 25
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 15
    },

    button: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: 25
    }
})