import React, { Component } from 'react';
import { View, Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { Icon } from 'react-native-elements';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HeaderOptions = {
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        color: "#fff"            
    }
};

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <View style={styles.drawerHeader}>
            <View style={{flex: 1}}>
                <Image 
                    source={require('./images/logo.png')}
                    style={styles.drawerImage}
                />
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.drawerHeaderText}>
                    Ristorante Con Fusion
                </Text>
            </View>
        </View>
        <DrawerItemList {...props}/>
    </ScrollView>
);

const MenuNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Menu" 
            screenOptions={HeaderOptions}>
            <Stack.Screen 
                name="Menu" 
                component={ Menu } 
                options={
                    ({navigation}) => ({
                        headerLeft: () => (
                            <Icon 
                                name='menu' 
                                size={24}
                                color='white'
                                onPress={() => 
                                    navigation.toggleDrawer()}
                            />
                        )
                    
                    })
                 }
            />
            <Stack.Screen 
                name="Dishdetail" 
                component={ Dishdetail } 
                options={{ headerTitle: "Dish Detail"}} />
        </Stack.Navigator>
    ); 
}

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={HeaderOptions}>
            <Stack.Screen 
                name="Home" 
                component={ Home }
                options={
                    ({navigation}) => ({
                        headerLeft: () => (
                            <Icon 
                                name='menu' 
                                size={24}
                                color='white'
                                onPress={() => 
                                    navigation.toggleDrawer()}
                            />
                        )
                    
                    })
                 }  />
        </Stack.Navigator>
    );
}

const ContactNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Contact Us'
            screenOptions={{HeaderOptions}}>
            <Stack.Screen 
                name="Contact" 
                component={ Contact } 
                options={
                    ({navigation}) => ({
                        headerLeft: () => (
                            <Icon 
                                name='menu' 
                                size={24}
                                color='white'
                                onPress={() => 
                                    navigation.toggleDrawer()}
                            />
                        )
                    
                    })
                 }/>
        </Stack.Navigator>
    );
}

const MenuIcon = (props) => {
    return(
        <Icon 
            name='menu' 
            size={24}
            color='white'
            onPress={() =>
                props.navigation.toggleDrawer()}
        />
    );
}

const AboutNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='About Us'
            screenOptions={HeaderOptions}>
            <Stack.Screen 
                name="About Us" 
                component={ About }
                options={
                    ({navigation}) => ({
                        headerLeft: () => 
                            <MenuIcon navigation={navigation}/>
                    })
                 } />
        </Stack.Navigator>
    );
}
function MainNavigator() {
    return (
        <Drawer.Navigator 
            initialRouteName="Home" 
            drawerStyle={{
                backgroundColor: '#D1C4E9'
            }}
            drawerContent={props => <CustomDrawerContentComponent {...props}/>}
        >
            <Drawer.Screen 
                name="Home" 
                component={HomeNavigator}
                options={{
                    drawerIcon: ({color}) => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            size={24}
                            color={color}
                        />
                    )
                }} 
            />
            <Drawer.Screen 
                name="About Us" 
                component={AboutNavigator}
                options={{
                    drawerIcon: ({color}) => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            size={24}
                            color={color}
                        />
                    )
                }}   
            />
            <Drawer.Screen 
                name="Menu" 
                component={MenuNavigator} 
                options={{
                    drawerIcon: ({color}) => (
                        <Icon
                            name='list'
                            type='font-awesome'
                            size={24}
                            color={color}
                        />
                    )
                }}  
            />
            <Drawer.Screen 
                name="Contact Us" 
                component={ContactNavigator} 
                options={{
                    drawerIcon: ({color}) => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            size={22}
                            color={color}
                        />
                    )
                }}  
            />
        </Drawer.Navigator>
    );
}

class Main extends Component {

    render() {
        return(
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
  });

export default Main;