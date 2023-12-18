import {LogBox, Platform, PermissionsAndroid} from 'react-native';
import {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreLogs([{level: 'error'}]);
LogBox.ignoreAllLogs();

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Menu from './Screens/Menu';
import Login from './Screens/Login';

import Capture from './Screens/Capture';
import Review from './Screens/Review';
import Wait from './Screens/Wait';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    const checkCameraPermission = async () => {
      try {
        let permissionStatus;

        if (Platform.OS === 'android') {
          permissionStatus = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.CAMERA,
          );

          if (permissionStatus !== PermissionsAndroid.RESULTS.GRANTED) {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: 'Camera Permission',
                message: 'This app needs camera permission to take pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );

            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
              console.log('Camera permission denied');
              return;
            }
          }
        } else {
          permissionStatus = await check(PERMISSIONS.IOS.CAMERA);

          if (permissionStatus !== RESULTS.GRANTED) {
            const result = await request(PERMISSIONS.IOS.CAMERA);

            if (result !== RESULTS.GRANTED) {
              console.log('Camera permission denied');
              return;
            }
          }
        }

        console.log('Camera permission granted');
        // Your code to use the camera can go here
      } catch (error) {
        console.error('Error checking/requesting camera permission:', error);
      }
    };

    checkCameraPermission();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Capture" component={Capture} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Wait" component={Wait} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
