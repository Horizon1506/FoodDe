import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { featured } from '../constants';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {

    const restaurant= featured.restaurants[0];
    const navigation = useNavigation();
    return (
        <View className='flex-1'>
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                
                className='flex-1'
                mapType='standard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                       
                />
            </MapView>
            <View className="rounded-t-3xl -mt-12 bg-white relative">
                <View className='flex-row justify-between px-5 pt-10'>
                    <View>
                        <Text className="text-lg text-gray-700 font-semibold">
                            Cao Minh Thiện
                        </Text>
                        <Text className='text-3xl  text-gray-700 font-extrabold'>
                            10-20 phút
                        </Text>
                        <Text className="mt-2 text-gray-700 font-semibold">
                            Đơn hàng đang giao đến bạn !!
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    
  });

export default DeliveryScreen;
