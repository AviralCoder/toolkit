import * as React from "react";
import { useState } from "react";
import Topbar from "../components/Topbar";
import Body from "../layout/Body";
import Flexbox from "../layout/Flexbox";
import { RadioButton, Surface, Avatar } from "react-native-paper";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const BMI_Calculator = ({ navigation }) => {
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState(30);
    const [weight, setWeight] = useState(40);

    return (
        <React.Fragment>
            {Constants.isDevice ? (
                <StatusBar style="auto" backgroundColor="#6200ee" />
            ) : (
                <StatusBar style="auto" />
            )}

            <Topbar
                text="BMI Calculator"
                onIconClick={() => navigation.toggleDrawer()}
            />

            <Body>
                <RadioButton.Group
                    onValueChange={(gender) => setGender(gender)}
                    value={gender}
                >
                    <RadioButton.Item
                        label="Male"
                        value="male"
                        color="#6200ee"
                        labelStyle={styles.radioGroupText}
                    />
                    <RadioButton.Item
                        label="Female"
                        value="female"
                        color="#6200ee"
                        labelStyle={styles.radioGroupText}
                    />
                </RadioButton.Group>

                <Surface style={styles.heightView}>
                    <Text style={styles.heightViewText}>Height</Text>
                    <Slider
                        style={{ width: 350, height: 40 }}
                        minimumValue={0}
                        maximumValue={250}
                        minimumTrackTintColor="#6200ee"
                        maximumTrackTintColor="#b6b1b1"
                        thumbTintColor="#6200ee"
                        value={height}
                        step={1}
                        onValueChange={(val) => setHeight(val)}
                    />

                    <Text style={styles.heightText}>{height} cm</Text>
                </Surface>

                <Surface style={styles.weightView}>
                    <Text style={styles.weightViewTitle}>Weight</Text>

                    <Text style={styles.weightViewText}>{weight} kg</Text>

                    <Flexbox>
                        <Avatar.Icon
                            icon="plus"
                            size={40}
                            style={styles.iconCommonStyles}
                            onTouchStart={() => {
                                setWeight((weight) => weight + 1);
                            }}
                        />
                        <Avatar.Icon
                            icon="minus"
                            size={40}
                            style={styles.iconCommonStyles}
                            onTouchStart={() => {
                                setWeight((weight) => weight - 1);
                            }}
                        />
                    </Flexbox>
                </Surface>
            </Body>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    radioGroupText: {
        fontFamily: "MontserratRegular",
    },
    heightView: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    heightViewText: {
        fontSize: 18,
        fontFamily: "MontserratRegular",
    },
    heightText: {
        fontFamily: "MontserratRegular",
        fontSize: 20,
    },
    weightView: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    weightViewTitle: {
        fontSize: 18,
        fontFamily: "MontserratRegular",
    },
    weightViewText: {
        fontSize: 23,
        fontFamily: "MontserratRegular",
        marginTop: 20,
    },
    iconCommonStyles: {
        marginHorizontal: 15,
        marginTop: 10,
    },
});

export default BMI_Calculator;
