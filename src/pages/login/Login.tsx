import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { ButtonIndex } from "../../components/Button/ButtonIndex";
import { InputField } from "../../components/InputField/InputField";
import { RootStackParamList } from "../../routes/routes.types";

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

export const Login = ({ navigation }: Props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.p}>
          Kindly authenticate to gain access into your account.
        </Text>

        <View style={styles.inputContainer}>
          <InputField
            placeholder="Email"
            value={state.email}
            onChangeText={(val) => setState((p) => ({ ...p, email: val }))}
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
          <Text style={styles.forgotPassText}>forgot password?</Text>
          <ButtonIndex
            onPress={() => {
              navigation.navigate("Dashboard", { userId: "" });
            }}
            buttonText="Login"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Don’t have an account?</Text>
          
          <Link to={{ screen: "Signup" }}>
            <Text>Register</Text>
          </Link>
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
