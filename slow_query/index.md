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
