import PasswordInputField from "@/components/common/auth/PasswordInputField";
import TextInputField from "@/components/common/auth/TextInputField";
import Button from "@/components/common/buttons/Button";
import Logo from "@/components/common/header/Logo";
import ScreenBtn from "@/components/common/header/screenBtn/ScreenBtn";
import { COLORS, FONTS, icons, SIZES } from "@/constants";
import styles from "@/styles";
import { Link, router, Stack } from "expo-router";
import React, { useState } from "react";
import {
     SafeAreaView,
     ScrollView,
     Text,
     TouchableOpacity,
     View,
} from "react-native";
type User = {
     email: string;
     name?: string;
     password: string;
};
const login = () => {
     const [userData, setUserData] = useState<User>({
          email: "",
          password: "",
     });

     const handleChange = (key: string, value: string) => {
          console.log(`updatin field ${key} with ${value} `);
          setUserData((prev) => {
               return { ...prev, [key]: value };
          });
     };

     return (
          <>
               <Stack.Screen
                    options={{
                         headerTitle: "",
                         headerLeft: () => (
                              <ScreenBtn
                                   dimension="80%"
                                   handlePress={() => router.back()}
                                   iconUrl={icons.back}
                              />
                         ),
                         headerRight: () => <Logo />,
                         headerShadowVisible: false,
                    }}
               />
               <SafeAreaView
                    style={{
                         display: "flex",
                         flex: 1,
                         backgroundColor: COLORS.white,
                         justifyContent: "center",
                    }}
               >
                    <ScrollView>
                         <View
                              style={{
                                   padding: SIZES.xLarge,
                                   gap: 20,
                                   alignItems: "center",
                                   justifyContent: "center",
                              }}
                         >
                              <Text
                                   style={{
                                        ...styles.heading,
                                        color: COLORS.secondary,
                                   }}
                              >
                                   Login
                              </Text>
                              <View style={{ gap: 10 }}>
                                   <TextInputField
                                        placeholder="Enter email"
                                        value={userData.email}
                                        onChangeText={handleChange}
                                        field="email"
                                   />
                                   <PasswordInputField
                                        placeholder="Enter password"
                                        value={userData.password}
                                        onChangeText={handleChange}
                                        field="password"
                                   />
                              </View>
                              <TouchableOpacity
                                   style={{
                                        backgroundColor: COLORS.primary,
                                        width: 200,
                                        paddingHorizontal: 20,
                                        paddingVertical: 10,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 5,
                                   }}
                                   onPress={() => {}}
                              >
                                   <Text
                                        style={{
                                             fontSize: SIZES.xLarge,
                                             color: COLORS.white,
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                        }}
                                   >
                                        Login
                                   </Text>
                              </TouchableOpacity>

                              <Button
                                   text={"Continue with"}
                                   iconUrl={icons.google}
                              />
                              <Button
                                   text={"Continue with"}
                                   iconUrl={icons.facebook}
                              />
                              <View
                                   style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 5,
                                   }}
                              >
                                   <Text
                                        style={{
                                             color: COLORS.secondary,
                                             fontFamily: FONTS.poppins.regular,
                                        }}
                                   >
                                        Can't login?
                                   </Text>
                                   <Link
                                        href="auth/register"
                                        style={{
                                             color: COLORS.primary,
                                             fontFamily: FONTS.poppins.medium,
                                        }}
                                   >
                                        create an acoount!
                                   </Link>
                              </View>
                         </View>
                    </ScrollView>
               </SafeAreaView>
          </>
     );
};

export default login;
