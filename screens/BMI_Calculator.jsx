import * as React from "react";
import Topbar from "../components/Topbar";

const BMI_Calculator = ({ navigation }) => {
    return (
        <React.Fragment>
            <Topbar
                text="BMI Calculator"
                onIconClick={() => navigation.toggleDrawer()}
            />
        </React.Fragment>
    );
};

export default BMI_Calculator;
