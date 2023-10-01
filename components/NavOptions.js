import { FlatList, Text, TouchableOpacity, View , Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



const data = [
    {
        id: "123",
        title:"Book Cab",
        image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png",
        screen:"MapScreen",
    }
    ,
    {
        id: "456",
        title:"Order Food",
        image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png",
        screen:"EatScreen",
    },
];


const NavOptions = () => {
    const navigation=useNavigation();
  return (
    <FlatList 
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity
                onPress={ () => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 m-2 w-40`}
            >
                <View>
                    <Image 
                        style={{ width: 120, height: 120, resizeMode: 'contain'}}
                        source={{ uri: item.image }}         
                    />
                    <Text style={tw`mt-1 text-base font-semibold pl-5`}>
                        {item.title}
                    </Text>
                    <Icon
                        style={tw` p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright" 
                        color="white" 
                        type="antdesign"
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions;

