interface Purchase {
  userId: string;
  productId: string;
  transaction: {
    succeeded: true;
    completedAt: Date;
  };
}

interface PaymentRecordRepo {
  getPurchasesBy: (userId: string) => Purchase[];
}

interface PurchaseCheckInterface {
  check: (allPurchases: Purchase[], productId: string) => boolean;
}

class PurchaseCheckService implements PurchaseCheckInterface {
  public check(allPurchases, productId) {
    // 前回の購入日時から一年経過していない商品があれば、購入不可
    const pastPurchase = allPurchases.find(
      (p) =>
        p.productId === productId &&
        p.transaction.succeeded &&
        this.isOneYearPassed(p.transaction.completedAt) === false
    );
    if (pastPurchase) return false;
    return true;
  }

  /**
   * 前回の購入日時から1年経過しているかどうかを判定する
   */
  private isOneYearPassed(lastPurchaseDate: Date): boolean {
    // 現在の日時を取得
    const currentDate: Date = new Date();

    // 前回の購入日時に1年を加算
    const oneYearLater: Date = new Date(lastPurchaseDate);
    oneYearLater.setFullYear(lastPurchaseDate.getFullYear() + 1);

    // 現在の日時が前回の購入日時に1年を加算した日時よりも後であれば、1年経過していると判断
    return currentDate > oneYearLater;
  }
}

class PurchaseService {
  public constructor(
    private paymentRecordRepo: PaymentRecordRepo,
    private purchaseCheck: PurchaseCheckInterface
  ) {}

  public purchase(userId: string, productId: string) {
    const allPurchases = this.paymentRecordRepo.getPurchasesBy(userId);
    if (!this.purchaseCheck.check(allPurchases, productId)) {
      throw new Error("この商品はおひとりさま一品限定です！");
    }

    // 購入手続きに進む
  }
}
