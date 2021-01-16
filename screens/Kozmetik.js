import React from 'react';
import {
  ActivityIndicator, Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from '../axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button, Left, Body, Title, Right,
} from "native-base";

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      dataSource: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios
      .post('https://sweepy-dev.herokuapp.com/lottery/getLotteriesOfNoLogin', {
        category: 'cosmetics',
      })
      .then((res) => {
        const dataSource = res.data.lotteries;
        this.setState({dataSource});
      })
      .then((res) => {
        this.setState({isLoading: false});
      });
  }

  list = () => {
    return this.state.dataSource.map((element) => {
      return (
        <View
          key={element._id}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <ImageBackground
            source={{
              uri: element.photo_link,
            }}
            style={{
              width: 350,
              height: 350,
              margin: 0,
              shadowColor: 'pink',
              shadowOffset: {
                width: 5,
                height: 9,
              },
              shadowOpacity: 0.48,
              shadowRadius: 11.95,
              elevation: 18,
              borderWidth: 0.5,
              borderBottomWidth: 0,
              borderColor: 'pink',
            }}>
            {/* <Button onPress={() => this.incrementMe()} /> */}
          </ImageBackground>
          <View style={styles.container}>
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL(element.link)}>
              Çekilişe Git
            </Text>
          </View>
          <View style={styles.container2}>
            <Text style={{color: 'black', fontSize: 12}}>
              Aciklama: {element.name}
            </Text>
          </View>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <Header style={{backgroundColor: '#FDB4B4', textAlign:'center'}}>
          <Left><TouchableOpacity   onPress={() => this.props.navigation.navigate("Menu")}>
            <Image
              style={{height: 25, width: 25, marginRight: 10}}
              source={require('../assets/menu.png')}
            />
          </TouchableOpacity></Left>
          <Body >
            <Title  style={{backgroundColor: '#FDB4B4',color:'black', textAlign:'center'}}>Kozmetik</Title>
          </Body>
          <Right><TouchableOpacity>
            <Image
              style={{height: 25, width: 25, marginRight: 10}}
              source={require('../assets/heart.png')}
            />
          </TouchableOpacity></Right>
        </Header>
        <View
          style={{
            marginTop: 0,
            backgroundColor: '#F1F1F1',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/*     <ScrollView horizontal={true} >

                        <View style={{ marginRight: 10 }}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Teknoloji')}
                                title="Teknoloji"
                                color="pink"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>

                        <View style={{ marginRight: 10 }}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Moda')}
                                title="Moda"
                                color="pink"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>

                        <View style={{ marginRight: 10 }}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Kozmetik')}
                                title="Kozmetik"
                                color="pink"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                        <View style={{ marginRight: 10 }}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Diger')}
                                title="Diger"
                                color="pink"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>



                    </ScrollView>
                    */}
        </View>

        <SafeAreaView style={{flex: 1, backgroundColor: '#F1F1F1'}}>
          <ScrollView>
            <View
              style={{
                backgroundColor: 'pink',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
              }}>

            </View>
            {this.state.isLoading && <ActivityIndicator color={'#fff'} />}
            <View>{this.list()}</View>
            <View
              style={{
                backgroundColor: 'pink',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingTop: 15,
                  color: 'white',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                {' '}
                Çekilişlerin sonuna ulaştınız!{' '}
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
        <Footer>
          <FooterTab>
            <Button
              style={{backgroundColor: '#FDB4B4'}}
              onPress={() => this.props.navigation.navigate("Deneme")}
            >
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/home4.png')}
              />
              <Text style={{fontSize: 12}}>AnaSayfa</Text>
            </Button>
            <Button
              style={{backgroundColor: '#FDB4B4'}}
              onPress={() => this.props.navigation.navigate("Teknoloji")}
            >
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/iphone.png')}
              />
              <Text style={{fontSize: 12}}>Teknoloji</Text>
            </Button>
            <Button
              style={{backgroundColor: '#FDB4B4'}}
              onPress={() => this.props.navigation.navigate("Kozmetik")}
              active>
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/cosmetic.png')}
              />
              <Text style={{fontSize: 12}}>Kozmetik</Text>
            </Button>
            <Button
              style={{backgroundColor: '#FDB4B4'}}
              onPress={() => this.props.navigation.navigate("Moda")}
            >
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/dress.png')}
              />
              <Text style={{fontSize: 12}}>Moda</Text>
            </Button>
            <Button
              style={{backgroundColor: '#FDB4B4'}}
              onPress={() => this.props.navigation.navigate("Diger")}
            >
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/file.png')}
              />
              <Text style={{fontSize: 12}}>Diger</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputt: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  containeeeer: {
    flex: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    width: 400,
  },
  containerrr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    flex: 1,
    backgroundColor: 'blue',
  },
  tiny5: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  white2: {
    fontSize: 24,
  },
  white3: {
    fontSize: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    shadowColor: 'pink',
    flexDirection: 'row',
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 2,

    width: 350,
    backgroundColor: 'white',
    borderColor: 'pink',
    borderWidth: 0.5,
    borderBottomWidth: 0,
  },

  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    shadowColor: 'pink',

    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 11,
    marginBottom: 30,
    width: 350,
    backgroundColor: 'white',
    borderColor: 'pink',
    borderWidth: 0.5,
    borderTopWidth: 0,
  },

  word: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
  },
  as: {
    fontSize: 50,
  },
  containerr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  word3: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 15,
  },
  word2: {
    marginLeft: 10,
    marginRight: 20,
    marginTop: 5,
    fontSize: 10,
  },
});
