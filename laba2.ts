const average = (arr: number[]): number => {
    let sum: number = 0;
    for (let i: number = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / arr.length;
}

const avgResult = average([1, 2, 3, 4, 5]);
console.log(`Среднее арифметическое: ${avgResult}`);
console.log();


const countInRange = (matrix: number[][], min: number, max: number): number => {
    let count = 0;
    for (const row of matrix) {
        for (const value of row) {
            if (value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
};


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const countResult = countInRange(matrix, 2, 8);
console.log(`Количество значений: ${countResult}`); 
console.log();

type MyTuple = [string, string, number];

const formatTuple = ([str0, str1, num]: MyTuple): string => {
    return str0 + ' - ' + num + ' - ' + str1;
};


const myTuple: MyTuple = ['Первое', 'Второе', 52];
console.log(formatTuple(myTuple)); 
console.log();

enum OilType {
    Canola = "Рапсовое",
    Sunflower = "Подсолнечное",
    Olive = "Оливковое"
}

console.log(OilType.Canola); 
console.log();

class Pet {
    name: string = 'Some pet';
    age: number = -1;

    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;

    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak() {
        return "Miyau!";
    }
}

const printPetInfo = <T extends Pet>(pet: T): void => {
    console.log(["Имя: " + pet.name, "Возраст: " + pet.age, "Звук: " + pet.speak()].join(", "));
};


const dog = new Dog();
const cat = new Cat();
printPetInfo(dog);
console.log();
printPetInfo(cat);
console.log();


type OilProduct = {
    name: string;
    type: OilType;
    volume: number; 
    pricePerLiter: number; 
};

const oilProduct: OilProduct = {
    name: "Подсолнечное масло Золотое семечко",
    type: OilType.Sunflower,
    volume: 5,
    pricePerLiter: 200
};

console.log(JSON.stringify(oilProduct)); 
