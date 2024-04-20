import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function MasterCard() {

  const mastercard = require('../../../../assets/Flags/mc.png')


  return (
    <Image style={styles.flag} source={mastercard} />
  )
}