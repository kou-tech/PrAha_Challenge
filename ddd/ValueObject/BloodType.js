"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloodType = void 0;
class BloodType {
    // TODO 型定義
    // constructor(value: "A" | "B" | "O" | "AB") {}
    constructor(value) {
        if (!this.isBloodType(value)) {
            throw new Error("BloodType must be A, B, O, AB");
        }
        this.value = value;
    }
    isBloodType(value) {
        const regex = /^(A|B|O|AB)$/;
        return regex.test(value);
    }
}
exports.BloodType = BloodType;
