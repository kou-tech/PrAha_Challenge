"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
class Human {
    constructor(id, bloodType, birthDate, name) {
        this.id = id;
        this.bloodType = bloodType;
        this.birthDate = birthDate;
        this.name = name;
    }
    // 年齢を取得
    getAge() {
        const now = new Date();
        const diff = now.getFullYear() - this.birthDate.value.getFullYear();
        return diff;
    }
    // 血液型を取得
    getBloodType() {
        return this.bloodType.value;
    }
}
exports.Human = Human;
