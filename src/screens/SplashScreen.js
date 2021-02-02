import React,{useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Splash from '../../assets/splash.mp4'
import { Video } from 'expo-av'

const SplashScreen = ({navigation}) => {
    useEffect(()=> {
        setTimeout(()=> {
            navigation.replace('Home')
        },6000)
    })
    return <Video
    source={Splash}
    rate={1.0}
    volume={1.0}
    isMuted={false}
    resizeMode="cover"
    shouldPlay
    isLooping
    style={StyleSheet.absoluteFill}
    /> 
}

SplashScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

export default SplashScreen