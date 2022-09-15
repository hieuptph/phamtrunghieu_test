/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */
// import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import {
  SafeAreaView, TouchableWithoutFeedback, Alert, Keyboard, ScrollView, KeyboardAwareScrollView, KeyboardAvoidingView, StatusBar, StyleSheet, Text, Button, TextInput, Image, TouchableOpacity, useColorScheme, View, Input, CheckBox,
} from 'react-native';
// import { Entypo } from '@expo/vector-icons';
import {
  Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import { styles } from "./styles";

import { Formik } from "formik";
import FormField from "./FormField";
import { Component } from 'react/cjs/react.production.min';
import { SignupSchema } from './Validate';
const Register = ({ navigation }) => {


  // function onSubmitHandler(values) {
  //   console.log(values)
  //   // https://reactnative.dev/docs/alert
  //   Alert.alert(
  //     "Register Successfully!",
  //     "Form data: " + JSON.stringify(values)
  //   );
  // }
  function isFormValid(isValid, touched) {
    return isValid && Object.keys(touched).length !== 0;
  }
  // const onChangeText111 = () =>{
  //   return console.log("huuhhhu");
  // }
  const onRegister = (values) => {
    return fetch('http://10.10.90.162:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,   
        email: values.email,
        password: values.password,   
      })     
    })
      .then((response) => response.json())
      .then((data) => 
        console.log("FIRST NAME---", data),
      ),
      Alert.alert(
        "Register Successfully!",
        "Xin chào: " + JSON.stringify(values.firstName +" "+ values.lastName+"!!!") +" Mời bạn Login!! "
      ),
      navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      {/* <KeyboardAwareScrollView style={styles.contentner}>  */}
      {/* //tự động co dãn thu hồi */}
      <KeyboardAvoidingView    //view co lại 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationsSchema={SignupSchema}
            onSubmit={onRegister}
          >

            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
              <View style={styles.content}>
                <Image source={require('./assets/image/iconResigter.png')} style={styles.image} />
                <View style={styles.textWrapper}>
                  <Text style={styles.hiText}>Register Account!!!</Text>
                </View>

                <View style={styles.content}>
                  <FormField
                    field="firstName"
                    label="First Name"
                    autoCapitalize="words"
                    values={values}
                    touched={touched}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormField
                    field="lastName"
                    label="Last Name"
                    autoCapitalize="words"
                    values={values}
                    touched={touched}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormField
                    field="email"
                    label="Email Address"
                    values={values}
                    touched={touched}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormField
                    field="password"
                    label="Password"
                    secureTextEntry={true}
                    values={values}
                    touched={touched}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormField
                    field="confirmPassword"
                    label="Confirm Password"
                    secureTextEntry={true}
                    values={values}
                    touched={touched}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  {/* <View style={styles.TextInput}>
                    <TextInput style={styles.inputPassword} placeholder="Họ tên" placeholderTextColor="#929292" />
                    <TextInput style={styles.inputPassword} placeholder="User" placeholderTextColor="#929292" />
                    <TextInput style={styles.inputPassword} placeholder="email" placeholderTextColor="#929292" onChangeText={handleChange("email")} onBlur={handleBlur("email")} value={values.email} />
    
                    {errors.email && touched.email ? (
                      <View>  <Text>{errors.email}</Text></View>                                      
                    ) : null} */}                
                  {/* </View> */}
                  <View style={styles.buttonRegister}>
                    <Button style={[
                      styles.button,
                      {
                        opacity: isFormValid(isValid, touched) ? 1 : 0.5,
                      },
                    ]}
                      title="Register"
                      onPress={handleSubmit}//trang login
                    />
                    {/* onPress={() => navigation.navigate('Login')} */}
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* </KeyboardAwareScrollView> */}
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
  content: {
    flex: 1,
  },
  image: {
    maxWidth: "20%",
    maxHeight: "20%",
    resizeMode: "contain",
    position: 'absolute',
    top: 25,
    left: 60,
    zIndex: 10,
  },
  textWrapper: {
    marginTop: 20,
    marginBottom: 1,

  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  }
})

export default Register;
