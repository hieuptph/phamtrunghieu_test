/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Button, TextInput, TouchableOpacity, useColorScheme, View,
} from 'react-native';
// import { Entypo } from '@expo/vector-icons';
import {
  Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Register from './Register';
import Dengiaothong from './Dengiaothong';
import Forgotpassword from './Forgotpassword';
import Login from './Login';
import Bongden from './Bongden';
import Products from './Products';
import AddProducts from './AddProducts';
import EditProducts from './EditProducts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Bongden" component={Bongden} />
        <Stack.Screen name="Dengiaothong" component={Dengiaothong} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="AddProducts" component={AddProducts} />
         <Stack.Screen name="EditProducts" component={EditProducts} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={{flex:1}}> 
    //   <Login/>
    // </View>
  );
};

// const TEXT = {
//   color: "#fff",
//   textAlign: "center"
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#b0006d",
//     // paddingTop : Constants.statusBarHeight,
//   },
//   content: {
//     flex:1,
//     paddingHorizontal: 30,

//   },
//   textWrapper: {
//     marginTop: 60,
//     marginBottom: 30,

//   },
//   hiText: {
//     ...TEXT,
//     fontSize: 20,
//     lineHeight: 50,
//     fontWeight: "bold",
//   },
//   userText: {
//     ...TEXT,
//     fontSize: 16,
//     lineHeight: 30,

//   },
//   inputPassword: {
//     margin: 10,
//     borderRadius: 15,
//     height: 60,
//     backgroundColor: '#fff'
//   },
//   buttonLogin: {
//     backgroundColor: "red",
//     height: 50,
//     marginTop: 15,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center'

//   },
//   buttonLoginText: {
//     ...TEXT,
//   },
//   action: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 30,
//   },
//   button: {
//     backgroundColor: "red",
//     height: 50,
//     marginTop: 15,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
//   })

export default App;
