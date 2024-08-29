import { COLORS } from "@/constants";
import styles from "@/styles";
import React from "react";
import { Text } from "react-native";

const Logo = ({ color }: { color: string }) => {
     return (
          <Text
               style={{
                    ...styles.logo,
                    color: color,
               }}
          >
               myRoots
          </Text>
     );
};

export default Logo;
