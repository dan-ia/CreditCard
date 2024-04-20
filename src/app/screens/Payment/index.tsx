import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

import { CreditCard, CARD_SIDE } from '@/app/components/CreditCard';

import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '@/app/components/Button';


export function Payment() {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [code, setCode] = useState("")

    const cardSide = useSharedValue(CARD_SIDE.front)

    function showFrontCard() {
        cardSide.value = CARD_SIDE.front
    }

    function showBackCard() {
        cardSide.value = CARD_SIDE.back
    }


    function handleFlipCard() {
        if (cardSide.value === CARD_SIDE.front) {
            showBackCard()
        }
        else if (cardSide.value === CARD_SIDE.mastercard) {
            showBackCard()
        }
        else if (cardSide.value === CARD_SIDE.visa) {
            showBackCard()
        }
        else if (cardSide.value === CARD_SIDE.elo) {
            showBackCard()
        }
        else if (cardSide.value === CARD_SIDE.amex) {
            showBackCard()
        } else {
            showFrontCard()
        }
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>


                <CreditCard cardSide={cardSide} data={{
                    name: name.toUpperCase(),
                    number: number.replace(/(\d{4})(?=\d)/g, "$1 "),
                    date: (date.replace(/(\d{2})(?=\d)/g, '$1/')),
                    code
                }} />

                <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
                    <Text>Inverter</Text>
                </TouchableOpacity>

                <View style={styles.form}>
                    <Input placeholder='Nome do Cartão'
                        onChangeText={setName}
                        onFocus={showFrontCard}
                        maxLength={28}
                    />

                    <Input
                        placeholder='Número do Cartão'
                        onChangeText={setNumber}
                        onFocus={showBackCard}
                        keyboardType='numeric'
                        maxLength={16}
                    />

                    <View style={styles.inputInline}>
                        <Input
                            placeholder='Validade'
                            onChangeText={setDate}
                            onFocus={showBackCard}
                            keyboardType='numeric'
                            maxLength={4} />

                        <Input
                            placeholder='CVV'
                            onChangeText={setCode}
                            onFocus={showBackCard}
                            keyboardType='numeric'
                            maxLength={3}
                        />
                    </View>
                </View>



                <View style={styles.buttonAdd}>
                    <Button />
                </View>

            </View>
        </ScrollView >
    );
}