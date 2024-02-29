"use strict";
let age = 30;
let firstName = 'Arnoldas';
let isFake;
age = 31;
firstName = 'Diana';
isFake = true;
let planet = 'Erth';
let moons = 1;
let isLarge = false;
let something;
let kazkas;
let vardai = ['Arnoldas', 'Diana', 'Tadas'];
let amziai = [24, 33, 47];
vardai.push('Tautvydas');
amziai.push(27);
let vaisiai = ['obuoliai', 'apelsinai', 'bananai'];
const vaisius = vaisiai[2];
let daiktai = [1, true, 'labas'];
const daiktas = daiktai[2];
let vartotojas = {
    vardas: 'Arnoldas',
    amzius: 23,
    id: 1,
};
vartotojas.vardas = 'Giedrius';
vartotojas.amzius = 25;
let asmuo = {
    vardas: 'Saulius',
    amzius: 38,
};
asmuo.vardas = 'Paulina';
asmuo.amzius = 28;
function suma(a, b) {
    return a + b;
}
const atimtis = (a, b) => {
    return a - b;
};
suma(9, 3);
atimtis(8, 5);
function sudetis(items) {
    const viso = items.reduce((a, c) => a + c, 0);
    console.log(viso);
    return viso;
}
sudetis([5, 8, 19, 2, 9, 11]);
let amzius;
amzius = 30;
amzius = false;
let title;
title = 25;
title = 'Panas';
let item = ['labas', true, 123];
item.push({ id: 15 });
function sudeti(value) {
    return value + value;
}
const pirmas = sudeti('labas');
const antras = sudeti(3);
let people = ['Aidas', 30, true];
let halsa;
halsa = [200, '100%', '65%', 0.5];
function useCoords() {
    const lat = 100;
    const long = 57;
    return [lat, long];
}
const [lat, long] = useCoords();
let user;
user = ['Domantas', 27];
const firstAutor = { name: 'James', avatar: '/img/james.png' };
const newPost = {
    title: 'Pirmas irasas',
    body: 'Idomi istorija',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: firstAutor,
};
function createPost(post) {
    console.log(`Created post '${post.title}' by ${post.author.name} `);
}
createPost(newPost);
let posts = [];
posts.push(newPost);
function randomColor() {
    const r = Math.floor(Math.random() * 225);
    const g = Math.floor(Math.random() * 225);
    const b = Math.floor(Math.random() * 225);
    return [r, g, b];
}
const firstColor = randomColor();
const secondColor = randomColor();
console.log(firstColor, secondColor);
const firstPuple = { name: 'Jonas', grade: 8 };
function formatPuple(puple) {
    console.log(`${puple.name} gavo pazimi: ${puple.grade}`);
}
formatPuple(firstPuple);
formatPuple({ name: 'Vaida', grade: 9 });
let id;
id = 1;
id = '2';
let email = null;
email = 'tomas@tomauskas.lt';
email = null;
let secondId;
secondId = 'few5gen';
secondId = 4;
function changeId2Type(id2) {
    if (typeof id2 === 'string') {
        return parseInt(id2);
    }
    else {
        return id2.toString();
    }
}
const firstId2 = changeId2Type(1);
const secondId2 = changeId2Type('2');
console.log(firstId2, secondId2);
const kazkass = { quantity: 300 };
function printQuantity(item) {
    console.log(`The quantity of the item is ${item.quantity}`);
}
const fruit = { name: 'mangas', quantity: 50 };
const transport = { type: 'bus', quantity: 12 };
const guy = { name: 'Darius', age: 30 };
printQuantity(fruit);
printQuantity(transport);
const first = {
    name: 'kvadratas',
    calcArea(lenght) {
        return lenght * lenght;
    },
};
const second = {
    name: 'apskritimas',
    calcArea(r) {
        return (Math.PI * r) ^ 2;
    },
};
first.calcArea(5);
second.calcArea(10);
const users = {
    id: 1,
    format() {
        return `Sis klijentas turi id: ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: 'jurga',
    format() {
        return `Cekio, kurio id: ${this.id}, moketina suma: ${this.amount} $`;
    },
};
function printFormatted(value) {
    console.log(value.format());
}
printFormatted(users);
printFormatted(bill);
function printBill(bill) {
    console.log('Padavejas:', bill.server);
    console.log(bill.format());
}
printBill(bill);
const first1 = {
    id: 1,
    firstName: 'Saulius',
};
const second1 = {
    id: '2',
    firstName: 'Milda',
    emai: 'milda@mildauskaite.lt',
};
const third1 = {
    email: 'dainius@seb.lt',
};
function printUser(user) {
    console.log(user.id, user.firstName, user.email);
}
console.log('hello');
//# sourceMappingURL=index.js.map