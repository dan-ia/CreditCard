import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function AmexCard() {

  const amex = require('../../../../assets/Flags/amex.png')


  return (
    <Image style={styles.flag} source={amex} />
  )
}