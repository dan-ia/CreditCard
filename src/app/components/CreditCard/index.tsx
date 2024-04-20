import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    SharedValue,
    interpolate,
    withTiming,
    useSharedValue,
    interpolateColor
}
    from 'react-native-reanimated';

import { styles } from './styles';


import { MasterCard } from '@/app/components/MasterCard';
import { VisaCard } from '@/app/components/VisaCard';
import { AmexCard } from '@/app/components/AmexCard';
import { EloCard } from '@/app/components/Elocard';

const logoMasterCard = require('../../../../assets/logoCard/mastercard.png')
const logoVisa = require('../../../../assets/logoCard/visa.png')
const logoElo = require('../../../../assets/logoCard/elo.png')
const logoAmex = require('../../../../assets/logoCard/amex.png')



type CreditCardProps = {
    cardSide: SharedValue<number>
    data: {
        name: string
        number: string
        date: string
        code: string
    }
}

export enum CARD_SIDE {
    front = 0,
    back = 1,
    visa = 2,
    elo = 3,
    amex = 4,
    mastercard = 5,
}


export function CreditCard({ cardSide, data, }: CreditCardProps) {


    const frontAnimatedStyle = useAnimatedStyle(() => {
        const rotateValue = interpolate(
            cardSide.value, [CARD_SIDE.front, CARD_SIDE.back, CARD_SIDE.mastercard, CARD_SIDE.visa, CARD_SIDE.elo, CARD_SIDE.amex], [0, 180])

        return {
            transform: [
                { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) }
            ]
        }
    })

    const backAnimatedStyle = useAnimatedStyle(() => {
        const rotateValue = interpolate(
            cardSide.value, [CARD_SIDE.front, CARD_SIDE.back, CARD_SIDE.mastercard, CARD_SIDE.visa, CARD_SIDE.elo, CARD_SIDE.amex], [180, 360])

        return {
            transform: [
                { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) }
            ]
        }
    })


    const [indexMaster, setIndexMaster] = useState(0)
    const [indexVisa, setIndexVisa] = useState(0)
    const [indexElo, setIndexElo] = useState(0)
    const [indexAmex, setIndexAmex] = useState(0)


    function ChoiceFlagMasterCard() {
        cardSide.value = CARD_SIDE.front
        setIndexMaster(indexMaster + 1)
        setIndexVisa(0)
        setIndexElo(0)
        setIndexAmex(0)
    }

    function ChoiceFlagVisaCard() {
        cardSide.value = CARD_SIDE.front
        setIndexVisa(indexVisa + 1)
        setIndexMaster(0)
        setIndexElo(0)
        setIndexAmex(0)
    }

    function ChoiceFlagEloCard() {
        cardSide.value = CARD_SIDE.front
        setIndexElo(indexElo + 1)
        setIndexMaster(0)
        setIndexVisa(0)
        setIndexAmex(0)
    }

    function ChoiceFlagAmexCard() {
        cardSide.value = CARD_SIDE.front
        setIndexAmex(indexAmex + 1)
        setIndexMaster(0)
        setIndexElo(0)
        setIndexVisa(0)
    }

    return (
        <View>

            <View >
                <Animated.View style={[styles.card, styles.front, frontAnimatedStyle, { zIndex: 1 }]}>
                    <View style={styles.header}>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.value}>{data.name}</Text>

                        <View style={styles.flagImage}>

                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.card, styles.masterCard, frontAnimatedStyle, { zIndex: indexMaster }]}>
                    <View style={styles.header}>
                        <Image style={styles.logoMasterCard} source={logoMasterCard} />
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.valueMaster}>{data.name}</Text>

                        <View style={styles.flagImage}>

                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.card, styles.visaCard, frontAnimatedStyle, { zIndex: indexVisa }]}>
                    <View style={styles.header}>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.value}>{data.name}</Text>

                        <View style={styles.flagImage}>
                            <Image style={styles.logoVisa} source={logoVisa} />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.card, styles.eloCard, frontAnimatedStyle, { zIndex: indexElo }]}>
                    <View style={styles.headerElo}>
                        <Image style={styles.logoElo} source={logoElo} />
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.value}>{data.name}</Text>

                        <View style={styles.flagImage}>

                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.card, styles.amexCard, frontAnimatedStyle, { zIndex: indexAmex }]}>
                    <View style={styles.headerAmerican}>
                        <Image style={styles.logoAmex} source={logoAmex} />
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.value}>{data.name}</Text>

                        <View style={styles.flagImage}>

                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.card, styles.back, backAnimatedStyle]}>

                    <View style={styles.headerBack}>
                        <Text style={styles.label}>Número do Cartão</Text>
                        <Text style={styles.value}>{data.number}</Text>
                    </View>

                    <View style={styles.footer}>
                        <View>
                            <Text style={styles.label}>Validade</Text>
                            <Text style={styles.value}>{data.date}</Text>
                        </View>

                        <View>
                            <Text style={styles.label}>CVV</Text>
                            <Text style={styles.value}>{data.code}</Text>
                        </View>
                    </View>
                </Animated.View>

                <View style={styles.flagsPosition}>

                    <Text style={styles.titleFlag}>Escolha Sua Bandeira</Text>

                    <View style={styles.flags}>
                        <TouchableOpacity onPress={ChoiceFlagMasterCard}>
                            <MasterCard />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ChoiceFlagVisaCard}>
                            <VisaCard />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ChoiceFlagEloCard}>
                            <EloCard />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ChoiceFlagAmexCard}>
                            <AmexCard />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}