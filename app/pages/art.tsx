import { COLORS, images, SIZES } from "@/constants";
import { router } from "expo-router";
import React from "react";
import {
     Image,
     SafeAreaView,
     ScrollView,
     Text,
     TouchableWithoutFeedback,
     View,
} from "react-native";

const ArtPage = () => {
     return (
          <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
               <ScrollView>
                    <View style={{ padding: 4, gap: 4 }}>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                              }}
                         >
                              <View style={{ width: "49.5%", height: 140 }}>
                                   <TouchableWithoutFeedback
                                        onPress={() =>
                                             router.push("/pages/desc/art-info")
                                        }
                                        style={{ width: "100%" }}
                                   >
                                        <Image
                                             source={images.mask}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                        />
                                   </TouchableWithoutFeedback>
                              </View>
                              <View style={{ width: "49.5%", height: 140 }}>
                                   <TouchableWithoutFeedback
                                        onPress={() =>
                                             router.push("/pages/desc/art-info")
                                        }
                                        style={{ width: "100%" }}
                                   >
                                        <Image
                                             source={images.danse}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </TouchableWithoutFeedback>
                              </View>
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                              }}
                         >
                              <View
                                   style={{ width: `${98 / 3}%`, height: 140 }}
                              >
                                   <TouchableWithoutFeedback
                                        onPress={() =>
                                             router.push("/pages/desc/art-info")
                                        }
                                        style={{ width: "100%" }}
                                   >
                                        <Image
                                             source={images.palace}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </TouchableWithoutFeedback>
                              </View>
                              <View
                                   style={{ width: `${98 / 3}%`, height: 140 }}
                              >
                                   <TouchableWithoutFeedback
                                        onPress={() =>
                                             router.push("/pages/desc/art-info")
                                        }
                                        style={{ width: "100%" }}
                                   >
                                        <Image
                                             source={images.craft}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </TouchableWithoutFeedback>
                              </View>
                              <View
                                   style={{ width: `${98 / 3}%`, height: 140 }}
                              >
                                   <TouchableWithoutFeedback
                                        onPress={() =>
                                             router.push("/pages/desc/art-info")
                                        }
                                        style={{ width: "100%" }}
                                   >
                                        <Image
                                             source={images.basket}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </TouchableWithoutFeedback>
                              </View>
                         </View>

                         <View>
                              <View style={{ width: "100%", height: 140 }}>
                                   <TouchableWithoutFeedback
                                        onPress={() =>
                                             router.push("/pages/desc/art-info")
                                        }
                                        style={{ width: "100%" }}
                                   >
                                        <Image
                                             source={images.dressing}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </TouchableWithoutFeedback>
                              </View>
                         </View>

                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                              }}
                         >
                              <View style={{ width: `70%`, height: 200 }}>
                                   <TouchableWithoutFeedback
                                        onPress={() =>
                                             router.push("/pages/desc/art-info")
                                        }
                                        style={{ width: "100%" }}
                                   >
                                        <Image
                                             source={images.marriage}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </TouchableWithoutFeedback>
                              </View>
                              <View style={{ width: `29%`, height: 200 }}>
                                   <TouchableWithoutFeedback
                                        onPress={() =>
                                             router.push("/pages/desc/art-info")
                                        }
                                        style={{ width: "100%" }}
                                   >
                                        <Image
                                             source={images.linen}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </TouchableWithoutFeedback>
                              </View>
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                              }}
                         >
                              <View style={{ width: "50%", height: 200 }}>
                                   <TouchableWithoutFeedback
                                        onPress={() =>
                                             router.push("/pages/desc/art-info")
                                        }
                                        style={{ width: "100%" }}
                                   >
                                        <Image
                                             source={images.stool}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </TouchableWithoutFeedback>
                              </View>
                              <View style={{ width: "49%", height: 200 }}>
                                   <TouchableWithoutFeedback
                                        onPress={() =>
                                             router.push("/pages/desc/art-info")
                                        }
                                        style={{ width: "100%" }}
                                   >
                                        <Image
                                             source={images.cup}
                                             style={{
                                                  width: "100%",
                                                  height: "100%",
                                             }}
                                             resizeMode="cover"
                                        />
                                   </TouchableWithoutFeedback>
                              </View>
                         </View>
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
};

export default ArtPage;
