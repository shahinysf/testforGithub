select ProductID, ProductName, UnitPrice
from Products
where UnitPrice < 10.00
order by ProductName