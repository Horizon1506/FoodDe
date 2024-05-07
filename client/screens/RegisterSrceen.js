import React, { useState } from 'react';
import { View, Text, TextInput, Button,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
  };
  
  const handleLogin = 
  () => {navigator.navigate('Login');};

  return (
    <SafeAreaView className= 'm-10'>
    <View>
      <Image style={{width:200,height:200,alignSelf: 'center',marginBottom: 20}} 
      source={require('../assets/images/signup.jpg')}  />
      <Text style={{ fontSize: 30, textAlign: 'center',marginBottom:30,fontWeight:'bold' }}>Đăng ký</Text>
      <TextInput style={{backgroundColor:'white',color:'orange', marginBottom: 10,padding: 10, borderRadius: 50,
       fontSize: 20,textAlign:'center',}}
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
      <TextInput style={{backgroundColor:'white',color:'orange', marginBottom: 10,padding: 10, borderRadius: 50,
       fontSize: 20,textAlign:'center',}}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
     <TouchableOpacity style={{marginBottom: 10,padding: 10, borderRadius: 50,backgroundColor:'orange' }} 
       onPress={handleLogin}>
       <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:'bold'}}> Đăng kí </Text>
      </TouchableOpacity>   
     
      <View style={{ borderBottomColor: 'orange', borderBottomWidth: 1, margin: 10,marginTop:30 }} />
      
      <Text style={{textAlign:'center',marginTop:30,marginBottom:10}}>Bạn đã có tài khoản</Text>
      
      <TouchableOpacity style={{marginBottom: 10,padding: 10, borderRadius: 50,backgroundColor:'white', }} 
       onPress={handleRegister}>
       <Text style={{textAlign:'center',color:'orange',fontSize:20,fontWeight:'bold'}}> Đăng nhập </Text>
      </TouchableOpacity>   
    </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;