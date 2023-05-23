import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ButtonIndex } from "../../components/Button/ButtonIndex";
import { InputField } from "../../components/InputField/InputField";
import { RootStackParamList } from "../../routes/routes.types";


type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

export const Signup = ({navigation}:Props) => {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    checkPassword: "",
  });


  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Email"
            value={state.email}
            onChangeText={(val) => setState((p) => ({ ...p, email: val }))}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Fullname"
            value={state.fullname}
            onChangeText={(val) => setState((p) => ({ ...p, fullname: val }))}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Password"
            value={state.password}
            onChangeText={(val) => setState((p) => ({ ...p, password: val }))}
            type="password"
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Confirm password"
            value={state.checkPassword}
            onChangeText={(val) =>
              setState((p) => ({ ...p, checkPassword: val }))
            }
            type="password"
          />
        </View>
        <View style={styles.inputContainer}>
          <ButtonIndex
            onPress={() => {navigation.navigate('Dashboard',{userId:''})}}
            buttonText="Register"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    padding: 10,
  },
});
