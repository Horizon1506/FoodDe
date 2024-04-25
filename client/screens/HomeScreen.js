import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';
import { themeColor } from '../theme';
import Categories from '../components/categories';
import { featured } from '../constants';
import FeatureRow from '../components/featureRow';


const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white ">
            <StatusBar barStyle="dark-content" />

            {/* Thanh tìm kiếm */}
            <View className="flex-row items-center space-x-2 px-4 pb-2 pt-2 ">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Ionicons name="search" size={24} color="gray" />
                        <TextInput placeholder='Tìm kiếm' className="nl-2 flex-1"/>
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Ionicons name="map" size={24} color="gray" />
                    </View>
                </View>
                <View style={{backgroundColor:themeColor.bgColor(1)}} className="p-3  rounded-full">
                    <Ionicons name="options" size={24} color="white" />
                </View>
            </View>

            {/* Main */}
            
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom: 80 }}>
                
                {/* categories */}
                <Categories/>
                

                {/* feature */}
                <View className="mt-5">
                    {
                        [featured,featured,featured].map((item, index) => {
                            return(
                                <FeatureRow
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
