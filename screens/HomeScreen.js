import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';


import recipes from '../data/recipes.js';

import { fetchRecipes } from '../services/api';



export default function HomeScreen({ navigation }) {


  const [apiRecipes, setApiRecipes] = useState([]);



  useEffect(() => {

    loadApiRecipes();

  }, []);




  const loadApiRecipes = async () => {

    const data = await fetchRecipes();

    setApiRecipes(data);

  };




  const displayRecipes =
    apiRecipes.length > 0
      ? apiRecipes
      : recipes;




  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        Welcome to FoodieHub
      </Text>


      <Text style={styles.subtitle}>
        Discover Delicious Recipes 🍽️
      </Text>




      <FlatList

        data={displayRecipes}


        keyExtractor={(item, index) =>
          item.id || item.idMeal || index.toString()
        }



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

              {
                item.name ||
                item.strMeal
              }

            </Text>



            <Text>

              Category:

              {
                item.category ||
                item.strCategory ||
                "Food"

              }

            </Text>




            <Text>

              Cooking Time:

              {
                item.time ||
                "Not available"

              }

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