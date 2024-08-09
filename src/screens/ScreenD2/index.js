import React from 'react';
import { Button, Text, View, TextInput, Image,StyleSheet } from 'react-native';

export default function ScreenD1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen D2</Text>
      <Button
        title="Ir a D1"
        onPress={() => navigation.navigate('ScreenD1')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e0f7fa',
    },
    text: {
      fontSize: 20,
      color: '#000',
    },
    image: {
      width: 100,
      height: 100,
      marginTop: 20,
    },
  });