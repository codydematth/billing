import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/routes/AppNavigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { customerService } from './src/services/customer/customer';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      secondary: string
      secondaryTwo:string
      default:string
      white:string,
      black:string
      linearGradientPrimary: string[];
      linearGradientSecondary: string[];

    }
    interface Theme {
      myOwnProperty: boolean;
    }
  }
}

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#184E77',
    default:'#52B69A',
    secondary:'#C6D4DA',
    secondaryTwo:'#008037',
    white:'#fff',
    black:'#000',
    linearGradientPrimary : ['#07A4D3' , "#0C478C"],
    linearGradientSecondary : ["#52B69A", "#1F876A" ],

  },
};


export default function App() {
//   const customerUrl = `${process.env.BASE_URL}/customer`
// console.log(customerUrl)

console.log(customerService.fetchCustomersByAgency('dsw'))
return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
