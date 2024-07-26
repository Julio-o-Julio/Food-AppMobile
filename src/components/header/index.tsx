import { View, Pressable, Text } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="flex flex-col">
        <Text>Localização</Text>
        <View>
          <Feather name="map-pin" size={14} color="#dd0000" />
          <Text>Campo Grande - MS</Text>
        </View>
      </View>

      <Pressable className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}
