import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

interface State {
   lastLocation: string;
}

class Inputs extends Component<{}, State> {
   state: State = {
      lastLocation: '',
   };

   handleLastLocation = (text: string) => {
      this.setState({ lastLocation: text });
   };

   render() {
      // Example data for detailed options
      const DetailedOptions = [
         { key: 'Notification 1: 20 meters from you' },
         { key: 'Notification 2: 35 meters from you' },
         { key: 'Notification 3: 15 meters from you' },
         { key: 'Notification 4: 57 meters from you' },
      ];

      return (
         <View style={styles.container}>
            {/* Image component for logo */}
            <Image
               source={require('@/assets/images/LIFT_LOGO.png')}
               style={styles.reactLogo}
            />
            <View style={styles.content}>
               {/* Header for Notifications */}
               <Text style={styles.header}>Notifications</Text>

               {/* FlatList to display detailed options */}
               <FlatList
                  data={DetailedOptions}
                  renderItem={({ item }) => (
                     <TouchableOpacity style={styles.notificationButton}>
                        <Text style={styles.notificationButtonText}>{item.key}</Text>
                     </TouchableOpacity>
                  )}
               />
            </View>
         </View>
      );
   }
}

export default Inputs;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
   },
   content: {
      width: '80%',
      alignItems: 'center',
      marginTop: 20,
   },
   reactLogo: {
      height: 178,
      width: 290,
      marginBottom: 20,
   },
   header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#361413',
   },
   notificationButton: {
      backgroundColor: '#f3a042',
      padding: 10,
      marginVertical: 5,
      borderRadius: 20,
      width: '100%',
      alignItems: 'center',
   },
   notificationButtonText: {
      color: 'white',
      fontSize: 16,
   },
});
