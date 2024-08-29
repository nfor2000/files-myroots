import Logo from "@/components/common/header/Logo";
import ScreenBtn from "@/components/common/header/screenBtn/ScreenBtn";
import { COLORS, icons } from "@/constants";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

const Layout = () => {
     const [fontLoaded] = useFonts({
          PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
          PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
          PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
          IrishRegular: require("../assets/fonts/IrishGrover-Regular.ttf"),
     });

     if (!fontLoaded) {
          return null;
     }
     return (
          <Stack>
               <Stack.Screen
                    name="(tabs)"
                    options={{
                         headerTitle: "",
                         headerLeft: () => (
                              <ScreenBtn
                                   handlePress={() => {}}
                                   dimension="80%"
                                   iconUrl={icons.menu}
                              />
                         ),
                         headerRight: () => <Logo color={COLORS.secondary} />,
                    }}
               />
               <Stack.Screen name="auth" options={{ headerShown: false }} />
               <Stack.Screen name="pages" options={{ headerShown: false }} />
               <Stack.Screen name="+not-found" />
               <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
     );
};

export default Layout;
