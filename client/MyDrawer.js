import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import Favourite from './screens/Favourite';

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Trang chủ" component={HomeScreen} />
            <Drawer.Screen name="Yêu thích" component={Favourite} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({})

export default MyDrawer;
