import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import HomeScreen from './components/Splash';
import MainScreen from './components/Home';
import SearchScreen from './components/Home/SearchScreen';
import CardScreen from './components/Card/CardScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


AppRegistry.registerComponent("RoomRentalZA", () => App);


const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Drawer=createDrawerNavigator();

const HomeStackScreen = () => (

  <HomeStack.Navigator screenOptions={{headerShown:false}}>
    <HomeStack.Screen name="MainScreen" component={MainScreen}/>
    <HomeStack.Screen name="CardScreen" component={CardScreen}/>
    <HomeStack.Screen name="SearchScreen" component={SearchScreen}/>
  </HomeStack.Navigator>
);

const SplashScreen= () => (

  <MainStack.Navigator screenOptions={{headerShown:false}}>
        <MainStack.Screen name="Splash" component={HomeScreen} />
        <MainStack.Screen name="HomeStackScreen"  children={HomeStackScreen}/>
       
      </MainStack.Navigator>

);

  



const App = () => {
  return (

    
    
    <NavigationContainer>
      
     <Drawer.Navigator>
    <Drawer.Screen name="Home" children={SplashScreen}/>
    <Drawer.Screen name="About" component={HomeStackScreen}/>
  </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App