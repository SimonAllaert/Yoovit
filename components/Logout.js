import React from 'react';
import { StyleSheet, View, Text, TextInput,TouchableOpacity } from 'react-native';
import { BackHandler } from 'react-native';

const RCTNetworking = require('react-native/Libraries/Network/RCTNetworking');
function clearCookies () {
  RCTNetworking.clearCookies((cleared) => {
    console.log('Cookies cleared, had cookies=' + cleared.toString())
  })
}

export default class Logout extends React.Component{
   
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick = () => {
        this.props.navigation.goBack(null);
        return true;
    };
    
    /*constructor(props){
        super(props)
        this.state={ 
            name:'',
            wachtwoord:'',
        }
    }
    async submit() {
      clearCookies();
        try{
            await fetch('http://yoovit.site/user/logout?_format=json&token=3EeNGN-O_GCrr2s5xfoFKsH6-8CYOCPZmGPWBb_tLZg', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'X-CSRF-Token': 'Id2KGh7ROk8RU303vrC2d0gvWbGuYoITE4MV7v64'
                },
              }).then(res => res.json()).then(resData =>{
                alert(resData.message);
                this.props.navigation.navigate('LoginUser');
            })
          } catch (e) {
              console.log(e);
          }
        }
        
        */
       ///*onPress={()=>(this.submit())}*/
    render () { 
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Naam</Text>
                
                <Text style={styles.text}>Email</Text>
                <Text style={styles.text}>Wachtwoord</Text>
                <Text style={styles.text}>Wachtwoord veranderen?</Text>
                <View style={styles.button}>
                  <TouchableOpacity onPress={()=>( this.props.navigation.navigate("LoginUser"))}> 
                    <Text style={styles.buttonText}>
                      Logout
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
        );
   };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 20,
      alignItems:"flex-start"
    },
    button: {
      alignItems: 'center',
      justifyContent:"center",
      color:'white',
      width: 300,
      height: 60,
      padding: 10,
      backgroundColor: '#00A51E',
      borderRadius: 40,
      marginBottom: 10,
      marginTop: 50,
      fontSize: 18,
    },
    buttonText: {
        color:'white',
        fontSize: 18,
      },
    text: {
        fontSize: 18,
        height:50,
        marginLeft: 30, 
      },
  });