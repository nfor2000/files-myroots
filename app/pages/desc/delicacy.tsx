import DynamicText from "@/components/common/text/DynamicText";
import { COLORS, images, SIZES } from "@/constants";
import styles from "@/styles";
import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";

const DelicacyInfoPage = () => {
     return (
          <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
               <View style={{ padding: SIZES.large, gap: 28 }}>
                    <ImageBackground
                         source={images.ekwang}
                         style={{ height: 240, width: "100%" }}
                         resizeMode="cover"
                    >
                         <View
                              style={{
                                   position: "absolute",
                                   top: 0,
                                   left: 0,
                                   right: 0,
                                   bottom: 0,
                                   backgroundColor: "rgba(0,0,0,0.4)",
                                   zIndex: 0,
                              }}
                         ></View>
                         <View
                              style={{
                                   position: "absolute",
                                   top: 0,
                                   left: 0,
                                   height: "100%",
                                   width: "100%",
                                   alignItems: "center",
                                   justifyContent: "center",
                              }}
                         >
                              <Text
                                   style={{
                                        ...styles.heading,
                                        color: COLORS.white,
                                        marginBottom: 10,
                                   }}
                              >
                                   Ekwang
                              </Text>
                         </View>
                    </ImageBackground>
                    <View>
                         <Text
                              style={{
                                   ...styles.heading,
                                   color: COLORS.secondary,
                                   marginBottom: 10,
                              }}
                         >
                              Description
                         </Text>
                         <DynamicText text="Ekwang is a popular dish from the Southern part of Cameroon, made with grated cocoyam wrapped in banana leaves and cooked in a rich sauce." />
                    </View>
               </View>
          </SafeAreaView>
     );
};

export default DelicacyInfoPage;
