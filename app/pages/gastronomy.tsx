import { COLORS, FONTS, images, SIZES } from "@/constants";
import styles from "@/styles";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
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

const GastronomyPage = () => {
     return (
          <SafeAreaView
               style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
               }}
          >
               <ScrollView>
                    <View style={{ padding: SIZES.xLarge, gap: 28 }}>
                         <View>
                              <Text
                                   style={{
                                        color: COLORS.muted,
                                        fontFamily: FONTS.poppins.regular,
                                        fontSize: SIZES.medium,
                                   }}
                              >
                                   find
                              </Text>
                              <View
                                   style={{
                                        flexDirection: "row",
                                        borderColor: COLORS.muted,
                                        borderWidth: 1,
                                        paddingHorizontal: 20,
                                        height: 50,
                                        alignItems: "center",
                                        borderRadius: 15,
                                   }}
                              >
                                   <TextInput
                                        style={{
                                             flex: 1,
                                             fontFamily: FONTS.poppins.regular,
                                        }}
                                        placeholder="find..."
                                   />
                                   <FontAwesome
                                        name="search"
                                        size={24}
                                        color={COLORS.muted}
                                   />
                              </View>
                         </View>
                         <View>
                              <Text
                                   style={{
                                        ...styles.heading,
                                        color: COLORS.secondary,
                                        marginBottom: 10,
                                   }}
                              >
                                   Top Delicacies
                              </Text>
                              <View
                                   style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                   }}
                              >
                                   <View style={{ width: "48%", gap: 4 }}>
                                        <Image
                                             source={images.eru}
                                             resizeMode="cover"
                                             style={{
                                                  width: "100%",
                                                  height: 140,
                                             }}
                                        />
                                        <Text
                                             style={{
                                                  fontFamily:
                                                       FONTS.irishGrover
                                                            .regular,
                                                  fontSize: SIZES.small,
                                                  color: COLORS.secondary,
                                             }}
                                        >
                                             Eru
                                        </Text>
                                        <Text
                                             style={{
                                                  ...styles.textSmall,
                                                  color: COLORS.muted,
                                             }}
                                             numberOfLines={3}
                                        >
                                             Eru is a traditional Cameroonian
                                             dish that consists of a type of
                                             green leafy vegetable (okazi or
                                             bitterleaf) cooked with protein
                                             like meat, fish, or stockfish.
                                        </Text>
                                   </View>
                                   <View style={{ width: "48%", gap: 4 }}>
                                        <Image
                                             source={images.ekwang}
                                             resizeMode="cover"
                                             style={{
                                                  width: "100%",
                                                  height: 140,
                                             }}
                                        />
                                        <Text
                                             style={{
                                                  fontFamily:
                                                       FONTS.irishGrover
                                                            .regular,
                                                  fontSize: SIZES.small,
                                                  color: COLORS.secondary,
                                             }}
                                        >
                                             Ekwang
                                        </Text>
                                        <Text
                                             style={{
                                                  ...styles.textSmall,
                                                  color: COLORS.muted,
                                             }}
                                             numberOfLines={3}
                                        >
                                              Ekwang is a popular dish from the
                                             Southern part of Cameroon, made
                                             with grated cocoyam wrapped in
                                             banana leaves and cooked in a rich
                                             sauce.
                                        </Text>
                                   </View>
                              </View>
                         </View>
                         <View>
                              <Text
                                   style={{
                                        ...styles.heading,
                                        color: COLORS.secondary,
                                        marginBottom: 10,
                                   }}
                              >
                                   All Delicacies
                              </Text>
                              <View style={{ gap: 28 }}>
                                   <View
                                        style={{
                                             flexDirection: "row",
                                             gap: 10,
                                             alignItems: "center",
                                        }}
                                   >
                                        <View
                                             style={{
                                                  width: 110,
                                                  height: 140,
                                             }}
                                        >
                                             <Image
                                                  resizeMode="cover"
                                                  source={images.ekwang}
                                                  style={{
                                                       width: "100%",
                                                       height: "100%",
                                                  }}
                                             />
                                        </View>
                                        <View style={{ flex: 1, gap: 10 }}>
                                             <Text
                                                  style={{
                                                       fontFamily:
                                                            FONTS.irishGrover
                                                                 .regular,
                                                       fontSize: SIZES.small,
                                                       color: COLORS.secondary,
                                                  }}
                                                  numberOfLines={3}
                                             >
                                                  Ekwang
                                             </Text>
                                             <Text
                                                  style={{
                                                       ...styles.textSmall,
                                                       color: COLORS.muted,
                                                  }}
                                                  numberOfLines={3}
                                             >
                                                  Ekwang is a popular dish from
                                                  the Southern part of Cameroon,
                                                  made with grated cocoyam
                                                  wrapped in banana leaves and
                                                  cooked in a rich sauce.
                                             </Text>
                                             <Pressable
                                                  onPress={() =>
                                                       router.push(
                                                            "/pages/desc/delicacy"
                                                       )
                                                  }
                                                  style={{
                                                       borderWidth: 1,
                                                       borderRadius: 5,
                                                       borderColor:
                                                            COLORS.secondary,
                                                       width: 100,
                                                       display: "flex",
                                                       alignItems: "center",
                                                       justifyContent: "center",
                                                       paddingVertical: 5,
                                                  }}
                                             >
                                                  <Text
                                                       style={{
                                                            fontFamily:
                                                                 FONTS
                                                                      .irishGrover
                                                                      .regular,
                                                            fontSize:
                                                                 SIZES.small,
                                                            color: COLORS.primary,
                                                       }}
                                                       numberOfLines={3}
                                                  >
                                                       Read More
                                                  </Text>
                                             </Pressable>
                                        </View>
                                   </View>
                                   <View
                                        style={{
                                             flexDirection: "row",
                                             gap: 10,
                                             alignItems: "center",
                                        }}
                                   >
                                        <View
                                             style={{
                                                  width: 110,
                                                  height: 140,
                                             }}
                                        >
                                             <Image
                                                  resizeMode="cover"
                                                  source={images.mbongo}
                                                  style={{
                                                       width: "100%",
                                                       height: "100%",
                                                  }}
                                             />
                                        </View>
                                        <View style={{ flex: 1, gap: 10 }}>
                                             <Text
                                                  style={{
                                                       fontFamily:
                                                            FONTS.irishGrover
                                                                 .regular,
                                                       fontSize: SIZES.small,
                                                       color: COLORS.secondary,
                                                  }}
                                                  numberOfLines={3}
                                             >
                                                  Mbongo chobi
                                             </Text>
                                             <Text
                                                  style={{
                                                       ...styles.textSmall,
                                                       color: COLORS.muted,
                                                  }}
                                                  numberOfLines={3}
                                             >
                                                  Mbongo chobi is a traditional
                                                  dish from the Bassa ethnic
                                                  group in Cameroon,
                                                  particularly popular in the
                                                  Littoral region.
                                             </Text>
                                             <Pressable
                                                  onPress={() =>
                                                       router.push(
                                                            "/pages/desc/delicacy"
                                                       )
                                                  }
                                                  style={{
                                                       borderWidth: 1,
                                                       borderRadius: 5,
                                                       borderColor:
                                                            COLORS.secondary,
                                                       width: 100,
                                                       display: "flex",
                                                       alignItems: "center",
                                                       justifyContent: "center",
                                                       paddingVertical: 5,
                                                  }}
                                             >
                                                  <Text
                                                       style={{
                                                            fontFamily:
                                                                 FONTS
                                                                      .irishGrover
                                                                      .regular,
                                                            fontSize:
                                                                 SIZES.small,
                                                            color: COLORS.primary,
                                                       }}
                                                       numberOfLines={3}
                                                  >
                                                       Read More
                                                  </Text>
                                             </Pressable>
                                        </View>
                                   </View>
                                   <View
                                        style={{
                                             flexDirection: "row",
                                             gap: 10,
                                             alignItems: "center",
                                        }}
                                   >
                                        <View
                                             style={{
                                                  width: 110,
                                                  height: 140,
                                             }}
                                        >
                                             <Image
                                                  resizeMode="cover"
                                                  source={images.achu}
                                                  style={{
                                                       width: "100%",
                                                       height: "100%",
                                                  }}
                                             />
                                        </View>
                                        <View style={{ flex: 1, gap: 10 }}>
                                             <Text
                                                  style={{
                                                       fontFamily:
                                                            FONTS.irishGrover
                                                                 .regular,
                                                       fontSize: SIZES.small,
                                                       color: COLORS.secondary,
                                                  }}
                                                  numberOfLines={3}
                                             >
                                                  Achu and Yellow soup
                                             </Text>
                                             <Text
                                                  style={{
                                                       ...styles.textSmall,
                                                       color: COLORS.muted,
                                                  }}
                                                  numberOfLines={3}
                                             >
                                                  Achu is a popular dish in
                                                  Cameroon, particularly among
                                                  the Bamileke people. It's made
                                                  from cocoyam (taro) and is
                                                  typically served with a yellow
                                                  soup known as "achu soup."
                                             </Text>
                                             <Pressable
                                                  onPress={() =>
                                                       router.push(
                                                            "/pages/desc/delicacy"
                                                       )
                                                  }
                                                  style={{
                                                       borderWidth: 1,
                                                       borderRadius: 5,
                                                       borderColor:
                                                            COLORS.secondary,
                                                       width: 100,
                                                       display: "flex",
                                                       alignItems: "center",
                                                       justifyContent: "center",
                                                       paddingVertical: 5,
                                                  }}
                                             >
                                                  <Text
                                                       style={{
                                                            fontFamily:
                                                                 FONTS
                                                                      .irishGrover
                                                                      .regular,
                                                            fontSize:
                                                                 SIZES.small,
                                                            color: COLORS.primary,
                                                       }}
                                                       numberOfLines={3}
                                                  >
                                                       Read More
                                                  </Text>
                                             </Pressable>
                                        </View>
                                   </View>
                              </View>
                         </View>
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
};

export default GastronomyPage;
