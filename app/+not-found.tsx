import { images } from "@/constants";
import { Stack } from "expo-router";
import React from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";

const PageNotFound = () => {
     const screenWidth = Dimensions.get("screen").width;
     const screenHeight = Dimensions.get("screen").height;
     return (
          <>
               <Stack.Screen options={{ title: "Oops!" }} />
               <ImageBackground
                    source={images._404}
                    style={{ width: screenWidth, height: screenHeight }}
                    resizeMode="contain"
               ></ImageBackground>
          </>
     );
};

export default PageNotFound;
