export class BirthDate {
  // readonlyとするか、getメソッドを用意するか
  public readonly value: Date;

  constructor(value: Date) {
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

  private isFutureDate(value: Date): boolean {
    return value > new Date();
  }

  private isUnder20(value: Date): boolean {
    const now = new Date();
    const diff = now.getFullYear() - value.getFullYear();
    return diff < 20;
  }
}
