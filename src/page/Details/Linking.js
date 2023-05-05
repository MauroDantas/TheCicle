import React from 'react';
import { Linking, Alert } from 'react-native';

    const openURL = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
          await Linking.openURL(url);
        } else{
          Alert.alert("Não foi possível te encaminhar para esse link")
        }
          }
export default openURL;