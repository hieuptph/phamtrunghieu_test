import React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet,Button, Text, TextInput, TouchableOpacity, useColorScheme, View,
} from 'react-native';
// import { Entypo } from '@expo/vector-icons';
import {
  Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Forgotpassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Button
        title="Go to Đăng ký"
        onPress={() => navigation.navigate('Register')}
      />

      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>Xin chao!</Text>
          <Text style={styles.userText}>Pham Trung Hieu</Text>
          <Text style={styles.userText}>01234456789</Text>
        </View>

        <View style={styles.form}>
          {/* <Entypo name="lock" size={24} color="black" /> */}
          <TextInput style={styles.inputPassword} keyboardType={"numeric"} autoFocus={true} placeholder="Nhập mã xác thực" placeholderTextColor="#929292" />
          <TextInput style={styles.inputPassword} keyboardType={"numeric"} autoFocus={true} placeholder="Nhập mật khẩu" placeholderTextColor="#929292" />
          <TextInput style={styles.inputPassword} keyboardType={"numeric"} autoFocus={true} placeholder="Xác nhận mật khẩu" placeholderTextColor="#929292" />
          <TouchableOpacity style={styles.buttonLogin}  onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonLoginText}//trang login
            >Xác nhận</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
          <TouchableOpacity style={styles.buttonAction}>
            <Text style={styles.buttonActionText}>Gửi lại mã xác nhận</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonAction}>
            <Text style={styles.buttonActionText}>Thoát tài khoản</Text>
          </TouchableOpacity>
        </View>
        
      </View>
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
    paddingHorizontal: 30,

  },
  textWrapper: {
    marginTop: 60,
    marginBottom: 30,

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
  inputPassword: {
    margin: 10,
    borderRadius: 15,
    height: 60,
    backgroundColor: '#fff'
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
    color:"#fff",
  },
  buttonActionText:{
    color:"#fff",
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  }
})

export default Forgotpassword;