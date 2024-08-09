import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importa las pantallas desde la carpeta de screens
import ScreenA1 from './src/screens/ScreenA1';
import ScreenA2 from './src/screens/ScreenA2';
import ScreenB1 from './src/screens/ScreenB1';
import ScreenB2 from './src/screens/ScreenB2';
import ScreenC1 from './src/screens/ScreenC1';
import ScreenC2 from './src/screens/ScreenC2';
import ScreenD1 from './src/screens/ScreenD1';
import ScreenD2 from './src/screens/ScreenD2';

// Crea los navegadores de pila para cada grupo de pantallas
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();

function StackANavigator() {
    return (
        <StackA.Navigator initialRouteName='ScreenA1'>
            <StackA.Screen name="ScreenA1" component={ScreenA1} />
            <StackA.Screen name="ScreenA2" component={ScreenA2} />
        </StackA.Navigator>
    );
}

function StackBNavigator() {
    return (
        <StackB.Navigator initialRouteName='ScreenB1'>
            <StackB.Screen name="ScreenB1" component={ScreenB1} />
            <StackB.Screen name="ScreenB2" component={ScreenB2} />
        </StackB.Navigator>
    );
}

function StackCNavigator() {
    return (
        <StackC.Navigator initialRouteName='ScreenC1'>
            <StackC.Screen name="ScreenC1" component={ScreenC1} />
            <StackC.Screen name="ScreenC2" component={ScreenC2} />
        </StackC.Navigator>
    );
}

function StackDNavigator() {
    return (
        <StackD.Navigator initialRouteName='ScreenD1'>
            <StackD.Screen name="ScreenD1" component={ScreenD1} />
            <StackD.Screen name="ScreenD2" component={ScreenD2} />
        </StackD.Navigator>
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
                    } else if (route.name === 'Settings') {
                        iconName = 'settings-outline'; // Ícono para Settings
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={StackANavigator} />
            <Tab.Screen name="Search" component={StackBNavigator} />
            <Tab.Screen name="Notifications" component={StackCNavigator} />
            <Tab.Screen name="Settings" component={StackDNavigator} />
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
