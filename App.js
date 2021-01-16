import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignUp';
import Deneme from './screens/Deneme';
import Teknoloji from './screens/Teknoloji';
import Diger from './screens/Diger';
import Moda from './screens/Moda';
import Kozmetik from './screens/Kozmetik';
import Menu from './screens/Menu';
import Loading from './Loading';
import SignUpDeneme from './SignUpDneme';
import LoginDeneme from './LoginDeneme';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Loading,
  HomeScreen,
  SignUp,
  Deneme,
  Teknoloji,
  Moda,
  Diger,
  Kozmetik,
  Menu,
  SignUpDeneme,
  LoginDeneme,
  Main,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
