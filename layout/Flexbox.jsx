import * as React from "react";
import { View, StyleSheet } from "react-native";

const Flexbox = ({ children }) => {
    return <View style={flexboxStyles.flexbox}>{children}</View>;
};

const flexboxStyles = StyleSheet.create({
    flexbox: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default Flexbox;
