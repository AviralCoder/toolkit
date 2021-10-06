import * as React from "react";
import { useState } from "react";
import Topbar from "../components/Topbar";
import Body from "../layout/Body";
import Flexbox from "../layout/Flexbox";
import { RadioButton, Surface, Avatar, Button } from "react-native-paper";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import BMICalculate from "../functions/bmiCalculate";

const BMI_Calculator = ({ navigation }) => {
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState(30);
    const [weight, setWeight] = useState(40);
    const [age, setAge] = useState(20);
    const [results, setResults] = useState({
        bmi: 0,
        phrase: "",
    });

    const calculateBMI = () => {
        const bmiCalculator = new BMICalculate(gender, height, weight, age);
        const bmi = bmiCalculator.getBmi();
        const phrase = bmiCalculator.getResults();
        setResults({ bmi, phrase });
    };

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
                <ScrollView>
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

                    <Surface style={styles.ageView}>
                        <Text style={styles.ageViewTitle}>Age</Text>

                        <Text style={styles.ageViewText}>{age} years</Text>

                        <Flexbox>
                            <Avatar.Icon
                                icon="plus"
                                size={40}
                                style={styles.iconCommonStyles}
                                onTouchStart={() => {
                                    setAge((age) => age + 1);
                                }}
                            />
                            <Avatar.Icon
                                icon="minus"
                                size={40}
                                style={styles.iconCommonStyles}
                                onTouchStart={() => {
                                    setAge((age) => age - 1);
                                }}
                            />
                        </Flexbox>
                    </Surface>

                    <Button
                        mode="contained"
                        icon="calculator"
                        onPress={() => {
                            calculateBMI();
                            console.log(`${results.bmi} ${results.phrase}`);
                        }}
                        style={{
                            marginHorizontal: 20,
                            marginTop: 15,
                            marginBottom: 30,
                        }}
                    >
                        Calculate
                    </Button>
                </ScrollView>
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
    ageView: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    ageViewTitle: {
        fontSize: 18,
        fontFamily: "MontserratRegular",
    },
    ageViewText: {
        fontSize: 23,
        fontFamily: "MontserratRegular",
        marginTop: 10,
    },
});

export default BMI_Calculator;
