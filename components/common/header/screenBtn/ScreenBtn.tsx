import React from "react";
import { Image, TouchableOpacity } from "react-native";
type props = {
     dimension: string;
     iconUrl: string;
     handlePress: () => void;
};
const ScreenBtn = ({ dimension, iconUrl, handlePress }: props) => {
     return (
          <TouchableOpacity
               onPress={handlePress}
               style={{ width: 48, height: 48, backgroundColor: "transparent" }}
          >
               <Image
                    source={iconUrl}
                    style={{ width: dimension, height: dimension }}
               />
          </TouchableOpacity>
     );
};

export default ScreenBtn;
