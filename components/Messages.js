import { StatusBar } from 'expo-status-bar';
import { requireNativeModule } from 'expo-modules-core';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const {width, height} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

function Messages({ navigation }) {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})