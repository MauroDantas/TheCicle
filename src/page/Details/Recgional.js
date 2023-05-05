import React, { useEffect, useState } from 'react';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, useColorScheme, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as MailComposer from 'expo-mail-composer';
import openURL from './Linking.js'


const Recgional = () => {
  const navigation = useNavigation();
  const url1 = "https://api.whatsapp.com/send?phone=5511962530694&text=Tenho%20interesse%20em%20reciclagem%20e%20desejo%20enviar%20os%20res%C3%ADduos%20que%20separei%20para%20a%20institui%C3%A7%C3%A3o.%20Como%20funciona%20o%20contato%20direto%20com%20voc%C3%AAs%3F"
  const url2 = "https://www.Google.com"
  const colorScheme = useColorScheme();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: ['Cristinasantana06@yahoo.com.br']
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#fff' : 'rgb(45, 45, 45)' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#68C655" />
        </TouchableOpacity>

        <Image style={styles.pointImage} source={require('../../imagens/Recgional.png')} />
      
        <Text style={[styles.pointName, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>Reciclagem Regional</Text>
        <View style={styles.address}>
          <Text style={[styles.addressTitle, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>Endereço</Text>
          <Text style={[styles.addressContent, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>Esrt. Ten. José Maria da Cunha, 836 - Jardim Record, Taboão da Serra - SP</Text>
          <Text style={[styles.description, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>
            A Reciclagem Regional é uma instituição de catadores que colaboram com o meio ambiente
             com a coleta de Metais, Papéis e Vidro. A instuição paga devidamente cada catador de acordo com
              a quantidade de material recolhido, onde os itens são separados organizadamente e levados a uma instuição estatal
               responsável por efetuar os processos de reciclagem.
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
    paddingTop: 40
  },

  pointImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 20,
  },

  pointName: {
    color: '#00000',
    fontSize: 26,
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

  description: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    lineHeight: 30,
    textAlign:'justify',
    color: '2A2A2A'
  },

  textimg: {
    color:'#2A2A2A',
    paddingVertical: 5,
    paddingHorizontal: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 26
  },

  imgInfo:{
    width: 80,
    height: 80,
    marginBottom: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
    margin:5
  },

  imgBetween: {
    paddingVertical: 20,
    paddingHorizontal: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 15,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
    
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

export default Recgional;