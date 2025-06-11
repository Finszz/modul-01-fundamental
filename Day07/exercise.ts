// soal 1

class Students{
    private name: string;
    private email: string;
    private age: number;
    private score: number;

    constructor(name: string, email: string, age: number, score: number){
        this.name = name;
        this.email = email;
        this.age = age;
        this.score = score;
    }

    getDisplay(){
        return {
            name: this.name,
            email: this.email,
            age: this.age,
            score: this.score,
        }
    }
}

const siswa1 = new Students(`Akbar`, `Akbar27@gmail.com`, 16, 80);
const siswa2 = new Students(`Irfan`, `Irpan09@gmail.com`, 18, 90);
const siswa3 = new Students(`Nata`, `Nata06@gmail.com`, 20, 100);

function terendah(siswa1:any, siswa2:any, siswa3:any){
    return Math.min(siswa1.age, siswa2.age, siswa3.age);
    
}

function umurTertua(siswa1:any, siswa2:any, siswa3:any){
    return Math.max(siswa1.age, siswa2.age, siswa3.age);
}

function averageUmur(siswa1:any, siswa2:any, siswa3:any) {
    let average1: number = 0;
    let averageUmur = siswa1.age + siswa2.age + siswa3.age

    for (let i = 0; i < 1; i++) {
       average1 = averageUmur / 3;
    }

    return average1
}
console.log(siswa1)

console.log(terendah(siswa1, siswa2, siswa3));
console.log(umurTertua(siswa1, siswa2, siswa3));
console.log(averageUmur(siswa1, siswa2, siswa3));