import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { themeColor } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const DishRow = ({item}) => {
    return (
        <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
            <Image className="rounder-3xl" style={{height:100, width:100}}
                source={item.image}/>
            <View className="flex flex-1 space-y-3">
                <View className="pl-3">
                    <Text className="text-lg font-bold">{item.name}</Text>
                    <Text className="text-gray-500">{item.description}</Text>
                </View>
                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-lg font-bold text-right">${item.price}</Text>
                    <View className="flex-row items-center">
                        {/* trừ */}
                        <TouchableOpacity
                            className="p-1 rounded-full"
                            style={{backgroundColor: themeColor.bgColor(1)}}>
                            <AntDesign name="minus" size={24} color="black" />
                        </TouchableOpacity>

                        <Text className="px-3">{2}</Text>

                        {/* cộng */}
                        <TouchableOpacity
                            className="p-1 rounded-full"
                            style={{backgroundColor: themeColor.bgColor(1)}}>
                            <Ionicons name="add" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default DishRow;
