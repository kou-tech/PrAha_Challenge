## 課題2
[解答コード](https://github.com/Hikaru-Giannis/praha-challenge-templates/blob/feature/task/jestSample/__tests__/functions.test.ts)

## 課題3
### 解答3-1
関数が他のクラスに依存しており、意図した挙動になると限らないため。

### 解答3-2
依存クラスが存在する場合、外部から注入して与えることである。
密結合だとテストがしづらいが、依存勢注入することでモック化が可能になりテストがしやすくなるのを解決する。

### 解答3-3
疎結合となる。

### 解答3-4
デメリット
- 外部サービスとの通信障害等の影響で単体テストが失敗するなどが発生する。
- 有料の場合、テストするたびに料金が発生する。
- 外部サービスのリクエスト数などの制限に引っかかる恐れがある。

### 解答3-5
プロパティベースのテスト
- 定義された条件に合わせて自動生成された膨大な値に対してテストを行う手法 (https://zenn.dev/ryo_kawamata/articles/22d4408bd1f138)

### 解答3-6
- Singleton Pattern。
  - クラスのインスタンスをインスタンス化しようとするたびに同じインスタンスを返す。
  - テストケース全体で1つのドライバーインスタンスを共有して利用することが可能。
  - テスト データやその他のファイルを繰り返し読み込む必要がない。
- Factory Design Pattern。
  - 複数の子クラスを持つ親クラスが存在し、ある入力に基づいて特定のクラスを返す必要がある。
  - ファクトリークラスから、インスタンス化を行う。
  - 例として、iosとandroidでそれぞれテストする場合に、共通のドライバーオブジェクトを返す場合など
  - https://qiita.com/shoheiyokoyama/items/d752834a6a2e208b90ca
- Page Objectモデル
  - アプリ内のページがクラスとして表現され、そのページのさまざまなUI要素が変数として定義できるため、コードの重複を減らせる。

## 課題4
[問題](https://github.com/Hikaru-Giannis/praha-challenge-templates/blob/feature/task/jestSample/task.ts)


## 課題5
Prisma
- https://github.com/prisma/prisma/tree/main/packages/client/tests

1. テスト用のヘルパー関数を用意している。
  - テストのマトリクス作成
  https://github.com/prisma/prisma/blob/main/packages/client/tests/functional/_utils/defineMatrix.ts
2. expect-typeを利用している。
  - 型が過度に寛容にならないようにするのに役立つ。
  - 例外の型チェックにも利用されている。
  - https://www.npmjs.com/package/expect-type
3. オブジェクトの値の比較には、toEqualを利用している。
  - https://zenn.dev/t_poyo/articles/4c47373e364718



