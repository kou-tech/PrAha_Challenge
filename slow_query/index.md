## 課題1-1

スロークエリの設定を確認
````sql
SHOW GLOBAL VARIABLES LIKE 'slow%';
````

````sql
SHOW GLOBAL VARIABLES LIKE 'long_query_time';
````

スロークエリの設定を以下のコマンドで更新。

````sql
SET GLOBAL slow_query_log = ON;
SET GLOBAL long_query_time = 0.01;
````

0.1秒以下のクエリ
````sql
SELECT * FROM employees WHERE emp_no=499999;
SELECT * FROM employees LIMIT 100;
SELECT emp_no FROM titles WHERE emp_no IN (110022, 110039);
````


0.1秒より長いクエリ
### 1

````sql
SELECT * FROM employees;
````

````log
# Time: 2023-11-29T17:02:39.044530Z
# User@Host: root[root] @ localhost []  Id:     4
# Query_time: 0.304357  Lock_time: 0.000180 Rows_sent: 300024  Rows_examined: 300024
SET timestamp=1701277359;
SELECT * FROM employees;
````
### 2
````sql
SELECT * FROM titles WHERE title = 'Manager';
````

````log
# Time: 2023-11-29T17:07:53.956632Z
# User@Host: root[root] @ localhost []  Id:     4
# Query_time: 0.296655  Lock_time: 0.000193 Rows_sent: 24  Rows_examined: 443308
SET timestamp=1701277673;
SELECT * FROM titles WHERE title = 'Manager';
````
### 3
````sql
SELECT AVG(salary) FROM salaries WHERE from_date >= '1997-04-01' AND to_date <= '1998-04-01';
````

````log
# Time: 2023-11-29T17:20:09.095199Z
# User@Host: root[root] @ localhost []  Id:     4
# Query_time: 0.989633  Lock_time: 0.000207 Rows_sent: 1  Rows_examined: 2844047
SET timestamp=1701278409;
SELECT AVG(salary) FROM salaries WHERE from_date >= '1997-04-01' AND to_date <= '1998-04-01';
````

## 課題2
- 最も頻度高くスロークエリに現れるクエリ
````sql
mysqldumpslow -s c /var/lib/mysql/1873525e17ca-slow.log
````

- 実行時間が最も長いクエリ
````sql
mysqldumpslow -s t /var/lib/mysql/1873525e17ca-slow.log
````

- ロック時間が最も長いクエリ
````sql
mysqldumpslow -s l /var/lib/mysql/1873525e17ca-slow.log
````

## 課題3-1

````log
Count: 2  Time=1.05s (2s)  Lock=0.00s (0s)  Rows=1329493.0 (2658986), root[root]@localhost
  SELECT emp_no,from_date FROM salaries WHERE from_date >= 'S'
````

````sql
CREATE INDEX idx_salaries_from_date ON salaries(from_date);
````

````log
Reading mysql slow query log from /var/lib/mysql/1873525e17ca-slow.log
Count: 1  Time=2.61s (2s)  Lock=0.00s (0s)  Rows=2844047.0 (2844047), root[root]@localhost
  SELECT * FROM salaries
````

## 課題4

### 新人Aへの解答
`LIMIT 1`を指定したところで実際にテーブルスキャンしているレコード数が1件ではない可能性があるため。
LIMITは単に結果セットから1行だけを返すように指示するもので、データベースが内部的にどれだけのレコードを調べる必要があるかには影響しない。

しかし、LIMITを指定することで速くなるケースもある。
結果セットが非常に大きく、インデックスを効率的に利用できる場合、LIMITがないとデータベースは条件に合致するすべてのレコードを取得しようとするが、LIMITを使用すると、必要な数のレコードだけを迅速に取得して処理を終了できる。

### 新人Bへの解答
フィルタリングが行われるタイミング異なる。

WHEREで条件を絞る場合、employeesテーブルにsalariesテーブルが結合されてから、WHERE句の条件を絞り込む。JOIN処理が重い場合、効率的ではない可能性がある。
対象となるテーブルのレコード数は次の結果となるため、JOIN処理が重くなるレコード数ではあると考える。

````txt
employees → 300024
salaries → 2844047
````

ONで条件を絞る場合、employeesテーブルから`gender = "M"`と`birth_date > "1960-01-01"`の条件を満たす行が選択され、その後でsalariesテーブルと結合される。

#### 外部結合での出力結果の違い

##### LEFT OUTER JOINを使用し、WHEREで条件を絞る場合
salariesテーブルに対応するレコードが存在しない場合に関しても、WHERE句の条件が適用される。

##### LEFT OUTER JOINを使用し、ON句で条件を絞る場合
`e.gender = "M"`と`e.birth_date > "1960-01-01"`の条件を満たすemployeesテーブルの行に対応するsalariesテーブルの行が存在する場合、そのsalariesテーブルのデータが結合される。これは、結合条件を満たすためである。

`e.gender = "M"`と`e.birth_date > "1960-01-01"`の条件を満たすemployeesテーブルの行に対応するsalariesテーブルの行が存在しない場合、または`e.gender = "M"`と`e.birth_date > "1960-01-01"`の条件を満たさないemployeesテーブルの行については、salariesテーブルの全ての列がNULLとなる。これは結合条件を満たさないため、または対応するsalariesテーブルの行が存在しないためである。

`e.gender = "M"`と`e.birth_date > "1960-01-01"`の条件を満たさないが、employeesテーブルの行に対応するsalariesテーブルの行が存在する場合、条件を満たさないレコードは取得される。これは結合条件を満たさないためである。

`e.gender = "M"`と`e.birth_date > "1960-01-01"`の条件を満たさず、employeesテーブルの行に対応するsalariesテーブルの行も存在しない場合、条件を満たさないレコードであっても取得される。これはLEFT OUTER JOINの特性によるもので、左側のテーブルの行は常に結果に含まれる。

[結果の比較](./result.txt)

## 課題5

カーソルベースページネーション

- カーソル: 取得されたデータセット内の特定の位置を示す。

メリット

1. カーソル位置からデータを取得し、カーソルより前のデータはスキャンする必要がないため、効率的になることがある。
2. 一貫性を保ちやすい。LIMIT、OFFSETの実装において、1ページを表示している間にデータの追加や削除が行われたとする。その後ページ2へ移動するとデータの全体の順序が更新されるため、データが重複で表示される可能性がある。

デメリット

1. 特定のページへ移動することが厳しい。「前へ」「次へ」のようなナビゲーションとなる。
2. タイムスタンプをカーソルとする場合、一意性を確保できない場合がある。

## 課題6

1. スロークエリログは実際のクエリの実行時間に基づいてクエリを記録しますが、その時間に初期ロック取得時間は含まれますか？

初期ロック時間とは
- MySQLがクエリを実行する前に、必要なデータ行やテーブルに対してロックを取得するために費やされる時間を指す。

<details>
<summary>解答</summary>
含まれる
</details>
