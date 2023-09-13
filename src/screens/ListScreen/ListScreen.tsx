import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View, FlatList } from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import { getLanguage } from '../../utils/localStorage/getLanguage';
import Entypo from 'react-native-vector-icons/Entypo';

interface ListScreenProps {
    navigation: any; // You should replace 'any' with the appropriate navigation prop type
}

const ListScreen: React.FC<ListScreenProps> = ({ navigation }: ListScreenProps): JSX.Element => {
    const { t } = useTranslation();
    const data = [
        {
            title: t('Shri Shiva Ashtottara Shatanamavali'),
            onPress: () => navigation.navigate('Text Screen', { title: t('Shri Shiva Ashtottara Shatanamavali'), content: t('Shri Shiva Ashtottara Shatanamavali-Content') })
        },
        {
            title: t('Shri Parvati Ashtottara Shatanamavali'),
            onPress: () => navigation.navigate('Text Screen', { title: t('Shri Parvati Ashtottara Shatanamavali'), content: t('Shri Parvati Ashtottara Shatanamavali-Content') })
        },
        {
            title: t('Shri Ganesha Ashtottara Shatanamavali'),
            onPress: () => navigation.navigate('Text Screen', { title: t('Shri Ganesha Ashtottara Shatanamavali'), content: t('Shri Ganesha Ashtottara Shatanamavali-Content') })
        },
        {
            title: t("Shri Subrahmanya Ashtottara Shatanamavali"),
            onPress: () => navigation.navigate('Text Screen', { title: t("Shri Subrahmanya Ashtottara Shatanamavali"), content: t("Shri Subrahmanya Ashtottara Shatanamavali-Content") })
        },
        {
            title: t('Shri Shani Ashtottara Shatanamavali'),
            onPress: () => navigation.navigate('Text Screen', { title: t('Shri Shani Ashtottara Shatanamavali'), content: t('Shri Shani Ashtottara Shatanamavali-Content') })
        },
        {
            title: t("Shri Shukra Ashtottara Shatanamavali"),
            onPress: () => navigation.navigate('Text Screen', { title: t("Shri Shukra Ashtottara Shatanamavali"), content: t("Shri Shukra Ashtottara Shatanamavali-Content") })
        },
        {
            title: t("Shri Brihaspati Ashtottara Shatanamavali"),
            onPress: () => navigation.navigate('Text Screen', { title: t("Shri Brihaspati Ashtottara Shatanamavali"), content: t("Shri Brihaspati Ashtottara Shatanamavali-Content") })
        },

    ]


    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Entypo name="language" size={24} onPress={async () => navigation.navigate('Settings Screen', { lang: await getLanguage() })} color="white" style={{ marginRight: 10 }} />
            ),
        });
    }, []);

    //Key Extractor
    const keyExtractor = (item: any, index: Number) => index.toString();


    //rendering items in list view
    const renderItemList = ({ item }) => {
        console.log(item)
        return (
            <ListItem
                title={item.title}
                onPress={item.onPress}
            />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={keyExtractor}
                data={data}
                renderItem={renderItemList}
            />
        </View>
    )
};

export default ListScreen;