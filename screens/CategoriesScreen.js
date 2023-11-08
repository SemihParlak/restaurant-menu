import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('FoodOverview', {
        categoryId: itemData.item.id,
      });
    }

    console.log(itemData.item);
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        images={itemData.item.images}
        pressFood={pressHandler}
      />
    );
  }

  return (
    <ImageBackground source={require('../assets/image/backgorund2.jpg')}
      style={{
        width: '100%',
        height: '100%',
      }}
      blurRadius={7}
    >
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
