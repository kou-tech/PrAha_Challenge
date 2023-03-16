interface ReplaceRule {
  match: (carry: string, n: number) => boolean;
  apply: (carry: string, n: number) => string;
}

class NumberConverter {
  public constructor(private rules: ReplaceRule[]) {}

  public convert(n: number): string {
    let carry = "";
    for (const rule of this.rules) {
      if (rule.match(carry, n)) {
        carry = rule.apply(carry, n);
      }
    }
    return carry;
  }
}

/**
 * 与えられた数値が与えられた基数で割り切れる場合に、与えられた置換文字列を返すルール
 */
class CyclicNumberRule implements ReplaceRule {
  public constructor(private base: number, private replacement: string) {}

  public match(carry: string, n: number): boolean {
    return n % this.base === 0;
  }

  public apply(carry: string, n: number): string {
    return carry + this.replacement;
  }
}

class PassThroughRule implements ReplaceRule {
  public match(carry: string, n: number): boolean {
    return carry === "";
  }

  public apply(carry: string, n: number): string {
    return n.toString();
  }
}

const fizzBuzz = new NumberConverter([
  new CyclicNumberRule(3, "Fizz"),
  new CyclicNumberRule(5, "Buzz"),
  new PassThroughRule(),
]);

console.log(fizzBuzz.convert(1)); // => "1"
console.log(fizzBuzz.convert(3)); // => "Fizz"
console.log(fizzBuzz.convert(5)); // => "Buzz"
console.log(fizzBuzz.convert(15)); // => "FizzBuzz"
console.log(fizzBuzz.convert(6)); // => "Fizz"
console.log(fizzBuzz.convert(10)); // => "Buzz"
console.log(fizzBuzz.convert(7)); // => "7"
