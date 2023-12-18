import React from 'react';
import {useEffect, useState} from 'react';

import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Wait = ({navigation, route}) => {
  const {Images} = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);

      
        navigation.navigate('Capture', {
          Images: Images,
        }); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 12,
        }}>
        <Pressable
          style={{height: 20, width: 20}}
          onPress={() => navigation.replace('Menu')}>
          <MaterialIcons name="menu" size={20} color={'black'} />
        </Pressable>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
          Capture
        </Text>
        <MaterialIcons name="menu" size={20} color={'transparent'} />
      </View>
      {loading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 200,
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{color: 'red', fontSize: 15, alignSelf: 'center'}}>
            Starting camera, please wait...
          </Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Wait;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ff5400',
  },
  checkboxContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    height: '24%',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  modalBackground: {
    flex: 1,
    width: '100%',
    // height:180,
    borderRadius: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  checkbox1: {
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 35,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'blue',
    borderRadius: 24,
    // marginRight: 10,
  },
  checkbox: {
    width: 20,

    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 20,

    borderWidth: 2,
    borderColor: '#C5CEE0',
    borderRadius: 4,
    // marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  checked: {
    backgroundColor: 'white',
  },
});
