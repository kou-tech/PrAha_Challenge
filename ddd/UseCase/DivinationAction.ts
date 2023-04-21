import { FortuneTeller } from "../Entity/FortuneTeller";
import { Human } from "../Entity/Human";
import { BirthDate } from "../ValueObject/BirthDate";
import { BloodType } from "../ValueObject/BloodType";
import { HumanId } from "../ValueObject/HumanId";
import { Name } from "../ValueObject/Name";

class DivinationAction {
  async execute(): Promise<void> {
    // 占いをする
    const fortuneTeller = new FortuneTeller("1234567890", "Jiro");
    const human = new Human(
      new HumanId("1234567890"),
      new BloodType("A"),
      new BirthDate(new Date("2000-01-01")),
      new Name("Taro")
    );
    fortuneTeller.divination(human);
  }
}

// 占い処理を実行
const action = new DivinationAction();
action.execute(); // あなたの運勢は最悪です。
