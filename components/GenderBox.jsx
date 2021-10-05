import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const GenderBox = ({ text, active, onClick }) => {
    return (
        <React.Fragment>
            {active ? (
                <TouchableOpacity
                    style={{ ...styles.box, justifyContent: "#ad73ff" }}
                    onPress={onClick}
                >
                    <Text style={styles.boxText}>{text}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={{ ...styles.box, justifyContent: "#d6bafe" }}
                    onPress={onClick}
                >
                    <Text style={styles.boxText}>{text}</Text>
                </TouchableOpacity>
            )}
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    box: {
        width: "40%",
        height: 150,
        backgroundColor: "#ad73ff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    boxText: {
        fontFamily: "MontserratRegular",
        fontSize: 25,
    },
});

export default GenderBox;
