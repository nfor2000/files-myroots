const FONTS = {
     poppins: {
          regular: "PoppinsRegular",
          medium: "PoppinsMedium",
          bold: "PoppinsBold",
     },
     irishGrover: {
          regular: "IrishRegular",
     },
};

const COLORS = {
     primary: "#9F3620",
     muted: "#878787",
     secondary: "#4A1003",
     white: "#FEFEFE",
};

const SIZES = {
     xSmall: 10,
     small: 12,
     medium: 16,
     large: 20,
     xLarge: 24,
     xxLarge: 32,
};

const SHADOWS = {
     small: {
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
     },
     medium: {
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.75,
          shadowRadius: 5.84,
          elevation: 5,
     },
};

export { FONTS, COLORS, SIZES, SHADOWS };
