import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import React from 'react';

export default function CategoryGrid({ title, color, pressFood, images }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressFood}
      >
        <View style={[styles.insideView /*, { backgroundColor: color }*/]}>
            <ImageBackground source={images} style={styles.imagesBackground}
              blurRadius={2.1}
              borderTopLeftRadius={24}
              borderTopRightRadius={24}>
            </ImageBackground>
          <Text style={styles.title}>{title}</Text>
        </View>

      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex:1,
    height: 150,
    margin: 15,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
  },
  insideView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    fontStyle: 'italic',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    bottom: 10,
  },
  imagesBackground: {
    width: '100%',
    height: '90%',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
