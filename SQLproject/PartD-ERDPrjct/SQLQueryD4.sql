/*List of the companies who have ordered at least one product 
and the companies who have not ordered any product
 and products which have been ordered by at least one company
 and products which have not been ordered by any company*/

select CustomerName, ProductName, ProductType
from customers c FULL OUTER JOIN orders o
on c.customerid = o.customerid FULL OUTER JOIN products p
on o.productid = p.productid
order by customerName

																							
																								