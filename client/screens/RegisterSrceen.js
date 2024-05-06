import React, { useState } from 'react';
import { View, Text, TextInput, Button,SafeAreaView,Image } from 'react-native';
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
      <Text style={{ fontSize: 20, textAlign: 'center' }}>Đăng ký</Text>
      <TextInput style={{borderWidth:1, borderColor:'black', borderRadius:5, padding:5,marginTop:30}}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput style={{ borderWidth:1, borderColor:'black', borderRadius:5, padding:5,marginTop:10}}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput style={{borderWidth:1, borderColor:'black', borderRadius:5, padding:5,marginTop:10,marginBottom:30}}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Đăng ký" onPress={handleRegister} />
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, margin: 10, marginTop: 30 }} />
      <Text style={{ textAlign: 'center', marginTop: 15,marginBottom: 10 }}>Bạn đã có tài khoản</Text>
      <Button title="Đăng nhập" onPress={(handleLogin) => { /* Navigate to login screen */ }} />
    </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;