## 課題1
[実装リポジトリ](https://github.com/Hikaru-Giannis/my-app)

## 課題2
[Squareのストーリー](https://github.com/Hikaru-Giannis/my-app/blob/master/src/square.stories.js)

[Boardのストーリー](https://github.com/Hikaru-Giannis/my-app/blob/master/src/board.stories.js)

[Gameのストーリー](https://github.com/Hikaru-Giannis/my-app/blob/master/src/game.stories.js)

## 課題3
メリット
- 開発者とデザイナー間のコミュニケーションが円滑になる。
- コンポーネントとストーリーの再利用性があるため、拡張性が向上する。
- 開発着手前や途中でもクライアントのフィードバックに利用することができる。

デメリット
- 実装の工数が増える。
- 既存のプロジェクトに導入する場合に、移行作業を行う必要がある。
- いくつかのバグを含んでいる。

[Storybook JS - an open-source tool with tons of benefits](https://tsh.io/blog/storybook-js/)

[Quick overview: Storybook with React](https://medium.com/edonec/quick-overview-storybook-with-react-439e1ccce5a7)

## 課題4
- StoryBook等を利用するコンポーネント駆動開発(CDD)とは、どのような開発方法でしょうか？
<details>
<summary>解答</summary>
小さなコンポーネントのレベルから作り始め、最終的にページを完成させる「ボトムアップ」からUIを構築する開発手法である。
</details>

- コンポーネント駆動型ではないUIとはどのようなUIでしょうか？
<details>
<summary>解答</summary>
ページベース Webサイトをページの集合として扱う開発および設計プロセス。

https://www.10bestdesign.com/blog/page-based-and-component-based-web-application-development-designs-/

ページ用に設計されたツール: Wordpressなどのドキュメントの表示に重点を置いたツール。
https://www.componentdriven.org/#benefits
</details>

- storybookのArgsオブジェクトは1つのストーリーごとではなく、コンポーネントやグローバル単位でも定義することは可能か。またこれらは再利用が可能か。
<details>
<summary>解答</summary>
どちらも可能である。再利用しようとしているが、エラーが出力され苦戦中...
https://storybook.js.org/docs/react/writing-stories/args#args-composition
</details>

furunoさん解答

Q1.
.envファイルにSTORYBOOK_API_KEYなどとして、APIキーを定義する。
https://storybook.js.org/docs/react/configure/environment-variabless

Q2.
storybook内で定義したglobal種別は、storybook環境でのみ読み込み可能にする必要があるため。

Q3.
Mock Service Workerを利用して、APIリクエストをモックする。
https://storybook.js.org/addons/msw-storybook-addon

kawamotoさん解答
Q1.
CSFとは、ES6モジュールに基づいてストーリーを作成する方法で、シンプルで読みやすく、どこでも使用できることを目的としている。
https://storybook.js.org/blog/component-story-format/

Q2.
main.jsには、Storybookサーバーの動作を制御する設定を記述する。
preview.jsには、ストーリーのレンダリング方法を制御したり、グローバルデコレータやパラメータを追加したりする設定を記述する。
https://storybook.js.org/docs/react/configure/overview

Q3.
decoratorとは、ストーリーを描画する際にそのストーリーをラップした上位コンポーネントのことである。データを渡したり、ちょっとしたスタイルを適用することが可能。
https://storybook.js.org/docs/react/writing-stories/decorators#component-decorators