import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Text style={styles.text} >hop.scotch</Text>
    <Image style={styles.containerImage} source={require('./Images/logo.png')} />
  </View>
);

export default Logo;
