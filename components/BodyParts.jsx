import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bodyparts } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { usePathname, useRouter } from 'expo-router';


const BodyParts = () => {
    const router = useRouter();
    return (
        <View className = "mx-4">
            <Text 
                style={{fontSize: hp(3)}} 
                className="font-semibold text-neutral-700"
            >
                Exercises
            </Text>

            <FlatList 
                data={bodyparts}
                numColumns={2}
                keyExtractor={ item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: hp(2), paddingTop: hp(2)}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={({item,index}) => <BodyPartCard router={router} index={index} item={item}/>}
            />

        </View>
    )
}

export default BodyParts

const BodyPartCard = ({item,router , index}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => router.push({pathname: '/exercises',params: item}) } 
                style={{width: wp(44), height: wp(52),}}
                className="flex justify-end p-4 mb-4"
            >
                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={{width: wp(44), height: wp(52)}}
                    className="rounded-3xl absolute"
                />
                <LinearGradient 
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={{width: wp(44), height: hp(15)}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                    className="absolute bottom-0 rounded-b-3xl"
                >
                    <Text
                        style={{fontSize: hp(2.5)}}
                        className="text-white font-bold text-center tracking-wide"
                    >
                        {item?.name}
                    </Text>
                </LinearGradient>

            </TouchableOpacity>
        </View>
    )
}