import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderPrepairing = () => {

    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            //dịch chuyển đến trang delivery
            navigation.navigate('Delivery');
        }, 3000);
    },[])
    return (
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80"/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default OrderPrepairing;
