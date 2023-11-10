## 課題1

## 1-1
````sql
SELECT CustomerID, COUNT(CustomerID) as OrderNumber
FROM [Orders]
WHERE '1996-01-01' <= OrderDate
AND OrderDate <= '1996-12-31'
GROUP BY CustomerID
HAVING COUNT(CustomerID) >= 3;
````

## 1-2
````sql
SELECT CustomerID, COUNT(CustomerID) as OrderNumber
FROM [Orders]
GROUP BY CustomerID
ORDER BY OrderNumber DESC;
````

CustomerID:20で10回注文している。

## 1-3
````sql
SELECT o.OrderID,COUNT(od.OrderDetailID) as OrderDetailNumber
FROM [Orders] o
JOIN OrderDetails od ON o.OrderID = od.OrderID
GROUP BY o.OrderID
ORDER BY OrderDetailNumber DESC;
````

CustomerID: 10406,10393,10382,10360,10337,10325,10324,10309,10294,10273

5個のOrderDetailが紐づいていた。

## 1-4
````sql
SELECT ShipperID, COUNT(OrderID) as ShipperNumber
FROM [Orders]
GROUP BY ShipperID
ORDER BY ShipperNumber DESC;
````
ShipperID:2で74回注文されている。

## 1-5
````sql
SELECT c.Country, ROUND(SUM(od.Quantity * p.Price)) AS TotalSale
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY c.Country
ORDER BY TotalSale DESC;
````

## 1-6
````sql
SELECT
  c.Country,
  strftime('%Y', o.OrderDate) AS Year,
  ROUND(SUM(od.Quantity * p.Price)) AS TotalSale
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY c.Country, Year
ORDER BY Year DESC, TotalSale DESC;
````

## 1-7
````sql
UPDATE Employees
SET Junior = CASE
WHEN BirthDate > '1960-01-01' THEN 'true'
ELSE 'false';
````

## 1-8
````sql
SELECT Shippers.ShipperID, Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM Shippers
JOIN Orders ON Shippers.ShipperID = Orders.ShipperID
GROUP BY Shippers.ShipperID
HAVING COUNT(Orders.OrderID) >= 70;
````

````sql
UPDATE Shippers
SET long_relation = CASE
WHEN 
THEN TRUE
ELSE FALSE;
````

## 1-9
````sql
SELECT 
    o.OrderID, 
    o.EmployeeID, 
    MAX(o.OrderDate) AS LatestOrderDate
FROM 
    Order o
GROUP BY 
    o.EmployeeID, o.OrderID
ORDER BY 
    o.EmployeeID, LatestOrderDate DESC;
````

````sql
SELECT 
    OrderID, 
    EmployeeID, 
    OrderDate
FROM (
    SELECT 
        o.OrderID, 
        o.EmployeeID, 
        o.OrderDate,
        ROW_NUMBER() OVER (PARTITION BY o.EmployeeID ORDER BY o.OrderDate DESC, o.OrderID DESC) as rn
    FROM 
        Order o
) as sub
WHERE 
    sub.rn = 1;
````

## 1-10
````sql
SELECT *
FROM Customers
WHERE CustomerName IS NOT NULL;
````

````sql
SELECT *
FROM Customers
WHERE CustomerName IS NULL;
````

SQLにおけるNULLは、「存在しない不明な値」のため、他の値とは扱いが異なるため。

## 1-11

````sql
DELETE FROM Employees WHERE EmployeeId = 1;
````

Ordersにレコードがあるとエラーが発生するケースがある。

````sql
SELECT Orders.*
FROM Orders
JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId
````

````sql
SELECT Orders.*
FROM Orders
LEFT JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId
WHERE Employees.EmployeeId IS NULL;
````


## 2-1
「WHERE」と「HAVING」は、GROUP BYした上で絞り込みを行う際に使用されるクエリである。
違いとしては、WHEREはグループ化前にフィルタリングを行い、HAVINGはグループ化後にフィルタリングを行う。
WHEREはグループ化前に条件に合致するレコードを抽出し、HAVINGはグループ化後に条件に合致するグループを抽出する。

WHEREは単純な条件でのフィルタリングに使用し、HAVINGは集計関数を使用した条件でのフィルタリングに使用する。

## 2-2
- DDL (Data Definition Language)
  - データベースの構造を定義するためのSQL文である。
  - DDLには、CREATE、ALTER、DROPなどのコマンドが含まれる。

- DML (Data Manipulation Language)
  - データベース内のデータを操作するためのSQL文である。
  - DMLには、SELECT、INSERT、UPDATE、DELETEなどのコマンドが含まれる。

- DCL (Data Control Language)
  - データベースのセキュリティを管理するためのSQL文である。
  - DCLには、GRANT、REVOKEなどのコマンドが含まれる。

- TCL (Transaction Control Language)
  - トランザクションを管理するためのSQL文である。
  - TCLには、COMMIT、ROLLBACK、SAVEPOINTなどのコマンドが含まれる。

## 3

データベースにおけるロールとは何でしょう？

- a) データベースのテーブルを参照するためのビュー
- b) データベースのテーブルに対する操作を定義したもの
- c) ユーザーに対して一貫した権限を割り当てるためのもの
- d) データベースのテーブルをグループ化するためのもの

<details>
<summary>解答</summary>
c) ユーザーに対して一貫した権限を割り当てるためのもの
</details>


GRANTコマンドは何をするためのものでしょう？

- a) ユーザーにデータベースへのアクセス権を付与する
- b) データベースからデータを取得する
- c) データベースのテーブルを作成する
- d) データベースのテーブルを削除する

<details>
<summary>解答</summary>
a) ユーザーにデータベースへのアクセス権を付与する
</details>


次のうち、ユーザーのデータベースへのアクセス権を取り消すためのコマンドはどれでしょう？

- a) SELECT
- b) INSERT
- c) UPDATE
- d) REVOKE

<details>
<summary>解答</summary>
d) REVOKE
</details>
