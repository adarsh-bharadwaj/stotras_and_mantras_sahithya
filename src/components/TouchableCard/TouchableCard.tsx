import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { touchableCardStyles } from './styles';

interface TouchableCardProps extends TouchableOpacityProps {
    label: string;
}

const TouchableCard: React.FC<TouchableCardProps> = ({ label,...props }: TouchableCardProps) => {
    const styles = touchableCardStyles();
    
    return (
        <TouchableOpacity {...props} style={styles.card}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

export default TouchableCard;