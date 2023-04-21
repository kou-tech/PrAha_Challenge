"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Human_1 = require("../Entity/Human");
const HumanId_1 = require("../ValueObject/HumanId");
const BloodType_1 = require("../ValueObject/BloodType");
const BirthDate_1 = require("../ValueObject/BirthDate");
const Name_1 = require("../ValueObject/Name");
class HumanRegisterAction {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            // 正常例
            const human = new Human_1.Human(new HumanId_1.HumanId("1234567890"), new BloodType_1.BloodType("A"), new BirthDate_1.BirthDate(new Date("2000-01-01")), new Name_1.Name("Taro"));
            // 異常例1 : Error: BloodType must be A, B, O, AB
            // const human = new Human(
            //   new HumanId("1234567890"),
            //   new BloodType("C"),
            //   new BirthDate(new Date("2010-01-01")),
            //   new Name("Taro")
            // );
            // 異常例2 : Error: BirthDate must be past
            // const human = new Human(
            //   new HumanId("1234567890"),
            //   new BloodType("A"),
            //   new BirthDate(new Date("2030-01-01")),
            //   new Name("Taro")
            // );
            // TODO 登録処理
            return Promise.resolve(human);
        });
    }
}
// 登録処理を実行
const action = new HumanRegisterAction();
action.execute().then((human) => {
    console.log(human);
});
