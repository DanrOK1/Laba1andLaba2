var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var average = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / arr.length;
};
var avgResult = average([1, 2, 3, 4, 5]);
console.log("\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435: ".concat(avgResult));
console.log();
var countInRange = function (matrix, min, max) {
    var count = 0;
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var value = row_1[_a];
            if (value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
};
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var countResult = countInRange(matrix, 2, 8);
console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439: ".concat(countResult));
console.log();
var formatTuple = function (_a) {
    var str0 = _a[0], str1 = _a[1], num = _a[2];
    return str0 + ' - ' + num + ' - ' + str1;
};
var myTuple = ['Первое', 'Второе', 52];
console.log(formatTuple(myTuple));
console.log();
var OilType;
(function (OilType) {
    OilType["Canola"] = "\u0420\u0430\u043F\u0441\u043E\u0432\u043E\u0435";
    OilType["Sunflower"] = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435";
    OilType["Olive"] = "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435";
})(OilType || (OilType = {}));
console.log(OilType.Canola);
console.log();
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
var printPetInfo = function (pet) {
    console.log(["Имя: " + pet.name, "Возраст: " + pet.age, "Звук: " + pet.speak()].join(", "));
};
var dog = new Dog();
var cat = new Cat();
printPetInfo(dog);
console.log();
printPetInfo(cat);
console.log();
var oilProduct = {
    name: "Подсолнечное масло Золотое семечко",
    type: OilType.Sunflower,
    volume: 5,
    pricePerLiter: 200
};
console.log(JSON.stringify(oilProduct));
