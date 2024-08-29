import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "@/constants";

type props = {
     placeholder: string;
     value: string;
     onChangeText: (key: string, value: string) => void;
     field: string;
};

const TextInputField = ({ placeholder, value, onChangeText, field }: props) => {
     return (
          <View
               style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    paddingHorizontal: 20,
                    borderWidth: 1,
                    borderBlockColor: COLORS.primary,
                    paddingVertical: 10,
                    borderRadius: 5,
               }}
          >
               <TextInput
                    placeholder={placeholder ?? "Enter ..."}
                    style={{
                         fontSize: SIZES.medium,
                         flex: 1,
                         color: COLORS.secondary,
                         fontFamily: FONTS.poppins.regular,
                    }}
                    value={value}
                    onChangeText={(text) => onChangeText(field, text)}
               />
          </View>
     );
};

export default TextInputField;
