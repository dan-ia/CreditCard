import React, { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

import { styles } from './styles';


export function Button() {

    const [changeColor, setChangeColor] = useState('#4aa94e');
    const [changeName, setChangeName] = useState('#fff');
    const [changeText, setChangeText] = useState('ADICIONAR CARTÃO')


    function cardAdd() {
        Alert.alert('Cartão Adicionado com Sucesso')
        setChangeColor('#909090')
        setChangeName('#c1c1c1')
        setChangeText('CARTÃO ADICIONADO')

    }

    return (
        <Pressable style={[styles.button, { backgroundColor: changeColor }]} onPress={cardAdd}>
            <Text style={[styles.text, { color: changeName }]}>{changeText}</Text>
        </Pressable>

    )
}