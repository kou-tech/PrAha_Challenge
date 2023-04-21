"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanId = void 0;
class HumanId {
    constructor(value) {
        // 英数字のみ
        if (!this.isAlphaNumeric(value)) {
            throw new Error("HumanId must be alphanumeric");
        }
        this.value = value;
    }
    isAlphaNumeric(value) {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(value);
    }
}
exports.HumanId = HumanId;
