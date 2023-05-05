import React, {useRef} from "react";
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, useColorScheme} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import {GestureHandlerRootView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';


export default function Menu() {
  let colorScheme = useColorScheme();

  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={[styles.container, {backgroundColor: colorScheme === 'light' ? '#fff' : 'rgb(45, 45, 45)'}]}>
      <View style={styles.header}>
        <Image style={{width: 190, height:45, resizeMode:'stretch'}} source={colorScheme === 'light' ? require('../../imagens/header.png') : require('../../imagens/headerEscuro.png')}/>
      </View>

      <ScrollView>
      {/*Card do plástico*/}
      <View>       
          <View style={[styles.infoLixo, {backgroundColor:'#C65555'}]}>
              <Image style={styles.imgInfo} source={require('../../imagens/cardPlastico.png')}/>
              
              <View style={{width:132, marginLeft:35, marginTop:10, width:150}}>
                <Text style={styles.titulo}>Plástico</Text> 
                <Text style={{color:'white'}}>Uma das principais inovações que causa grandes impactos e poluições no planeta</Text>  

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <TouchableOpacity 
                  style={styles.botao}
                  onPress={() => navigation.navigate('WhatPlastic')}            
                  >
                  <AntDesign name="infocirlceo" size={20} color="#C65555"/>        
                  </TouchableOpacity>

                  <TouchableOpacity 
                  style={styles.botao}
                  onPress={() => navigation.navigate('HowPlastic')}            
                  >
                  <FontAwesome name="recycle" size={24} color="#C65555" />      
                  </TouchableOpacity>
                </View>  
              </View> 
            </View>           

          {/*Card do Vidro*/}
          <View style={[styles.infoLixo, {backgroundColor:'#006553'}]}>
              <Image style={[styles.imgInfo, {marginLeft:7}]} source={require('../../imagens/cardVidro.png')}/>

              <View style={{width:155, marginLeft:25}}>
              <Text style={styles.titulo}>Vidro</Text> 
              <Text style={{color:'white', marginBottom:15}}>Com um quilo de vidro se faz outro quilo de vidro, sustentável, não?</Text>  
            
              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('HowPlastic')}            
                >
                <AntDesign name="infocirlceo" size={20} color="#006553"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('HowPlastic')}            
                >
                <FontAwesome name="recycle" size={24} color="#006553" />      
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/*Card do Alumínio*/}
          <View style={[styles.infoLixo, {backgroundColor:'#FABA32'}]}>                 
              <Image style={styles.imgInfo} source={require('../../imagens/cardAluminio.png')}/>

              <View style={{width:120, marginLeft:35, width:150}}>
                <Text style={styles.titulo}>Alumínio</Text>           
                <Text style={{color:'white'}}>O metal mais abundante do planeta que em boas mãos pode ter um bom ciclo.</Text> 
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity 
                    style={styles.botao}
                    onPress={() => navigation.navigate('HowPlastic')}            
                    >
                    <AntDesign name="infocirlceo" size={20} color="#FABA32"/>        
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.botao}
                    onPress={() => navigation.navigate('HowPlastic')}            
                    >
                    <FontAwesome name="recycle" size={24} color="#FABA32" />      
                    </TouchableOpacity>
                </View>
              </View>
          </View>

          {/*Card do Papel*/}
          <View style={[styles.infoLixo, {backgroundColor:'#003E65'}]}>
            <Image style={styles.imgInfo} source={require('../../imagens/cardPapel.png')}/>
            <View style={{marginLeft:35, width:150}}>
              <Text style={styles.titulo}>Papel</Text> 
              <Text style={{color:'white', marginBottom:15}}>Dinheiro cai de árvore ou árvore cai por dinheiro?</Text>  

              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('HowPlastic')}            
                >
                <AntDesign name="infocirlceo" size={20} color="#003E65"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('HowPlastic')}            
                >
                <FontAwesome name="recycle" size={24} color="#003E65" />      
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/*Card do Lixo orgânico*/}
          <View style={[styles.infoLixo, {backgroundColor:'#604033'}]}>
            <Image style={[styles.imgInfo, {width: 140, height: 140, marginLeft:13}]} source={require('../../imagens/cardLixoOrganico.png')}/>
            <View style={{marginLeft:30, width:150}}>
              <Text style={styles.titulo}>Lixo Orgânico</Text> 
              <Text style={{color:'white', marginBottom:25}}>Vai um adubo ou chorume aí?</Text>  

              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('HowPlastic')}            
                >
                <AntDesign name="infocirlceo" size={20} color="#604033"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('HowPlastic')}            
                >
                <FontAwesome name="recycle" size={24} color="#604033" />      
                </TouchableOpacity>
              </View>
            </View>
          </View> 
          
          {/*Card do Lixo Eletrônico*/}
          <View style={[styles.infoLixo, {backgroundColor:'#647681'}]}>
          <Image style={[styles.imgInfo, {width: 155, height: 155, left:15}]} source={require('../../imagens/cardEletronico.png')}/>
            <View style={{marginLeft:30, width:150}}>
              <Text style={styles.titulo}>Lixo eletrônico</Text> 
              <Text style={{color:'white', marginBottom:15}}>Um grande problema que a Era da Informação nos trouxe.</Text>  

              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('HowPlastic')}            
                >
                <AntDesign name="infocirlceo" size={20} color="#647681"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('HowPlastic')}            
                >
                <FontAwesome name="recycle" size={24} color="#647681" />      
                </TouchableOpacity>
              </View>
            </View>
          </View>  
        </View>
        </ScrollView>
    </View>
    </GestureHandlerRootView>
  );
}

{/*Estilos*/}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoLixo:{
    width: 350, 
    height:180,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:10
  },
  
  modalContainer:{
    padding:10,
    borderRadius:20,
    flex:1
  },
  header:{
    alignItems:'center',
    flexWrap:'wrap',
    marginBottom:15,
    marginTop:40
  },
  imgInfo:{
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    left:10
  },
  botao:{
    flexDirection:'row', 
    marginTop:10, 
    backgroundColor:'white', 
    width:70, 
    height:30, 
    alignItems:'center',
    borderRadius:10,
    justifyContent:'center',
    marginBottom:10,
  },
  titulo:{
    fontSize:18,
    color:'white'
  },
  botaoModal:{
    backgroundColor:'white',
    alignItems:'center',
    width:130,
    padding:3,
    borderRadius:20,
    alignSelf:'center'
  },
  botaoReciclar:{
    backgroundColor:'white',
    alignItems:'center',
    width:170, 
    height:30, 
    borderRadius:20,
    marginTop:2,
    position:'absolute',
    right:1,
    justifyContent:'center'
  }, 
  imgModal:{
    width:350, 
    height:210, 
    resizeMode:'stretch',
    alignSelf:'center',
    marginBottom:10
  },
  textModal: {
    color:'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    padding: 5,
    lineHeight: 17,
    textAlign:'justify',
  },
  titleModal:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5
  }
});