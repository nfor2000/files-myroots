import { COLORS, FONTS, images, SIZES } from "@/constants";
import { SHADOWS } from "@/constants/themes";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

const Blog = () => {
     return (
          <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
               <ScrollView>
                    <View style={{ padding: SIZES.large, gap: 28 }}>
                         <View
                              style={{
                                   gap: 8,
                                   ...SHADOWS.medium,
                                   backgroundColor: "white",
                              }}
                         >
                              <View style={{ width: "100%", height: 160 }}>
                                   <Image
                                        source={images.bafut}
                                        style={{
                                             width: "100%",
                                             height: "100%",
                                        }}
                                        resizeMode="cover"
                                   />
                              </View>
                              <View style={{ paddingHorizontal: 10 }}>
                                   <Text
                                        style={{
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                             color: COLORS.secondary,
                                             fontSize: SIZES.large,
                                        }}
                                        numberOfLines={2}
                                   >
                                        Exploring Bafut: A Glimpse into
                                        Cameroon's Cultural Gem
                                   </Text>
                                   <Text
                                        style={{
                                             fontFamily: FONTS.poppins.regular,
                                             color: COLORS.muted,
                                             fontSize: SIZES.xSmall,
                                        }}
                                   >
                                        Nestled in the picturesque landscape of
                                        Cameroon lies the enchanting village of
                                        Bafut. Steeped in history and rich in
                                        tradition, Bafut offers a unique glimpse
                                        into the cultural tapestry of this
                                        vibrant African nation.
                                   </Text>
                              </View>
                              <View
                                   style={{
                                        flexDirection: "row",
                                        gap: 20,
                                        alignItems: "center",
                                        paddingHorizontal: 10,
                                        paddingBottom: 10,
                                   }}
                              >
                                   <View
                                        style={{
                                             flexDirection: "row",
                                             gap: 5,
                                             alignItems: "center",
                                        }}
                                   >
                                        <FontAwesome
                                             name="heart"
                                             size={24}
                                             color="tomato"
                                        />
                                        <Text
                                             style={{
                                                  fontFamily:
                                                       FONTS.poppins.regular,
                                                  fontSize: 8,
                                                  color: COLORS.muted,
                                             }}
                                        >
                                             171
                                        </Text>
                                   </View>
                                   <View
                                        style={{
                                             flexDirection: "row",
                                             gap: 5,
                                             alignItems: "center",
                                        }}
                                   >
                                        <FontAwesome
                                             name="comment"
                                             size={24}
                                             color={COLORS.muted}
                                        />
                                        <Text
                                             style={{
                                                  fontFamily:
                                                       FONTS.poppins.regular,
                                                  fontSize: 8,
                                                  color: COLORS.muted,
                                             }}
                                        >
                                             9
                                        </Text>
                                   </View>
                              </View>
                         </View>
                         <View
                              style={{
                                   width: "100%",
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                              }}
                         >
                              <View
                                   style={{
                                        gap: 8,
                                        width: "48%",
                                        ...SHADOWS.medium,
                                        backgroundColor: "#FFF",
                                   }}
                              >
                                   <View style={{ width: "100%", height: 120 }}>
                                        <Image
                                             source={images.bafut}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </View>
                                   <Text
                                        style={{
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                             color: COLORS.secondary,
                                             fontSize: SIZES.small,
                                             marginHorizontal: 10,
                                        }}
                                        numberOfLines={2}
                                   >
                                        Exploring Bafut: A Glimpse into
                                        Cameroon's Cultural Gem
                                   </Text>

                                   <View
                                        style={{
                                             flexDirection: "row",
                                             gap: 20,
                                             alignItems: "center",
                                             paddingHorizontal: 10,
                                             paddingBottom: 10,
                                        }}
                                   >
                                        <View
                                             style={{
                                                  flexDirection: "row",
                                                  gap: 5,
                                                  alignItems: "center",
                                             }}
                                        >
                                             <FontAwesome
                                                  name="heart"
                                                  size={24}
                                                  color="tomato"
                                             />
                                             <Text
                                                  style={{
                                                       fontFamily:
                                                            FONTS.poppins
                                                                 .regular,
                                                       fontSize: 8,
                                                       color: COLORS.muted,
                                                  }}
                                             >
                                                  59
                                             </Text>
                                        </View>
                                        <View
                                             style={{
                                                  flexDirection: "row",
                                                  gap: 5,
                                                  alignItems: "center",
                                             }}
                                        >
                                             <FontAwesome
                                                  name="comment"
                                                  size={24}
                                                  color={COLORS.muted}
                                             />
                                             <Text
                                                  style={{
                                                       fontFamily:
                                                            FONTS.poppins
                                                                 .regular,
                                                       fontSize: 8,
                                                       color: COLORS.muted,
                                                  }}
                                             >
                                                  8
                                             </Text>
                                        </View>
                                   </View>
                              </View>
                              <View
                                   style={{
                                        gap: 8,
                                        width: "48%",
                                        ...SHADOWS.medium,
                                        backgroundColor: "white",
                                   }}
                              >
                                   <View style={{ width: "100%", height: 120 }}>
                                        <Image
                                             source={images.bafut}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </View>
                                   <Text
                                        style={{
                                             fontFamily:
                                                  FONTS.irishGrover.regular,
                                             color: COLORS.secondary,
                                             fontSize: SIZES.small,
                                             marginHorizontal: 10,
                                        }}
                                        numberOfLines={2}
                                   >
                                        Exploring Bafut: A Glimpse into
                                        Cameroon's Cultural Gem
                                   </Text>
                                   <View
                                        style={{
                                             flexDirection: "row",
                                             gap: 20,
                                             alignItems: "center",
                                             paddingHorizontal: 10,
                                             paddingBottom: 10,
                                        }}
                                   >
                                        <View
                                             style={{
                                                  flexDirection: "row",
                                                  gap: 5,
                                                  alignItems: "center",
                                             }}
                                        >
                                             <FontAwesome
                                                  name="heart"
                                                  size={24}
                                                  color="tomato"
                                             />
                                             <Text
                                                  style={{
                                                       fontFamily:
                                                            FONTS.poppins
                                                                 .regular,
                                                       fontSize: 8,
                                                       color: COLORS.muted,
                                                  }}
                                             >
                                                  76
                                             </Text>
                                        </View>
                                        <View
                                             style={{
                                                  flexDirection: "row",
                                                  gap: 5,
                                                  alignItems: "center",
                                             }}
                                        >
                                             <FontAwesome
                                                  name="comment"
                                                  size={24}
                                                  color={COLORS.muted}
                                             />
                                             <Text
                                                  style={{
                                                       fontFamily:
                                                            FONTS.poppins
                                                                 .regular,
                                                       fontSize: 8,
                                                       color: COLORS.muted,
                                                  }}
                                             >
                                                  32
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

export default Blog;
