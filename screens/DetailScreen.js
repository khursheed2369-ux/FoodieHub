import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default function DetailScreen({ route }) {

  const { recipe } = route.params;


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

});