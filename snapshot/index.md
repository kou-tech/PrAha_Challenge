## 課題1
## 課題1-1 解答
UIが予期せず変更されていないかを確かめるツールである。
アプリケーションまたはコンポーネントの現在の特性と、それらの特性に対して保存されている「適切な」な値を比較することでリグレを防止する。
https://jestjs.io/ja/docs/snapshot-testing
https://www.sitepen.com/blog/snapshot-testing-benefits-and-drawbacks

## 課題1-2 解答


## 課題1-3 解答

## 課題2
https://github.com/Hikaru-Giannis/my-app

## 課題3
- Jestのスナップショットテストでは、スナップショットをCIで自動生成するためには明示的にオプションを指定する必要があります。
それはなぜでしょうか？
<details>
<summary>解答</summary>
CIで実行してスナップショットを生成すると、既存スナップショットと比較することなく、新しいスナップショットを生成していることから、
テストとしての役割を果たさないため。(私はそのような解釈をしました。)

https://github.com/facebook/jest/issues/9235
</details>



## Furunoさんクイズ解答
1. 非対称なMatcherを利用する。

参考記事 : https://runebook.dev/ja/docs/jest/snapshot-testing?page=2
````
 expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
 });
````
2. 任意の文字に置換(replace)し、固定する。
3. 
- toMatchSnapshot
  - 結果がスナップショットファイルに書き込まれる。
- toMatchInlineSnapshot
  - 結果がソースコードに自動的に生成される。