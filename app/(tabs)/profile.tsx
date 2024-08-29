import { COLORS, FONTS, icons, images, SIZES } from "@/constants";
import styles from "@/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
     Image,
     Pressable,
     SafeAreaView,
     ScrollView,
     Text,
     TextInput,
     TouchableWithoutFeedback,
     View,
} from "react-native";

const Profile = () => {
     return (
          <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
               <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: SIZES.large }}>
                         <View
                              style={{
                                   display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",
                              }}
                         >
                              <View style={{ width: 80, height: 80 }}>
                                   <Image
                                        source={icons.profile}
                                        resizeMode="contain"
                                        style={{
                                             borderRadius: 15,
                                             width: "100%",
                                             height: "100%",
                                        }}
                                   />
                              </View>
                              <Text
                                   style={{
                                        fontFamily: FONTS.poppins.regular,
                                        fontSize: SIZES.small,
                                   }}
                              >
                                   BitsVally
                              </Text>
                              <Text
                                   style={{
                                        fontFamily: FONTS.poppins.regular,
                                        fontSize: SIZES.xSmall,
                                        color: COLORS.muted,
                                   }}
                              >
                                   bitsV@lly@gmail.com
                              </Text>
                              {/* <Pressable
                                   style={{
                                        backgroundColor: COLORS.secondary,
                                        paddingHorizontal: 20,
                                        borderRadius: 10,
                                        paddingVertical: 10,
                                   }}
                              >
                                   <Text
                                        style={{
                                             color: COLORS.white,
                                             fontFamily: FONTS.poppins.regular,
                                             fontSize: SIZES.small,
                                        }}
                                   >
                                        Edit profile
                                   </Text>
                              </Pressable> */}
                              <View
                                   style={{
                                        paddingVertical: 20,
                                        width: "100%",
                                        gap: 10,
                                   }}
                              >
                                   <View
                                        style={{
                                             width: "100%",
                                             alignItems: "flex-start",
                                        }}
                                   >
                                        <Text
                                             style={{
                                                  fontFamily:
                                                       FONTS.poppins.regular,
                                                  fontSize: SIZES.xSmall,
                                                  color: COLORS.secondary,
                                             }}
                                        >
                                             Name
                                        </Text>
                                        <TextInput
                                             style={{
                                                  fontFamily:
                                                       FONTS.poppins.regular,
                                                  fontSize: SIZES.xSmall,
                                                  borderStyle: "solid",
                                                  borderWidth: 1,
                                                  borderBlockColor:
                                                       COLORS.secondary,
                                                  width: "100%",
                                                  paddingHorizontal: 20,
                                                  paddingVertical: 10,
                                                  borderRadius: 5,
                                                  color: COLORS.secondary,
                                             }}
                                             value="bitsVally"
                                        />
                                   </View>
                                   <View
                                        style={{
                                             width: "100%",
                                             alignItems: "flex-start",
                                        }}
                                   >
                                        <Text
                                             style={{
                                                  fontFamily:
                                                       FONTS.poppins.regular,
                                                  fontSize: SIZES.xSmall,
                                                  color: COLORS.secondary,
                                             }}
                                        >
                                             Email
                                        </Text>
                                        <TextInput
                                             style={{
                                                  fontFamily:
                                                       FONTS.poppins.regular,
                                                  fontSize: SIZES.xSmall,
                                                  borderStyle: "solid",
                                                  borderWidth: 1,
                                                  borderBlockColor:
                                                       COLORS.secondary,
                                                  width: "100%",
                                                  paddingHorizontal: 20,
                                                  paddingVertical: 10,
                                                  borderRadius: 5,
                                                  color: COLORS.secondary,
                                             }}
                                             value="bitsV@lly@gmail.com"
                                        />
                                   </View>
                                   <View
                                        style={{
                                             width: "100%",
                                             alignItems: "flex-start",
                                        }}
                                   >
                                        <Text
                                             style={{
                                                  fontFamily:
                                                       FONTS.poppins.regular,
                                                  fontSize: SIZES.xSmall,
                                                  color: COLORS.secondary,
                                             }}
                                        >
                                             Password
                                        </Text>
                                        <TextInput
                                             secureTextEntry={true}
                                             style={{
                                                  fontFamily:
                                                       FONTS.poppins.regular,
                                                  fontSize: SIZES.xSmall,
                                                  borderStyle: "solid",
                                                  borderWidth: 1,
                                                  borderBlockColor:
                                                       COLORS.secondary,
                                                  width: "100%",
                                                  paddingHorizontal: 20,
                                                  paddingVertical: 10,
                                                  borderRadius: 5,
                                                  color: COLORS.secondary,
                                             }}
                                             value="bitsV@lly@gmail.com"
                                        />
                                   </View>
                                   <Pressable
                                        style={{
                                             backgroundColor: COLORS.primary,
                                             width: 140,
                                             paddingHorizontal: 10,
                                             paddingVertical: 10,
                                             borderRadius: 5,
                                        }}
                                   >
                                        <Text
                                             style={{
                                                  fontFamily:
                                                       FONTS.poppins.medium,
                                                  fontSize: SIZES.xSmall,
                                                  textAlign: "center",
                                                  color: "white",
                                             }}
                                        >
                                             Confirm Changes
                                        </Text>
                                   </Pressable>
                              </View>
                              <View style={{ width: "100%", gap: 5 }}>
                                   <Pressable
                                        onPress={() =>
                                             router.navigate("/auth/login")
                                        }
                                        style={{
                                             display: "flex",
                                             width: "100%",
                                             flexDirection: "row",
                                             gap: 10,
                                             justifyContent: "flex-start",
                                             alignItems: "center",
                                             backgroundColor: "#ececec",
                                             paddingHorizontal: 20,
                                             paddingVertical: 10,
                                             borderRadius: 10,
                                        }}
                                   >
                                        <MaterialIcons
                                             name="logout"
                                             size={24}
                                             color="tomato"
                                        />
                                        <Text
                                             style={{
                                                  ...styles.textSmall,
                                                  color: "tomato",
                                             }}
                                        >
                                             Logout
                                        </Text>
                                   </Pressable>
                                   <Pressable
                                        onPress={() =>
                                             router.navigate("/auth/login")
                                        }
                                        style={{
                                             display: "flex",
                                             width: "100%",
                                             flexDirection: "row",
                                             gap: 10,
                                             justifyContent: "flex-start",
                                             alignItems: "center",
                                             backgroundColor: "#ececec",
                                             paddingHorizontal: 20,
                                             paddingVertical: 10,
                                             borderRadius: 10,
                                        }}
                                   >
                                        <MaterialIcons
                                             name="delete"
                                             size={24}
                                             color={COLORS.secondary}
                                        />
                                        <Text
                                             style={{
                                                  ...styles.textSmall,
                                                  color: COLORS.secondary,
                                             }}
                                        >
                                             Delete my account
                                        </Text>
                                   </Pressable>
                              </View>
                         </View>
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
};

export default Profile;
