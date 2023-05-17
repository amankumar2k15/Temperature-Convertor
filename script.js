const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp)
    const selectedTemp = document.getElementById('tempDiff');
    const valueTemp = tempDiff.options[selectedTemp.selectedIndex].value;
    // console.log(valueTemp)

    const celToFah = (cel) => {
        let Fahrenheit = Math.round((cel * 9 / 5) + 32);
        return Fahrenheit
    }
    const fahToCel = (fah) => {
        let Celsius = Math.round((fah - 32) * 5 / 9);
        return Celsius
    }

    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result} Degree Fahrenheit`;
    } else {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result} Degree Celsius`;
    }
}