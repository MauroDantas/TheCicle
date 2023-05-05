import React, { useEffect, useState, useCallback } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe'
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Alert, useColorScheme} from 'react-native';


const WhatPlastic = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
                                  
  const [playing, setPlaying] = useState(true)
  
  const onStateChange = useCallback((state) => {
    if (state === "ended"){
      setPlaying(false);
      Alert.alert("O vídeo foi encerrado");
    }
  }, []);

  const togglePlayer = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  function handleNavigateBack() {
    navigation.goBack();
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#fff' : 'rgb(45, 45, 45)' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#68C655" />
        </TouchableOpacity>

        <View style={styles.pointImage}>
        <YoutubePlayer 
        play={playing}
        width={350}
        height={200}
        videoId={'Mo5SsRuoVa0'}
        onChangeState={onStateChange}
        />
        </View>
    
        <View style={styles.address}>
          <Text style={[styles.addressTitle, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>Onde plástico é usado?</Text>
          <Text style={[styles.description, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>
          O lixo plástico está presente em diversos utensílios do cotidiano e algumas dessas peças não podem ser recicladas, como cabos de panela, teclados de computador, isopor e adesivos; {'\n'} {'\n'}
          Já nos recicláveis, podemos citar tampas, garrafas PET, sacos plásticos, baldes de plástico e potes. {'\n'}
          </Text>

          <Text style={[styles.addressTitle, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>Problemas do Descarte Indevido:</Text>
          <Text style={[styles.description, {color: colorScheme === 'light' ? '#2A2A2A' : '#FFF'}]}>
          • Pode causar enchentes devido aos entupimentos de valas e bueiros; {'\n'} {'\n'}
          • Causa poluição visual; {'\n'}{'\n'}
          • Afeta gravemente o ecossistema, chegando até a matar animais; {'\n'}{'\n'}
          • Recipientes com resíduos podem atrair animais transmissores de doenças. {'\n'}{'\n'} 
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        
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

  address: {
    marginTop: 7,
    paddingHorizontal: 4
  },
  
  addressTitle: {
    color: '#00000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
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
    lineHeight: 24,
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

export default WhatPlastic;