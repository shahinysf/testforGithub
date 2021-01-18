create view vw_order_cost
as
Select o.OrderID,
		o.OrderDate,
		p.ProductID,
		c.CompanyName,
		(od.Quantity * od.UnitPrice) as OrderCost
from	Orders o 
        JOIN Customers c on o.CustomerID = c.CustomerID
		JOIN OrderDetails od on o.OrderID = od.OrderID
		JOIN Products p on p.ProductID = od.ProductID
