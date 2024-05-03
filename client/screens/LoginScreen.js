import React, { useState } from 'react';
import { Button, TextInput, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const dummyData = {
    username: 'admin',
    password: '123',
  };

  const handleLogin = () => {
    if (username === dummyData.username && password === dummyData.password) {
      Alert.alert('Success', 'Đăng nhập thành công!', [
        { text: 'OK', onPress: () => navigation.navigate('Home') },
      ]);
    } else {
      Alert.alert('Error', 'Thông tin đăng nhập không chính xác!');
    }
  };

  return (
    <SafeAreaView className="m-10">
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default LoginScreen;