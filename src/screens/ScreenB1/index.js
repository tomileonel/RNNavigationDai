import React from 'react';
import { Button, Text, View, Image } from 'react-native';

export default function ScreenB1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen B1</Text>
      <Button
        title="Ir a B2"
        onPress={() => navigation.navigate('ScreenB2')}
      />
      <Image
        source={{ uri: 'https://www.recetasnestle.com.ar/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/35f1fb00fc30fb33fa09a0528c87a2c2.jpg?itok=je0vGI5p' }} 
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