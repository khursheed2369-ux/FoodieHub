import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';


import recipes from '../data/recipes.js';



export default function HomeScreen({ navigation }) {


  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        Welcome to FoodieHub
      </Text>


      <Text style={styles.subtitle}>
        Discover Delicious Recipes 🍽️
      </Text>



      <FlatList

        data={recipes}

        keyExtractor={(item) => item.id}


        renderItem={({ item }) => (

          <TouchableOpacity

            style={styles.card}

            onPress={() =>
              navigation.navigate(
                'Detail',
                {
                  recipe: item
                }
              )
            }

          >

            <Text style={styles.recipeName}>
              {item.name}
            </Text>


            <Text>
              Category: {item.category}
            </Text>


            <Text>
              Cooking Time: {item.time}
            </Text>


          </TouchableOpacity>

        )}

      />


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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },


  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },


  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },


  recipeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },


});