// Membuat objek secara langsung
// contoh 1:
const pet = {
    name: `Ipeh`,
    species: `Dog`,
    age: 3,
    vaccinated: true,
    favToy: `Ball`

}

// cara ambil value property dari objek pet.

//console.log("Ambil properti name dari pet: ", pet.name);
//console.log("Ambil properti fav toy dari pet: ", pet.favToy);

// Membuat objek dengan method new object

const idCard: any = new Object();
idCard.name = `Akbar`;
idCard.age = 18;
idCard.gender = `Laki-laki`;

// console.log(`Isi dari ID Card: `, idCard);

// Membuat object dalam bentuk function

function student(name: string, kelas: number) {
    return {
        name: name,
        kelas: kelas
    }
}
const student1 = student("Akbar", 12);

// console.log("Hasil dari student: ",student1)

// Membuat object dengan method Object.assign

const employee = Object.assign({/*target*/ }, {/*source*/ name: `Irpan`, role: `CEO` });
//console.log("Informasi dari employee: ", employee);

// ------ Interface ------
// Interface --> cetak biru / blueprint
interface IPerson {
    id: number,
    name: string,
    age: number,
    Hobby?: string[], // optional chaining (artinya property tidak wajib diikutsertakan)
}

interface IAdress {
    street: string,
    zip_code: number,
}

interface IDetailInformation {
    detail: IPerson,
    adress: IAdress
}

const paket1: IDetailInformation = {
    detail: {
        id: 123,
        name: `Akbar`,
        age: 20,

    },
    adress: {
        street: `Jl. Pemuda, Surabaya`,
        zip_code: 60232,
    }
}

// untuk ngambil detail informasi
console.log(`ambil info dari paket1: `, paket1);

/* const person001: IPerson = new Object()
person001.id = 1;
person001.name = `Akbar`;
person001.age = 17;
person001.Hobby = [`study`, `gaming`];*/

const person01: IPerson = {
    id: 1,
    name: `Irpan`,
    age: 17,
    Hobby: [`badminton`],

}

const person2: IPerson = {
    id: 2,
    name: `Akbar`,
    age: 18,
    Hobby: [`olahraga`],
}

// untuk mengambil data dari person
//console.log(`Info dari person01: `, person01);
//console.log(`Info dari person2: `, person2);

// ---- Types ----

type Color = `red` | `blue` | `green`
const favColor: Color = `blue`

type Coordinate = {
    X: number,
    Y: number,
}

const point: Coordinate = {X: 5, Y: 10};

// console.log(`hasil dari fav color: `, favColor);
// console.log(`hasil dari point: `, point);

type vehicle = {
    brand: string,
    year: number,
}

type Car = vehicle & {
    seat: string,
}

const car: Car = {
    brand: `Honda`,
    year: 2015,
    seat: `7 seater`,
}

// console.log(`Mobil ini merupakan: `, car);

// --- Properties & Methods

interface IWashingMachine {
    brand: string,
    loadCapacity: number,
    start: () => string,
    stop: () => string,
}

const washingMachine: IWashingMachine = {
    brand: `LG`,
    loadCapacity: 10,

    start(){
        return `Washing started`
    },
    stop(){
        return `Stopping Machine...`
    }
}

// console.log(`Menjalankan mesin cuci: `, washingMachine.start());
// console.log(`Sedang mencuci baju`);
// console.log(`Mematikan mesin cuci: `, washingMachine.stop());

// --- For in Loop ---

const fridge = {
    milk: 1,
    eggs: 10,
}

for (const key in fridge){
    //console.log(key); // --> untuk mengambil properties
    // console.log(fridge[key]); // --> untuk ngambil isinya (contoh kek diatas, 1 sama 10)
    // console.log (`${key}: ${fridge[key]}`) // --> untuk mengambil keseluruhan objek
}

// --- Destructuring Assignment ---
const {username, age} = {
    username: `Akbar`,
    age: 25,
}

console.log(`Username: `, username);
console.log(`Umur`, age);
console.log(`---------------`);

interface IAnimal {
    species: string,
    nickname: string,
    animalAge: number,
}

const {species, nickname, animalAge}: IAnimal = {
    species: `mamalia`,
    nickname: `Gajah`,
    animalAge: 15,
}

// console.log(`species: `, species);
// console.log(`nickname: `, nickname);
// console.log(`animal age: `, animalAge);

// --- Spread operator ---

const basicInfo = { name: `Tom`};
const fullInfo = {
    ...basicInfo,
    age: 30
}

fullInfo.name = `test`

// console.log(`basic Info: `, fullInfo);

const a = {
    a:1
}

const b = {
    b: 2
}

const merged = {...a, ...b}

// console.log(a);
// console.log(b);
// console.log(merged);

// --- Class ---

class BankAccount {
    balance: number = 0
    deposit(amount: number){
        this.balance += amount
    }
    withdraw(amount: number){
        this.balance -= amount
    }
}

/* const myBankAccount = new BankAccount()
console.log(`saldo saat ini: `, myBankAccount.balance);
console.log(`Menyimpan uang...`);
myBankAccount.deposit(100000);
console.log(`saldo setelah deposit: `, myBankAccount.balance);
myBankAccount.withdraw(25000);
console.log(`Saldo setelah ditarik: `, myBankAccount.balance);*/

class Light {
    isOn: boolean = false;
    toggle(){
        this.isOn = !this.isOn
    }   
}

const light = new Light()
light.toggle()
console.log(`Kondisi lampu: `, light.isOn);
light.toggle()
console.log(`Kondisi lampu: `, light.isOn)

// --- constructor ---
class laptop{
    private brand: string;
    public ram: number;

    constructor(brand: string, ram: number){
        this.brand = brand;
        this.ram = ram;

    }

    getDisplay(){
        return {
            brand: this.brand,
            ram: this.ram
        }
    }
}

const Laptop1 = new laptop(`Apple MacBook Pro`, 16);
const Laptop2 = new laptop(`Asus Vivobook`, 10);

console.log(`Info laptop yang sedang diinputkan: `, Laptop1.getDisplay());
console.log(`Info laptop yang sedang diinputkan: `, Laptop2.getDisplay());

// console.log(Laptop1.brand); --> tidak bisa dipanggil karena ada proses encapsulation

// contoh lan:

class Motorcycle{
    private fuel: number = 50;
    public amount: number = 0;

    constructor(amount: number) {
        this.amount = amount
    }

    riding() {
        console.log("Riding the motorcycle ...");
        if (this.fuel > 0) {
            this.fuel -= 5
        }
    }

    brake() {
        console.log("Brake the motorcycle ...")
    }

    refillFuel() {
        return this.fuel += this.amount
    }

    checkFuel() {
        return this.fuel
    }
}

const motorcycle = new Motorcycle(10)

console.log('cek isi bensin : ', motorcycle.checkFuel())
motorcycle.riding()
console.log('cek isi bensin setelah motor berjalan : ', motorcycle.checkFuel())
console.log('mlipir ke pom bensin ...')
motorcycle.refillFuel()
console.log('setelah isi bensin : ', motorcycle.checkFuel())