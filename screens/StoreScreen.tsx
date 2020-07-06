import * as React from 'react';
import { View, Text } from "react-native";
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import ParamsId from '../models/RouteParams';
import { GetStore } from '../services/store.service';
import Store from '../models/Store';

export default function StoreScreen() {

  const navigation = useNavigation();
  const route: any = useRoute();
  const [id, setId] = useState(route.params.id);
  const [store, setStore] = useState(null as unknown as Store);

  useEffect(() => {
    (async () => {
      console.log('hello store screen', route);
      GetStore(id).then(response => {
        console.log('the response', response);
        setStore(response.data as Store);
      })
    })();
  }, [])

  return (
    <View>
      <Text>Haha! {route.params.id}! More detail will come later! {store.label}</Text>
    </View>
  );
}