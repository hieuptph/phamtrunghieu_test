/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */
// import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import {
  SafeAreaView, Dimensions, TouchableWithoutFeedback, Alert, Keyboard, ScrollView, KeyboardAwareScrollView, KeyboardAvoidingView, StatusBar, StyleSheet, Text, Button, TextInput, Image, TouchableOpacity, useColorScheme, View, Input, CheckBox,
} from 'react-native';
import { Formik } from "formik";
import FormField from "./FormField";
import { Component } from 'react/cjs/react.production.min';
import { SignupSchema } from './Validate';
const windowWidth = Dimensions.get('window').width;
// const [posts,setPosts]  = useState([]) 
 const EditProducts = ({ navigation }) => {
//   useEffect(() => {
//     fetch('http://10.10.90.162:3000/products')
//       .then((response) => response.json())
//       .then(postss => {
//         setPosts(postss);
//         console.log(postss);
//       })
//   }, [])
const onEditProducts = (values) => {//truyền id
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: values.name,
      price: values.price,
      quantity: values.quantity,
    })
  };
   fetch('http://10.10.90.162:3000/products/2', requestOptions)
    .then(response => response.json())
    .then((data) => 
        console.log("NAME---", data),
      ),// this.setState({ postId: data.id })),
    Alert.alert(
      "Successfully!",
      "Edit Products thành công !!"
    )
    // console.log(data);

 navigation.navigate('Products')
}

return (
  <SafeAreaView style={styles.container}>
    <StatusBar style='light' />
    <KeyboardAvoidingView    //view co lại 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik initialValues={{ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", }}
          validationsSchema={SignupSchema}
          onSubmit={onEditProducts}>
          {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
            <View style={styles.content}>
              <View style={styles.content}>
                <FormField
                  field="name"
                  label="Name"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <FormField
                  field="price"
                  label="Price"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <FormField
                  field="quantity"
                  label="Quantity"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <View style={styles.buttonRegister}>
                  <Button style={[
                    styles.button
                  ]}
                    title="Edit Products"
                    onPress={handleSubmit}
                  />
                  {/* onPress={() => navigation.navigate('Login')} */}
                </View>
              </View>
            </View>
          )}
        </Formik>
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
    backgroundColor: "#d24dff",
    // paddingTop : Constants.statusBarHeight,
  },
  //Products:{
  //     width:windowWidth/3,
  //     height:150,
  //     backgroundColor:"red",
  //     padding:5,
  //     margin:70,
  //     borderRadius:2,
  //     borderColor:"blue",
  //   },
  content: {
    flex: 1,
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
  },

})

export default EditProducts;
