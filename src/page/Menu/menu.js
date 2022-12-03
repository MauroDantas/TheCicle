import React, {useRef} from "react";
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, useColorScheme} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import {GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Menu() {
  let colorScheme = useColorScheme();

  const modalizeVisible1 = useRef(null);
  function onOpen1() {
    modalizeVisible1.current?.open();
  }

  const modalizeVisible2 = useRef(null);
  function onOpen2() {
    modalizeVisible2.current?.open();
  }

  const modalizeVisible3 = useRef(null);
  function onOpen3() {
    modalizeVisible3.current?.open();
  }

  const modalizeVisible4 = useRef(null);
  function onOpen4() {
    modalizeVisible4.current?.open();
  }

  const modalizeVisible5 = useRef(null);
  function onOpen5() {
    modalizeVisible5.current?.open();
  }

  const modalizeVisible6 = useRef(null);
  function onOpen6() {
    modalizeVisible6.current?.open();
  }

  const modalizeVisible7 = useRef(null);
  function onOpen7() {
    modalizeVisible7.current?.open();
  }

  const modalizeVisible8 = useRef(null);
  function onOpen8() {
    modalizeVisible8.current?.open();
  }

  const modalizeVisible9 = useRef(null);
  function onOpen9() {
    modalizeVisible9.current?.open();
  }

  const modalizeVisible10 = useRef(null);
  function onOpen10() {
    modalizeVisible10.current?.open();
  }

  const modalizeVisible11 = useRef(null);
  function onOpen11() {
    modalizeVisible11.current?.open();
  }

  const modalizeVisible12 = useRef(null);
  function onOpen12() {
    modalizeVisible12.current?.open();
  }

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
                  onPress={onOpen1}            
                  >
                  <AntDesign name="infocirlceo" size={20} color="#C65555"/>        
                  </TouchableOpacity>

                  <TouchableOpacity 
                  style={styles.botao}
                  onPress={onOpen2}            
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
                onPress={onOpen3}            
                >
                <AntDesign name="infocirlceo" size={20} color="#006553"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen4}            
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
                    onPress={onOpen5}            
                    >
                    <AntDesign name="infocirlceo" size={20} color="#FABA32"/>        
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.botao}
                    onPress={onOpen6}            
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
                onPress={onOpen7}            
                >
                <AntDesign name="infocirlceo" size={20} color="#003E65"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen8}            
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
                onPress={onOpen9}            
                >
                <AntDesign name="infocirlceo" size={20} color="#604033"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen10}            
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
                onPress={onOpen11}            
                >
                <AntDesign name="infocirlceo" size={20} color="#647681"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen12}            
                >
                <FontAwesome name="recycle" size={24} color="#647681" />      
                </TouchableOpacity>
              </View>
            </View>
          </View>  
        </View>
        </ScrollView>
        
        {/*Janelas do plástico*/}
        <Modalize
        ref={modalizeVisible1}
        modalHeight={700}     
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#C65555'}}
        >
          <ScrollView style={[styles.modalContainer, {backgroundColor:'#C65555', height:700}]}>
          <Image style={styles.imgModal} source={require('../../imagens/Plastic.png')}/>
          <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Onde plástico é usado?</Text>
          <Text style={{color:'white', textAlign:'justify'}}>
           •	O lixo plástico está presente em diversos utensílios do cotidiano e algumas dessas peças não podem ser recicladas, como cabos de panela, teclados de computador, isopor e adesivos; {'\n'}
          •	Já nos recicláveis, podemos citar tampas, garrafas PET, sacos plásticos, baldes de plástico e potes. {'\n'}
          </Text>

          <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problemas do Descarte Indevido:</Text>

          <Text style={{color:'white', textAlign:'justify'}}>
          •	Pode causar enchentes devido aos entupimentos de valas e bueiros; {'\n'}
          •	Causa poluição visual; {'\n'}
          •	Afeta gravemente o ecossistema, chegando até a matar animais; {'\n'}
          •	Recipientes com resíduos podem atrair animais transmissores de doenças. {'\n'}
          </Text>    
          </ScrollView>      
        </Modalize>

        <Modalize
        ref={modalizeVisible2}
        modalHeight={700}
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#C65555'}}
        >
          <View style={[styles.modalContainer, {backgroundColor:'#C65555', height:700}]}>

          <ScrollView style={{marginBottom:10}}>
          <Image style={styles.imgModal} source={require('../../imagens/Plastic.png')}/>
          <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como descartar o plástico?</Text>
          <Text style={{color:'white', textAlign:'justify'}}>
          •	Primeiramente veja se a embalagem plástica pode ser reutilizada para outro fim, como exemplo, temos garrafas pet que viram vasos de planta; {'\n'}
          •	No descarte, limpe a embalagem e separe em 2 lixos: o comum, contendo lixos que não podem ser reciclados, e o lixo seco, contendo lixos recicláveis. {'\n'}
          </Text> 

          <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como é Feita a Reciclagem:</Text>

          <Text style={{color:'white', textAlign:'justify'}}>
          •	O processo começa pela separação em 2 grupos de acordo com suas características; {'\n'}
          1. Os Termoplásticos que podem ser reciclados, afinal são derretidos e remodelados em outras embalagens; {'\n'}
          2. Os termorrígidos que não derretem quando aquecidos, logo não são reciclados. {'\n'} {'\n'}                      
          </Text>    
          </ScrollView>            
          </View>              
        </Modalize>
        
        {/*Modais do vidro*/}
        <Modalize
        ref={modalizeVisible3}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#006553'}}
        >
          <View style={[styles.modalContainer, {backgroundColor:'#006553', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Vidro.png')}/>
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>O que é o vidro?</Text> 
            <Text style={{color:'white', textAlign:'justify'}}>
            •	Atualmente o vidro possui uma importância no dia-a-dia igual ao plástico, sua versatilidade é tanta que ele é 100% reciclável, então qualquer tipo de copo, embalagem, garrafas inteiros ou quebrados, podem ser reciclados. {'\n'}
            </Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problemas do Descarte Indevido:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            •	Pode acabar cortando as pessoas causando infecções; {'\n'}
            •	Demora entre 4 mil a 1 milhão de anos para se decompor; {'\n'}
            •	Não reduz a alta extração legal e ilegal da areia para sua produção. {'\n'}
            </Text>
            </ScrollView> 
          </View>               
        </Modalize>

        <Modalize
        ref={modalizeVisible4}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#006553'}}
        >
          <View style={[styles.modalContainer, {backgroundColor:'#006553', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Vidro.png')}/>
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como descartar o vidro?</Text>          
            <Text style={{color:'white', textAlign:'justify'}}>
            •	Para que não haja risco de corte, coloque os pedaços de vidro dentro de uma caixinha, ou então embrulhe em folhas de jornal; {'\n'}
            •	Coloque-o no lixo seco e, se possível, identifique que o conteúdo é vidro com uma etiqueta. {'\n'}
            </Text>
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como é Feita a Reciclagem:</Text>
            <Text style={{color:'white', textAlign:'justify'}}>
            •	O vidro é lavado para retirar os resíduos e em seguida triturado; {'\n'}
            •	Já em formato de cacos, é aquecido e fundido numa temperatura acima de 1300ºC, possibilitando a modelagem de novos copos, garrafas e etc.{'\n'} {'\n'}
            </Text>    
            </ScrollView> 
          </View>            
        </Modalize>

        {/*Modais do aluminio*/}
        <Modalize
        ref={modalizeVisible5}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#FABA32'}}
        >
          <View style={[styles.modalContainer, {backgroundColor:'#FABA32', height:700}]}>                
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/aluminio.png')}/>                
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>O que é o alumínio?</Text>
            <Text style={{color:'white', textAlign:'justify'}}>
            •	O alumínio é um dos materiais mais abundantes no planeta, isso reflete-se na sua viabilidade econômica tanto que qualquer alumínio pode ser reciclado. {'\n'}
            </Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problema do descarte indevido:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>                    
            •	Assim como o plástico, pode gerar enchentes que tiram a moradia das pessoas; {'\n'} 
            •	Recipientes com resíduos podem atrair animais transmissores de doenças. {'\n'} 
            </Text>    
            </ScrollView> 
          </View>            
        </Modalize>

        <Modalize
        ref={modalizeVisible6}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#FABA32'}}
        >
          <View style={[styles.modalContainer, {backgroundColor:'#FABA32', height:700}]}>                
            <ScrollView style={{marginBottom:10}}>
              <Image style={styles.imgModal} source={require('../../imagens/aluminio.png')}/>                
              <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como descartar o alumínio?</Text>
              <Text style={{color:'white', textAlign:'justify'}}>
              •	Deve-se higienizar o alumínio e colocar ele no lixo seco. Caso não seja possível, descarte no lixo normal.{'\n'} 
              </Text> 
                        
              <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como é feita a reciclagem:</Text> 

              <Text style={{color:'white', textAlign:'justify'}}>
              •	O alumínio é separado das impurezas, para então ser picado, prensado e compactado. {'\n'}
              •	Fundido à 700ºC, seu estado líquido é transformado em chapas para produzir novas latinhas e outros objetos. {'\n'} {'\n'}
              </Text>    
            </ScrollView>   
          </View>             
        </Modalize>

        {/*Modais do papel*/}
        <Modalize
        ref={modalizeVisible7}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#003E65'}}
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#003E65', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Papel.png')}/>                
            <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Qual papel é reciclável?</Text>              
            <Text style={{color:'white', textAlign:'justify'}}>    
            •	Quando falamos de papéis não recicláveis temos adesivos, fita crepe, papel higiênico, papel toalha, etiquetas. {'\n'}
            •	Podemos citar como recicláveis aparas de papel, papelão, cartolinas, cartões, fotocópias e etc.{'\n'}
            </Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problemas do Descarte Indevido:</Text>

            <Text style={{color:'white', textAlign:'justify'}}> 
            •	Papeis mais resistentes como panfletos podem entupir bueiros, gerando enchentes;{'\n'}
            •	Se o papel não for rasgado para ir ao lixo, dados pessoais podem vazar.{'\n'}
            </Text>
            </ScrollView>
          </View>           
        </Modalize>

        <Modalize
        ref={modalizeVisible8}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#003E65'}}
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#003E65', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Papel.png')}/>                
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como reciclar o papel?</Text>              
            <Text style={{color:'white', textAlign:'justify'}}>
            •	Lembrando que nem todos os tipos de papel podem ser reciclados, apenas os que estão limpos e secos. {'\n'}
            •	Separando-os dos demais resíduos, basta rasga-los em pedaços e coloca-los no lixo seco. {'\n'}
            </Text> 

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como é Feita a Reciclagem:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            •	Para produzir papel novo, as fibras velhas do papel são misturadas com fibras novas, gerando uma pasta; {'\n'}
            •	Essa pasta é refinada para ter maior qualidade e resistência, tendo o seu fim como um material seco e formatado para retornar ao mercado. {'\n'} {'\n'}
            </Text>    
            </ScrollView> 
          </View>           
        </Modalize>

        {/*Modais do Lixo orgânico*/}
        <Modalize
        ref={modalizeVisible9}
        modalHeight={700}    
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#604033'}}    
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#604033', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Organica.png')}/>                
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>O que é o lixo orgânico?</Text>              
            <Text style={{color:'white', textAlign:'justify'}}>
            •	Lixo orgânico é todo resíduo gerado por um ser vivo, ou seja, pode ser de origem vegetal ou animal; {'\n'}
            •	Temos como exemplo restos de verduras, legumes, frutas e outros tipos de alimentos. {'\n'}
            </Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problemas do Descarte Indevido:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            •	São os resíduos que mais atraem animais transmissores de doenças; {'\n'}
            •	Causam um mau cheiro tremendo. 
            </Text>    
            </ScrollView>  
          </View>           
        </Modalize>

        <Modalize
        ref={modalizeVisible10}
        modalHeight={700}     
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#604033'}}       
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#604033', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Organica.png')}/>                
            <Text style={{color:'white', fontSize:18, marginBottom:5, fontWeight:'bold'}}>Como descartar o lixo orgânico?</Text>              
            <Text style={{color:'white', textAlign:'justify'}}>
            •	O lixo orgânico não pode ser misturado com o lixo seco, pois o chorume solto é um líquido poluente resultado da decomposição dos resíduos orgânicos; {'\n'}
            •	Por isso, ele deve ser descartado no lixo comum, ou então, usado para fazer a compostagem. {'\n'} 
            </Text> 

            <Text style={{color:'white', fontSize:18, marginBottom:5, fontWeight:'bold'}}>Como é feita a reciclagem?</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            •	Para realizar a compostagem são necessárias 3 caixas plásticas empilhadas em níveis diferentes, sendo que nas 2 superiores devem haver pequenos furos; {'\n'}
            •	A caixa do topo deve ser forrada com folhas secas, em seguida com terras e minhocas, e por cima os resíduos orgânicos; {'\n'}
            •	Quando a do topo estiver cheia, sua posição deve ser trocada com a do meio, já a última caixa serve para coletar o líquido orgânico.
            </Text>    
            </ScrollView>
          </View>           
        </Modalize>

        {/*Modais do Lixo Eletrônico*/}
        <Modalize
        ref={modalizeVisible11}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#647681'}}    
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#647681', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Eletronico.png')}/>                
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}> O que é lixo eletrônico?</Text>      
            <Text style={{color:'white', textAlign:'justify'}}>
            Podemos dividir esse lixo em 4 categorias básicas para reciclagem:{'\n'}
            •	Grandes equipamentos como geladeiras, micro-ondas, TVs e etc.;    {'\n'} 
            •	Pequenos equipamentos e eletro-portáteis como torradeiras, ventiladores, rádios e etc;   {'\n'}
            •	Equipamentos de Informática como computadores, celulares, notebooks e etc.; {'\n'}
            •	Pilhas e bateria portáteis. {'\n'}
            </Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problemas do Descarte Indevido:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            •	Por conterem variadas substâncias tóxicas, eles podem contaminar o solo e os lençóis freáticos e colocar em risco a saúde; {'\n'}
            •	Os outros componentes como o plástico presentes nesses equipamentos, podem poluir o meio ambiente. {'\n'}
            </Text>
            </ScrollView>
          </View>          
        </Modalize>

        <Modalize
        ref={modalizeVisible12}
        modalHeight={700}       
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#647681'}}    
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#647681', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Eletronico.png')}/>                
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como descartar o lixo eletrônico?</Text>              
            <Text style={{color:'white', textAlign:'justify'}}>
            •	Basta levar o lixo em pontos de descarte, você pode encontra-los no site https://greeneletron.org.br/ e com exceção de lâmpadas,  eletrônicos e pilhas podem ser reciclados. {'\n'}
            </Text>
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como é feita a reciclagem:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            •	Equipamentos eletrônicos são feitos de diversos componentes diferentes, portanto, os aparelhos são desmontados e suas peças são separadas; {'\n'}
            •	Já separadas de acordo com suas características, tem destinações corretas para que não afetem o meio ambiente, além de não serem limitadas na reciclagem apenas para fabricar novos eletrônicos.
            </Text>    
            </ScrollView> 
          </View>           
        </Modalize>
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
  modalizeEstilo:{
    
  },
  modalContainer:{
    padding:10,
    borderRadius:20,
    flex:1
  },
  header:{
    alignItems:'center',
    flexWrap:'wrap',
    marginBottom:20,
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
  }
});