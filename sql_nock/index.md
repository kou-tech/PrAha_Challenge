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


