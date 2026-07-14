import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default function FavoritesScreen() {

  const [favorites, setFavorites] = useState([]);



  useEffect(() => {

    loadFavorites();

  }, []);



  const loadFavorites = async () => {

    try {

      const data = await AsyncStorage.getItem('favorites');


      if (data) {
        setFavorites(JSON.parse(data));
      }


    } catch (error) {

      console.log(error);

    }

  };



  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        ❤️ My Favorites
      </Text>


      {
        favorites.length === 0 ? (

          <Text style={styles.empty}>
            No favorite recipes yet
          </Text>

        ) : (

          <FlatList

            data={favorites}

            keyExtractor={(item) => item.id}

            renderItem={({ item }) => (

              <View style={styles.card}>

                <Text style={styles.name}>
                  {item.name}
                </Text>


                <Text>
                  Category: {item.category}
                </Text>


                <Text>
                  Time: {item.time}
                </Text>


              </View>

            )}

          />

        )
      }


    </View>

  );

}




const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },


  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },


  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },


  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },


  empty: {
    fontSize: 18,
    color: '#777',
  },


});