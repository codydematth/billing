import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ImageBackgroundBase,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Modal, Portal, Button, Provider, useTheme } from "react-native-paper";
import { Login } from "../../pages/login/Login";
import { Signup } from "../../pages/signup/Signup";
import { RootStackParamList } from "../../routes/routes.types";
import { CustomerForm } from "../CustomerForm/CustomerForm";

interface ICard {
  icon: JSX.Element;
  text: string;
  subText?: string;
  cardOnly?: boolean;
  onPress?: () => void;
  backgroundColor: string[];

  // navigation ?: {[key:string| number] : string }
  navigation?: any;
}

export const Card = (props: ICard) => {
  const { height, width } = Dimensions.get('window');
  const { colors } = useTheme();


  return (
    <>
      <LinearGradient
        // start={{ x: 0, y: -1 }}
        // end={{x: 1, y: 1 }}
        colors={props.backgroundColor && props.backgroundColor}
        style={[styles.cardContainer, { width: width / 2 - 20, height: width / 4 - 5 }]}
      >
        <View style={styles.cardTextContainner}>
          <View style={ styles.textAlignMent}>
            <Text textBreakStrategy={'highQuality'} style={{ fontSize: 20, color: colors.white }}>{`${props.text}`}</Text>
            <Text textBreakStrategy={'highQuality'} style={{ fontSize: 40, color: colors.white, paddingTop: 4 }}>{`${props.subText}`}</Text>
          </View>
          <View>{props.icon}</View>
        </View>
        {/* </TouchableOpacity> */}
      </LinearGradient>

    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
  },
  cardTextContainner: {
    flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 20
  },
  textAlignMent: { flex: 1, justifyContent: 'space-between', alignContent: 'flex-end', }


})
