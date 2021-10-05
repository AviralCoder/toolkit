import * as Font from "expo-font";

const loadFonts = async () => {
    await Font.loadAsync({
        MontserratRegular: require("../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    });
};

export default loadFonts;
