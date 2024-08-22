import { COLORS } from "@/constants";
import styles from "@/styles";
import React from "react";
import { Text } from "react-native";

const Logo = () => {
     return (
          <Text
               style={{
                    ...styles.logo,
                    color: COLORS.secondary,
               }}
          >
               myRoots
          </Text>
     );
};

export default Logo;
