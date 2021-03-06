import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from './Icon';

const ListItem = ({ text, onPress, checkmark = true, selected = false, visible = true }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor} >
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon visible={visible} checkmark={checkmark} /> : <Icon />}
    </View>
  </TouchableHighlight>
);

export default ListItem;
