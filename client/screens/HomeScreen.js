import { StatusBar } from 'expo-status-bar';
import React, { act } from 'react';
import { StyleSheet, View,Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { themeColor } from '../theme';
import Categories from '../components/categories';
import { categories, featured } from '../constants';
import FeatureRow from '../components/featureRow';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favourite from './Favourite';
import LoginScreen from './LoginScreen';

import { useState } from 'react';


// Drawer
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    const navigate = useNavigation();
    
    // const {username} = route.params;
    
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Trang chủ" component={HomeScreen} />
            <Drawer.Screen name="Yêu thích" component={Favourite} />
            <Drawer.Screen name="Đăng nhập" component={LoginScreen} />
            {/* <Drawer.Screen name="Welcome" options={{ drawerLabel: `Welcome` }} component={HomeScreen} /> */}
        </Drawer.Navigator>
    );
}

// HomeScreen
const HomeScreen = () => {

    const navigate = useNavigation();

    // Define state for active category
    const [activeCategory, setActiveCategory] = useState(1);
    
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
                
                <TouchableOpacity
                    onPress={()=>navigate.openDrawer()}
                >
                    <View style={{backgroundColor:themeColor.bgColor(1)}} className="p-3  rounded-full">
                        <Ionicons name="options" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Main */}
            
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom: 80 }}>
                
                {/* categories */}
                <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                

                {/* feature */}
                <View className="mt-5">
                    {
                        featured
                        .filter(item => item.id === activeCategory)
                        .map((item, index) => {
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

export default MyDrawer;
