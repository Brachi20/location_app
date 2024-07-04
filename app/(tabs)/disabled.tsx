import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import * as Location from 'expo-location';

const Inputs: React.FC = () => {
   const [location, setLocation] = useState<string>('');
   const [lastLocation, setLastLocation] = useState<string>('');
   const [helpRequest, setHelpRequest] = useState<string>('');
   const [errorMsg, setErrorMsg] = useState<string>('');

   useEffect(() => {
      (async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
         }

         let location = await Location.getCurrentPositionAsync({});
         setLocation(`${location.coords.latitude}, ${location.coords.longitude}`);
      })();
   }, []);

   const handleLastLocation = (text: string) => {
      setLastLocation(text);
   };

   const handleHelpRequest = (text: string) => {
      setHelpRequest(text);
   };

   const login = () => {
      alert('Location: ' + location + '\nLast Location: ' + lastLocation + '\nHow can I help: ' + helpRequest);
   };

   const emergencyAlert = () => {
      alert('Emergency Button Pressed!');
   };

   return (
      <View style={styles.container}>
         {/* Image component for logo */}
         <Image
            source={require('@/assets/images/LIFT_LOGO.png')}
            style={styles.reactLogo}
         />
         <View style={styles.content}>
            <TextInput
               style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="My Location"
               placeholderTextColor="#361413"
               autoCapitalize="none"
               value={location}
               editable={false}
            />
            <TextInput
               style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Last Location"
               placeholderTextColor="#361413"
               autoCapitalize="none"
               onChangeText={handleLastLocation}
            />
            <TextInput
               style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="I need help in..."
               placeholderTextColor="#361413"
               autoCapitalize="none"
               onChangeText={handleHelpRequest}
            />
            <TouchableOpacity style={styles.submitButton} onPress={login}>
               <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.emergencyButton} onPress={emergencyAlert}>
               <Text style={styles.emergencyButtonText}> Emergency </Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

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
   input: {
      marginVertical: 10,
      height: 40,
      borderColor: '#f3a042',
      borderWidth: 1,
      borderRadius: 20,
      width: '100%',
      paddingHorizontal: 10,
   },
   submitButton: {
      backgroundColor: '#f3a042',
      padding: 10,
      marginVertical: 10,
      borderRadius: 20,
      width: '100%',
      alignItems: 'center',
   },
   submitButtonText: {
      color: 'white',
      fontSize: 16,
   },
   emergencyButton: {
      backgroundColor: 'red',
      padding: 10,
      marginVertical: 10,
      borderRadius: 20,
      width: '100%',
      alignItems: 'center',
   },
   emergencyButtonText: {
      color: 'white',
      fontSize: 16,
   },
   reactLogo: {
      height: 178,
      width: 290,
      marginBottom: 20,
   },
});
