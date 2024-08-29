import Logo from "@/components/common/header/Logo";
import ScreenBtn from "@/components/common/header/screenBtn/ScreenBtn";
import { COLORS, FONTS, icons } from "@/constants";
import { router, Stack } from "expo-router";
import React from "react";

const DescLayout = () => {
     return (
          <Stack>
               <Stack.Screen
                    name="art-info"
                    options={{
                         headerTitle: "",
                         headerTitleStyle: {
                              color: COLORS.white,
                              fontFamily: FONTS.irishGrover.regular,
                         },
                         headerStyle: { backgroundColor: "rgba(0,0,0,0.6)" },
                         headerTitleAlign: "center",
                         headerLeft: () => (
                              <ScreenBtn
                                   dimension="80%"
                                   handlePress={() => router.back()}
                                   iconUrl={icons.backLight}
                              />
                         ),
                         headerRight: () => <Logo color={COLORS.white} />,
                         headerShadowVisible: false,
                    }}
               />
               <Stack.Screen
                    name="delicacy"
                    options={{
                         headerTitle: "",
                         headerTitleStyle: {
                              color: COLORS.white,
                              fontFamily: FONTS.irishGrover.regular,
                         },
                         headerStyle: { backgroundColor: COLORS.white },
                         headerTitleAlign: "center",
                         headerLeft: () => (
                              <ScreenBtn
                                   dimension="80%"
                                   handlePress={() => router.back()}
                                   iconUrl={icons.back}
                              />
                         ),
                         headerRight: () => <Logo color={COLORS.secondary} />,
                         headerShadowVisible: false,
                    }}
               />
          </Stack>
     );
};

export default DescLayout;
