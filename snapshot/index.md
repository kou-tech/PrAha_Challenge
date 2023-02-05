## 課題1
## 課題1-1 解答
UIが予期せず変更されていないかを確かめるツールである。
アプリケーションまたはコンポーネントの現在の特性と、それらの特性に対して保存されている「適切な」な値を比較することでリグレを防止する。
https://jestjs.io/ja/docs/snapshot-testing
https://www.sitepen.com/blog/snapshot-testing-benefits-and-drawbacks

## 課題1-2 解答


## 課題1-3 解答

## 課題2

- Jestのスナップショットテストでは、スナップショットをCIで自動生成するためには明示的にオプションを指定する必要があります。
それはなぜでしょうか？
<details>
<summary>解答</summary>
CIで実行してスナップショットを生成すると、既存スナップショットと比較することなく、新しいスナップショットを生成していることから、
テストとしての役割を果たさないため。(私はそのような解釈をしました。)

https://github.com/facebook/jest/issues/9235
</details>



