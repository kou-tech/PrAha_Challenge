## 課題1

### 課題1-1
インデックスとは、辞書の索引のようなものである。
例えば、プログラミングという用語を辞書から探す際、全ページから探すのは困難だが、索引を利用すると容易に探すことができる。

### 課題1-2
インデックスはデータベースの実データとは別で管理されており、INSERT、UPDATE、DELETEが起こるたびに更新される。
それはデータベースのパフォーマンスと整合を維持するためである。

インデックスの更新プロセスはオーバーヘッドが伴うため、過度にインデックスを適用するとオーバーヘッドが大きくなり、書き込み操作が遅くなる可能性も含む。
そのため、パフォーマンスのボトルネックとなっているクエリに対して適切にインデックスを適用して、不必要なオーバーヘッドを避けることが大事となってくる。

### 課題1-3
カーディナリティとは特定のカラムのユニークな値の数である。
ユーザーIDなどはカーディナリティが高くなる傾向があり、性別はカーディナリティが低くなる傾向にある。

カーディナリティが高い列にインデックスを適用すると、クエリの効率が向上する可能性が高くなる。

### 課題1-4
カバリングインデックスとは、あるクエリによって要求されるデータをインデックスに含めることで、実際のテーブルにアクセスすることなくインデックスからデータを取得することができる。

例えば、アカウントテーブルのIDとメールアドレスの列に対してカバリングインデックスを適用した場合、これらの列のみを取得するSELECTクエリは、実際のテーブルへのアクセスを必要とせず、インデックスから直接データを取得できる。

少数の列の組み合わせに対して効果的であり、多数の列の組み合わせに対してはインデックスのサイズが大きくなるため、オーバーヘッドが勝る可能性がある。

````sql
CREATE INDEX idx_account_id_email ON accounts (id, email);
````

SQL Serverでは付加列インデックスがあり、そちらはカバリングインデックスよりもサイズが小さいらしい。

### 課題1-5
オートインクリメント

メリット
- 数値の連番でレコードが挿入されるため、インデックスの再構築や更新ののオーバーヘッドは小さくなる。
- 数値であることから、数値の比較が文字列より効率的であるため、検索のパフォーマンスが良くなる。

デメリット
- URLなどにIDを含める場合、他のリソースの推測が容易になる。
- IDが事前に分からないため、テストでIDの比較することができない。(DBの特性に依存する)
- 開発、ステージング、本番における環境差分が起こるため、データ連携、デバッグなどがやりづらい。
- 特に複数のテーブルを結合するクエリにおいて、間違ったID条件を指定してしまうリスクがある。

UUIDのv6,v7,v8はタイムスタンプ情報を使ってソートできるらしい。
まだドラフト段階？

## 課題2

### 課題2-1
プロファイルで確認

````sql
SET profiling = 1;

...

SHOW PROFILES;
````

次の結果となった。
````sql
0.32121650 | SELECT * FROM employees WHERE last_name like "b%"
````

### 課題2-2

````sql
CREATE INDEX idx_last_name ON employees(last_name);
````

インデックス作成後の計測は以下の結果となった。

````sql
0.17591225 | SELECT * FROM employees WHERE last_name like "b%"
````

### 課題2-3

````sql
+----------+------------+---------------------------------------------------+
| Query_ID | Duration   | Query                                             |
+----------+------------+---------------------------------------------------+
|        1 | 0.31345775 | SELECT * FROM employees WHERE last_name like "b%" |
|        2 | 0.16448300 | SELECT * FROM employees WHERE last_name like "b%" |
|        3 | 0.11866475 | SELECT * FROM employees WHERE last_name like "b%" |
|        4 | 0.12041825 | SELECT * FROM employees WHERE last_name like "b%" |
|        5 | 0.14454625 | SELECT * FROM employees WHERE last_name like "b%" |
+----------+------------+---------------------------------------------------+
````


A. バッファプールが効くようになったため。

次のコマンドでストレージエンジンを確認。

````sql
SHOW CREATE TABLE employees;

| employees | CREATE TABLE `employees` (
  `emp_no` int(11) NOT NULL,
  `birth_date` date NOT NULL,
  `first_name` varchar(14) NOT NULL,
  `last_name` varchar(16) NOT NULL,
  `gender` enum('M','F') NOT NULL,
  `hire_date` date NOT NULL,
  PRIMARY KEY (`emp_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |
````

InnoDBエンジンの場合、MySQLは「バッファプール」というメモリ領域を持つ。
バッファプールは、データベースのデータやインデックスページをメモリ上にキャッシュする。
そのため、後続のクエリはディスクからの読み込みが不要になり、処理が速くなる。

参考URL
- https://dev.mysql.com/doc/refman/8.0/ja/innodb-buffer-pool.html
https://dev.mysql.com/doc/refman/8.0/ja/innodb-adaptive-hash.html