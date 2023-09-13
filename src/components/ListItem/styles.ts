import { StyleSheet } from "react-native";
import { getFontSize } from "../../utils/font/getFontSize";

export const listItemStyles = ()=>{
    return StyleSheet.create({
        list:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            borderBottomColor:'black',
            borderBottomWidth:1,
            padding:'3%',
        },
        listText:{
            fontSize:getFontSize(22),
            fontWeight:'bold',
            width:'90%',
            color:'black'
        }
    });
};