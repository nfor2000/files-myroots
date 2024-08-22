import { COLORS, FONTS, SIZES } from "@/constants";
import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
type props = {
     text: string;
     iconUrl: string;
};
const Button = ({ text, iconUrl }: props) => {
     return (
          <TouchableOpacity
               style={{
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    borderColor: COLORS.primary,
                    borderWidth: 2,
                    gap: 10,
               }}
          >
               <Text
                    style={{
                         fontSize: SIZES.xLarge,
                         color: COLORS.primary,
                         fontFamily: FONTS.irishGrover.regular,
                    }}
               >
                    {text}
               </Text>
               <View
                    style={{
                         width: 40,
                         height: 40,
                    }}
               >
                    <Image
                         style={{ width: 40, height: 40 }}
                         resizeMode="cover"
                         source={iconUrl}
                    />
               </View>
          </TouchableOpacity>
     );
};

export default Button;
