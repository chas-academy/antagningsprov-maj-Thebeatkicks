

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
const persons = [
    { name: "Henrik", age: 40 },
    { name: "Martin", age: 25 },
    { name: "Alice", age: 35 },
    { name: "Sally", age: 28 },
    { name: "Elvin", age: 32 }
];

function writeNamesOver30(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 30) {
            console.log(arr[i].name);
        }
    }

}
writeNamesOver30(persons);
}

module.exports = { uppg8 };