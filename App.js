import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme, Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Fevelho from './src/page/Details/Fevelho.js';
import Estre from './src/page/Details/Estre.js';
import Recgional from './src/page/Details/Recgional.js'
import Menu from './src/page/Menu/menu.js';
import Mapa from './src/page/Mapa/Mapa.js';
import Sobre from './src/page/Configuracoes/config.js';

import HowPlastic from './src/page/How/HowPlastic.js';

import WhatPlastic from './src/page/What/WhatPlastic.js';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  let colorScheme = useColorScheme();
  const scheme = useColorScheme();
  return (
    <>
      <Tab.Navigator useLegacyImplementation initialRouteName="Menu" 
      screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colorScheme === 'dark' ? '#2d2d2d' : '#fff' }}}>
        <Tab.Screen 
        name='Menu'
        options={{
          headerShown:false,
          tabBarIcon: () => (<Image source={colorScheme === 'light' ? require("./assets/home_icon.png") : require("./assets/icon_homeWhite.png")} style={{width: 20, height: 20}} />)
          
        }} 
        component={Menu} 
        />
        <Tab.Screen 
        name="Mapa"
        options={{
          headerShown:false,
          tabBarIcon: () => (<Image source={colorScheme === 'light' ? require("./assets/map_icon.png") : require("./assets/map_iconWhite.png")} style={{width: 20, height: 20}} />)
        }} 
         component={Mapa} />
        <Tab.Screen 
        name='Sobre Nós' 
        options={{
          headerShown:false,
          tabBarIcon: () => (<Image source={colorScheme === 'light' ? require("./assets/config_icon.png") : require("./assets/config_iconWhite.png")} style={{width: 20, height: 20}} />)
        }} 
        component={Sobre}/>

      </Tab.Navigator> 
      </>    
  );
}

export default function MapNav(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={App} options={{tabBarShowLabel: false}}/>
    <Stack.Screen name="Fevelho" component={Fevelho} options={{tabBarShowLabel: false}}/>
    <Stack.Screen name="Recgional" component={Recgional} options={{tabBarShowLabel: false}}/> 
    <Stack.Screen name="Estre" component={Estre} options={{tabBarShowLabel: false}}/>
    <Stack.Screen name="HowPlastic" component={HowPlastic} options={{tabBarShowLabel: false}}/>
     
    <Stack.Screen name="WhatPlastic" component={WhatPlastic} options={{tabBarShowLabel: false}}/>        
    </Stack.Navigator>
    </NavigationContainer>
  )
}