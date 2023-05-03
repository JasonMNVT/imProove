import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Categories from '../screens/Categories';
import Activities from '../screens/Activities';
import Dashboard from '../screens/Dashboard';

const Routes = () => {
  const Stack = createStackNavigator();

    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={Home} options={{title: "imProove"}}/>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signUp" component={SignUp} />
          <Stack.Screen name="categories" component={Categories} />
          <Stack.Screen name="activities" component={Activities} />
          <Stack.Screen name="dashboard" component={Dashboard} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes