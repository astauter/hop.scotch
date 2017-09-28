import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Component } from 'react';
import axios from 'axios';
import { StatusBar, KeyboardAvoidingView, Text, View } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { Header } from '../components/Header';

const TEMP_BASE_CITY1 = 'chicago';
const TEMP_BASE_CITY2 = 'berlin';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      city1: 'chicago',
      city2: 'berlin',
      comparitor: null,
    }
  }

  handleChangeTextCity1 = (name) => {
    this.setState({ city1: name });
  };

  handleChangeTextCity2 = (name) => {
    this.setState({ city2: name });
  }

  handlePressCityButton1 = () => {
    this.props.navigation.navigate('CityList', { title: 'City 1' });
  };

  handlePressCityButton2 = () => {
    this.props.navigation.navigate('CityList', {
      title: 'City 2' });
  };

  handleCompareCities = () => {
    return axios.get(`https://www.expatistan.com/cost-of-living/comparison/${this.state.city1}/${this.state.city2}`)
      .then(res => res.data)
      .then(data => {
        const title1 = data.search('<title>') + 7;
        const newText = data.slice(title1);
        const title2 = newText.search('</title>') - 25;
        return newText.slice(0, title2);
      })
      .then((slicedtext) => {
        this.setState({ comparitor: slicedtext })
      })
  }

  handleOptionsPress = () => {
    console.log('options')
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="position" >
          <Logo />
          <InputWithButton
            buttonText={'city 1'}
            onPress={this.handlePressCityButton1}
            defaultValue="denver"
            onChangeText={this.handleChangeTextCity1}
          />
          <InputWithButton
            buttonText={'city 2'}
            onPress={this.handlePressCityButton2}
            defaultvalue="berlin"
            onChangeText={this.handleChangeTextCity2}
          />
          <ClearButton onPress={this.handleCompareCities} text="COMPARE" />
          <View>
            <Text style={styles.text}>
              {this.state.comparitor}
            </Text>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;

const styles = EStyleSheet.create({
  text: {
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: -0.5,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'black',
  }
});
