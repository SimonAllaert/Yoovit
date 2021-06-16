import React from 'react';
import { StyleSheet, View, Text, TextInput,TouchableOpacity } from 'react-native';

const RCTNetworking = require('react-native/Libraries/Network/RCTNetworking');
function clearCookies () {
  RCTNetworking.clearCookies((cleared) => {
    console.log('Cookies cleared, had cookies=' + cleared.toString())
  })
}

export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={ 
            name:'',
            wachtwoord:'',
        }
    }

    Login() {
      console.log(this.props)
      this.props.Login;
    };
  
    /*
    state = {
      resData: []
    }
    */
    async submit() {
      clearCookies();
      console.log(this.state);
      console.log(
        JSON.stringify({
        name: this.state.name,
        pass: this.state.wachtwoord,
      }));
        try{
            await fetch('http://yoovit.site/user/login?_format=json', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: this.state.name,
                  pass: this.state.wachtwoord,
                })
              }).then(res => res.json()).then(resData =>{
                alert(resData.message);
                console.log(resData);
                //this.setState({ resData: resData });//resData opslagen en meesturen naar profileScreen
                this.Login();
            })
          } catch (e) {
              console.log(e);
          }
        }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Email</Text>
                <View style={styles.EmailView}> 
                    <TextInput style={styles.TextInput} placeholder="info@yoovit.be" onChangeText={text => this.setState({name:text})}/>
                </View>
                <Text style={styles.text}>Wachtwoord</Text>
                <View style={styles.WachtwoordView}>  
                    <TextInput style={styles.TextInput} placeholder="wachtwoord" secureTextEntry={true} onChangeText={text => this.setState({wachtwoord:text})}/>
                </View>
                <Text style={styles.wachtwoordVergeten}> Wachtwoord vergeten? </Text>
                <View style={styles.button}>
                  <TouchableOpacity onPress={()=>(this.submit())}>
                    <Text>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.registreren}> Nog geen account?
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterUserOpties')}>
                      <Text style={styles.registerTextStyle}>Registreer hier</Text>
                    </TouchableOpacity>
                </Text>
        </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 20,
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
      marginTop: 10,
      fontSize: 18,
    },
    registerText:{
      color:'#F59600',
    },
    registreren:{
      marginTop:10,
      textAlign:"center",
    },
    registerTextStyle:{
      color:'#F59600',
      marginLeft: 7,
    },
    EmailView: {
      borderRadius: 10,
      width: 300,
      height: 45,
      marginBottom: 20,
      borderWidth: 1,
    },
    WachtwoordView: {
      borderRadius: 10,
      width: 300,
      height: 45,
      marginBottom: 20,
      borderWidth: 1,
    },
    text: {
      marginLeft: 5,
      marginBottom: 10,
    },
    TextInput: {
      marginLeft: 10,
      marginTop: 12.5,
    },
    wachtwoordVergeten:{
      textAlign:"center",
    },
  });