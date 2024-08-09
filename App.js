import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

// Pantalla Home
function HomeScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Welcome to Home Screen!</Text>
        </View>
    );
}

// Pantalla Search
function SearchScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Search Screen</Text>
        </View>
    );
}

// Pantalla Notifications
function NotificationsScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Notifications Screen</Text>
        </View>
    );
}

// Pantalla Profile
function ProfileScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Profile Screen</Text>
        </View>
    );
}

// Configuración del BottomTabNavigator
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline'; // Ícono para Home
                    } else if (route.name === 'Search') {
                        iconName = 'search-outline'; // Ícono para Search
                    } else if (route.name === 'Notifications') {
                        iconName = 'notifications-outline'; // Ícono para Notifications
                    } else if (route.name === 'Profile') {
                        iconName = 'person-outline'; // Ícono para Profile
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

// Estructura principal de la aplicación
export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

// Estilos
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8ff',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
});
