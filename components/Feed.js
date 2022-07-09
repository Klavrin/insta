import { StatusBar } from 'expo-status-bar';
import { requireNativeModule } from 'expo-modules-core';
import { StyleSheet, Dimensions, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ImageComponent from './FeedImageComponent';
import PostComponent from './FeedPostComponent';

const {width, height} = Dimensions.get('window')

export default function Feed() {
    const posts = [
        {key: 1, profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', username: 'George', postImage: 'https://cdn.cnn.com/cnnnext/dam/assets/210202101144-restricted-file-tesla-s-model-2013-exlarge-169.jpg', postDescription: 'Just bought myself a Tesla!!! #thanksElonMusk', likes: 140},
        {key: 2, profileImage: 'https://i.gyazo.com/866e23d0b3596cfd3f7f73ecfda25ad3.png', username: '__Robert__', postImage: 'https://content.jdmagicbox.com/comp/delhi/m2/011pxx11.xx11.180510121117.s3m2/catalogue/lets-celebrate-birthday-party-noida-sector-63-noida-event-organisers-for-birthday-party-7kw3itcu26.jpg?clr=', postDescription: 'We are having a birthday party lol', likes: 204},
        {key: 3, profileImage: 'https://us.123rf.com/450wm/photolight2/photolight22103/photolight2210300073/165117887-portrait-of-smiling-beautiful-happy-young-woman-20-years-old-sunset-green-lawn-in-park-background.jpg?ver=6', username: 'Emily', postImage: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/15573795865cd3ba027012d.jpeg', postDescription: 'On my way to Paris. #excited', likes: 151},
    ]

    return (
        <View style={styles.container}>
            <FlatList 
                style={{
                    width: width,
                    height: height
                }}
                data={posts}
                renderItem={({ item }) => (
                    <View style={styles.post}>
                        <View style={{ 
                            width: width, 
                            height: 50, 
                            borderBottomWidth: 1, 
                            borderBottomColor: '#e3e5e3',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 15
                        }}>
                            <ImageComponent image={item.profileImage} />
                            <Text>{item.username}</Text>
                        </View>

                        <PostComponent image={item.postImage} />

                        <View style={{
                            width: width,
                        }}>
                            <View style={{ 
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                width: width, 
                                height: 45,
                                paddingHorizontal: 15
                            }}>
                                <TouchableOpacity style={styles.underPostButtons}>
                                    <Image 
                                        style={{ width: 25, height: 25 }}
                                        source={require('/home/gherasim/Public/Node.js/instagram-clone/assets/heart.png')}
                                    />
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.underPostButtons}>
                                    <Image 
                                        style={{ width: 30, height: 30 }}
                                        source={require('/home/gherasim/Public/Node.js/instagram-clone/assets/comment.png')}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.underPostButtons}>
                                    <Image 
                                        style={{ width: 25, height: 25 }}
                                        source={require('/home/gherasim/Public/Node.js/instagram-clone/assets/share.jpg')}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{ paddingHorizontal: 15 }}>
                                <Text>{item.likes} likes</Text>
                                <Text>{item.username}: {item.postDescription}</Text>
                                <Text style={{ color: 'gray' }}>View all 8 comments</Text>
                                <Text style={{ color: 'gray', fontSize: 10 }}>2 hours ago</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: width,
        height: '100%',

    },
    
    post: {
        width: width,
        marginVertical: 10,
    },
   
    underPostButtons: {
        marginRight: 12
    }
})