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

const Menu = ({navigation}) => {
  const [clr1, setclr1] = useState({
    borderclr: 'white',
    bgclr: 'white',
    txtclr: '#222B45',
    width: 0,
  });

  const [clr2, setclr2] = useState({
    borderclr: 'white',
    bgclr: 'white',
    txtclr: '#222B45',
    width: 0,
  });

  const [clr3, setclr3] = useState({
    borderclr: 'white',
    bgclr: 'white',
    txtclr: '#222B45',
    width: 0,
  });

  const [clr4, setclr4] = useState({
    borderclr: 'white',
    bgclr: 'white',
    txtclr: '#222B45',
    width: 0,
  });

  const [Img, setImg] = useState(null);

  const Img1 = async () => {
    setImg(
      'https://thevalleygroup.com/wp-content/uploads/2022/12/beats_12.jpg',
    );

    setclr1({
      borderclr: '#3366FF',
      bgclr: 'lightblue',
      txtclr: '#3366FF',
      width: 3,
    });

    setclr2({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });

    setclr3({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });

    setclr4({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });

    console.log('image passing');
  };

  const Img2 = () => {
    setImg('https://sc01.alicdn.com/kf/H52af1a2d7b664d33976828c3e21dcad2F.jpg');
    setclr2({
      borderclr: '#3366FF',
      bgclr: 'lightblue',
      txtclr: '#3366FF',
      width: 3,
    });

    setclr3({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });

    setclr4({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });

    setclr1({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });
  };

  const Img3 = () => {
    setImg(
      'https://www.onqsolutions.com/wp-content/uploads/2021/03/onQ_fred_meyer_display_case_study.jpg',
    );
    setclr3({
      borderclr: '#3366FF',
      bgclr: 'lightblue',
      txtclr: '#3366FF',
      width: 3,
    });

    setclr4({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });

    setclr1({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });

    setclr2({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });
  };

  const Img4 = () => {
    setImg(
      'https://boltgroup.com/wp-content/uploads/2023/03/elements-casestudy-displayoptions5-1024x611.jpg',
    );
    setclr4({
      borderclr: '#3366FF',
      bgclr: 'lightblue',
      txtclr: '#3366FF',
      width: 3,
    });

    setclr1({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });

    setclr2({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });
    setclr3({
      borderclr: 'white',
      bgclr: 'white',
      txtclr: '#222B45',
      width: 0,
    });
  };

  const forward = () => {
    navigation.navigate('Capture', {
      Images: Img,
    });
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 12,
        }}>
        <Pressable style={{height: 20, width: 20}}>
          <MaterialIcons name="close" size={20} color={'white'} />
        </Pressable>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
          Capture
        </Text>
        <MaterialIcons name="menu" size={20} color={'transparent'} />
      </View>

      <View style={{padding: 12}}>
        <Pressable
          style={{
            padding: 10,
            borderLeftWidth: clr1.width,
            borderColor: clr1.borderclr,
          }}
          onPress={Img1}>
          <Text
            style={{color: clr1.txtclr, fontWeight: 'normal', fontSize: 16}}>
            Image Option 1
          </Text>
        </Pressable>

        <Pressable
          style={{
            padding: 10,
            borderLeftWidth: clr2.width,
            borderColor: clr2.borderclr,
          }}
          onPress={Img2}>
          <Text
            style={{color: clr2.txtclr, fontWeight: 'normal', fontSize: 16}}>
            Image Option 2
          </Text>
        </Pressable>

        <Pressable
          style={{
            padding: 10,
            borderLeftWidth: clr3.width,
            borderColor: clr3.borderclr,
          }}
          onPress={Img3}>
          <Text
            style={{color: clr3.txtclr, fontWeight: 'normal', fontSize: 16}}>
            Image Option 3
          </Text>
        </Pressable>

        <Pressable
          style={{
            padding: 10,
            borderLeftWidth: clr4.width,
            borderColor: clr4.borderclr,
          }}
          onPress={Img4}>
          <Text
            style={{color: clr4.txtclr, fontWeight: 'normal', fontSize: 16}}>
            Image Option 4
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={{
          backgroundColor: '#0095FF',
          alignSelf: 'center',
          padding: 12,
          borderRadius: 12,
          bottom: 100,
          position: 'absolute',
        }}
        onPress={forward}>
        <Text style={{color: 'white'}}>Forward Image</Text>
      </Pressable>
    </View>
  );
};

export default Menu;
const styles = StyleSheet.create({});
