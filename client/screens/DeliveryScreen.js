import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { featured } from '../constants';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';

const DeliveryScreen = () => {

    const restaurant= useSelector(selectRestaurant);
    const navigation = useNavigation();
    return (
        <View className="flex-1">
            
            <Text>Đây là trang thông báo đặt hàng thành công đặt hàng thành công</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default DeliveryScreen;
