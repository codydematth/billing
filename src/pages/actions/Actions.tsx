import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View,StatusBar, StyleSheet } from "react-native";
import { ActionBar } from "../../components/ActionBar/ActionBar";
import { RootStackParamList } from "../../routes/routes.types";

type Props = NativeStackScreenProps<RootStackParamList>;


export const Actions = ({ navigation }: Props) => {
  
    
    return (
    <>
        <View style={styles.container}>
            <StatusBar barStyle={'default'}/>
            <ActionBar iconType={''} title={"Customer Form"} description={"Create a Customer Form"} onPress={() => navigation.navigate("CustomerForm")}/>
            <ActionBar iconType={''} title={"Name"} description={"De"}/>
            <ActionBar iconType={''} title={"Name"} description={"De"}/>

        </View>  
    </>
)
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   flexDirection:'column',
    //   alignItems: "center",
    //   justifyContent: "space-between",
      margin:10

    }}
)