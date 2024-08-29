import Logo from "@/components/common/header/Logo";
import ScreenBtn from "@/components/common/header/screenBtn/ScreenBtn";
import { COLORS, icons } from "@/constants";
import { router, Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
     return (
          <Stack>
               <Stack.Screen
                    name="login"
                    options={{
                         headerTitle: "",
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
               <Stack.Screen
                    name="register"
                    options={{
                         headerTitle: "",
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

export default AuthLayout;
