import { COLORS } from "@/constants";
import styles from "@/styles";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import React from "react";
import { Pressable, View, Text } from "react-native";

const Option = ({
     text,
     isSelected,
     selectedIndex,
     answerIndex,
     handlePress,
     optionIndex,
}: {
     text: string;
     isSelected: boolean;
     answerIndex: number;
     selectedIndex: number | null;
     handlePress: () => void;
     optionIndex: number;
}) => {
     const isCorrectAnswer = answerIndex === optionIndex;

     return (
          <Pressable
               onPress={handlePress}
               style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    padding: 10,
                    borderWidth: 1,
                    borderColor: isSelected
                         ? isCorrectAnswer
                              ? "green"
                              : "tomato"
                         : COLORS.secondary,
                    borderRadius: 5,
               }}
          >
               <View
                    style={{
                         width: 20,
                         height: 20,
                         borderWidth: 2,
                         borderRadius: 10,
                         borderColor: isSelected
                              ? isCorrectAnswer
                                   ? "green"
                                   : "tomato"
                              : COLORS.secondary,
                         justifyContent: "center",
                         alignItems: "center",
                    }}
               >
                    {isSelected && (
                         <FontAwesome
                              name={isCorrectAnswer ? "check" : "times"}
                              size={14}
                              color={isCorrectAnswer ? "green" : "tomato"}
                         />
                    )}
               </View>
               <Text style={{ ...styles.textSmall, color: COLORS.secondary }}>
                    {text}
               </Text>
          </Pressable>
     );
};

export default Option;
