import * as React from "react";
import Topbar from "../components/Topbar";
import Body from "../layout/Body";
import GenderBox from "../components/GenderBox";
import Flexbox from "../layout/Flexbox";

const BMI_Calculator = ({ navigation }) => {
    return (
        <React.Fragment>
            <Topbar
                text="BMI Calculator"
                onIconClick={() => navigation.toggleDrawer()}
            />

            <Body>
                <Flexbox>
                    <GenderBox text="Male" />
                    <GenderBox text="Female" />
                </Flexbox>
            </Body>
        </React.Fragment>
    );
};

export default BMI_Calculator;
