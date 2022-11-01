// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro) {
    let dollar = euro * oneEuroIs.USD;
    return dollar;
}

function fromDollarToYen(dollar) {
    let yen = dollar * oneEuroIs.JPY / oneEuroIs.USD;
    return yen;
}

function fromYenToPound(yen) {
    let pound = yen * oneEuroIs.GBP / oneEuroIs.JPY;
    return pound;
}


function fromTo(valor, moneda1, moneda2) {
    let nuevoValor = 0;
    if(moneda1 == "EUR"){  // habría que hacer el de moneda2
        nuevoValor = valor * oneEuroIs[moneda2];
    }else {
        nuevoValor = valor * oneEuroIs[moneda2] / oneEuroIs[moneda1];
    }

    return nuevoValor;
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum , fromEuroToDollar , fromDollarToYen , fromYenToPound , fromTo};