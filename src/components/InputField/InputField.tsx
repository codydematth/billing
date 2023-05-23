import React, { useState } from 'react';
import {  StyleSheet } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import { color } from 'react-native-reanimated';


interface InputFieldProps {
    value : string 
    onChangeText : (val:string) => void
    type ?: TInputType
    placeholder : string
}

type TInputType = "text" | "textarea" | "email" | "number" | "password" | "date" | "time";


export const InputField = (props:InputFieldProps) => {

    const [show, setShow] = useState<boolean>(false);

    const {colors} =useTheme()
    
    

  return (
    <TextInput
    style={[styles.input,{backgroundColor: colors.secondary}]}
    value={props.value}
    onChangeText = {props.onChangeText}
    placeholder={props.placeholder}
    mode="outlined"
    activeOutlineColor={colors.secondary}
    outlineColor={colors.secondary}
    selectionColor={colors.primary}

    secureTextEntry= {props.type === 'password' ? show ? false : true : false}
    right={
        props.type === 'password' ?
        <TextInput.Icon
          style={styles.border}
          name="lock"
          onPress={() => setShow(!show)}
        /> : ''
      }
  />
  )
};

const styles = StyleSheet.create({
  input: {
    height: 65,
    width: 400,
    fontSize: 20,
  },
  border: {
      height: 30,
      borderRadius: 50,
      width: 30,
    },
})