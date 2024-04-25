import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { themeColor } from '../theme';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({item}) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback 
            onPress={()=> navigation.navigate('Restaurant',{...item})}>
            <View  className="mr-6 mb-6 bg-white rounded-3xl" style={styles.shadow}>
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image}/>
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Ionicons name="star" size={20} color="#FFD700" />
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.stars}</Text>
                            <Text className="text-gray-700">
                                ({item.reviews} reviews) . <Text className="font-bold">{item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                </View>
                
            </View>
            
        </TouchableWithoutFeedback>
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

export default RestaurantCard;
