import React, { useEffect } from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Image, ScrollView,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { featured } from '../constants';
import { themeColor } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { removeFromCart, selectCartItem, selectCartTotal } from '../slices/cartSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CartScreen = () => {
    
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const cartItems = useSelector(selectCartItem);
    const cartTotal = useSelector(selectCartTotal);
    const deliveryFee = 2;

    const [note, setNote] = useState('');

    const dispatch = useDispatch();

    const [groupedItems, setGroupedItems] = useState({});
    useEffect(() => {
        const items = cartItems.reduce((group, item)=>{
            if(group[item.id]){
                group[item.id].push(item);
            }else{
                group[item.id]= [item];
            }
            return group;
        },{})
        setGroupedItems(items);
    },[cartItems])

    return (
        <View className="bg-white flex-1 top-10">
            {/* nút quay về */}
            <View className="relative py-4" style={styles.shadow}> 
                <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                    style={{backgroundColor: themeColor.bgColor(1)}}
                    className="absolute z-10 rounded-full p-1 shadow top-3 left-2"
                >
                <Ionicons name="arrow-back-circle" size={40} color="white" />
                </TouchableOpacity>
                <View>
                    <Text className="text-center text-2xl font-bold">Your Cart</Text>
                    <Text className="text-center text-gray-500">{restaurant.name}</Text>
                </View>
                
                
                {/* delivery time */}
                <View style={{backgroundColor: themeColor.bgColor(0.2)}}
                    className="flex-row px-4 items-center">
                        <Image source={require('../assets/images/bikeguy.jpg')}
                        className="w-20 h-20 rounded-full"/>
                        <Text className="flex-1 pl-4">Giao hàng trong 20-30 phút</Text>
                        <TouchableOpacity>
                            <Text className="font-bold" style={{color: themeColor.text}}>
                                Thay đổi
                            </Text>
                        </TouchableOpacity>
                </View>
                {/* ghi chú */}
                <Text>Ghi chú:</Text>
                <TextInput
                value={note}
                onChangeText={setNote}
                placeholder="Thêm ghi chú..."
                style={styles.input}
                />
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 100,
                    }}
                    className="bg-white pt-5">
                    {
                        Object.entries(groupedItems).map(([key, items]) =>{
                            let dish = items[0];
                            return (
                                <View key={key}
                                    className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl  mb-3" style={styles.shadow}>
                                        <Text className="font-bold" style={{color: themeColor.text}}>
                                            {items.length} x
                                        </Text>
                                        <Image source={dish.image} className="w-14 h-14 rounded-full"/>
                                        <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                        <Text className="font-semibold text-base">${dish.price}</Text>

                                        {/* trừ */}
                                        <TouchableOpacity
                                            onPress={()=>dispatch(removeFromCart({id: dish.id}))}
                                            className="p-1 rounded-full"
                                            style={{backgroundColor: themeColor.bgColor(1)}}>
                                            <AntDesign name="minus" size={24} color="white" />
                                        </TouchableOpacity>

                                        
                                </View>
                            )
                        })
                    }
                </ScrollView>
                {/* Tổng tiền */}
                <View style={{backgroundColor: themeColor.bgColor(0.2)}} className="p-6 px-8 rounded-t-3xl space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700">Thành tiền:</Text>
                        <Text className="text-gray-700">${cartTotal}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700">Phí ship:</Text>
                        <Text className="text-gray-700">${deliveryFee}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700 font-extrabold">Tổng tiền</Text>
                        <Text className="text-gray-700 font-extrabold">${deliveryFee+cartTotal}</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('OrderPrepairing')}
                            style={{backgroundColor: themeColor.bgColor(1)}}
                            className="p-3 rounded-full"
                        >
                            <Text className="text-white text-center font-bold text-lg">
                                Đặt Hàng
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    }
  });

export default CartScreen;
