"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
class Name {
    constructor(value) {
        // 0文字以上、20文字以下
        if (!this.isLength(value)) {
            throw new Error("Name must be 0 to 20 characters");
        }
        this.value = value;
    }
    isLength(value) {
        return value.length >= 0 && value.length <= 20;
    }
}
exports.Name = Name;
