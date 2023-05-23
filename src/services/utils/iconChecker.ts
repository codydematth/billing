import React, { ReactNode } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// interface IConChecker {
//     type : string
// }

export const iconChecker = (type:string) => {

    if (type === "customer") {
      return 'customer-phone.png'
    } else if (type === "bill") {
      return 'bill.png'
    } else
      return 'icon.png'
  };