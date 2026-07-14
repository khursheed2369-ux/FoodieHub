import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';



export default function SettingsScreen() {


  const [notifications, setNotifications] = useState(true);

  const [darkMode, setDarkMode] = useState(false);



  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        Settings
      </Text>



      <View style={styles.option}>


        <Text style={styles.text}>
          Notifications
        </Text>


        <Switch

          value={notifications}

          onValueChange={
            setNotifications
          }

        />


      </View>




      <View style={styles.option}>


        <Text style={styles.text}>
          Dark Mode
        </Text>


        <Switch

          value={darkMode}

          onValueChange={
            setDarkMode
          }

        />


      </View>




      <TouchableOpacity style={styles.option}>


        <Text style={styles.text}>
          About FoodieHub
        </Text>


      </TouchableOpacity>




      <TouchableOpacity style={styles.option}>


        <Text style={styles.text}>
          Privacy Policy
        </Text>


      </TouchableOpacity>



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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },



  option: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },



  text: {
    fontSize: 18,
  },


});