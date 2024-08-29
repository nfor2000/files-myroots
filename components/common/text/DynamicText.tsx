import { COLORS, FONTS, SIZES } from "@/constants";
import styles from "@/styles";
import { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const DynamicText = ({ text }: { text: string }) => {
     const MAX_LINES = 6;
     const [showText, setShowText] = useState(false);
     const [numberOfLines, setNumberOfLines] = useState<number | undefined>(
          undefined
     );
     const [showMoreButton, setShowMoreButton] = useState(false);

     const handleTextLayout = useCallback(
          (e: any) => {
               if (e.nativeEvent.lines.length > MAX_LINES && !showText) {
                    setShowMoreButton(true);
                    setNumberOfLines(MAX_LINES);
               }
          },
          [showText]
     );

     useEffect(() => {
          if (showMoreButton) {
               setNumberOfLines(showText ? undefined : MAX_LINES);
          }
     }, [showText, showMoreButton]);

     return (
          <View>
               <Text
                    style={{
                         ...styles.textSmall,
                         color: "black",
                    }}
                    numberOfLines={numberOfLines}
                    onTextLayout={handleTextLayout}
               >
                    {text}
               </Text>
               {showMoreButton && (
                    <TouchableOpacity
                         onPress={() => setShowText((showText) => !showText)}
                         accessibilityRole="button"
                    >
                         <Text
                              style={{
                                   color: COLORS.primary,
                                   fontFamily: FONTS.poppins.medium,
                                   fontSize: SIZES.small,
                              }}
                         >
                              {showText ? "Read Less" : "Read More"}
                         </Text>
                    </TouchableOpacity>
               )}
          </View>
     );
};

export default DynamicText;
