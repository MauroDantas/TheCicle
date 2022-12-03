import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import {useNavigation} from '@react-navigation/native';
import { View, Text, StyleSheet, Image, Alert, useColorScheme } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

const Points = () => {
  let colorScheme = useColorScheme();
  const [initialPosition, setInitialPosition] = useState([0, 0]);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Oooops...', 'Precisamos de sua permissão para obter a localização');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      console.log(latitude, longitude);

      setInitialPosition([
        latitude,
        longitude
      ])
    }

    loadPosition();
  }, []);

  const navigation = useNavigation()

  return (
    <>
      <View style={[styles.container, {backgroundColor: colorScheme === 'light' ? '#fff' : 'rgb(45, 45, 45)'}]}>

      <View style={styles.header}>
      <Image style={{width: 190, height:45, resizeMode:'stretch'}} source={colorScheme === 'light' ? 
      require('../../imagens/header.png') : require('../../imagens/headerEscuro.png')}/>
      </View>

        <View style={styles.mapContainer}>
          { initialPosition[0] !== 0 && (
            <MapView 
              style={styles.map} 
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
                <Marker 
                  style={styles.mapMarker}
                  onPress={() => navigation.navigate('Fevelho')}
                  coordinate={{ 
                    latitude: -23.6331875,
                    longitude: -46.7835117, 
                  }}
                  title={"Reciclagem Ferro Velho"}
                  description={"Companhia de Reciclagem"}
                >
                  <View style={styles.mapMarkerContainer} >
                    <Image style={styles.mapMarkerImage}   source={require('../../imagens/Ferro.jpg')  } />
                    <Text style={styles.mapMarkerTitle} >Ferro Velho</Text>              
                  </View>
                </Marker>

                <Marker 
                  style={styles.mapMarker}
                  onPress={() => navigation.navigate('Recgional')}
                  coordinate={{ 
                    latitude: -23.6284907,
                    longitude: -46.7921142, 
                  }}
                  title={"Reciclagem Regional"}
                  description={"Instituição de Catadores"}
                >
                  <View style={styles.mapMarkerContainer} >
                    <Image style={styles.mapMarkerImage}   source={require('../../imagens/Recgional.png')  } />
                    <Text style={styles.mapMarkerTitle} >RecRegional</Text>                
                  </View>
                </Marker>

                <Marker 
                  style={styles.mapMarker}
                  onPress={() => navigation.navigate('Estre')}
                  coordinate={{ 
                    latitude: -23.6125882,
                    longitude: -46.800891, 
                  }}
                  title={"Reciclagem Estre"}
                  description={"Companhia de Reciclagem"}
                >
                  <View style={styles.mapMarkerContainer} >
                    <Image style={styles.mapMarkerImage}   source={require('../../imagens/Estre.jpg')  } />
                    <Text style={styles.mapMarkerTitle} >Estre</Text>                
                  </View>
                </Marker>
            </MapView>
          ) }
        </View>

      </View>

    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 0 + Constants.statusBarHeight,
    backgroundColor: '#FFF'
  },

  title: {
    fontSize: 20,
    marginTop: 24,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80, 
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: '#68C655',
    flexDirection: 'column',
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center'
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitle: {
    flex: 1,
    color: '#FFF',
    fontSize: 13,
    lineHeight: 23,
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  header:{
    alignItems:'center',
    marginBottom:1,
    marginTop:10
  },
});

export default Points;