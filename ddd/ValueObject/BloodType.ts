export class BloodType {
  public readonly value: string;

  // TODO 型定義
  // constructor(value: "A" | "B" | "O" | "AB") {}

  constructor(value: string) {
    if (!this.isBloodType(value)) {
      throw new Error("BloodType must be A, B, O, AB");
    }
    this.value = value;
  }

  private isBloodType(value: string): boolean {
    const regex = /^(A|B|O|AB)$/;
    return regex.test(value);
  }
}
