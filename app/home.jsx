import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';

const home = () => {
  return (
    <SafeAreaView className="flex-1 flex bg-white space-y-5" edges={['top']}>
      <StatusBar style='dark' />
      
      <View className="flex-row items-center justify-between mx-5">
          <View className="space-y-2">
            <Text style={{fontSize: hp(4.5)}} className="tracking-wider font-bold text-neutral-700">READY TO</Text>
            <Text style={{fontSize: hp(4.5)}} className="tracking-wider font-bold text-rose-500">WORKOUT</Text>
          </View>
        

        <View className="flex justify-center items-center space-y-2">
          <Image source={require('../assets/images/avatar.jpg')} 
            className="rounded-full"
            style={{width: hp(6), height: hp(6)}}
          />

          <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{width: hp(5), height: hp(5)}}
          >
            <Icon name="bell" size={hp(3)} color="gray" />
          </View>

        </View> 
      </View>

      <View>
        <ImageSlider />
      </View>

      <View className="flex-1">
        <BodyParts />
      </View>

    </SafeAreaView>
  )
}

export default home