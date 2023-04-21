export class HumanId {
  public readonly value: string;
  constructor(value: string) {
    // 英数字のみ
    if (!this.isAlphaNumeric(value)) {
      throw new Error("HumanId must be alphanumeric");
    }
    this.value = value;
  }

  private isAlphaNumeric(value: string): boolean {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(value);
  }
}
