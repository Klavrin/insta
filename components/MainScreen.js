import { StatusBar } from 'expo-status-bar';
import { requireNativeModule } from 'expo-modules-core';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Logo from './Logo';
import NavigationBarButtons from './NavButtons';
import Feed from './Feed';
import Messages from './Messages';

const {width, height} = Dimensions.get('window');
const Tab = createBottomTabNavigator()

function HomeScreen() {
    return (
        <Feed />
    )
}

function MessagesScreen() {
    return (
        <View>
            {/* <Messages /> */}
        </View>
    )
}

function Header() {
    const [navigate, setNavigate] = useState(0)
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerLeft: () => <Logo />,
                headerRight: () => <NavigationBarButtons />
            }}>
                <Tab.Screen 
                    name='Home' 
                    component={HomeScreen} 
                    options={{
                        headerTitle: '',
                        tabBarIcon: () => (
                            <Image 
                                style={{ width: 35, height: 35, }}
                                source={require('/home/gherasim/Public/Node.js/instagram-clone/assets/home.png')}
                            />
                        ),
                        tabBarLabel: () => {return null}
                    }}
                />
                <Tab.Screen 
                    onPress={() => setNavigate(2)}
                    name='Search'
                    component={HomeScreen}
                    options={{
                        headerTitle: '',
                        tabBarIcon: () => (
                            <Image 
                                style={{ width: 25, height: 25, }}
                                source={require('/home/gherasim/Public/Node.js/instagram-clone/assets/search.png')}
                            />
                        ),
                        tabBarLabel: () => {return null}
                    }}
                />
                <Tab.Screen 
                    name='Add'
                    component={HomeScreen}
                    options={{
                        headerTitle: '',
                        tabBarIcon: () => (
                            <Image 
                                style={{ width: 28, height: 28, }}
                                source={require('/home/gherasim/Public/Node.js/instagram-clone/assets/add.png')}
                            />
                        ),
                        tabBarLabel: () => {return null}
                    }}
                />
                <Tab.Screen 
                    name='Shop'
                    component={HomeScreen}
                    options={{
                        headerTitle: '',
                        tabBarIcon: () => (
                            <Image 
                                style={{ width: 25, height: 25, }}
                                source={require('/home/gherasim/Public/Node.js/instagram-clone/assets/shop.png')}
                            />
                        ),
                        tabBarLabel: () => {return null}
                    }}
                />
                <Tab.Screen 
                    name='Profile'
                    component={MessagesScreen}
                    options={{
                        headerTitle: '',
                        tabBarIcon: () => (
                            <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 180,
                                backgroundColor: 'black'
                            }}></View>
                        ),
                        tabBarLabel: () => {return null}
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: width,
        height: height
    },
    
    storiesContainer: {
        width: width,
        height: 100,
        backgroundColor:'green'
    },

    feed: {

    }
})

export default Header;
