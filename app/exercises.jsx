import { View, Text ,TouchableOpacity, ScrollView, Image} from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodyPart } from '../api/exerciseDB'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

const Exercises = () => {
    const router = useRouter()
    const [exercises,setExercises] = useState([])

    const item = useLocalSearchParams();
    
    useEffect(() => {
        if(item) getExercises(item.name);
    },[item])
    
    const getExercises = async (bodyPart) => {
        let data = await fetchExercisesByBodyPart(bodyPart);
        setExercises(data)
    }

    return (
        <ScrollView>
            <StatusBar style='light' />
            <Image 
                source={item.image}
                style={{width: wp(100), height: hp(45)}}
                className="rounded-b-[40px]"
            />
            <TouchableOpacity
                onPress={()=>router.back()}
                className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 mt-10 rounded-full"
                style={{width: hp(5.5), height:hp(5.5)}}    
            >
                <Ionicons name="caret-back-outline" size={hp(4)} color="white" />    
            </TouchableOpacity>


            <View className="mx-4 space-y-3 mt-4">N
                <Text 
                    className="font-semibold text-neutral-700"
                    style={{fontSize: hp(3)}}
                >
                    {item.name} Exercises
                </Text>

                <View className="mb-10">

                </View>

            </View>

        </ScrollView>
    )
}

export default Exercises