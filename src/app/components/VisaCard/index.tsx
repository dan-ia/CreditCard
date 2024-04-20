import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function VisaCard() {

  const visa = require('../../../../assets/Flags/visa.png')

  return (
    <Image style={styles.flag} source={visa} />
  )
}