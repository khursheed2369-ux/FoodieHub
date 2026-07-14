import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const recipes = [
  {
    id: '1',
    name: 'Pasta Primavera',
    category: 'Italian',
    time: '30 mins',
  },
  {
    id: '2',
    name: 'Chicken Curry',
    category: 'Indian',
    time: '45 mins',
  },
  {
    id: '3',
    name: 'Vegetable Salad',
    category: 'Healthy',
    time: '15 mins',
  },
  {
    id: '4',
    name: 'Chocolate Cake',
    category: 'Dessert',
    time: '60 mins',
  },
];


export default function HomeScreen({ navigation }) {

  const renderRecipe = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detail', {
        recipe: item,
      })}
    >

      <Text style={styles.recipeName}>
        {item.name}
      </Text>

      <Text style={styles.category}>
        Category: {item.category}
      </Text>

      <Text style={styles.time}>
        Cooking Time: {item.time}
      </Text>

    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        🍲 FoodieHub Recipes
      </Text>


      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id}
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },


  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },


  recipeName: {
    fontSize: 20,
    fontWeight: 'bold',
  },


  category: {
    marginTop: 8,
    color: '#555',
  },


  time: {
    marginTop: 5,
    color: '#777',
  },

});