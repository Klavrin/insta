import { StatusBar } from 'expo-status-bar';
import { requireNativeModule } from 'expo-modules-core';
import { StyleSheet, Dimensions, Text, View, Image, FlatList } from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window')

export default function PostComponent(prop) {
    return (
        <Image 
            style={{ width: width, height: height / 3 }}
            source={{ uri: prop.image }}
        />
    )
}