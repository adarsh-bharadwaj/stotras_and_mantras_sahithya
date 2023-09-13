import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { listItemStyles } from './styles';

const ListItem = ({ 
    title = "", 
    onPress = () => { }, 
    chevronHide = false,
    boldText=true 
}) => {
    const styles = listItemStyles();
    return (
        <TouchableOpacity style={styles.list} onPress={onPress}>
            <Text style={[styles.listText,{fontWeight:boldText?'bold':'400'}]}>{title}</Text>
            {!chevronHide &&
                <Entypo name="chevron-right" size={24} color="black" />
            }
        </TouchableOpacity>
    )
}

export default ListItem;