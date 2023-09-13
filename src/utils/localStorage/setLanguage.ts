import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const setLanguage = async (value: string) => {
  try {
    await AsyncStorage.setItem('@language', value);
  } catch (e:any) {
    Alert.alert(e);
  }
};