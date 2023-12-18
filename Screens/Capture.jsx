import React from 'react';
import {useEffect, useState, useRef, useCallback} from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {
  CameraDevice,
  useCameraDevices,
  Camera,
  useCameraDevice,
} from 'react-native-vision-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNFS from 'react-native-fs';

const Capture = ({navigation, route}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getPermission() {
      const newcamerapermission = await Camera.requestCameraPermission();
      console.log(newcamerapermission);
    }
    getPermission();
  }, []);

  const camera = useRef(null);
  const [isActive, serisActive] = useState(true);
  const [isCameraInitialized, setIsCameraInitialized] = useState(true);

  const [capturedImage, setCapturedImage] = useState();
  const [path, setpath] = useState();
  const [showcamera, setshowcamera] = useState(true);
  const device = useCameraDevice('back');

  const takePhotos = async () => {
    if (camera !== null) {
      try {
        const photo = await camera.current?.takePhoto({
          qualityPrioritization: 'quality',

          enableAutoRedEyeReduction: true,
        });

        if (photo && photo.path) {
          const base64Image = await RNFS.readFile(photo.path, 'base64');

          setpath(photo);
          setShowDownloadIcon(true);
          setshowcamera(true);
          setCapturedImage(`data:image/jpeg;base64,${base64Image}`);
        } else {
          console.error('Invalid photo object:', photo);
        }
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  };

  if (device == null) return <ActivityIndicator />;
  useEffect(() => {
    setIsCameraInitialized(false);
    setIsCameraInitialized(true);
  }, []);

  const {Images} = route.params;

  const [showDownloadIcon, setShowDownloadIcon] = useState(false);
  const handleDownload = () => {
    navigation.navigate('Review', {
      Images: capturedImage,
    });
    setShowDownloadIcon(false);
  };

  const [photo1, setPhoto1] = useState(false);

  useEffect(() => {
    setPhoto1(prevPhoto1 => !prevPhoto1);
  }, []);

  const action = async () => {
    navigation.navigate('Wait', {
      Images: Images,
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
        <Pressable style={{}} onPress={() => navigation.navigate('Menu')}>
          <MaterialIcons name="menu" size={20} color={'black'} />
        </Pressable>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
          Capture
        </Text>
        <MaterialIcons name="menu" size={20} color={'transparent'} />
      </View>

      <Pressable
        style={{
          backgroundColor: '#0095FF',
          alignSelf: 'center',
          padding: 12,
          marginTop: 33,
          borderRadius: 12,
        }}
        onPress={action}>
        <Text style={{color: 'white'}}>Start Camera</Text>
      </Pressable>

      <View style={{}}>
        <Camera
          style={{height: 300, marginTop: 150}}
          device={device}
          isActive={true}
          ref={camera}
          photo={photo1}
        />
      </View>
      {/* )} */}

      <View style={styles.container}>
        {Images !== null && (
          <Image source={{uri: Images}} style={styles.image} />
        )}
      </View>
      <View style={styles.cameraControls}>
        <Pressable
          style={styles.cameraButton}
          onPress={showDownloadIcon ? handleDownload : takePhotos}>
          <MaterialIcons
            name={showDownloadIcon ? 'download' : 'camera-alt'}
            size={30}
            color={'green'}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Capture;
const styles = StyleSheet.create({
  cameraControls: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cameraButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    top: 300,
  },
  image: {
    width: 250,
    height: 240,
  },
});
