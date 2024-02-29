// DUOMENU TIPAI

let age: number = 30;
let firstName: string = 'Arnoldas';
let isFake: boolean;

age = 31;
firstName = 'Diana';
isFake = true;

// NEBEGALIME KEISTI DUOMENS TIPO
let planet = 'Erth';
let moons = 1;
let isLarge = false;

let something: null;
let kazkas: undefined;

// MASYVAI
// MASYVAI - PRIIMA TIK VIENO DUOMENS TIPO DUOMENIS

let vardai: string[] = ['Arnoldas', 'Diana', 'Tadas'];
let amziai: number[] = [24, 33, 47];

vardai.push('Tautvydas');
amziai.push(27);

// DUOMENS TIPAS NUSPRENDZIAMAS PAGAL PIRMOJO DUOMENS TIPA

let vaisiai = ['obuoliai', 'apelsinai', 'bananai'];
const vaisius = vaisiai[2];

// UNION DUOMENS TIPAS - NUSPRENDZIA KOKS TAI DUOMUO, TIK VIENAS IS

let daiktai = [1, true, 'labas'];
const daiktas = daiktai[2];

// OBJEKTAI

let vartotojas: { vardas: string; amzius: number; id: number } = {
  vardas: 'Arnoldas',
  amzius: 23,
  id: 1,
};

vartotojas.vardas = 'Giedrius';
vartotojas.amzius = 25;
// bet negalime prideti nauju savybiu: telefonas, adresasir tt.

// NUSPRENDZIA DUOMeNU TIPA PAGAL IVESTUS DUOMENIS

let asmuo = {
  vardas: 'Saulius',
  amzius: 38,
};

asmuo.vardas = 'Paulina';
asmuo.amzius = 28;

// FUNKCIJOS
function suma(a: number, b: number): number {
  return a + b;
}

const atimtis = (a: number, b: number): number => {
  return a - b;
};

suma(9, 3);
atimtis(8, 5);

function sudetis(items: number[]) {
  const viso = items.reduce((a, c) => a + c, 0);
  console.log(viso);
  return viso;
}

sudetis([5, 8, 19, 2, 9, 11]);

// ANY
// ANY - LEIDZIA KEISTI DUOMENU TIPA, NETURETUME DAZNAI NAUDOTI

let amzius: any;
amzius = 30;
amzius = false;

let title;
title = 25;
title = 'Panas';

let item: any[] = ['labas', true, 123];
item.push({ id: 15 });

function sudeti(value: any): any {
  return value + value;
}

const pirmas = sudeti('labas');
//  labaslabas
const antras = sudeti(3);
// 6

// TUPLES
// TUPLES - PRIVALOME LAIKYTIS NURODYTOS SEKOS

let people: [string, number, boolean] = ['Aidas', 30, true];

// spalva
let halsa: [number, string, string, number];
halsa = [200, '100%', '65%', 0.5];

// koordinates
function useCoords(): [number, number] {
  const lat = 100;
  const long = 57;
  return [lat, long];
}
const [lat, long] = useCoords();

// tuples su pavadinimais
let user: [name: string, age: number];
user = ['Domantas', 27];

// INTERFACES -strukturiniai nustatymai, kuriuos galime priskirti kintamiesiems, masyvams, objektams ir tt

interface Autor {
  name: string;
  avatar: string;
}

const firstAutor: Autor = { name: 'James', avatar: '/img/james.png' };

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Autor;
}

const newPost = {
  title: 'Pirmas irasas',
  body: 'Idomi istorija',
  tags: ['gaming', 'tech'],
  create_at: new Date(),
  author: firstAutor,
};

// INTERFACES FUNKCIJOSE

function createPost(post: Post): void {
  console.log(`Created post '${post.title}' by ${post.author.name} `);
}

createPost(newPost);

// INTERFACES MASYVUOSE

let posts: Post[] = [];
posts.push(newPost);

// TYPE ALIAS - dar vienas budas kurti custom types

type Rgb = [number, number, number];
function randomColor(): Rgb {
  const r = Math.floor(Math.random() * 225);
  const g = Math.floor(Math.random() * 225);
  const b = Math.floor(Math.random() * 225);

  return [r, g, b];
}

const firstColor = randomColor();
const secondColor = randomColor();
console.log(firstColor, secondColor);

// TYPE ALIAS SU OBJEKTAIS

type Puple = {
  name: string;
  grade: number;
};

const firstPuple: Puple = { name: 'Jonas', grade: 8 };

function formatPuple(puple: Puple): void {
  console.log(`${puple.name} gavo pazimi: ${puple.grade}`);
}

formatPuple(firstPuple);
formatPuple({ name: 'Vaida', grade: 9 });

// UNION TYPES - keli skirtingi duomenu tipai
// id, kuris gali buti arba skaicius, arba tekstas

let id: number | string;
id = 1;
id = '2';

let email: string | null = null;
email = 'tomas@tomauskas.lt';
email = null;

// bet galime panaudoti UNION TYPE kaip TYPE ALIAS

type Id = number | string;
let secondId: Id;
secondId = 'few5gen';
secondId = 4;

// TYPE GUARDS - patikrina duomens tipa pries vykdant koda

type Id2 = number | string;
function changeId2Type(id2: Id2) {
  if (typeof id2 === 'string') {
    return parseInt(id2);
  } else {
    return id2.toString();
  }
}

const firstId2 = changeId2Type(1);
const secondId2 = changeId2Type('2');

console.log(firstId2, secondId2);

// INTERFACES - daugkartinis panaudojimas

interface hasQuantity {
  quantity: number;
}

// visi elementai, kurie atkartos interface, privalo
// tureti ta pacia struktura kaip ir interface

const kazkass: hasQuantity = { quantity: 300 };

function printQuantity(item: hasQuantity): void {
  console.log(`The quantity of the item is ${item.quantity}`);
}

const fruit = { name: 'mangas', quantity: 50 };
const transport = { type: 'bus', quantity: 12 };
const guy = { name: 'Darius', age: 30 };

printQuantity(fruit); // ok
printQuantity(transport); // ok
//printQuantity(guy); // klaida
//printQuantity({ quantity: 40, svoris: 33 }); // klaida

//FUNCTION SIGNATURE su INTERFACE

interface HasArea {
  name: string;
  calcArea(a: number): number;
}

const first: HasArea = {
  name: 'kvadratas',
  calcArea(lenght: number) {
    return lenght * lenght;
  },
};

const second: HasArea = {
  name: 'apskritimas',
  calcArea(r: number) {
    return (Math.PI * r) ^ 2;
  },
};

first.calcArea(5);
second.calcArea(10);

//INTERFACE PRATESIMAS
//INTERFACE EXTENDS

interface HasFormatter {
  format(): string;
}

// paveldi, bet turi ir savo dalyku

interface Bill extends HasFormatter {
  id: string | number;
  amount: number;
  server: string;
}

const users = {
  id: 1,
  format(): string {
    return `Sis klijentas turi id: ${this.id}`;
  },
};

const bill = {
  id: 2,
  amount: 50,
  server: 'jurga',
  format(): string {
    return `Cekio, kurio id: ${this.id}, moketina suma: ${this.amount} $`;
  },
};

function printFormatted(value: HasFormatter): void {
  console.log(value.format());
}

printFormatted(users);
printFormatted(bill);

function printBill(bill: Bill): void {
  console.log('Padavejas:', bill.server);
  console.log(bill.format());
}

//printBill(users); //truksta amount ir server
printBill(bill); //ok, bet jei pasalinsim format(),
//neveiks, nes Bill extends HasFormatter

// TYPE ALIAS pratesimas

type Person = {
  id: string | number;
  firstName: string;
};

const first1 = {
  id: 1,
  firstName: 'Saulius',
};

// naujas TYPE ALIAS, kuris paveldi is ir pratesia PERSON tipa

type User = Person & {
  email: string;
};

const second1 = {
  id: '2',
  firstName: 'Milda',
  emai: 'milda@mildauskaite.lt',
};

const third1 = {
  email: 'dainius@seb.lt',
};

function printUser(user: User) {
  console.log(user.id, user.firstName, user.email);
}

// printUser(first1); //truksta email
// printUser(second1); //ok
// printUser(third1); //truksta id ir firstName
console.log('hello');
