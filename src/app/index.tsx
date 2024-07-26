import { View, ScrollView } from "react-native";
import { Header } from "../components/header";
import Constants from "expo-constants";
import { Banner } from "../components/banner";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView className="bg-slate-200">
      <View style={{ marginTop: statusBarHeight + 8 }} className="w-full px-4">
        <Header />

        <Banner />
      </View>
    </ScrollView>
  );
}
