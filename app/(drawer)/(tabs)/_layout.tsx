import { TabBarIcon } from "@/components/navigation'/TabBarIcon";
import { COLORS, FONTS, SIZES } from "@/constants";
import styles from "@/styles";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
     return (
          <Tabs screenOptions={{ headerShown: false }}>
               <Tabs.Screen
                    name="home"
                    options={{
                         tabBarIcon: ({ color, focused }) => (
                              <TabBarIcon
                                   name={focused ? "home" : "home-outline"}
                                   color={
                                        focused
                                             ? COLORS.primary
                                             : COLORS.secondary
                                   }
                              />
                         ),
                         tabBarActiveTintColor: COLORS.primary,
                         tabBarLabelStyle: {
                              fontFamily: FONTS.poppins.regular,
                              fontSize: SIZES.xSmall,
                              textTransform: "capitalize",
                         },
                    }}
               />
               <Tabs.Screen
                    name="explore"
                    options={{
                         tabBarIcon: ({ color, focused }) => (
                              <TabBarIcon
                                   name={
                                        focused ? "compass" : "compass-outline"
                                   }
                                   color={
                                        focused
                                             ? COLORS.primary
                                             : COLORS.secondary
                                   }
                              />
                         ),
                         tabBarActiveTintColor: COLORS.primary,
                         tabBarLabelStyle: {
                              fontFamily: FONTS.poppins.regular,
                              fontSize: SIZES.xSmall,
                              textTransform: "capitalize",
                         },
                    }}
               />
               <Tabs.Screen
                    name="blog"
                    options={{
                         tabBarIcon: ({ color, focused }) => (
                              <TabBarIcon
                                   name={
                                        focused ? "chatbox" : "chatbox-outline"
                                   }
                                   color={
                                        focused
                                             ? COLORS.primary
                                             : COLORS.secondary
                                   }
                              />
                         ),
                         tabBarActiveTintColor: COLORS.primary,
                         tabBarLabelStyle: {
                              fontFamily: FONTS.poppins.regular,
                              fontSize: SIZES.xSmall,
                              textTransform: "capitalize",
                         },
                    }}
               />

               <Tabs.Screen
                    name="profile"
                    options={{
                         tabBarIcon: ({ color, focused }) => (
                              <TabBarIcon
                                   name={focused ? "person" : "person-outline"}
                                   color={
                                        focused
                                             ? COLORS.primary
                                             : COLORS.secondary
                                   }
                              />
                         ),
                         tabBarActiveTintColor: COLORS.primary,
                         tabBarLabelStyle: {
                              fontFamily: FONTS.poppins.regular,
                              fontSize: SIZES.xSmall,
                              textTransform: "capitalize",
                         },
                    }}
               />
          </Tabs>
     );
};

export default TabsLayout;
