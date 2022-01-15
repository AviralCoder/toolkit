import * as React from "react";
import { useState } from "react";
import Topbar from "../components/Topbar";
import Body from "../layout/Body";
import Flexbox from "../layout/Flexbox";
import {
    RadioButton,
    Surface,
    Avatar,
    Button,
    Portal,
    Modal,
    Provider,
    Paragraph,
    Dialog,
} from "react-native-paper";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import BMICalculate from "../functions/bmiCalculate";
import { COLOURS } from "../lib/colors/colors";
import * as Clipboard from "expo-clipboard";

const BMI_Calculator = ({ navigation }) => {
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState(30);
    const [weight, setWeight] = useState(40);
    const [age, setAge] = useState(20);
    const [results, setResults] = useState({
        bmi: 0,
        phrase: "",
    });
    const [modalVisible, setModalVisible] = useState(false);

    const calculateBMI = () => {
        const bmiCalculator = new BMICalculate(gender, height, weight, age);
        const bmi = bmiCalculator.getBmi();
        const phrase = bmiCalculator.getResults();
        setResults({ bmi, phrase });
    };

    return (
        <Provider>
            <StatusBar
                style="auto"
                backgroundColor={COLOURS.primary}
                barStyle="light-content"
            />

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
                            color={COLOURS.primary}
                            labelStyle={styles.radioGroupText}
                        />
                        <RadioButton.Item
                            label="Female"
                            value="female"
                            color={COLOURS.primary}
                            labelStyle={styles.radioGroupText}
                        />
                    </RadioButton.Group>

                    <Surface style={styles.heightView}>
                        <Text style={styles.heightViewText}>Height</Text>
                        <Slider
                            style={{ width: 350, height: 40 }}
                            minimumValue={0}
                            maximumValue={250}
                            minimumTrackTintColor={COLOURS.primary}
                            maximumTrackTintColor={COLOURS.sliderMaxTrackTint}
                            thumbTintColor={COLOURS.primary}
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
                            setModalVisible(true);
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

                <Portal>
                    <Dialog
                        visible={modalVisible}
                        onDismiss={() => {
                            setModalVisible(false);
                        }}
                    >
                        <Dialog.Title>Results</Dialog.Title>
                        <Dialog.Content>
                            <Text
                                style={{
                                    fontSize: 18,
                                    textAlign: "center",
                                }}
                            >{`BMI: ${results.bmi} \n${results.phrase}`}</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                Okay
                            </Button>

                            <Button
                                onPress={() => {
                                    Clipboard.setString(
                                        `BMI: ${results.bmi} \n${results.phrase}`
                                    );
                                    setModalVisible(false);
                                }}
                            >
                                Copy
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </Body>
        </Provider>
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
