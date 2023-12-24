import "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return <Drawer screenOptions={{ headerShown: false, drawerType: "slide" }} />;
}
