import { COLORS, images, SIZES } from "@/constants";
import styles from "@/styles";
import { router } from "expo-router";
import React, { useState } from "react";
import {
     SafeAreaView,
     View,
     ScrollView,
     Text,
     TouchableOpacity,
     Image,
} from "react-native";

const Explore = () => {
     const tabs = [
          "History",
          "Language",
          "Art",
          "Gastronomy",
          "Culture",
          "Activities",
          "Religion",
          "Quiz",
     ];

     const [selectedTab, setSelectedTab] = useState("");

     return (
          <SafeAreaView
               style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
               }}
          >
               <ScrollView>
                    <View>
                         <View style={{ width: "100%", height: 240 }}>
                              <Image
                                   source={images.identity}
                                   style={{ width: "100%", height: "100%" }}
                                   resizeMode="cover"
                              />
                         </View>
                         <View style={{ padding: SIZES.large, gap: 28 }}>
                              <Text
                                   style={{
                                        ...styles.heading,
                                        color: COLORS.primary,
                                   }}
                              >
                                   Discover your true identity.
                              </Text>

                              <View
                                   style={{
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        gap: 5,
                                        paddingVertical: 10,
                                   }}
                              >
                                   {tabs.map((tab) => (
                                        <TouchableOpacity
                                             key={tab}
                                             onPress={() => {
                                                  setSelectedTab(tab);
                                                  router.push(
                                                       `/pages/${tab.toLowerCase()}`
                                                  );
                                             }}
                                             style={{
                                                  backgroundColor:
                                                       selectedTab === tab
                                                            ? COLORS.white
                                                            : COLORS.primary,
                                                  paddingHorizontal: 20,
                                                  paddingVertical: 8,
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
                                                       color:
                                                            selectedTab === tab
                                                                 ? COLORS.primary
                                                                 : COLORS.white,
                                                       ...styles.textSmall,
                                                  }}
                                                  key={tab}
                                             >
                                                  {tab}
                                             </Text>
                                        </TouchableOpacity>
                                   ))}
                              </View>

                              <View>
                                   <Text
                                        style={{
                                             ...styles.heading,
                                             color: COLORS.primary,
                                        }}
                                   >
                                        Related topics
                                   </Text>
                                   <View
                                        style={{
                                             display: "flex",
                                             flexDirection: "row",
                                             justifyContent: "space-between",
                                        }}
                                   >
                                        <View style={{ width: "48%", gap: 4 }}>
                                             <Image
                                                  source={images.eru}
                                                  resizeMode="cover"
                                                  style={{
                                                       width: "100%",
                                                       height: 140,
                                                  }}
                                             />
                                             <Text
                                                  style={{
                                                       ...styles.textLarge,
                                                       color: COLORS.secondary,
                                                  }}
                                             >
                                                  Delicacies
                                             </Text>
                                             <Text
                                                  style={{
                                                       ...styles.textSmall,
                                                       color: COLORS.muted,
                                                  }}
                                             >
                                                  Where every bite tells a
                                                  delicious story!
                                             </Text>
                                        </View>
                                        <View style={{ width: "48%", gap: 4 }}>
                                             <Image
                                                  source={images.danse}
                                                  resizeMode="cover"
                                                  style={{
                                                       width: "100%",
                                                       height: 140,
                                                  }}
                                             />
                                             <Text
                                                  style={{
                                                       ...styles.textLarge,
                                                       color: COLORS.secondary,
                                                  }}
                                             >
                                                  Dance
                                             </Text>
                                             <Text
                                                  style={{
                                                       ...styles.textSmall,
                                                       color: COLORS.muted,
                                                  }}
                                             >
                                                  Stepping to the rhythm of
                                                  tradition!
                                             </Text>
                                        </View>
                                   </View>
                              </View>
                         </View>
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
};

export default Explore;
