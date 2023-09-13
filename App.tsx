/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { getFontSize } from './src/utils/font/getFontSize';
import { useTranslation } from 'react-i18next';
import ListScreen from './src/screens/ListScreen/ListScreen';
import TextScreen from './src/screens/TextScreen/TextScreen';
import SettingsScreen from './src/screens/SettingsScreen/SettingsScreen';
import { getLanguage } from './src/utils/localStorage/getLanguage';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { inAppUpdateCheck } from './src/utils/inAppUpdate';


const Stack = createStackNavigator();

function App(): JSX.Element {
  const { t, i18n } = useTranslation();
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  useEffect(() => {
    const updateLang = async () => {
      i18n.changeLanguage(await getLanguage())
    }
    updateLang();
    inAppUpdateCheck();
    crashlytics().log('App mounted.');
    getDeviceToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('Message', JSON.stringify(remoteMessage))
    })

    return unsubscribe
  });

  const getDeviceToken = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (enabled) {
      console.log("Authorization Status:", authStatus);
    }
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log(token);
  }
  return (
    <NavigationContainer theme={{
      ...DefaultTheme, colors: {
        ...DefaultTheme.colors,
        background: '#FCEDDA'
      }
    }}
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}
    >
      <Stack.Navigator screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#EE4E34' },
        headerTitleStyle: { fontSize: getFontSize(21) },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }} initialRouteName='Home Screen'>
        <Stack.Screen options={{ title: t('Home') }} component={HomeScreen} name="Home Screen" />
        <Stack.Screen options={{ title: t('Ashtottara Shatanamavalis') }} component={ListScreen} name="List Screen" />
        <Stack.Screen component={TextScreen} name="Text Screen" />
        <Stack.Screen component={SettingsScreen} name="Settings Screen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
