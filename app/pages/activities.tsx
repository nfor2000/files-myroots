import { COLORS, FONTS, images, SIZES } from "@/constants";
import React from "react";
import {
     SafeAreaView,
     View,
     ScrollView,
     Text,
     Image,
     TextInput,
     Pressable,
} from "react-native";
const ActivitiesPage = () => {
     return (
          <SafeAreaView
               style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
               }}
          >
               <ScrollView>
                    <View style={{ padding: SIZES.xLarge, gap: 28 }}>
                         <Text
                              style={{
                                   fontFamily: FONTS.irishGrover.regular,
                                   color: COLORS.secondary,
                                   fontSize: SIZES.large,
                              }}
                         >
                              Main Activities
                         </Text>
                         <View style={{ flex: 1, gap: 28 }}>
                              <View style={{ gap: 10 }}>
                                   <Text
                                        style={{
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                             color: COLORS.secondary,
                                             fontSize: SIZES.medium,
                                        }}
                                   >
                                        Education
                                   </Text>
                                   <Text
                                        style={{
                                             fontFamily: FONTS.poppins.regular,
                                             color: "black",
                                             fontSize: SIZES.small,
                                        }}
                                   >
                                        Bamenda is a hub for education in
                                        Cameroon, with numerous schools and
                                        educational institutions providing
                                        opportunities for the local population.
                                   </Text>
                                   <View style={{ width: "100%" }}>
                                        <Image
                                             source={images.education}
                                             style={{
                                                  width: "100%",
                                                  height: 200,
                                             }}
                                             resizeMode="cover"
                                        />
                                   </View>
                              </View>
                         </View>
                         <View style={{ flex: 1, gap: 28 }}>
                              <View style={{ gap: 10 }}>
                                   <Text
                                        style={{
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                             color: COLORS.secondary,
                                             fontSize: SIZES.medium,
                                        }}
                                   >
                                        Farming
                                   </Text>
                                   <Text
                                        style={{
                                             fontFamily: FONTS.poppins.regular,
                                             color: "black",
                                             fontSize: SIZES.small,
                                        }}
                                   >
                                        Agriculture is a major economic activity
                                        for the Bamenda people, with crops like
                                        maize, beans, and yams being cultivated
                                        in the fertile highlands.
                                   </Text>
                                   <View style={{ width: "100%" }}>
                                        <Image
                                             source={images.farming}
                                             style={{
                                                  width: "100%",
                                                  height: 200,
                                             }}
                                             resizeMode="cover"
                                        />
                                   </View>
                              </View>
                         </View>
                         <View style={{ flex: 1, gap: 28 }}>
                              <View style={{ gap: 10 }}>
                                   <Text
                                        style={{
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                             color: COLORS.secondary,
                                             fontSize: SIZES.medium,
                                        }}
                                   >
                                        Trade
                                   </Text>
                                   <Text
                                        style={{
                                             fontFamily: FONTS.poppins.regular,
                                             color: "black",
                                             fontSize: SIZES.small,
                                        }}
                                   >
                                        The Bamenda people have a history of
                                        trade, both locally and regionally,
                                        exchanging goods and services with
                                        neighboring communities.
                                   </Text>
                                   <View style={{ width: "100%" }}>
                                        <Image
                                             source={images.trade}
                                             style={{
                                                  width: "100%",
                                                  height: 200,
                                             }}
                                             resizeMode="cover"
                                        />
                                   </View>
                              </View>
                         </View>
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
};

export default ActivitiesPage;
