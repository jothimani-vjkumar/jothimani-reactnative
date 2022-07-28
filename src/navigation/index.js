import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { screen } from '../const';
import AddScreen from '../screen/addScreen';
import Home from '../screen/home';
import ProductView from '../screen/productView';


const Stack = createNativeStackNavigator();


const MainStack = () => (
    <Stack.Navigator initialRouteName={screen.HOME} screenOptions={{headerShown:false}}>
        <Stack.Screen name={screen.HOME} component={Home} />
        <Stack.Screen name={screen.ADDPRODUCT} component={AddScreen} />
        <Stack.Screen name={screen.PRODUCTVIEW} component={ProductView} />
    </Stack.Navigator>
)

export default MainStack