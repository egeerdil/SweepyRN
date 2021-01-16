import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Button,
  Image,
} from 'react-native';

export default class WelcomeScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handleEmail = (text) => {
    this.setState({email: text});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };

  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{height: 100, width: 350}}
            source={require('../assets/sweepy.png')}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />

          <Button
            title="Giris Yap"
            color="#841584"
            onPress={() => this.props.navigation.navigate('Deneme')}
          />
          <View style={{marginTop: 10}} />
          <Button
            title="Giris Yapmadan Devam Et"
            color="#841584"
            onPress={() => this.props.navigation.navigate('Deneme')}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>Yeni Hesap Olustur</Text>
          </TouchableOpacity>
          {/* <Button
                    title="Login"
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                />
                */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  white2: {
    fontSize: 40,
    marginBottom: 30,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  tiny0: {
    width: 100,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  word2: {
    marginLeft: 10,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 50,
    fontSize: 20,
  },
});
