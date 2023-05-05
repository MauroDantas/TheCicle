import React, { useEffect, useState } from 'react';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, Linking, Alert, useColorScheme, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as MailComposer from 'expo-mail-composer';
import openURL from './Linking.js'


const Estre = () => {
  const navigation = useNavigation();
  const url1 = "https://api.whatsapp.com/send?phone=5511910591798&text=Tenho%20intesse%20em%20despejar%20meus%20res%C3%ADduos%20recicl%C3%A1veis%20em%20sua%20institui%C3%A7%C3%A3o."
  const url2 = "https://www.Google.com"
  const colorScheme = useColorScheme();

  function handleNavigateBack() {
    navigation.goBack();
  }
  
  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: ['EstreAmbiental@gmail.com']
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#fff' : 'rgb(45, 45, 45)' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#68C655" />
        </TouchableOpacity>

        <Image style={styles.pointImage} source={require('../../imagens/EstreHeader.jpg')} />
      
        <Text style={[styles.pointName, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>Instituto ESTRE</Text>
        <View style={styles.address}>
          <Text style={[styles.addressTitle, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>Endereço</Text>
          <Text style={[styles.addressContent, {color: colorScheme === 'light' ? '#C9C9C9' : '#FFF'}]}>Av. Paulo Ayres, 75 - Parque Pinheiros, Taboão da Serra - SP</Text>
          <Text style={[styles.description, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>
            A Estre é uma das maiores empresas de serviços ambientais do Brasil. Ela limpa a sua cidade,
             tira o lixo da sua casa, cuida dos resíduos industriais resultantes dos produtos que você consome
              dando o destino mais seguro ao lixo, seja em aterros sanitários ou transformando o lixo em matéria-prima
               e energia para a produção de bens. É a atual responsável pelo controle dos caminhões de lixo de várias cidades, inclusive de taboão da serra
          </Text>
          <View style={styles.imgBetween}>
          <View>
            <Image style={styles.imgInfo} source={require('../../imagens/cardVidro.png')}/>
            <Text style={[styles.textimg, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>Vidro</Text>
          </View>
          <View>
            <Image style={styles.imgInfo} source={require('../../imagens/cardAluminio.png')}/>
            <Text style={[styles.textimg, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>Alumínio</Text>
          </View>
          <View>
            <Image style={styles.imgInfo} source={require('../../imagens/cardPapel.png')}/>
            <Text style={[styles.textimg, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>Papel</Text>
          </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => openURL(url1)}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleComposeMail()}>
          <Icon name="mail" size={20} color="#FFF" />
          <Text style={styles.buttonText}>E-mail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 29,
    paddingTop: 40,
  },

  pointImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 15,
  },

  pointName: {
    color: '#00000',
    fontSize: 28,
    marginTop: 20,
  },


  address: {
    marginTop: 15,
  },
  
  addressTitle: {
    color: '#00000',
    fontSize: 16,
  },

  addressContent: {
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  textimg: {
    color:'#2A2A2A',
    paddingVertical: 1,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10
  },

  description: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    lineHeight: 25,
    textAlign:'justify',
    color: '2A2A2A'
  },
  imgInfo:{
    width: 80,
    height: 80,
    marginBottom: 9,
    resizeMode: 'stretch',
    alignItems: 'center'
  },

  imgBetween: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  
  button: {
    width: '48%',
    backgroundColor: '#68C655',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
  },
});

export default Estre;