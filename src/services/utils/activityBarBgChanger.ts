import React, { ReactNode } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

// interface IConChecker {
//     type : string
// }

export const activityBarBgChanger = (type:string) => {

    if (type === "customer") {
      return "#EDEDED"
    } else if (type === "bill") {
      return "#D4F2EA"
    } 
    else if (type === "payment trasaction") {
      return "#EFD6ED"
    } 
    else
      return "#F9E1E1"
  };