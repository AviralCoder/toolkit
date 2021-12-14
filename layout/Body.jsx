import * as React from "react";
import { StyleSheet, View } from "react-native";

const Body = ({ children, style }) => {
    return <View style={{ ...styles.body, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
    body: {
        marginTop: 120,
    },
});

export default Body;
