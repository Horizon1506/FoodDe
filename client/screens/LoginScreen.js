import React, { useState } from 'react';
import { Button, TextInput, Alert, SafeAreaView,Image,Text,View, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const dummyData = {
    username: 'Admin',
    password: '123',
  };

  const handleLogin = () => {
    if (username === dummyData.username && password === dummyData.password) {
      Alert.alert('Success', 'Đăng nhập thành công!', [
        { text: 'OK', onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        }) },
      ]);
    } else {
      Alert.alert('Error', 'Thông tin đăng nhập không chính xác!');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView className="m-10" style={{flexDirection:'collum',flex: 1}}>
      <Image style={{width:200,height:200,alignSelf: 'center',marginBottom: 20}} 
      source={require('../assets/images/shipper.png')}  />
      <Text style={{ fontSize: 30, textAlign: 'center',marginBottom:20 }}>Đăng nhập</Text>
      <TextInput style={{backgroundColor:'white',color:'orange', marginBottom: 10,padding: 10, borderRadius: 50,
       fontSize: 20,textAlign:'center' }}
        
       placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput style={{backgroundColor:'white',color:'orange', marginBottom: 10,padding: 10, borderRadius: 50,
       fontSize: 20,textAlign:'center',}}
        
       placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={{marginBottom: 10,padding: 10, borderRadius: 50,backgroundColor:'orange' }} 
       onPress={handleLogin}>
       <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:'bold'}}> Đăng nhập </Text>
      </TouchableOpacity>   
     
      <View style={{ borderBottomColor: 'orange', borderBottomWidth: 1, margin: 10,marginTop:30 }} />
      
      <Text style={{textAlign:'center',marginTop:30,marginBottom:10}}>Bạn chưa có tài khoản</Text>
      
      <TouchableOpacity style={{marginBottom: 10,padding: 10, borderRadius: 50,backgroundColor:'white', }} 
       onPress={handleRegister}>
       <Text style={{textAlign:'center',color:'orange',fontSize:20,fontWeight:'bold'}}> Đăng kí </Text>
      </TouchableOpacity>   
      {/* Thêm nút đăng kí vào  */}
      
    </SafeAreaView>
  );
};

export default LoginScreen;