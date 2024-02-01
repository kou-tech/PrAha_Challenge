## 課題１
### 課題１-1
A.
アトミックデザインは、デザインの設計手法であり、UIを再利用可能なコンポーネントに分割し、それらを階層的に組み合わせてページを構築する方法である。
これらのコンポーネントは、最小単位のatomから、molecule、organism、template、pageという5つのレベルに分類される。

### 課題１-2
A.
- page: 最終的な画面を表現するレベルで、具体的なコンテンツを含む。これは、実際のUIの見た目を示すものであり、templateに具体的なコンテンツを埋め込んだものである。
- template: ページのレイアウトを定義し、どのorganism、molecule、atomがどこに配置されるかを示す。ただし、具体的なコンテンツは含まれない。
- organism: 複数のmoleculeとatomを組み合わせて作られ、より具体的な機能を持つコンポーネントの集合体である。
- molecule: 一つ以上のatomを組み合わせて作られ、より具体的な機能を持つコンポーネントである。例えば、ラベル（atom）と入力フィールド（atom）を組み合わせて検索フォーム（molecule）を作ることができる。
- atom: UIの最小単位のコンポーネントで、ボタンや入力フィールドなど、単体で使用できる最小の機能を持つ要素である。

### 課題１-3
A.

- 書き方が違う。クラスコンポーネントはクラスを使用し、関数コンポーネントは通常のJavaScriptの関数またはアロー関数を使用する。

- ライフサイクルメソッドの利用が違う。クラスコンポーネントではライフサイクルメソッドを使用できるが、関数コンポーネントでは使用できない。（ただし、React Hooksを使用すると、関数コンポーネントでもライフサイクルに相当する処理を実装できる）。

- `this`の扱いが違う。クラスコンポーネントでは`this`を使用してpropsやstateにアクセスするが、関数コンポーネントでは`this`は使用しない。

以下にそれぞれのコード例を示します。

次のクラスコンポーネントでは、`constructor`で初期状態を設定し、`componentDidMount`ライフサイクルメソッドでコンポーネントのマウント後にログを出力している。
また、`renderメソッド`内で`this.state`を使用してメッセージを表示している。

```jsx
// クラスコンポーネント
import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello, World!" };
  }

  componentDidMount() {
    console.log("ClassComponent did mount");
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default ClassComponent;
```

関数コンポーネントでは、`useState`と`useEffect`という`React Hooks`を使用している。
`useState`は状態を管理し、`useEffect`はライフサイクルに相当する処理を実装している。
この例では、`useEffect`を使用してコンポーネントのマウント後にログを出力している。また、`message`状態は`this`を使用せずに直接参照している。

```jsx
// 関数コンポーネント
import React, { useState, useEffect } from 'react';

function FunctionComponent() {
  const [message, setMessage] = useState("Hello, World!");

  useEffect(() => {
    console.log("FunctionComponent did mount");
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default FunctionComponent;
```

## 課題2

### 課題2-1
`position: absolute`は要素を通常の文書フローから取り除き、最も近い位置指定の祖先要素（positionがstatic以外）に対して絶対配置をする。
これにより、他の要素との間に予期しない空間が生じたり、要素が重なったりする可能性がある。
また、レスポンシブデザインにおいても、絶対位置指定は柔軟性を損なう可能性がある。
そのため、可能な限りフレックスボックスやグリッドなどのレイアウト技術を使用する。
