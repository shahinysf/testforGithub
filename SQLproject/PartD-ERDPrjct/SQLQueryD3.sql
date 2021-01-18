/*List of the products which have been ordered during
April 1 2019 and August 1 2019*/

select ProductName, format(OrderedDate,'MMM d yyyy') as 'Date of Order'
from PRODUCTS p INNER JOIN ORDERS o
  on p.ProductID = o.ProductID
where OrderedDate >= '04/01/2019' and OrderedDate <= '08/01/2019'
