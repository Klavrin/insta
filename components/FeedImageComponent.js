import { StatusBar } from 'expo-status-bar';
import { requireNativeModule } from 'expo-modules-core';
import { StyleSheet, Dimensions, Text, View, Image, FlatList } from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window')

export default function ImageComponent(prop) {
    return (
        <Image 
            style={{ width: 30, height: 30, borderRadius: 180, marginRight: 10 }}
            source={{ uri: prop.image }}
        />
    )
}