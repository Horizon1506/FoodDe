import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { featured } from '../constants';

const DeliveryScreen = () => {

    const restaurant= featured.restaurants[0];
    const navigation = useNavigation();
    return (
        <View className="flex-1">
            {/*bản đồ*/}
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default DeliveryScreen;
