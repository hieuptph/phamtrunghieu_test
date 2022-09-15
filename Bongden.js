import React, { useState } from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, useColorScheme, View, ImageBackground,Switch,
} from 'react-native';
// import { Entypo } from '@expo/vector-icons';
//import Bongdentat from './assets/image/denmo';
import {
  Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//const [isEnabled,setIsEnabled] = useState(false);
//const toggleSwitch =() =>setIsEnabled((previousState) =>!previousState);

const Bongden = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <View>
        <Image source={require('./assets/image/den.png')} style={styles.image}/>
      </View>

       {/* //<Switch
        //trackColor={{ false: "#767577", true: "#81b0ff" }}
        //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        //ios_backgroundColor="#3e3e3e"
        //onValueChange={toggleSwitch}
        //value={isEnabled}
      /> */}
      
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

export default Bongden;