import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { iconChecker } from "../../services/utils/iconChecker";
import { Ionicons, MaterialIcons, Foundation,MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/routes.types";



interface IActionBar {
  iconType:string,
  title:string,
  description:string,
  onPress?: () => void;

}

type Props = NativeStackScreenProps<RootStackParamList>;

export const ActionBar = (props:IActionBar) => {
  
  return (
    <TouchableOpacity style={styles.activityContainer} onPress={props.onPress}>
      <Image
        style={{ width: 60, height: 60, margin: 10, borderRadius: 50 }}
        source={{ uri: iconChecker(props.iconType)}}
      />
    {/* <View>
      {props.type}
    </View> */}

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={[
              styles.text,
              { fontSize: 25, marginTop: 5, marginBottom: 5 },
            ]}
          >
            {props.title}
          </Text>
          <Text style={[styles.text, { color: "darkgrey" }]}>
            {props.description}
          </Text>
        </View>
        <View style={{paddingRight:5}}>
        <MaterialCommunityIcons name="greater-than" size={24} color="black" />
        </View>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    width: "100%",
    // height: 100,
    flexDirection: "row", // row
    backgroundColor: "white",
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
