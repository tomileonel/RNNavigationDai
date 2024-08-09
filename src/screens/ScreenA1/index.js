import React from 'react';
import { Button, Text, View, TextInput, Image } from 'react-native';

export default function ScreenA1({ navigation }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen A1</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
      />
      <Button
        title="Ir a A2"
        onPress={() => navigation.navigate('ScreenA2', { name, phone })}
      />

    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffdddd',
    },
    text: {
      fontSize: 20,
      color: '#333',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      width: '80%',
      paddingHorizontal: 8,
    },
    image: {
      width: 100,
      height: 100,
      marginTop: 20,
    },
  });