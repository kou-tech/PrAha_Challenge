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
const FortuneTeller_1 = require("../Entity/FortuneTeller");
const Human_1 = require("../Entity/Human");
const BirthDate_1 = require("../ValueObject/BirthDate");
const BloodType_1 = require("../ValueObject/BloodType");
const HumanId_1 = require("../ValueObject/HumanId");
const Name_1 = require("../ValueObject/Name");
class DivinationAction {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            // 占いをする
            const fortuneTeller = new FortuneTeller_1.FortuneTeller("1234567890", "Jiro");
            const human = new Human_1.Human(new HumanId_1.HumanId("1234567890"), new BloodType_1.BloodType("A"), new BirthDate_1.BirthDate(new Date("2000-01-01")), new Name_1.Name("Taro"));
            fortuneTeller.divination(human);
        });
    }
}
// 占い処理を実行
const action = new DivinationAction();
action.execute();
