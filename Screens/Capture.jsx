import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';

import {
    View,
    Text,
    Pressable, KeyboardAvoidingView,
    StyleSheet, ActivityIndicator,

    ScrollView, Image,
    ImageBackground,
    TextInput

} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { CameraDevice, useCameraDevices, Camera, useCameraDevice } from 'react-native-vision-camera'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNFS from 'react-native-fs';
const Capture = ({ navigation, route }) => {

    const isFocused = useIsFocused();


    useEffect(() => {
        async function getPermission() {
            const newcamerapermission = await Camera.requestCameraPermission();
            console.log(newcamerapermission)
        }
        getPermission()
    }, [])
    // const device = useCameraDevices('front');
    const camera= useRef(null);
    const [isActive, serisActive] = useState(true)
    const [isCameraInitialized, setIsCameraInitialized] = useState(true);
    const onCameraInitialized = useCallback(() => {
        console.log('Camera initialized!');
        setIsCameraInitialized(true);

    }, []);


    const [capturedImage, setCapturedImage] = useState();
    const [path, setpath] = useState()
    const [showcamera, setshowcamera] = useState(true)
    const device = useCameraDevice('back')
    const takePhotos = async () => {
        if (camera !== null) {
            try {
                // const photo = await cameraRef.current.takePhoto({});
               const photo = Platform.OS === 'android' ? await camera.current?.takePhoto({
                    qualityPrioritization: 'quality',

                    enableAutoRedEyeReduction: true
                }) : await camera.current?.takePhoto({
                    qualityPrioritization: 'quality',

                    enableAutoRedEyeReduction: true
                });
                // if(isCameraInitialized==true){
                //     takePhotos();
                //   }
                if (photo && photo.path) {
                    const base64Image = await RNFS.readFile(photo.path, 'base64');

                    setpath(photo);
                    setShowDownloadIcon(true);
                    setshowcamera(true)
                    setCapturedImage(`data:image/jpeg;base64,${base64Image}`);
                    //   console.log(photo.path);
                } else {
                    console.error('Invalid photo object:', photo);

                }
            } catch (error) {
                console.error('Error taking photo:', error);
            }
        }
        if (camera===null ){
            Alert('nhi arha')
        }

    };

    if (device == null) return <ActivityIndicator />
    useEffect(() => {
        setIsCameraInitialized(false);
        setIsCameraInitialized(true);
    }, []);

    const { Images } = route.params




    const [showDownloadIcon, setShowDownloadIcon] = useState(false);
    const handleDownload = () => {


        // Implement download logic here
        navigation.navigate('Review', {
            Images: capturedImage,

        })


    };



    const [photo1, setPhoto1] = useState(true);
    const [isFocused1, setIsFocused] = useState(true);

    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //       setIsFocused((prevIsFocused) => !prevIsFocused);
    //     }, 5000);

    //     return () => clearInterval(interval);
    //   }, []);
    // useEffect(() => {
    //     // Set photo to true for the first 5 seconds
    //     const firstInterval = setInterval(() => {
    //         setPhoto1(true);
    //     }, 1000);

    //     // Set photo to false for the next 5 seconds
    //     const secondInterval = setInterval(() => {
    //         setPhoto1(false);
    //     }, 1200);

    //     // Clear intervals when the component unmounts to prevent memory leaks
    //     return () => {
    //         clearInterval(firstInterval);
    //         clearInterval(secondInterval);
    //     };
    // }, []);
    return (
        <View style={{ backgroundColor: 'white', height: '100%', }}>


            <View style={{ justifyContent: 'space-between', flexDirection: "row", alignItems: "center", padding: 12 }}>
                <Pressable style={{ height: 20, width: 20 }}
                    onPress={() => navigation.replace('Login')}>
                    <MaterialIcons name="menu" size={20} color={'black'} />
                </Pressable>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Capture</Text>
                <MaterialIcons name="menu" size={20} color={'transparent'} />
            </View>




            {/* {isFocused &&  ( */}
            <View>
      {photo1 && (
        <Camera
          style={{ height: 300, marginTop: 150 }}
          device={device} // Replace with your device value
          isActive={true}
          ref={camera} // Replace with your camera reference
          photo={true}
        />
      )}
      {/* Other components or content */}
    </View>



            <View style={styles.container}>

                <Image
                    source={{ uri: Images }}
                    style={styles.image}

                />

            </View>

            <View style={styles.cameraControls}>
                <Pressable style={styles.cameraButton} onPress={showDownloadIcon ? handleDownload : takePhotos}>
                    <MaterialIcons name={showDownloadIcon ? 'download' : 'camera-alt'} size={30} color={'green'} />
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
        alignSelf: "center",
        justifyContent: 'center', position: "absolute",
        alignItems: 'center', top: 220
    },
    image: {
        width: 250,
        height: 240,

    },

});
