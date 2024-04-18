function calculateBMI() {
   // peso e a altura
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // calcular
    const bmi = weight / (height * height);

    // o quanto pesa
    let category;
    if (bmi < 18.5) {
        category = "Abaixo do peso";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Peso normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Sobrepeso";
    } else {
        category = "Obesidade";
    }

    //resultado
    document.getElementById("resultado").innerHTML = `Seu IMC é ${bmi.toFixed(2)} (${category}).`;
}
