import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Importa los componentes de las pantallas
import ScreenA1 from './src/screens/ScreenA1';
import ScreenA2 from './src/screens/ScreenA2';
import ScreenB1 from './src/screens/ScreenB1';
import ScreenB2 from './src/screens/ScreenB2';
import ScreenC1 from './src/screens/ScreenC1';
import ScreenC2 from './src/screens/ScreenC2';
import ScreenD1 from './src/screens/ScreenD1';
import ScreenD2 from './src/screens/ScreenD2';

// Crea los Stack Navigators
const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="ScreenD1" component={ScreenD1} />
      <StackD.Screen name="ScreenD2" component={ScreenD2} />
    </StackD.Navigator>
  );
}

// Crea el Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Search':
                iconName = 'search';
                break;
              case 'Profile':
                iconName = 'person';
                break;
              case 'Settings':
                iconName = 'settings';
                break;
              default:
                iconName = 'home';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={StackANavigator} />
        <Tab.Screen name="Search" component={StackBNavigator} />
        <Tab.Screen name="Profile" component={StackCNavigator} />
        <Tab.Screen name="Settings" component={StackDNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
