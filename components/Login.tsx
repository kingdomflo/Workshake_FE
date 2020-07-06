import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import i18n from "i18n-js";
import { globalStyle } from '../constants/Styles';
import { GetUser } from '../services/user.service';
import UserContext from '../hooks/useUserContext';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useContext(UserContext);

  const login: any = () => {
    console.log(email, password);
    GetUser(email, password).then(response => {
      console.log(response);
      setUser(response.data as any);
    })
  }

  return (
    <View>
      <Text style={globalStyle.title}>{i18n.t('Option.GoLogin')}</Text>
      <TextInput
        style={globalStyle.marginBottom10}
        onChangeText={e => setEmail(e)}
        placeholder={i18n.t('General.Email')}
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        style={globalStyle.marginBottom10}
        onChangeText={e => setPassword(e)}
        placeholder={i18n.t('General.Password')}
        textContentType="password"
        secureTextEntry={true}
      />
      <Button
        title={i18n.t('Option.Login')}
        onPress={e => { login() }}
      />
    </View>
  )
}

const styles = StyleSheet.create({

});
