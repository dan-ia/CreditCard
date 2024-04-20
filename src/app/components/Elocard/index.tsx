import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function EloCard() {

  const elo = require('../../../../assets/Flags/elo.png')


  return (
    <Image style={styles.flag} source={elo} />
  )
}