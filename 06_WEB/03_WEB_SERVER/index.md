## 課題2

**application/x-www-form-urlencoded**:

- データはURLエンコードされ、キーと値のペアとして送信される。各ペアは`&`で区切られ、キーと値は`=`で結ばれる。
- 例: `name=hoge&age=25`
- 主にHTMLフォームのデータ送信に使用される。

**application/json**:

- データはJSON形式で送信される。キーと値はオブジェクトとして構造化され、ネストされたデータを扱うのに適している。
- 例: `{"name": "hoge", "age": 25}`
- RESTful APIとの通信に広く使用される。
