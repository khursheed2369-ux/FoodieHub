import * as Notifications from 'expo-notifications';



export async function setupNotifications() {


  const { status } =
    await Notifications.requestPermissionsAsync();



  if (status !== 'granted') {

    console.log(
      'Notification permission denied'
    );

    return;

  }



  console.log(
    'Notifications enabled'
  );

}




export async function sendTestNotification() {


  await Notifications.scheduleNotificationAsync({

    content: {

      title: 'FoodieHub 🍽️',

      body: 'New recipes are waiting for you!',

    },


    trigger: null,

  });


}