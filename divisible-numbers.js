const collection = [
    { text: "zero", value: 0 },
    { text: "jeden", value: 1 },
    { text: "dwa", value: 2 },
    { text: "trzy", value: 3 },
    { text: "cztery", value: 4 },
    { text: "pięć", value: 5 },
    { text: "sześć", value: 6 },
    { text: "siedem", value: 7 },
    { text: "osiem", value: 8 },
    { text: "dziewięć", value: 9 },
    { text: "dziesięć", value: 10 },
    { text: "jedenaście", value: 11 },
    { text: "dwanaście", value: 12 },
];

const countAndDisplayDivisibleNumbers = (number) => {
    let count = 0;
    const divisibleNumbers = [];

    collection.forEach(object => {
        const value = object.value;
        if (value % number === 0) {
            count++;
            divisibleNumbers.push(value);
        }
    });

    return `There are ${count} divisible numbers by ${number}: ${divisibleNumbers.join(', ')}`
}

console.log(countAndDisplayDivisibleNumbers(3)) // There are 5 divisible numbers by 3: 0, 3, 6, 9, 12
