import React from 'react';
import { useEffect, useState ,useRef} from 'react';

import {
  View,
  Text,
  Pressable,KeyboardAvoidingView ,
  StyleSheet,ActivityIndicator,

  ScrollView,Image,
  ImageBackground,
  TextInput

} from 'react-native';
import { CameraDevice, useCameraDevices,Camera ,useCameraDevice,takePhoto } from 'react-native-vision-camera'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNFS from 'react-native-fs';
import { fromBase64 } from 'base64-js';
const Review = ({ navigation,route }) => {
    const { Images } = route.params;
    const { path } = route.params;
//     const base64String = Images;
console.log('ye to ha base ka string ', Images)
//     const outputPath = RNFS.DocumentDirectoryPath + '/output_image.jpg';
  
//     const [fileReady, setFileReady] = useState(false);
  
//     useEffect(() => {
//       const base64ToImage = async (base64String, outputPath) => {
//         try {
//           // Remove data URI header
//           const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
  
//           // Decode base64 using base64-js
//           const uint8Array = new Uint8Array(fromBase64(base64Data));
  
//           // Use react-native-fs to write the file
//           await RNFS.writeFile(outputPath, uint8Array, 'base64');
  
//           console.log('Image saved successfully:', outputPath);
  
//           // Check if the file exists
//           const fileExists = await RNFS.exists(outputPath);
//           console.log('File exists:', fileExists);
  
//           // Set the state to indicate that the file is ready
//           setFileReady(true);
//         } catch (error) {
//           console.error('Error saving image:', error);
//         }
//       };
  
//       // Call the function
//       base64ToImage(base64String, outputPath);
      
//     }, []); // Empty dependency array ensures that this effect runs only once when the component mounts
//   console.log(outputPath)
//     if (!fileReady) {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       );
//     }

  return (
    <View style={{ backgroundColor:'white', height:'100%',}}>
          

     <View style={{justifyContent:'space-between',flexDirection:"row",alignItems:"center",padding:12}}>
        <Pressable style={{height:20,width:20}}
        onPress={()=>navigation.replace('Login')}>
     <MaterialIcons name="menu" size={20} color={'black'} />
     </Pressable>
     <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>Review</Text>
     <MaterialIcons name="menu" size={20} color={'transparent'} />
     </View>
   <View>
   <Image
      source={{ uri: Images }}
      style={{ width: '100%', height: 400, marginTop:60 }}
      // onError={(error) => console.error('Image loading error:', error)}
    />
<Text style={{color:'#04A83C',fontSize:34,fontWeight:'bold',alignSelf:"center",marginTop:30}}>All Good</Text>
<Pressable
          style={{
            backgroundColor: '#0095FF',
            width: '35%',
            borderRadius: 8,
            height: 45,
          marginTop:20,
            
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center'
            
          }}
          onPress={()=>navigation.navigate('Menu')}
        >
        
              
         
            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>START NEW</Text>
           
          </Pressable>

        </View>

      

   


    </View>
  );
};

export default Review;
const styles = StyleSheet.create({
  
  
});
