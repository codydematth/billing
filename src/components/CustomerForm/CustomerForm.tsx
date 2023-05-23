import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonIndex } from "../../components/Button/ButtonIndex";
import { InputField } from "../../components/InputField/InputField";
import { RootStackParamList } from "../../routes/routes.types";
import { Ionicons } from '@expo/vector-icons';
import {KeyboardAwareScrollView} from'react-native-keyboard-aware-scroll-view'
import { useTheme } from "react-native-paper";
import { customerService } from "../../services/customer/customer";

type Props = NativeStackScreenProps<RootStackParamList>;
const dimension = Dimensions.get('window');
const height = dimension.height

export const CustomerForm = ({navigation}:Props) => {
  const [state, setState] = useState<ICustomerForm>({
    id: "",
    cId: "",
    balance: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    zone: "",
    subZone: "",
    agency: {},
    transactions: [],
    isOnline: false,
    isConfirmed: false,
    isDeleted: false,
  });
  
  const handleSubission = () => {
    console.log(state)
    // customerService.createCustomer(state);
  }


 
  return (
    <>

    <SafeAreaView style={styles.container}>
      <Text style={styles.loginText}>Customer Form</Text>
        <Text style={styles.p}>
          Kindly fill in the form providing the necessary information needed.
        </Text>


      {/* <ScrollView style={styles.scrollView}> */}
      <KeyboardAwareScrollView>

        <View style={styles.inputContainer}>
          <InputField
            placeholder="First Name"
            value={state.firstName}
            onChangeText={(val) => setState((p) => ({ ...p, firstName: val }))}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Last Name"
            value={state.lastName}
            onChangeText={(val) => setState((p) => ({ ...p, lastName: val }))}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputField
            placeholder="Email"
            value={state.email}
            onChangeText={(val) => setState((p) => ({ ...p, email: val }))}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Phone no"
            value={state.phone}
            onChangeText={(val) => setState((p) => ({ ...p, phoneNumber: val }))
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Address"
            value={state.address}
            onChangeText={(val) => setState((p) => ({ ...p, address: val }))}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputField
            placeholder="cId"
            value={state.cId}
            onChangeText={(val) => setState((p) => ({ ...p, cId: val }))}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputField
            placeholder="Balance"
            value={state.balance}
            onChangeText={(val) => setState((p) => ({ ...p, balance: val }))}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputField
            placeholder="Zone"
            value={state.zone}
            onChangeText={(val) => setState((p) => ({ ...p, zone: val }))}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputField
            placeholder="Sub Zone"
            value={state.subZone}
            onChangeText={(val) => setState((p) => ({ ...p, subZone: val }))}
          />
        </View>
        <View style={styles.inputContainer}>
          <ButtonIndex onPress={handleSubission} buttonText="Save" />
        </View>
        </KeyboardAwareScrollView>
        {/* </ScrollView> */}
    </SafeAreaView>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: StatusBar.currentHeight,
    // backgroundColor: colors.white,
    height: StatusBar.currentHeight,

  },
  scrollView: {
    paddingVertical:20,
    // marginTop:10,
    paddingHorizontal:20,
    height:height-100

    
  },
  inputContainer: {
    padding: 10,
  },
  loginText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  p: {
    textAlign: "center",
  },
  forgotPassText: {
    textAlign: "right",
  },
});

