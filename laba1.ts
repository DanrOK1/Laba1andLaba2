
const sumThreeNumbers = (a: number, b: number, c: number): number => {
    return a+b+c;
}


const result = sumThreeNumbers(9, 27, 5);
console.log(result);


const constantNumber: number = 20;
const variableString: string = "xdsacs"; 
const variableBoolean: boolean = true; 
const variableArray: number[] = [1, 2, 3, 4]; 
const variableObject: { name: string; age: number } = { name: "Иван", age: 30 };

const variableAny: any = { key: "value" }; 
const variableNull: null = null; 
const variableUndefined: undefined = undefined; 


interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1?: number;
    e2: string;
}

const data: ToJsonStringify = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
};


const jsonString = JSON.stringify(data);
console.log(jsonString); 
