import React from 'react';
import { useEffect, useState } from 'react';

import {
  View,
  Text,
  Pressable,KeyboardAvoidingView ,
  StyleSheet,ActivityIndicator,

  ScrollView,Image,
  ImageBackground,
  TextInput

} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Menu = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [Loginpass, setLoginpass] = useState();
  const [Loginid, setLoginid] = useState();
    const [isChecked, setChecked] = useState(false);
  
    const handleToggleCheckbox = () => {
      console.log('rer')
      setChecked(!isChecked);
    };
  








    const [isChecked1, setChecked1] = useState(false);
  
// const handleToggleCheckbox1 = () => {
//   setChecked1(!isChecked1);
//   if (isChecked1) {
//     setclr({ bgcolor: '#0f034b' ,img: require('../Images/mainlogodark.png') });
//   } else {
//     setclr({ bgcolor: '#333333', borderclr: 'white' , img: require('../Images/mainlogo.png')});
//   }
// };

var Login = () => {
  console.log('gg')
  if(Loginid== null || Loginpass == null){
    alert ('Fill the ID and password')
  }
  else{
    setIsLoading(true);

    navigation.replace('Menu')
    // firestore()
    //   .collection('Users')
    //   .where('UserID', '==', Loginid)
    //   .where('Password', '==', Loginpass)
    //   .get()
    //   .then((querySnapshot) => {
    //     if(querySnapshot.empty){
    //       alert('Incorrect ID or password!')  
    //     }

    //     if(isChecked==true){
    //       // Login successful
    //         querySnapshot.forEach((documentSnapshot) => {
    //         const user = documentSnapshot.data();

    //         AsyncStorage.setItem(StorageKeys.CurrentUser, JSON.stringify(user))
    //         .then(() => {
    //           console.log('User Stored Successfully')
    //         })
    //         .catch((error) => console.log(error));
    //         navigation.replace("Menu")
    //       });
    //     }
    //    if(isChecked==false){
    //       // Login successful
    //         querySnapshot.forEach((documentSnapshot) => {
           
    //         navigation.replace("Menu")
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     alert('Error: ' + error);
    //   });
  }
}
    // const [modalVisible, setModalVisible] = useState(false);
  
    // const toggleModal = () => {
    //   setModalVisible(!modalVisible);
    // };
    // const [clr, setclr] = useState ({bgcolor:'#0f034b' , boxcolor: "white", borderclr:'white', img: require('../Images/mainlogo.png')});


    const [clr1, setclr1] = useState({
        borderclr: 'white',
        bgclr: 'white',
        txtclr: '#222B45',
        width:0
       
      });

      const [clr2, setclr2] = useState({
        borderclr: 'white',
        bgclr: 'white',
        txtclr: '#222B45',
        width:0
       
      });

      const [clr3, setclr3] = useState({
        borderclr: 'white',
        bgclr: 'white',
        txtclr: '#222B45',
        width:0
       
      });


      const [clr4, setclr4] = useState({
        borderclr: 'white',
        bgclr: 'white',
        txtclr: '#222B45',
        width:0
       
      });

      const [Img,setImg] = useState(null)

      const Img1 =()=>{
        setImg('https://thevalleygroup.com/wp-content/uploads/2022/12/beats_12.jpg')

        setclr1({
            borderclr: '#3366FF',
            bgclr: 'lightblue',
            txtclr: '#3366FF',
            width:3
        })


        setclr2({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })



        setclr3({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })


        setclr4({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })


        // const jumpToAction = TabActions.jumpTo('RouteName');
        // navigation.dispatch(jumpToAction);
        navigation.navigate('Capture', {
            Images: Img
           
          })
       
//   navigation.replace('Capture');

      }

      const Img2 =()=>{

        setImg('https://sc01.alicdn.com/kf/H52af1a2d7b664d33976828c3e21dcad2F.jpg')
        setclr2({
            borderclr: '#3366FF',
            bgclr: 'lightblue',
            txtclr: '#3366FF',
            width:3
        })

        setclr3({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })


        setclr4({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })

    


        setclr1({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })

        navigation.navigate('Capture', {
            Images: Img
           
          })
      }

      const Img3 =()=>{
        setImg('https://www.onqsolutions.com/wp-content/uploads/2021/03/onQ_fred_meyer_display_case_study.jpg')
        setclr3({
            borderclr: '#3366FF',
            bgclr: 'lightblue',
            txtclr: '#3366FF',
            width:3
        })

        setclr4({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })

    


        setclr1({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })

        setclr2({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })

        navigation.navigate('Capture', {
            Images: Img
           
          })
      }


      const Img4 =()=>{

        setImg('https://boltgroup.com/wp-content/uploads/2023/03/elements-casestudy-displayoptions5-1024x611.jpg')
        setclr4({
            borderclr: '#3366FF',
            bgclr: 'lightblue',
            txtclr: '#3366FF',
            width:3
        })

        setclr1({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })

        setclr2({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })
        setclr3({
            borderclr: 'white',
            bgclr: 'white',
            txtclr: '#222B45',
            width:0
        })


        navigation.navigate('Capture', {
            Images: Img
           
          })
      }







  return (
    <View style={{ backgroundColor:'white', height:'100%',}}>
          

     <View style={{justifyContent:'space-between',flexDirection:"row",alignItems:"center",padding:12}}>
        <Pressable style={{height:20,width:20}}
        onPress={()=>navigation.replace('Login')}>
     <MaterialIcons name="close" size={20} color={'black'} />
     </Pressable>
     <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>Capture</Text>
     <MaterialIcons name="menu" size={20} color={'transparent'} />
     </View>
  

  <View style={{padding:12}}>
  <Pressable style={{padding:10,borderLeftWidth:clr1.width,borderColor:clr1.borderclr}}
        onPress={Img1}>
  <Text style={{color:clr1.txtclr,fontWeight:'normal',fontSize:16}}>Image Option 1</Text>
     </Pressable>


     <Pressable style={{padding:10,borderLeftWidth:clr2.width,borderColor:clr2.borderclr}}
        onPress={Img2}>
  <Text style={{color:clr2.txtclr,fontWeight:'normal',fontSize:16}}>Image Option 2</Text>
     </Pressable>


     <Pressable style={{padding:10,borderLeftWidth:clr3.width,borderColor:clr3.borderclr}}
        onPress={Img3}>
  <Text style={{color:clr3.txtclr,fontWeight:'normal',fontSize:16}}>Image Option 3</Text>
     </Pressable>


     <Pressable style={{padding:10,borderLeftWidth:clr4.width,borderColor:clr4.borderclr}}
        onPress={Img4}>
  <Text style={{color:clr4.txtclr,fontWeight:'normal',fontSize:16}}>Image Option 4</Text>
     </Pressable>

  </View>
    </View>
  );
};

export default Menu;
const styles = StyleSheet.create({
 

  
});
