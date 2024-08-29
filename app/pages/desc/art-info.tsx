import DynamicText from "@/components/common/text/DynamicText";
import { COLORS, FONTS, images } from "@/constants";
import styles from "@/styles";
import React from "react";
import {
     Dimensions,
     ImageBackground,
     SafeAreaView,
     ScrollView,
     Text,
     View,
} from "react-native";

const ArtInfopage = () => {
     const screen = Dimensions.get("screen");
     return (
          <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
               <ImageBackground
                    source={images.stool}
                    style={{ height: screen.height, width: screen.width }}
                    resizeMode="contain"
               >
                    <View
                         style={{
                              height: screen.height,
                              width: screen.width,
                         }}
                    >
                         <View
                              style={{
                                   position: "absolute",
                                   zIndex: 3,
                                   height: screen.height * 0.65,
                                   backgroundColor: COLORS.white,
                                   left: 0,
                                   width: "100%",
                                   top: screen.height - screen.height * 0.65,
                                   borderTopLeftRadius: 40,
                                   borderTopRightRadius: 40,
                                   padding: 40,
                              }}
                         >
                              <Text
                                   style={{
                                        ...styles.heading,
                                        color: COLORS.secondary,
                                        marginBottom: 10,
                                   }}
                              >
                                   Description
                              </Text>
                              <DynamicText
                                   text="This beautiful beaded table, comes from
                                        the village Lebia-Allem in north western
                                        Cameroon where it was part of the
                                        inheritance of the local chief. The four
                                        legs are constructed with powerful
                                        buffalo heads and a striking geometric
                                        pattern is displayed on top. The Kom
                                        live in the north western mountainous
                                        regions of Cameroon, close to the border
                                        with Nigeria. The Kom are ruled by the
                                        Fon (king)  who is assisted by a council
                                        of elders. Every village in the kingdom
                                        is governed by a chief. These chiefs,
                                        advised by the elders are responsible
                                        for selecting the Fon."
                              />
                         </View>
                         <View
                              style={{
                                   position: "absolute",
                                   top: 0,
                                   left: 0,
                                   right: 0,
                                   bottom: 0,
                                   backgroundColor: "rgba(0,0,0,0.6)",
                                   zIndex: 0,
                              }}
                         ></View>
                         <View
                              style={{
                                   position: "absolute",
                                   top: 0,
                                   left: 0,
                                   height: screen.height * 0.35,
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
                                   Breaded Table
                              </Text>
                         </View>
                    </View>
               </ImageBackground>
          </SafeAreaView>
     );
};

export default ArtInfopage;
