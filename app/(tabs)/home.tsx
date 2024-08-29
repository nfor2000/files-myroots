import { COLORS, FONTS, images, SIZES } from "@/constants";
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
     ImageBackground,
} from "react-native";

const Home = () => {
     return (
          <SafeAreaView
               style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
               }}
          >
               <ScrollView>
                    <View>
                         <View style={{ height: 240 }}>
                              <ImageBackground
                                   style={{
                                        backgroundColor: "black",
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: 10,
                                   }}
                                   resizeMode="cover"
                                   source={images.danse}
                              >
                                   <View
                                        style={{
                                             position: "absolute",
                                             top: 0,
                                             left: 0,
                                             right: 0,
                                             bottom: 0,
                                             backgroundColor: "rgba(0,0,0,0.6)",
                                             zIndex: 0,
                                        }}
                                   ></View>
                                   <Text
                                        style={{
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                             color: COLORS.white,
                                             fontSize: SIZES.xLarge,
                                        }}
                                   >
                                        Discover your roots
                                   </Text>
                                   <TouchableOpacity
                                        style={{
                                             backgroundColor: COLORS.primary,
                                             width: 200,
                                             paddingHorizontal: 20,
                                             paddingVertical: 8,
                                             display: "flex",
                                             justifyContent: "center",
                                             alignItems: "center",
                                             borderRadius: 5,
                                        }}
                                        onPress={() =>
                                             router.push("/(tabs)/explore")
                                        }
                                   >
                                        <Text
                                             style={{
                                                  fontSize: SIZES.large,
                                                  color: COLORS.white,
                                                  fontFamily:
                                                       FONTS.irishGrover
                                                            .regular,
                                             }}
                                        >
                                             Explore
                                        </Text>
                                   </TouchableOpacity>
                              </ImageBackground>
                         </View>
                         <View style={{ padding: SIZES.xLarge }}>
                              <View
                                   style={{
                                        flexDirection: "row",
                                        justifyContent: "center",
                                   }}
                              >
                                   <Text
                                        style={{
                                             fontSize: 16,
                                             color: COLORS.secondary,
                                             fontFamily: FONTS.poppins.regular,
                                             textAlign: "center",
                                        }}
                                   >
                                        Welcome to our culture learning app! Our
                                        mission is to provide a platform where
                                        you can explore and immerse yourself in
                                        the rich tapestry of your heritage.
                                   </Text>
                              </View>
                         </View>
                         <View
                              style={{
                                   padding: SIZES.xLarge,
                                   backgroundColor: COLORS.secondary,
                              }}
                         >
                              <View
                                   style={{
                                        flexDirection: "row",
                                        justifyContent: "center",
                                   }}
                              >
                                   <Text
                                        style={{
                                             fontSize: 16,
                                             color: COLORS.white,
                                             fontFamily: FONTS.poppins.regular,
                                             textAlign: "center",
                                        }}
                                   >
                                        Uncover the traditions, stories, and
                                        practices that have shaped your culture
                                        for generations. Dive deep into the
                                        vibrant history and customs that make
                                        your heritage unique.
                                   </Text>
                              </View>
                         </View>
                         <View style={{ padding: SIZES.xLarge }}>
                              <View
                                   style={{
                                        justifyContent: "center",
                                        alignContent: "center",
                                        gap: 10,
                                   }}
                              >
                                   <Text
                                        style={{
                                             fontSize: SIZES.small,
                                             color: COLORS.secondary,
                                             fontFamily: FONTS.poppins.regular,
                                             textAlign: "center",
                                        }}
                                   >
                                        Join a diverse community of learners who
                                        share a passion for exploring their
                                        cultural heritage. Engage in
                                        discussions, share experiences, and
                                        forge connections that transcend borders
                                        and generations.
                                   </Text>
                                   <TouchableOpacity
                                        style={{
                                             backgroundColor: COLORS.secondary,
                                             width: 200,
                                             paddingHorizontal: 20,
                                             paddingVertical: 8,
                                             display: "flex",
                                             justifyContent: "center",
                                             alignItems: "center",
                                             borderRadius: 5,
                                             margin: "auto",
                                        }}
                                        onPress={() =>
                                             router.push("/auth/login")
                                        }
                                   >
                                        <Text
                                             style={{
                                                  fontSize: SIZES.large,
                                                  color: COLORS.white,
                                                  fontFamily:
                                                       FONTS.irishGrover
                                                            .regular,
                                             }}
                                        >
                                             Join us
                                        </Text>
                                   </TouchableOpacity>
                              </View>
                         </View>
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
};

export default Home;
