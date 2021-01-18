select o.OrderID, o.Quantity, p.ProductID, p.SupplierID
from OrderDetails o
INNER JOIN Products p
ON o.ProductID = p.ProductID
where 80 <= o.Quantity and o.Quantity <= 90
order by OrderID


