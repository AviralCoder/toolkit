import * as React from "react";
import { StyleSheet, View } from "react-native";

const Body = ({ children }) => {
    return <View style={styles.body}>{children}</View>;
};

const styles = StyleSheet.create({
    body: {
        marginTop: 120,
    },
});

export default Body;
