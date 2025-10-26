import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SIgn Up</Text>
      <Button title="Sign in" onPress={() => router.push("/sign-in")} />
    </View>
  );
};

export default SignIn;
