import React from 'react';
import {useEffect, useState, useRef} from 'react';

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

const Review = ({navigation, route}) => {
  const {Images} = route.params;
  const {path} = route.params;

  console.log('ye to ha base ka string ', Images);

  const [isImageLoading, setImageLoading] = useState(true);
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
          onPress={() => navigation.replace('Login')}>
          <MaterialIcons name="menu" size={20} color={'black'} />
        </Pressable>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
          Review
        </Text>
        <MaterialIcons name="menu" size={20} color={'transparent'} />
      </View>
      <View>
        {isImageLoading && (
          <ActivityIndicator
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginLeft: -20,
              marginTop: -20,
            }}
            size="large"
            color="#0000ff"
          />
        )}

        <Image
          source={{uri: Images}}
          style={{width: '100%', height: 400, marginTop: 60}}
          onLoad={() => setImageLoading(false)}
          onError={error => {
            console.error('Image loading error:', error);
            setImageLoading(false);
          }}
        />
        <Text
          style={{
            color: '#04A83C',
            fontSize: 34,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          All Good
        </Text>
        <Pressable
          style={{
            backgroundColor: '#0095FF',
            width: '35%',
            borderRadius: 8,
            height: 45,
            marginTop: 20,

            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          onPress={() =>
            navigation.navigate('Capture', {
              Images: null,
            })
          }>
          <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
            START NEW
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Review;
const styles = StyleSheet.create({});
