const randomUser = {
    //   macarena: "qualcosa",
    results: [
        {
            gender: "female",
            name: { title: "Mrs", first: "Clara", last: "Pierre" },
            location: {
                street: { number: 5474, name: "Boulevard de Balmont" },
                city: "Brest",
                state: "Cantal",
                country: "France",
                postcode: 13110,
                coordinates: { latitude: "-13.3815", longitude: "3.5104" },
                timezone: {
                    offset: "+5:00",
                    description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
                },
            },
            email: "clara.pierre@example.com",
            login: {
                uuid: "3dab8232-0e0d-4285-b8f7-7a4c65d91ee8",
                username: "lazyladybug662",
                password: "vegitta",
                salt: "5bYhGv0H",
                md5: "dd7367264d48a83eff604f760a2471db",
                sha1: "240a77ff7d0ba17549c95ec98d95e8b7a7c84513",
                sha256:
                    "78ef4ba735048d0e8643a49e1637979e3d1eadfa546a7cf0698cd576ee2edca4",
            },
            dob: { date: "1960-06-16T08:13:04.822Z", age: 63 },
            registered: { date: "2018-03-24T19:17:47.934Z", age: 5 },
            phone: "02-86-19-85-18",
            cell: "06-06-14-27-68",
            id: { name: "INSEE", value: "2600561252474 66" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/40.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg",
            },
            nat: "FR",
        },
    ],
    info: {
        seed: "b5c2020b03e86cb6",
        results: 1,
        page: 1,
        version: "1.4",
    },
}

// Restituisce un array con le chiavi dell'oggetto
// console.log(Object.keys(randomUser))
// Restituisce un array con i valori dell'oggetto
// console.log(Object.values(randomUser))
// Restituisce un array con le chiavi e i valori dell'oggetto
// console.log(Object.entries(randomUser))

// const { macarena } = randomUser

// Queste due scritture sono equivalenti:

// const results = randomUser.results
// const { results } = randomUser

// const gender = randomUser.results[0].gender
// const location = randomUser.results[0].location
// const street = randomUser.results[0].location.street
// const city = randomUser.results[0].location.city
// const state = randomUser.results[0].location.state
// const country = randomUser.results[0].location.country

const { gender, location } = randomUser.results[0]
const { street, city, state, country } = location

// console.log(location)

const frutti = ["🍎", "🍐", "🍌", "🍊"]

const [mela, pera, banana, orange] = frutti
// const mela = frutti[0]
// const pera = frutti[1]
// const banana = frutti[2]
// const orange = frutti[3]

let a = 2
let b = 3

// Se noi volessimo scambiare il valore di queste due variabili,
// normalmente dovremmo creare una terza variabile temporanea

let temp = a
a = b
b = temp

// Invece, destrutturando un array sul posto
// che contiene i due valori invertiti, possiamo rispariare
// una variabile temporanea

[a, b] = [b, a]

function get2Numbers() {
    return [2, 3]
}

const [x, y] = get2Numbers()

// Spread operator

const FIAT = {
    model: "Fiat",
    year: 2010,
    cc: 1400
}

const myCar = {
    ...FIAT,
    year: 2015,
    color: "red",
    plate: "AB123CD",
    owner: { age: 30, title: "Mrs", first: "Clara", last: "Pierre" }
}

console.log(myCar)

// return

const { model, cc, ...macarena } = myCar


// // console.log(model)

// macarena.owner.age++

// // console.log(myCar.owner)

// const car = myCar

// myCar.color = "blue"

// // console.log(car.color, myCar.color, macarena)

// for (const char of [..."una stringa"]) {
//     console.log(char)
// }


const arr1 = [1, 2, 3]

const arr2 = [1, 5, 6]

const arr3 = [...arr2, ...arr1, ...arr2, ...arr2]

// console.log(arr3)
// console.log(arr3.length)

// Array .includes
console.log(arr1.includes("test"))

// Array .some
// ...mica per caso c'è un elemento che soddifa
// la callback???

const isThereEvenNumber = arr1.some(num => num % 2 === 0)

// console.table({ isThereEvenNumber })


// Array .every
// ...tutti gli elementi soddisfano la callback???

const areAllNumbersEven = [2, 4, 6, 8].every(num => num % 2 === 0)

console.table({ areAllNumbersEven })
