import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';


const Index = () => {
    const router = useRouter()
    return (
        <View className="flex-1 flex items-center justify-end">
            <Image source={require('../assets/images/welcome.jpg')} className="h-full w-full absolute"  entering={FadeIn} exiting={FadeOut} />
            <LinearGradient
                colors={['transparent','#18181b']}
                style={{width: wp(100), height: hp(70)}}
                start={{x: 0.5, y:0}}
                end={{x: 0.5, y:0.8}}
                className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View className="flex items-center" entering={FadeInDown.delay(100)}>
                    <Text className="text-white font-bold tracking-wide" style={{fontSize: hp(5)}}>
                        Best <Text className="text-rose-500">Workouts</Text> 
                    </Text> 
                    <Text className="text-white font-bold tracking-wide" style={{fontSize: hp(5)}}>
                        for you 
                    </Text> 
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200)}>
                    <TouchableOpacity
                        onPress={() => router.push('home')}
                        style={{height: hp(7), width: wp(80)}}
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                    >
                        <Text style={{fontSize: hp(3)}} className="font-bold text-white tracking-widest">Get Started</Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    )
}

export default Index