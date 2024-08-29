import Option from "@/components/common/buttons/Option";
import { COLORS, FONTS, SIZES } from "@/constants";
import styles from "@/styles";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const QuizPage = () => {
     const bamendaQuestions = [
          {
               question:
                    "What is the traditional occupation of many Bamenda people?",
               options: ["Fishing", "Farming", "Trading", "Hunting"],
               answer: 1, // Index position of "Farming"
          },
          {
               question:
                    "Which language is predominantly spoken by the Bamenda people?",
               options: ["English", "French", "Bambara", "Tikar"],
               answer: 0, // Index position of "English"
          },
          {
               question:
                    "What is a significant cultural practice among the Bamenda people?",
               options: [
                    "Bullfighting",
                    "Mask carving",
                    "Drumming",
                    "Wrestling",
               ],
               answer: 2, // Index position of "Drumming"
          },
          {
               question:
                    "Which traditional ceremony is commonly celebrated by the Bamenda people?",
               options: [
                    "Yam Festival",
                    "Cowrie Shell Ceremony",
                    "Kola Nut Ritual",
                    "Palm Wine Feast",
               ],
               answer: 0, // Index position of "Yam Festival"
          },
          {
               question:
                    "Who are the traditional rulers of the Bamenda people?",
               options: ["Obas", "Emirs", "Fons", "Sultans"],
               answer: 2, // Index position of "Fons"
          },
          {
               question:
                    "Which musical instrument is commonly used in Bamenda cultural performances?",
               options: ["Kora", "Balafon", "Talking Drum", "Shekere"],
               answer: 1, // Index position of "Balafon"
          },
          {
               question:
                    "Which staple food is commonly consumed by the Bamenda people?",
               options: ["Couscous", "Fufu", "Injera", "Garri"],
               answer: 1, // Index position of "Fufu"
          },
          {
               question:
                    "What type of religion is mainly practiced among the Bamenda people?",
               options: [
                    "Christianity",
                    "Islam",
                    "Hinduism",
                    "Traditional African Religions",
               ],
               answer: 0, // Index position of "Christianity"
          },
          {
               question:
                    "What is the traditional attire worn by Bamenda women during cultural events?",
               options: ["Boubou", "Kente", "Gele", "Toghu"],
               answer: 3, // Index position of "Toghu"
          },
          {
               question: "Which famous mountain is located near Bamenda?",
               options: [
                    "Mount Kilimanjaro",
                    "Mount Cameroon",
                    "Mount Everest",
                    "Mount Kinabalu",
               ],
               answer: 1, // Index position of "Mount Cameroon"
          },
     ];

     const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<
          null | number
     >(null);
     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

     if (currentQuestionIndex === bamendaQuestions.length) {
          router.navigate("/(tabs)/explore");
          return;
     }

     let currentQuestion = bamendaQuestions[currentQuestionIndex];
     const handlePress = (index: number) => {
          setSelectedQuestionIndex(index);
     };
     return (
          <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
               <ScrollView>
                    <View
                         style={{
                              padding: SIZES.large,
                              flex: 1,
                              justifyContent: "center",
                              gap: 28,
                         }}
                    >
                         <Text
                              style={{
                                   ...styles.heading,
                                   color: COLORS.secondary,
                              }}
                         >
                              Quesins {currentQuestionIndex + 1}/
                              {bamendaQuestions.length}
                         </Text>

                         <Text
                              style={{
                                   ...styles.textSmall,
                                   color: COLORS.secondary,
                              }}
                         >
                              {currentQuestion.question}
                         </Text>
                         <View style={{ gap: 10 }}>
                              {currentQuestion.options.map((option, index) => (
                                   <Option
                                        key={option}
                                        text={option}
                                        selectedIndex={selectedQuestionIndex}
                                        handlePress={() =>
                                             selectedQuestionIndex !== null
                                                  ? () => {}
                                                  : handlePress(index)
                                        }
                                        answerIndex={currentQuestion.answer}
                                        optionIndex={index}
                                        isSelected={
                                             selectedQuestionIndex === index
                                        }
                                   />
                              ))}
                         </View>
                         <Pressable
                              style={{
                                   backgroundColor: COLORS.primary,
                                   width: 200,
                                   paddingHorizontal: 20,
                                   paddingVertical: 10,
                                   display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   borderRadius: 5,
                                   marginHorizontal: "auto",
                              }}
                              onPress={() => {
                                   if (selectedQuestionIndex === null) return;
                                   setCurrentQuestionIndex(
                                        (prev: number) => (prev += 1)
                                   );
                                   setSelectedQuestionIndex(null);
                              }}
                         >
                              <Text
                                   style={{
                                        fontSize: SIZES.small,
                                        color: COLORS.white,
                                        fontFamily: FONTS.poppins.medium,
                                   }}
                              >
                                   Next
                              </Text>
                         </Pressable>
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
};

export default QuizPage;
