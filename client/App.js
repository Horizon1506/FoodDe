import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairing from './screens/OrderPrepairing';
import Delivery from './screens/DeliveryScreen';
import React, { useState } from 'react';



//redux
import { Provider } from 'react-redux';
import { store } from './store';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterSrceen';
import SplashScreen from './screens/SplashScreen';


const Stack = createNativeStackNavigator();



export default function App() {

  

  return (
    // provier redux
      <Provider store={store}>
        
        {/*navigation  */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ 
            headerShown: false }
          }>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Cart" options={{presentation:"modal"}} component={CartScreen} />
            <Stack.Screen name="OrderPrepairing" options={{presentation:"fullScreenModal"}} component={OrderPrepairing} />
            <Stack.Screen name="Delivery" options={{presentation:"fullScreenModal"}} component={Delivery} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
