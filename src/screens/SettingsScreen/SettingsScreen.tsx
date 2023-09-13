import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import StatusBar from '../../components/StatusBar';
import { useTranslation } from 'react-i18next';
import ListItem from '../../components/ListItem/ListItem';
import { setLanguage } from '../../utils/localStorage/setLanguage';
import { getLanguage } from '../../utils/localStorage/getLanguage';
import analytics from '@react-native-firebase/analytics';


interface SettingsScreenProps {
    navigation: any; // You should replace 'any' with the appropriate navigation prop type
    route:any;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation, route }): JSX.Element => {
    //i18n change Language  
    const { i18n } = useTranslation();
    //Sample Languages data
    const data = [
        { language: 'Kannada (ಕನ್ನಡ)', value: 'kn' },
        { language: 'Hindi (हिंदी)', value: 'hi' },
        { language: 'English', value: 'en' }
    ]


    //Key Extractor
    const keyExtractor = (item: any, index: any) => index.toString();


    //rendering items in list view
    const renderItemList = ({ item }) => {
            return (
            <ListItem boldText={item.value!==route.params.lang?false:true} chevronHide={true} onPress={async() => {
                onChangeHandler(item);
                }} title={item.language} />
        )
    }

    //On Change Language Handler
    const onChangeHandler = async(item: any) => {
        i18n.changeLanguage(item.value);
        navigation.goBack();
        await setLanguage(item.value);
        await analytics().logEvent('language', {
            lang:item.language
          })
    }
    return (
        <View>
            <StatusBar />
            <FlatList
                keyExtractor={keyExtractor}
                data={data}
                renderItem={renderItemList}
            />
        </View>
    )
}

export default SettingsScreen;