import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import AsyncStorage from '@react-native-community/async-storage';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './i18n/en.json';
import fr from './i18n/fr.json';
import UserContext from './hooks/useUserContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [acceptedLanguage, setAcceptedLanguage] = useState(['en', 'fr']);

  const user = useState(null as any);

  useEffect(() => {
    console.log(Localization.locale);
    i18n.locale = 'en';
    i18n.defaultLocale = 'en';
    i18n.fallbacks = true;
    i18n.translations = { en, fr };
    AsyncStorage.getItem('lang').then(data => {
      console.log(data);
      if (data) {
        changeLanguage(data);
      }
    });
  }, []);

  const changeLanguage: any = (lang: string) => {
    console.log('change root lang', lang);
    if (acceptedLanguage.includes(lang)) {
      i18n.locale = lang;
    }
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <UserContext.Provider value={user}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </UserContext.Provider>

    );
  }
}
