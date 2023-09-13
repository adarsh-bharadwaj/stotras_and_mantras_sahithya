import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import StatusBar from '../../components/StatusBar';
import { useTranslation } from 'react-i18next';
import { textScreenStyles } from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { getLanguage } from '../../utils/localStorage/getLanguage';

interface TextScreenProps {
    navigation: any;
    route:any
}

const TextScreen: React.FC<TextScreenProps> = ({ navigation,route }) => {
    const { t } = useTranslation();
    const styles = textScreenStyles();

    useEffect(() => {
        navigation.setOptions({
            title: route.params.title,
            headerRight: () => (
                <Entypo name="language" size={24} onPress={async()=>navigation.navigate('Settings Screen',{lang:await getLanguage()})} color="white" style={{marginRight:10}} />
            ),
        });
    }, []);

    return (
        <ScrollView>
            <StatusBar />
            <View style={styles.container}>
                <Text style={styles.text}>{route.params.content}</Text>
            </View>
        </ScrollView>
    );
};

export default TextScreen;