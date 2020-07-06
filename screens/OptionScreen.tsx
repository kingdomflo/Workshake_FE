import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import i18n from "i18n-js";
import Login from '../components/Login';
import { globalStyle } from '../constants/Styles';

export default function OptionScreen() {

  const changeLangue: any = async (lang: string) => {
    console.log(lang);
    await AsyncStorage.setItem('lang', lang);
  }

  return (
    <View style={styles.container}>
      {/* <Text style={globalStyle.title}>{i18n.t('General.HelloWorld')}</Text> */}
      <View style={styles.container}>
        <Login />
      </View>
      <View style={globalStyle.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.container}>
        <Text style={globalStyle.title}>{i18n.t('Option.Langage')}</Text>
        <Button
          title="fr"
          onPress={e => changeLangue('fr')}
        />
        <Button
          title="en"
          onPress={e => changeLangue('en')}
        />
      </View>

      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
});
