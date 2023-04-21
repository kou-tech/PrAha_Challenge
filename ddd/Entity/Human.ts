import { BirthDate } from "../ValueObject/BirthDate";
import { BloodType } from "../ValueObject/BloodType";
import { Name } from "../ValueObject/Name";
import { HumanId } from "../ValueObject/HumanId";

export class Human {
  constructor(
    private id: HumanId,
    private bloodType: BloodType,
    private birthDate: BirthDate,
    private name: Name
  ) {}

  // 年齢を取得
  getAge(): number {
    const now = new Date();
    const diff = now.getFullYear() - this.birthDate.value.getFullYear();
    return diff;
  }

  // 血液型を取得
  getBloodType(): string {
    return this.bloodType.value;
  }
}
