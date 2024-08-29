import DynamicText from "@/components/common/text/DynamicText";
import { COLORS, FONTS, images, SIZES } from "@/constants";
import styles from "@/styles";
import React from "react";
import { Image, SafeAreaView, ScrollView, View, Text } from "react-native";

const HistoryPage = () => {
     return (
          <SafeAreaView
               style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
               }}
          >
               <ScrollView>
                    <View style={{ gap: 20 }}>
                         <View style={{ width: "100%", height: 240 }}>
                              <Image
                                   source={images.bafut}
                                   style={{ width: "100%", height: "100%" }}
                                   resizeMode="cover"
                              />
                         </View>
                         <View style={{ padding: SIZES.xLarge, gap: 20 }}>
                              <View style={{ gap: 10 }}>
                                   <Text
                                        style={{
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                             color: COLORS.secondary,
                                             fontSize: SIZES.large,
                                        }}
                                   >
                                        Intro
                                   </Text>
                                   <DynamicText
                                        text="Bamenda is the capital of the North West
                                        Region of Cameroon, and it is home to a
                                        diverse group of people known as the
                                        Bamenda people."
                                   />
                              </View>
                              <View style={{ gap: 10 }}>
                                   <Text
                                        style={{
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                             color: COLORS.secondary,
                                             fontSize: SIZES.large,
                                        }}
                                   >
                                        History
                                   </Text>
                                   <DynamicText
                                        text=" The Bamenda people are a subset of the
                                        wider Tikar people who migrated from the
                                        Tikar Plain in present-day Cameroon.
                                        They settled in the Bamenda Highlands,
                                        where they established villages and
                                        developed a rich cultural heritage over
                                        the centuries. The Bamenda region has a
                                        history of trade with neighboring groups
                                        and European colonizers, which has
                                        influenced their culture and way of
                                        life."
                                   />
                              </View>
                              <View style={{ gap: 10 }}>
                                   <Text
                                        style={{
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                             color: COLORS.secondary,
                                             fontSize: SIZES.large,
                                        }}
                                   >
                                        Culture
                                   </Text>
                                   <DynamicText text="The Bamenda people, a subset of the Tikar group in Cameroon, possess a vibrant cultural heritage shaped by their history and activities. They predominantly speak Lamnso and adorn themselves in colorful fabrics with intricate embroidery. Music, dance, and traditional instruments are integral to their ceremonies. Their culinary tradition includes dishes like Ndole and achu. Skilled in wood carvings, pottery, and beadwork, their art depicts cultural beliefs. Engaged in farming, trade, and education, they have a diverse economic landscape. Their religious practices encompass traditional beliefs, Christianity (Catholicism and Protestantism), and Islam. This fusion of traditions forms the rich tapestry of Bamenda culture." />
                              </View>
                         </View>
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
};

export default HistoryPage;
