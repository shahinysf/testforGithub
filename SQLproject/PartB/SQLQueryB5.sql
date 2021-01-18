select o.OrderID, c.CompanyName, format (o.ShippedDate, 'MM/dd/yyyy') as ShippedDate,
	datediff(year, o.ShippedDate,'01/01/2011')-1 as ElapsedYear
from Orders o INNER JOIN Customers c
	on c.CustomerID = o.CustomerID
where '07/01/1992' <= ShippedDate and ShippedDate <= '06/30/1993'
order by o.OrderID, ElapsedYear

