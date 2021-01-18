select  o.OrderID,
		ProductName,
		CompanyName,
		format(orderDate,'MMM d yyyy') as OrderDate, 
		format(dateadd(day,10,ShippedDate),'MMM d yyyy') as NewShippedDate,
		(od.Quantity*p.UnitPrice) as OrderCost

from	Orders o JOIN Customers c on o.CustomerID = c.CustomerID
		JOIN OrderDetails od on o.OrderID = od.OrderID
		JOIN Products p on p.ProductID = od.ProductID

where   orderDate >= '01/01/1992'
		and OrderDate <= '03/30/1992' 
		and (od.Quantity*p.UnitPrice) >= 1500.00

order by OrderID
