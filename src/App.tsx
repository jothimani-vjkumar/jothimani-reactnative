import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainStack from './navigation'

const App = () => {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

