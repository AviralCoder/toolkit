export default class BMICalculate {
    constructor(gender, height, weight, age) {
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.age = age;
    }

    getBmi = () => {
        this.bmi = Number(this.weight / Math.pow(this.height / 100, 2)).toFixed(
            1
        );
        return this.bmi;
    };

    getResults = () => {
        if (this.bmi > 30) {
            return "Obese";
        } else if (this.bmi >= 25 && this.bmi <= 30) {
            return "Overweight";
        } else if (this.bmi >= 18.5 && this.bmi < 25) {
            return "Normal";
        } else {
            return "Underweight";
        }
    };
}
