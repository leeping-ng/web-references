import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const MenuNavigator = () => {
  return (
    <Stack.Navigator 
        initialRouteName="Menu" 
        screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Dishdetail" 
            component={Dishdetail} options={{ headerTitle: "Dish Detail"}} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}>
            <Stack.Screen name="Home" options={{ title: "Home" }} component={Home} />
        </Stack.Navigator>
    );
  };

class Main extends Component {

    render() {
        return(
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeNavigator} />
                    <Drawer.Screen name="Menu" component={MenuNavigator} />
                </Drawer.Navigator>
            </NavigationContainer>
            // <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            //     <MenuNavigator />
            // </View>
        );
    }

}

export default Main;