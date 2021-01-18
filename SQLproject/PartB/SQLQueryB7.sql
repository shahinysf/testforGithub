select o.OrderID, UnitPrice, Quantity

from Orders o JOIN OrderDetails od 
	 on o.OrderID = od.OrderID

where ShipCity = 'San Francisco' and Quantity > 20

Order by OrderID
		