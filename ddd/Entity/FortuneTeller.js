"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FortuneTeller = void 0;
class FortuneTeller {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // 占いをする
    divination(human) {
        // TODO 年齢と血液型による占い結果を返す
        const age = human.getAge();
        const bloodType = human.getBloodType();
        console.log(`あなたの運勢は最悪です。`);
    }
}
exports.FortuneTeller = FortuneTeller;
