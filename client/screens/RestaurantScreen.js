import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';
import { setRestaurant } from '../slices/restaurantSlice';


const RestaurantScreen = () => {
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    // console.log("Restaurant: ", item);
    const dispatch = useDispatch();
    useEffect(() => {
        if(item && item.id){
            dispatch(setRestaurant({...item}))
        }
    }, []);
    return (
        <View>
            <CartIcon/>
            <StatusBar style="light" />
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={item.image}/>
                    <TouchableOpacity
                        onPress={()=> navigation.goBack()}
                        className="absolute top-14 left-4 bg-gray-50 rounded-full shadow">
                        <Ionicons name="arrow-back-circle" size={40} color="black" />
                    </TouchableOpacity>
                </View>
                <View
                    style={{borderTopLeftRadius:40, borderTopRightRadius:40}}
                    className="bg-white -mt-12 pt-6"
                >
                    <View className="px-5">
                        <Text className="text-3xl font-bold">{item.name}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <Ionicons name="star" size={20} color="#FFD700" />
                                <Text className="text-xs">
                                    <Text className="text-green-700">{item.stars}</Text>
                                    <Text className="text-gray-700">
                                        ({item.reviews} reviews) . <Text className="font-bold">{item.category}</Text>
                                    </Text>
                            </Text>
                        </View>
                        <Text className="text-gray-500 mt-2">{item.description}</Text>
                    </View>
                </View>
                <View className="pb-36 bg-white">
                    <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                    {/* dishes */}
                    {
                        item.dishes.map((dish, index) => <DishRow item={{...dish}} key={index}/>)
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default RestaurantScreen;
