import { FONTS, SIZES } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     container: {
          width: "100%",
     },
     heading: {
          fontFamily: FONTS.irishGrover.regular,
          fontSize: SIZES.xLarge,
     },
     logo: {
          fontFamily: FONTS.irishGrover.regular,
          fontSize: SIZES.xLarge,
     },

     textLarge: {
          fontFamily: FONTS.poppins.regular,
          fontSize: SIZES.medium,
     },

     textSmall: {
          fontFamily: FONTS.poppins.regular,
          fontSize: SIZES.small,
     },
});

export default styles;
