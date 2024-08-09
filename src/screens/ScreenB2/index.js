import React from 'react';
import { Button, Text, View, TextInput, Image,StyleSheet } from 'react-native';

export default function ScreenB2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen B2</Text>
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
      backgroundColor: '#d0f0c0',
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