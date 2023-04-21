import { Human } from "./Human";

export class FortuneTeller {
  constructor(private id: string, private name: string) {}

  // 占いをする
  divination(human: Human): void {
    // TODO 年齢と血液型による占い結果を返す
    const age = human.getAge();
    const bloodType = human.getBloodType();
    console.log(`あなたの運勢は最悪です。`);
  }
}
