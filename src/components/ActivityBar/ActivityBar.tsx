import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { iconChecker } from "../../services/utils/iconChecker";
import { Ionicons, MaterialIcons, Foundation } from "@expo/vector-icons";
import { activityBarBgChanger } from "../../services/utils/activityBarBgChanger";


interface IActivityBar {
  type:string,
  name:string,
  date:string,
  time:string
  
}
export const ActivityBar = (props:IActivityBar) => {
  
console.log(iconChecker(props.type))

  
  return (
    <View
      style={[
        styles.activityContainer,
        {backgroundColor: props.type && activityBarBgChanger(props.type)},
      ]}>
      <Image
        style={{width: 60, height: 60, margin: 10, borderRadius: 50}}
        source={require(`../../../assets/icon.png`)}
        // source={require(`../../../assets/${iconChecker(props.type)}`)}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={[
              styles.text,
              {fontSize: 25, marginTop: 5, marginBottom: 5},
            ]}>
            {props.name}
          </Text>
          <Text style={[styles.text, {color: 'darkgrey'}]}>{props.type}</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <Text style={[styles.text, {fontSize: 20}]}>{props.date}</Text>
          <Text style={[styles.text, {fontSize: 15}]}>{props.time}</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  activityContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row", // row
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    borderRadius:10
  },
  text: {
    color: "black",
  },
});
