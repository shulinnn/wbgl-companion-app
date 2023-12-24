import { Link, useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

export default function Page() {
  const router = useRouter();

  return (
    <Link href={"/(drawer)/lobby"}>
      <Text>Race Select</Text>
    </Link>
  );
}
