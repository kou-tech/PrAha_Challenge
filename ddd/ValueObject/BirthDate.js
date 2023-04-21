"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BirthDate = void 0;
class BirthDate {
    constructor(value) {
        // 未来の日付は許可しない
        if (this.isFutureDate(value)) {
            throw new Error("BirthDate must be past");
        }
        // 20歳未満は許可しない
        if (this.isUnder20(value)) {
            throw new Error("BirthDate must be over 20 years old");
        }
        this.value = value;
    }
    isFutureDate(value) {
        return value > new Date();
    }
    isUnder20(value) {
        const now = new Date();
        const diff = now.getFullYear() - value.getFullYear();
        return diff < 20;
    }
}
exports.BirthDate = BirthDate;
