import React from 'react';
import { Button, Text, View, TextInput, Image,StyleSheet } from 'react-native';

export default function ScreenC2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen C2</Text>
      <Image
        source={{ uri: 'data:image/jpeg;base64,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' }} 
        style={styles.image}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#cce5ff',
    },
    text: {
      fontSize: 20,
      color: '#333',
    },
    image: {
      width: 100,
      height: 100,
      marginTop: 20,
    },
  });