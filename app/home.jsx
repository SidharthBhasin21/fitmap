import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const home = () => {
  return (
    <SafeAreaView className="flex-1 flex bg-white space-y-5" edges={['top']}>
      <StatusBar style='dark' />
      
      
    </SafeAreaView>
  )
}

export default home