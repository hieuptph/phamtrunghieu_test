/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */
// import CheckBox from '@react-native-community/checkbox';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, Dimensions, FlatList, ScrollView, DIV, Ul, KeyboardAwareScrollView, KeyboardAvoidingView, StatusBar, StyleSheet, Text, Button, TextInput, Image, TouchableOpacity, useColorScheme, View, Input, CheckBox,
} from 'react-native';
// import { Entypo } from '@expo/vector-icons';
import {
  Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// const Item = ({ name }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{name}</Text>
//   </View>
// );

// const [thongbao, setthongbao] = useState("");
const windowWidth = Dimensions.get('window').width;
const Products = ({ navigation }) => {
  const [posts, setPosts] = useState([])
  // const [id,setid]  = useState()   
  // const renderItem = ({ item }) => (
  //   <Item title={item.name+"sssssssssss"} />
  // );


  // const handleEdit =(id)=>{
  //         method: 'PUT',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ title: 'React PUT Request Example' })
  //     };
  //     fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
  //         .then(response => response.json())
  //         .then(data => this.setState({ postId: data.id }));
  
  //   navigation.navigate('Products')
  // }
  const handleDelete = (id) => {
    // const newsId = id;
    console.log("anh yêu em" + id);
    fetch(`http://10.10.90.162:3000/products/${id}`, {
      method: 'DELETE',
    })
      //  .then((response) => response.json())
      .then((data) =>
        console.log("FIRST NAME---", data),
        setPosts((prePost) => prePost.filter(p => p.id !== id))
      )
    navigation.navigate('Products')
  }

  useEffect(() => {
    fetch('http://10.10.90.162:3000/products')
      .then((response) => response.json())
      .then(postss => {
        setPosts(postss);
        console.log(postss);
      })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      {/* <KeyboardAwareScrollView style={styles.contentner}>  */}
      {/* //tự động co dãn thu hồi */}
      <Image source={require('./assets/image/iconResigter.png')} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.hiText}>Products !!!</Text>
        <Button style={styles.themProducts} title="Thêm Products" onPress={() => navigation.navigate('AddProducts')} />
        <View>
          <Text>
            {posts.map(post => {
              return <View style={styles.Products}>
                <Text style={{ textAlign: 'center' }}>Tên sp: {post.name}</Text>
                <Text style={{ textAlign: 'center' }}>Gía: {post.price} </Text>
                <Text style={{ textAlign: 'center' }}>Số lượng: {post.quantity} </Text>
                {/* <Text style={{textAlign:'center'}}>Số lượng: {post.id} </Text> */}
                {/* <Image source={post.thumbnail}/>  */}
                <Button style={styles.button}
                  title="Sửa"  onPress={() => navigation.navigate('EditProducts')} />
                {/*//trang login  */}
                <Button style={styles.button} onPress={() => handleDelete(post.id)}
                  title="Xóa"/>




              </View>
              //   <FlatList
              //   data={posts}
              //   renderItem={renderItem}
              //   keyExtractor={item => item.id}
              // />

            })}

          </Text>


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
    backgroundColor: "#d24dff",
    // paddingTop : Constants.statusBarHeight,
  }, Products: {
    width: windowWidth / 3,
    height: 150,
    backgroundColor: "red",
    padding: 5,
    margin: 70,
    borderRadius: 2,
    borderColor: "blue",
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
  button: {
    height: 20,
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
  themProducts: {
    alignContent: "center",
    padding: 10,
    backgroundColor: "blue",
    margin: 10,
  }

  //item: {
  //   backgroundColor: '#f9c2ff',
  //   padding: 20,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  //   color:"red",
  //   width:windowWidth/3,
  //   height:150,
  //   backgroundColor:"red",
  //   borderRadius:2,
  //   borderColor:"blue",
  // },
  // title: {
  //   fontSize: 100,
  //   color:"red"
  // },
})

export default Products;
