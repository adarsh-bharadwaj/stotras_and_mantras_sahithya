import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import StatusBar from '../../components/StatusBar';
import { homeStyles } from './styles';
import TouchableCard from '../../components/TouchableCard/TouchableCard';
import { useTranslation } from 'react-i18next';
import Entypo from 'react-native-vector-icons/Entypo';
import { getLanguage } from '../../utils/localStorage/getLanguage';

interface HomeScreenProps {
    navigation: any; // You should replace 'any' with the appropriate navigation prop type
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }: HomeScreenProps) => {
    const styles = homeStyles();
    const { t } = useTranslation();

    const data = [
        {
            title: t("Ashtottara Shatanamavalis"),
            onPress: () => navigation.navigate('List Screen')
        },
        {
            title: t("Hanuman Chalisa"),
            onPress: () => navigation.navigate('Text Screen',{title:t("Hanuman Chalisa"),content:t("Hanuman Chalisa-Content")})
        },
        {
            title: t("Shiva Tandava Stotram"),
            onPress: () => navigation.navigate('Text Screen',{title:t("Shiva Tandava Stotram"),content:t("Shiva Tandava Stotram-Content")})
        },
        {
            title: t("Mantrapushpa"),
            onPress: () => navigation.navigate('Text Screen',{title:t("Mantrapushpa"),content:t("Mantrapushpa-Content")})
        },
        {
            title: t("Sri Vishnu Sahasranama Stotram"),
            onPress: () => navigation.navigate('Text Screen',{title:t("Sri Vishnu Sahasranama Stotram"),content:t("Sri Vishnu Sahasranama Stotram-Content")})
        },
        {
            title: t("Aditya Hrudayam Stotram"),
            onPress: () => navigation.navigate('Text Screen',{title:t("Aditya Hrudayam Stotram"),content:t("Aditya Hrudayam Stotram-Content")})
        }
    ];

    useEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <Entypo name="language" size={24} onPress={async()=>navigation.navigate('Settings Screen',{lang:await getLanguage()})} color="white" style={{marginRight:10}} />
            ),
          });
    },[]);

    return (
        <ScrollView>
            <StatusBar />
            <View style={styles.cardsContainer}>
                {data.map((item, index) => (
                    <TouchableCard key={index} onPress={item.onPress} label={item.title} />
                ))}
            </View>
        </ScrollView>
    );
};

export default HomeScreen;