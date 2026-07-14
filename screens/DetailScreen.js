import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DetailScreen({ route }) {

  const { recipe } = route.params;

  const [saved, setSaved] = useState(false);


  const addToFavorites = async () => {

    try {

      console.log("Favorite button pressed");


      const oldData = await AsyncStorage.getItem('favorites');


      let favorites = oldData
        ? JSON.parse(oldData)
        : [];


      const alreadySaved = favorites.some(
        item => item.id === recipe.id
      );


      if (alreadySaved) {

        setSaved(true);

        console.log("Already saved");

        return;

      }


      favorites.push(recipe);


      await AsyncStorage.setItem(
        'favorites',
        JSON.stringify(favorites)
      );


      setSaved(true);


      console.log("Saved successfully");


    } catch (error) {

      console.log("Save error:", error);

    }

  };


  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        {recipe.name}
      </Text>


      <Text style={styles.info}>
        Category: {recipe.category}
      </Text>


      <Text style={styles.info}>
        Cooking Time: {recipe.time}
      </Text>


      <Text style={styles.description}>
        This is a delicious {recipe.name}.
        Enjoy preparing this recipe with FoodieHub!
      </Text>


      <TouchableOpacity
        style={styles.button}
        onPress={addToFavorites}
      >

        <Text style={styles.buttonText}>
          {saved
            ? '❤️ Added to Favorites'
            : '🤍 Add to Favorites'}
        </Text>

      </TouchableOpacity>


    </View>

  );

}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F5F5F5',
  },


  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },


  info: {
    fontSize: 18,
    marginBottom: 10,
  },


  description: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },


  button: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },


  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});