import React from 'react';
import { StyleSheet, View ,Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { categories } from '../constants';

const Categories = () => {

    //active category
    const[activeCategory, setActiveCategory] = useState(null);
    return (
        <View className="mt-4">
            {/* categories */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
            >
                {
                    categories.map((category, index) => {
                        let isActive = activeCategory === category.id;
                        let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
                        let textClass = isActive ? 'font-semibold text-gray-600' : 'text-gray-500';
                        return(
                            <View key={index} className="flex justify-center items-center mr-6">
                                <TouchableOpacity

                                    onPress={() => setActiveCategory(category.id)}

                                    className={"p-3 rounded-full shadow bg-gray-200 "+btnClass}>
                                    <Image source={category.image} className="w-12 h-12"/>
                                    
                                </TouchableOpacity>

                                <Text className={"text-center text-sm "+textClass}>{category.name}</Text>
                            </View>
                            )
                        })
                        
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Categories;
