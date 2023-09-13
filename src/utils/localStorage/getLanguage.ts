import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const getLanguage = async () => {
  try {
    const value = await AsyncStorage.getItem('@language');
    console.log(value)
    if (value !== null) {
      return value;
    }
    else return 'en';
  } catch (e:any) {
    Alert.alert(e);
  }
};