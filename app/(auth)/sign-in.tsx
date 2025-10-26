import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import React from "react";
import { View } from "react-native";

const SignIn = () => {
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your email"
        value={""}
        onChangeText={(text) => {}}
        label="Email"
        keyboardType="email-address"
      />
      <CustomButton />
    </View>
  );
};

export default SignIn;
