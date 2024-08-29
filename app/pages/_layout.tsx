import ScreenBtn from "@/components/common/header/screenBtn/ScreenBtn";
import { COLORS, FONTS, icons } from "@/constants";
import { router, Stack } from "expo-router";
import React from "react";

const PagesLayout = () => {
     return (
          <Stack>
               <Stack.Screen
                    name="gastronomy"
                    options={{
                         headerTitle: "Gastronomy",
                         headerTitleStyle: {
                              color: COLORS.white,
                              fontFamily: FONTS.irishGrover.regular,
                         },
                         headerStyle: { backgroundColor: COLORS.secondary },
                         headerTitleAlign: "center",
                         headerLeft: () => (
                              <ScreenBtn
                                   dimension="80%"
                                   handlePress={() => router.back()}
                                   iconUrl={icons.backLight}
                              />
                         ),
                         headerShadowVisible: false,
                    }}
               />
               <Stack.Screen
                    name="activities"
                    options={{
                         headerTitle: "Activities",
                         headerTitleStyle: {
                              color: COLORS.white,
                              fontFamily: FONTS.irishGrover.regular,
                         },
                         headerStyle: { backgroundColor: COLORS.secondary },
                         headerTitleAlign: "center",
                         headerLeft: () => (
                              <ScreenBtn
                                   dimension="80%"
                                   handlePress={() => router.back()}
                                   iconUrl={icons.backLight}
                              />
                         ),
                         headerShadowVisible: false,
                    }}
               />

               <Stack.Screen
                    name="history"
                    options={{
                         headerTitle: "History",
                         headerTitleStyle: {
                              color: COLORS.white,
                              fontFamily: FONTS.irishGrover.regular,
                         },
                         headerStyle: { backgroundColor: COLORS.secondary },
                         headerTitleAlign: "center",
                         headerLeft: () => (
                              <ScreenBtn
                                   dimension="80%"
                                   handlePress={() => router.back()}
                                   iconUrl={icons.backLight}
                              />
                         ),
                         headerShadowVisible: false,
                    }}
               />
               <Stack.Screen
                    name="art"
                    options={{
                         headerTitle: "Art and Culture",
                         headerTitleStyle: {
                              color: COLORS.white,
                              fontFamily: FONTS.irishGrover.regular,
                         },
                         headerStyle: { backgroundColor: COLORS.secondary },
                         headerTitleAlign: "center",
                         headerLeft: () => (
                              <ScreenBtn
                                   dimension="80%"
                                   handlePress={() => router.back()}
                                   iconUrl={icons.backLight}
                              />
                         ),
                         headerShadowVisible: false,
                    }}
               />
               <Stack.Screen
                    name="quiz"
                    options={{
                         headerTitle: "Quiz",
                         headerTitleStyle: {
                              color: COLORS.white,
                              fontFamily: FONTS.irishGrover.regular,
                         },
                         headerStyle: { backgroundColor: COLORS.secondary },
                         headerTitleAlign: "center",
                         headerLeft: () => (
                              <ScreenBtn
                                   dimension="80%"
                                   handlePress={() => router.back()}
                                   iconUrl={icons.backLight}
                              />
                         ),
                         headerShadowVisible: false,
                    }}
               />
               <Stack.Screen
                    name="desc"
                    options={{
                         headerShown: false,
                    }}
               />
          </Stack>
     );
};

export default PagesLayout;
