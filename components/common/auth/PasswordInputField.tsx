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

const PasswordInputField = ({
     placeholder,
     value,
     onChangeText,
     field,
}: props) => {
     const [showText, setShowText] = useState(false);
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
                    secureTextEntry={showText}
                    placeholder="Enter password"
                    style={{
                         fontSize: SIZES.large,
                         flex: 1,
                         color: COLORS.secondary,
                         fontFamily: FONTS.poppins.regular,
                    }}
               />
               <TouchableOpacity onPress={() => setShowText((prev) => !prev)}>
                    {showText ? (
                         <Octicons
                              name="eye"
                              size={30}
                              color={COLORS.secondary}
                         />
                    ) : (
                         <Octicons
                              name="eye-closed"
                              size={30}
                              color={COLORS.secondary}
                         />
                    )}
               </TouchableOpacity>
          </View>
     );
};

export default PasswordInputField;
