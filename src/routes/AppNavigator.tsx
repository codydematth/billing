import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "./routes.types";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "../pages/login/Login";
import { Signup } from "../pages/signup/Signup";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { CustomerForm } from "../components/CustomerForm/CustomerForm";
import { Ionicons, MaterialIcons, Foundation,AntDesign,FontAwesome5 } from "@expo/vector-icons";
import { ActivityBar } from "../components/ActivityBar/ActivityBar";
import { Actions } from "../pages/actions/Actions";

const RootStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const ButtonNavTabs = () => {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false}} >
      <Tab.Screen  name="Home" component={Dashboard} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={24} color="black"/>

        )}}/>
      <Tab.Screen name="Forms" component={Actions} options={{
        tabBarLabel: 'Forms',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="pluscircle" size={24} color="black" />
        )}}/>
      <Tab.Screen name="Support" component={SettingsScreen} options={{
        tabBarLabel: 'Support',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="user-alt" size={24} color="black" />
        )}}/>
    </Tab.Navigator>
  );
};
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Group>
          <RootStack.Screen name="Login" component={Login}/>
          <RootStack.Screen name="Signup" component={Signup} />
          <RootStack.Screen name="Dashboard" component={ButtonNavTabs} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: "modal" }}>
          <RootStack.Screen name="CustomerForm" component={CustomerForm} options={{headerTitle: 'Customer', headerShown: true}}/>
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
