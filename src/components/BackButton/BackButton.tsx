import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

interface IBackButton{
    onPress: () => void
    text:string
    icon : JSX.Element


}

export const BackButton = (props:IBackButton) =>{
    const { colors } = useTheme();

    const style=StyleSheet.create({
        backButton:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        },
        topBarContainer: {
            alignSelf: "stretch",
            height: 100,
            flexDirection: "row",
            backgroundColor: colors.white,
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            alignContent: "center",
          },
    })

    return (
            <View style={style.topBarContainer}>
          <View style={{}}>
            <View>
            <TouchableOpacity onPress={props.onPress} style={style.backButton}>
                {props.icon}
                <Text style={{fontSize:20, marginLeft:10}}>
                    {props.text}
                </Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        
    )
}


