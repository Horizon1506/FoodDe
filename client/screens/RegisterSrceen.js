import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
  };

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>Đăng ký</Text>
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
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Đăng ký" onPress={handleRegister} />
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, margin: 10, marginTop: 30 }} />
      <Text style={{ textAlign: 'center', marginTop: 30 }}>Bạn đã có tài khoản</Text>
      <Button title="Đăng nhập" onPress={() => { /* Navigate to login screen */ }} />
    </View>
  );
};

export default RegisterScreen;