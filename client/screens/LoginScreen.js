import React, { useState } from 'react';
import { Button, TextInput, Alert, SafeAreaView,Image,Text,View } from 'react-native';
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
      <TextInput style={{borderWidth: 1, borderColor: 'black', marginBottom: 10,padding: 10, borderRadius: 5,
       fontSize: 20, textAlign: 'center'}}
        
       placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput style={{borderWidth: 1, borderColor: 'black', marginBottom: 10,padding: 10, borderRadius: 5,
       fontSize: 20, textAlign: 'center'}}
        
       placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,marginTop:30 }} />
      <Text style={{textAlign:'center',marginTop:30}}>Bạn chưa có tài khoản</Text>
      <Button title="Đăng Kí" onPress={handleRegister}/>
      {/* Thêm nút đăng kí vào  */}
      
    </SafeAreaView>
  );
};

export default LoginScreen;