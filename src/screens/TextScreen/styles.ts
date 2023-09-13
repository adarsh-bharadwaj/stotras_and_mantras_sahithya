import { StyleSheet } from 'react-native';
import { getFontSize } from '../../utils/font/getFontSize';

export const textScreenStyles = () => {
    return StyleSheet.create({
        container: {
            padding:'3%',
            marginBottom:'20%',
            marginLeft:'3%'
        },
        text:{
            fontSize:getFontSize(25),
            fontWeight:'bold',
            color:'black'
        }
        

    })
}