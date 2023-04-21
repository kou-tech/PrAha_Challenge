import { Human } from "../Entity/Human";
import { HumanId } from "../ValueObject/HumanId";
import { BloodType } from "../ValueObject/BloodType";
import { BirthDate } from "../ValueObject/BirthDate";
import { Name } from "../ValueObject/Name";

class HumanRegisterAction {
  async execute(): Promise<Human> {
    // 正常例
    const human = new Human(
      new HumanId("1234567890"),
      new BloodType("A"),
      new BirthDate(new Date("2000-01-01")),
      new Name("Taro")
    );

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
  }
}

// 登録処理を実行
const action = new HumanRegisterAction();
action.execute().then((human) => {
  console.log(human);
});
