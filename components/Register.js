import React from 'react';
import { StyleSheet, View, Text, TextInput,TouchableOpacity, CheckBox } from 'react-native';

const RCTNetworking = require('react-native/Libraries/Network/RCTNetworking');
function clearCookies () {
  RCTNetworking.clearCookies((cleared) => {
    console.log('Cookies cleared, had cookies=' + cleared.toString())
  })
}

export default class Register extends React.Component {

    constructor(props){
        super(props)
        this.state={ 
            voornaam:'',
            achternaam:'',
            email:'',
            wachtwoord:'',
            bevestigwachtwoord:'',
            voorwaarden: false,
            registrerenActief: true,
        }
    }

    async submit() {
      if (this.state.registrerenActief){
        alert("Het wachtwoord is niet gelijk aan het elkaar en/of het wachtwoord moet minimum 8 tekens bevatten");
      }else{
        clearCookies();
        console.log(
          JSON.stringify({
            field_voornaam: [{"value":this.state.voornaam}],
            field_achternaam: [{"value":this.state.achternaam}],
            name: [{"value":this.state.email}],
            mail: [{"value":this.state.email}],
            pass: [{"value":this.state.wachtwoord}],
          })
        )
        try{
          await fetch('http://yoovit.site/user/register?_format=json', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              field_voornaam: [{"value":this.state.voornaam}],
              field_achternaam: [{"value":this.state.achternaam}],
              name: [{"value":this.state.email}],
              mail: [{"value":this.state.email}],
              pass: [{"value":this.state.wachtwoord}],
            })
          }).then(res => res.json()).then(resData =>{
            alert(resData.message);
            this.props.navigation.navigate("LoginUser");
          })
        } catch (e) {
          console.log(e);
        }
    }
  }
    onChangeWachtwoord(text){
      this.state.wachtwoord = text;
      this.enableRegister();
    }
    onChangeBevestigWachtwoord(text){
      this.state.bevestigwachtwoord = text;
      this.enableRegister();
    }
    /*
    OnChangeVoorwaarden(value){
      this.state.voorwaarden = value;
      this.enableRegister();
    }*/
    enableRegister(){
      if((this.state.wachtwoord === this.state.bevestigwachtwoord) && (this.state.wachtwoord.length > 7)){ //&& (this.state.voorwaarden)
        console.log("registreren actief is false");
        this.setState({registrerenActief:false})
      }else{
        console.log("registreren actief is true");
        this.setState({registrerenActief:true})
      }
    }
    render () {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>Voornaam</Text>
            <View style={styles.VoornaamView}> 
              <TextInput style={styles.TextInput} placeholder="Vb. Jan" onChangeText={text => this.setState({voornaam:text})}/>
            </View>
            <Text style={styles.text}>Naam</Text>
            <View style={styles.AchternaamView}> 
                <TextInput style={styles.TextInput} placeholder="Vb. Jansens" onChangeText={text => this.setState({achternaam:text})}/>
            </View>
            <Text style={styles.text}>Email</Text>
            <View style={styles.EmailView}> 
                <TextInput style={styles.TextInput} placeholder="info@yoovit.be" onChangeText={text => this.setState({email:text})}/>
            </View>
            <Text style={styles.text}>Wachtwoord</Text>
            <View style={styles.WachtwoordView}> 
                <TextInput style={styles.TextInput} placeholder="Wachtwoord" secureTextEntry={true} onChangeText={ (text) => this.onChangeWachtwoord(text) }/>
            </View>
            <Text style={styles.text}>Bevestiging Wachtwoord</Text>
            <View style={styles.BevestigWachtwoordView}> 
                <TextInput style={styles.TextInput} placeholder="BevestigdWachtwoord" secureTextEntry={true} onChangeText={ (text) => this.onChangeBevestigWachtwoord(text) }/>
            </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={()=>(this.submit())}>
                <Text>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.LoginOpnieuw}> Nog geen account?
                <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginUser')}>
                  <Text style={styles.LoginOpnieuwText}>Login </Text>
                </TouchableOpacity>
              </Text>            
            {/*<View style={styles.checkboxContainer}>
              <CheckBox value={this.state.voorwaarden} onValueChange={(value) => this.OnChangeVoorwaarden(value)}/>
                <Text style={styles.label}>Door dit aan te vinken ga je akkoord met de algemene voorwaarden.</Text>
        </View>*/}
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
  VoornaamView: {
    borderRadius: 10,
    width: 300,
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
  },
  AchternaamView: {
    borderRadius: 10,
    width: 300,
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
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
  BevestigWachtwoordView: {
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  LoginOpnieuw:{
    marginTop:10,
    textAlign:"center",
  },
  LoginOpnieuwText:{
    color:'#F59600',
    marginLeft: 7,
  },
});
