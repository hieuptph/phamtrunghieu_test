import React, { useState } from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, useColorScheme, View, ImageBackground,Switch,
} from 'react-native';
// import { Entypo } from '@expo/vector-icons';
//import Bongdentat from './assets/image/denmo';
import {
  Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Dengiaothong = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <View>
        <Image source={require('./assets/image/dendo.jpg')} style={styles.image}/>
      </View>

      <TouchableOpacity style={styles.buttonAction}>
          <Text style={styles.buttonActionText}
              onPress={() => navigation.navigate('Dengiaothong')}
            >Red</Text>
          </TouchableOpacity>    
          <TouchableOpacity style={styles.buttonAction}>
          <Text style={styles.buttonActionText}
              onPress={() => navigation.navigate('Dengiaothong')}
            >Green</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={styles.buttonAction}>
          <Text style={styles.buttonActionText}
              onPress={() => navigation.navigate('Dengiaothong')}
            >Yellow</Text>
          </TouchableOpacity>  
    </SafeAreaView>

  )
};

const styles = StyleSheet.create({

  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    resizeMode: "contain",

  }
})

export default Dengiaothong;