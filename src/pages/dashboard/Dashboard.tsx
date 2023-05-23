import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Card } from "../../components/Card/Card";
import { Divider, Provider, useTheme } from "react-native-paper";
import { ActivityBar } from "../../components/ActivityBar/ActivityBar";
import { CustomerForm } from "../../components/CustomerForm/CustomerForm";
import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/routes.types";
import { Ionicons, MaterialIcons, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const dummyData = [
  {
    type: 'customer',
    meta: {
      id: '1',
      name: 'Ayodeji Peter',
      date: '2022-01-03',
      time: '8:45 AM'
    }
  },
  {
    type: 'bill',
    meta: {
      id: '2',
      name: 'Dayo Akinwunmi',
      date: '2021-12-02',
      time: '8:50 AM'
    }
  },
  {
    type: 'Other',
    meta: {
      id: '3',
      name: "Deji Olawale",
      date: '2021-11-30',
      time: '7:40 AM'
    }
  },
  {
    type: 'bill',
    meta: {
      id: '5',
      name: 'Timi Tunmise',
      date: '2021-11-10',
      time: '6:40 AM'
    }
  },
  {
    type: 'payment trasaction',
    meta: {
      id: '6',
      name: "Deji Olawale",
      date: '2020-10-31',
      time: '7:40 AM'
    }
  },
]

type Props = NativeStackScreenProps<RootStackParamList>;

export const Dashboard = ({ navigation }: Props) => {
  const { colors } = useTheme();
  const renderItem = ({ item }: any) => (
    <ActivityBar type={item.type} name={item.meta.name} date={item.meta.date} time={item.meta.time} />
  );
  return (
    <>

      <View style={[styles.container,{backgroundColor: colors.white}]}>
        <StatusBar barStyle={'default'} />
        <View style={[styles.topBarContainer,{backgroundColor: colors.white}]}>
          <View style={{}}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require("./../../../assets/leadcrm.png")}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "red",
                  borderRadius: 50,
                }}
              />
              <Text style={{ paddingLeft: 3 }}>Welcome, Ade</Text>
            </View>
          </View>

          <Link to={{ screen: "Login" }}>
            <MaterialCommunityIcons name="logout" size={34} color={colors.primary} />
          </Link>
        </View>
        <View>

          <View style={styles.cardContainer}>
            <Card
              cardOnly={true}
              icon={<Image
                source={require("./../../../assets/Star1.png")}

              />} text="Customers"
              subText="30k"
              backgroundColor={colors.linearGradientSecondary}
            />
            <Card
              cardOnly={true}
              icon={<Image
                source={require("./../../../assets/Star1.png")}

              />}
              text="Staff"
              subText="200"
              backgroundColor={colors.linearGradientPrimary}

            />
          </View>

          <View style={styles.cardContainer}>
            <Card
              cardOnly={true}
              icon={<Image
                source={require("./../../../assets/Star1.png")}

              />} text="Revenue"
              subText="30k"
              backgroundColor={colors.linearGradientSecondary}

            />
            <Card
              cardOnly={true}
              icon={<Image
                source={require("./../../../assets/Star1.png")}

              />} text="Queries"
              subText="200"
              backgroundColor={colors.linearGradientPrimary}

            />
          </View>
        </View>
        <View style={{ padding: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 30 }}>Activities</Text>
          <SafeAreaView style={{ height: 450 }}>
            <FlatList
              data={dummyData}
              renderItem={renderItem}
              keyExtractor={item => item.meta.id}
            />
          </SafeAreaView>
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarContainer: {
    alignSelf: "stretch",
    height: 100,
    flexDirection: "row", // row
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    alignContent: "center",
  },
  statusBar: {
    height: Constants.statusBarHeight,
  },
  cardContainer: {
    width: "100%",
    flexDirection: "row", // row
    // alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
    marginTop: 10,
  },
});
