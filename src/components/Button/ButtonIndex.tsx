import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useTheme } from 'react-native-paper';


interface IButtonProps{
    buttonText : string
    onPress: () => void
}

export const ButtonIndex = (props:IButtonProps) => {
  const { colors } = useTheme();

return(
    <Button
    style={[styles.button,{backgroundColor: colors.primary}]}
    labelStyle={styles.buttonText}
    color="#fff"
    onPress={props.onPress}
  >
    {props.buttonText}
  </Button>
  );
};

const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      padding: 15,
      borderRadius: 50,
    },
    buttonText: {
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: 15,
    },
  }) 



