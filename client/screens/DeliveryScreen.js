import React from 'react';
import { StyleSheet, View ,Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { featured } from '../constants';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';


const DeliveryScreen = () => {

const restaurant= useSelector(selectRestaurant);
    
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
                            Đang giao hàng
                        </Text>
                        <Text className='text-3xl  text-gray-700 font-extrabold'>
                            10-20 phút
                        </Text>
                        <Text className="mt-2 text-gray-700 font-semibold">
                            Đơn hàng đang giao đến bạn !!
                        </Text>
                    </View>
                    <Image className="w-24 h-24 " source={require('../assets/images/deliveryCar.gif')}/>
                </View>
                <View
                    style={{backgroundColor: 'orange'}}
                    className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2 "
                >
                    <View className="p-1 rounded-full"
                        style={{backgroundColor:'rgba(255,255,255,0.4)'}}>
                        <Image className="h-16 w-16  rounded-full"/>
                    </View>
                    <View className="flex-1 ml-3">
                        <Text className="text-lg font-bold text-white">
                            Cao Minh Thiện
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                            <MaterialIcons name="call" size={24} color="green" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    
  });

export default DeliveryScreen;
