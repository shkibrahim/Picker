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



const Login = ({ navigation }) => {
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
 
  }
}
 



  return (
    <View style={{ backgroundColor:'white', height:'100%',justifyContent:'center' }}>
          
 
        <View style={{  justifyContent:"space-between", flexDirection:'row' , alignItems:'center', marginRight:10}}>
     
     {/* <Image source={clr.img} style={{height:20, width:100}}/> */}
     {/* <Pressable style={{backgroundColor: '#ff5400', width:35, height:35, borderRadius:30 , alignContent:'center', 
     marginLeft:50,justifyContent:"center", alignItems:'center'}}
     onPress={toggleModal}>

<Image source={require("../Images/drawer.png")} style={{height:'40%', width:'30%'}}/>
</Pressable> */}
    
    
    
    
    
    
    
    
     </View>
     {/* <ScrollView> */}
      
       {/* <Text style={{color: '#ff5400', fontSize:14, alignSelf:"center"}}> Enter your credentials provided by the Company  </Text> */}
    
     
      <View style={{ borderTopRightRadius:70, borderTopLeftRadius:70,height:470,justifyContent:"center"  }}>

  
        <Text style={{color: '#8F9BB3', fontSize:12, alignSelf:"flex-start",marginLeft:29,}}>EMAIL </Text>


   
      <View>
        <TextInput style={{   height: 40,width:'85%',
        alignSelf:'center',
    // borderColor: 'gray',
    color:'black',
    // borderWidth: 1,
    marginBottom:20,
    borderColor:'gray',
    borderBottomWidth:1,
   
    paddingHorizontal: 10,}}  
    
   value={Loginid}
   onChangeText={setLoginid}
    placeholder='email@example.com'
    placeholderTextColor= '#8F9BB3'/>
      </View>
    {/* </KeyboardAvoidingView> */}


        {/* <Text style={{marginLeft:40,color:"white",fontWeight:"bold"}}>Password </Text> */}

      <View>
      <Text style={{color: '#8F9BB3', fontSize:12, alignSelf:"flex-start",marginLeft:29,}}>PASSWORD </Text>
        <TextInput 
      style={{   height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    borderColor:'gray',
    color:'black',
    width:'85%',
    alignSelf:'center', paddingHorizontal: 10,
    borderBottomWidth:1,
   
   }} 

   value={Loginpass}
   onChangeText={setLoginpass}
   password={true}
   secureTextEntry={true}
    placeholder='*******'
    placeholderTextColor= '#8F9BB3' />
    
      </View>
    {/* </KeyboardAvoidingView> */}

    <View style={{flexDirection:'row',alignItems:'center', marginLeft:22,marginTop:12}}>
        <Pressable style={styles.checkboxContainer} onPress={handleToggleCheckbox}>


     <View style={styles.checkbox}>
  {isChecked ? (
    <Image source={require("../Images/tick1.png")} style={{ height: '120%', width: '120%' }} />
  ) : null}
</View>

      {/* <Text style={styles.label}>Check me</Text> */}
    </Pressable>
    <Text style={{marginLeft:6,fontSize:12, color:"black"}}>Remember me</Text>

    </View>
    
    {/* </ScrollView> */}
    
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
          onPress={Login}
        >
          {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
         
            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>SIGN IN</Text>
            )}
          </Pressable>

      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Login;
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
borderRadius:20
  },
  modalBackground: {
    flex: 1,
    width:'100%',
    // height:180,
    borderRadius:20,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  checkbox1: {
    width: 35,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    height: 35,
  borderWidth:1,
    borderColor: 'grey',
    backgroundColor:"blue",
    borderRadius: 24,
    // marginRight: 10,
  },
  checkbox: {
    width: 20,
    
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
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
    backgroundColor: 'white'},

    
});
