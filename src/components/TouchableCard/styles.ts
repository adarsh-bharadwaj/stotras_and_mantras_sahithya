import { StyleSheet } from "react-native";
import { useDimensions } from '../../hooks/useDimensions';
import { getFontSize } from '../../utils/font/getFontSize';

export const touchableCardStyles = () => {
    const { heightCalc, widthCalc } = useDimensions();
    return StyleSheet.create({
        text: {
            fontSize: getFontSize(20),
            fontWeight: '500',
            textAlign: 'center',
            color:'black'
        },
        card: {
            width: widthCalc(40),
            height: heightCalc(20),
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: "#000",
            backgroundColor: '#ffd39c',
            elevation: 15,
            borderWidth: 0.5,
            padding: '2%',
            margin: '4%'

        },
    })
}