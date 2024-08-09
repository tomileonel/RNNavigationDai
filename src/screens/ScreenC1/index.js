import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import styles from '../styles/screenC1Styles';

export default function ScreenC1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen C1</Text>
      <Button
        title="Ir a C2"
        onPress={() => navigation.navigate('ScreenC2')}
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