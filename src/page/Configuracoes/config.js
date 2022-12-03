import { useState} from "react";
import { StyleSheet, View, Image, Switch, Text, useColorScheme} from 'react-native';

export default function Sobre() {  
  let colorScheme = useColorScheme();
  

  return (
    
    <View style={[styles.container, {backgroundColor: colorScheme === 'light' ? '#fff' : 'rgb(45, 45, 45)'}]}>

      <View style={{alignItems: 'center'}}>
        <Image style={styles.header} source={colorScheme === 'light' ? require('../../imagens/header.png') : require('../../imagens/headerEscuro.png')}/>
      </View>

      <View>

        <View style={styles.card}>
          <View style={{alignContent:'space-between'}}>
            <Text style={styles.Title}>SOBRE NÓS</Text>
            <Text style={[styles.textoSobre, {color: colorScheme === 'light' ? '#FFF' : '#FFF'}]}>
              Com o ideal de tornar o mundo um lugar mais limpo para as gerações futuras,
              o projeto The Cycle traz conhecimentos sobre descarte e reciclagem de lixo aos usuários. {'\n'} {'\n'}
              Buscando ampliar a influência que a educação ambiental exerce nas pessoas, o aplicativo auxilia a implatação do
              projeto de lei n. 9795/1999, que define a necessidade do desenvolvimento da formação cidadã em relação
              ao meio ambiente. {'\n'} {'\n'}
              Criado como um projeto de TCC, o The Cycle tem sua relevância embasada na simplicidade, aproximando
              os consumidores das instituições de coleta e, consequentemente, agilizando o processo de conscientização
              da sociedade.
              

          
              </Text> 
          </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    paddingHorizontal: 3,
    paddingBottom: 0,
    backgroundColor: '#FFF'
  },
  header:{
    alignItems:'center',
    width: 190,
    height:45,
    resizeMode: 'stretch',
    marginBottom:5,
    marginTop:40,
    source:'../../imagens/header.png'
  },
  card:{
    backgroundColor: '#68C655',
    width: '100%',
    height: '91%',
    borderBottomRightRadius: 120,
    overflow: 'hidden',
    marginTop: 16,
  },
  textoSobre:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    margin: 20,
    lineHeight: 30,
    fontSize: 16,
    textAlign:'justify',
    color: '#FFF'
  },
  Title:{
    color: '#FFF',
    fontSize: 20,
    marginTop: 24,
    marginLeft: 20
  },
  iconeApp:{
    width:170,
    height:170,
    resizeMode:'stretch',
    alignSelf:'center',
    marginTop: 15
  }
});