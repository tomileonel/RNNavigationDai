import React from 'react';
import { Text, View, Image } from 'react-native';

export default function ScreenA2({ route }) {
  const { name, phone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {name}</Text>
      <Text style={styles.text}>Teléfono: {phone}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffaaaa',
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