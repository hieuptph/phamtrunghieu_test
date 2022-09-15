import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StatusBar, Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, useColorScheme, View, Dimensions,Alert,
} from 'react-native';
// import { Entypo } from '@expo/vector-icons';
import {
  Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignupSchema from "./Validate";
import { Formik } from "formik";
import { Component } from 'react/cjs/react.production.min';


const windowWidth = Dimensions.get('window').width;
const Login = ({ navigation }) => {
  const [username, setusername] = useState("");
  const [password, setuserpassword] = useState("");

  const onSubmit = () => {   
    return fetch('http://10.10.90.162:3000/users', {     
      method: 'GET',     
    })
      .then((response) => response.json())   
      .then((data) => {  
      console.log(data[0].username);
      console.log(username.username);
      console.log(password);
      if(data[0].username.toString() === username.username && data[0].password === password.password)//Login sai logic em so sánh gtr nhập với object đầu 
      {       
          Alert.alert("Thông báo!", "Bạn đã đăng nhập thành công!");
          navigation.navigate('Products');
        }
        else {
          Alert.alert("Thông báo!", "Bạn đã đăng nhập không thành công!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // useEffect(() =>{
  //   fetch('http://10.10.90.162:3000/users')
  // .then((response) => response.json())
  // .then((data) => console.log(data));
  // })


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Image source={require('./assets/image/banerlogin.jpg')} style={styles.imageBaner} />         
         
      <KeyboardAvoidingView    //view co lại 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


          {/* <Formik
            initialValues={{ email: "", password: "" }}
            validationsSchema={SignupSchema}
            onSubmit={values => console.log(values)}
          > */}

          {/* {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (  */}
         
          
          <View style={styles.content}>
           <View style={styles.textWrapper}>
              <Text style={styles.hiText}>Login Account!!!</Text>
            </View>

            <View style={styles.form}>
              <Image source={require('./assets/image/iconAccount.jpg')} style={styles.imageiconAccount} />

              <TextInput style={styles.inputAccount} placeholder="Nhập tài khoản" placeholderTextColor="#929292" onChangeText={(username) => setusername({ username: username })} />

            </View>
            <View style={styles.form}>
              <Image source={require('./assets/image/iconPassword.png')} style={styles.imageiconAccount} />

              <TextInput style={styles.inputAccount} autoFocus={true} placeholder="Nhập mật khẩu" placeholderTextColor="#929292" onChangeText={(password) => setuserpassword({ password: password })} />
              {/* keyboardType={"numeric"}  */}
              <TouchableOpacity style={styles.buttonLogin} onPress={onSubmit}>
                <Text style={styles.buttonLoginText}>LOGIN</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.action}>
              <TouchableOpacity style={styles.buttonAction}>
                <Text style={styles.buttonActionText}
                  title="Forgotpassword"
                  onPress={() => navigation.navigate('Forgotpassword')}
                >Forgotpassword</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonAction}>
                <Text style={styles.buttonActionText}
                  title="Go to Đăng ký"
                  onPress={() => navigation.navigate('Register')}
                >Go to Đăng ký</Text>
              </TouchableOpacity>
{/* 
              <TouchableOpacity style={styles.buttonAction}>
                <Text style={styles.buttonActionText}
                  title="Go to Đăng ký"
                  onPress={() => navigation.navigate('AddProducts')}
                >ADĐ</Text>
              </TouchableOpacity> */}
            </View>

          </View>
          {/* )} */}

          {/* </Formik>  */}

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>


    </SafeAreaView>

  );
};


const TEXT = {
  color: "#fff",
  textAlign: "center"
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0006d",
    // paddingTop : Constants.statusBarHeight,
  },
  imageiconAccount: {
    maxWidth: "10%",
    maxHeight: "10%",
    resizeMode: "contain",
    position: 'absolute',
    top: 25,
    left: 20,
    zIndex: 10,
  },
  image: {
    // maxWidth: "100%",
    // maxHeight: "150%",
    // resizeMode: "contain",
    width: windowWidth,

  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 20,
    marginBottom: 10,

  },
  buttonActionText: {
    color: "#fff",
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,

  },
  inputAccount: {
    margin: 10,
    borderRadius: 15,
    height: 60,
    backgroundColor: '#fff',
    paddingLeft: 40,
  },
  buttonLogin: {
    backgroundColor: "red",
    height: 50,
    marginTop: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonLoginText: {
    ...TEXT,
  },
  buttonGoTo: {
    color: 'blue',
    backgroundColor: 'red',

  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  imageBaner:{
    width: windowWidth,
  }
})

export default Login;