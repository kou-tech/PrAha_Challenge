export class Name {
  private readonly value: string;

  constructor(value: string) {
    // 0文字以上、20文字以下
    if (!this.isLength(value)) {
      throw new Error("Name must be 0 to 20 characters");
    }
    this.value = value;
  }

  private isLength(value: string): boolean {
    return value.length >= 0 && value.length <= 20;
  }
}
