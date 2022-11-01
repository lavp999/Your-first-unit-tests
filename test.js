// importar la función sum del archivo app.js
const { sum , fromEuroToDollar , fromDollarToYen , fromYenToPound , fromTo} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// -----   fromEuroToDollar  -------
test('1 Euro son 1,2 Dolares', () => {
    let alCambio = fromEuroToDollar(5);
    expect(alCambio).toBe(6);  // 5€ deben ser 6$
});

// -----   fromDollarToYen  -------
test('1 $ es 106,58333 Yenes', () => {
    let alCambio = fromDollarToYen(5);
    expect(alCambio).toBe(532.9166666666667);  // 5$ deben ser 532,916667 yenes
});

// -----   fromYenToPound  -------
test('1 Libra son 0,006254887 Yenes', () => {
    let alCambio = fromYenToPound(5);
    expect(alCambio).toBe(0.03127443315089914);  // 5 Yenes deben ser 0.03127443 Libras
});

// -----   fromTo  -------
test('1 Euro son 1,2 Dolares', () => {
    let alCambio = fromTo(5, "EUR", "USD");
    expect(alCambio).toBe(6);  // 5€ deben ser 6$
});
// -----   fromTo  -------
test('1 $ es 106,58333 Yenes', () => {
    let alCambio = fromTo(5, "USD", "JPY");
    expect(alCambio).toBe(532.9166666666667);  // 5$ deben ser 532,916667 yenes
});
// -----   fromTo  -------
test('1 Libra son 0,006254887 Yenes', () => {
    let alCambio = fromTo(5 , "JPY" , "GBP"); 
    expect(alCambio).toBe(0.03127443315089914);  // 5 Yenes deben ser 0.03127443 Libras
});