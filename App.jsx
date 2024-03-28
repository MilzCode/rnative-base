import React from 'react'
import Home from './views/Home'
import About from './views/About'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        // disable default header
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen
          options={{
            animation: 'slide_from_right'
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            animation: 'slide_from_right'
          }}
          name="About"
          component={About}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
