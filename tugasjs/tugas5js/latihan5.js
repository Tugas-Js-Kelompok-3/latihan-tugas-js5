// objek

const person = {
    nama: "fitriani sa'adah",
    kelas: "XI RPL 2",
    umur: "17 thn",
    hobi: {
        swimming: true,
        play: true,
        sleep: true,
    }
}
console.log(person);

//animal 

const animal = {
    shark: "ocean",
    whale: "ocean",
    turtles: "pond",
    otter: "fish biscuit",
    lion: "land",
    tuna: "ocean"
}
console.log(animal);

const jumlahanimal = {
    shark: {
        habitat: "ocean",
        totalspesies: "570"
    },
    whale: {
        habitat: "ocean",
        totalspesies: "800"
    },
    lion: {
        habitat: "land",
        totalspesies: "780"
    },
    turtles: {
        habitat: "pond",
        totalspesies: "6000"
    },
}
console.log(jumlahanimal);

//my objec animal soal 1

const myobjec =[
    { nama:'shark', likes:'ocean'},
    { nama:'lion', likes:'land'},
    { nama:'otter', likes:'fish biscuit'},
    { nama:'whale', likes:'ocean'},
    { nama:'turtle', likes:'pond'},
    { nama:'tuna', likes:'ocean'},
]

const yes = myobjec.map(item => {
        const penyimpanan = {}

        penyimpanan[item.nama] = item.likes
        penyimpanan.spesies = item.nama.length * Math.floor(Math.random() * 5000)

    return penyimpanan
})
console.log(yes);


//filter soal 2
const fill = myobjec.filter((per) => {
    return per.likes == "ocean"
})
console.log(fill);

//nama jadi nama panggilan  soal 3

const name = "sa'adah"
const map = Array.prototype.map;

const newname = map.call(name, el => {
    return `${el}ul`
})
console.log(newname[5])

//soal 4

let numbers = [100, 25, 16, 56, 87]
let doubles = numbers.map(function(num) {
        return num * 5
})
console.log(doubles);

//soal 5

let minus = numbers.map(function(num) {
        return num - 100
})
console.log(minus);

//soal 6

let plus = numbers.map(function(num) {
        return num + 5
})
console.log(plus);

//soal 7

//soal 8

//soal 9

//soal 10