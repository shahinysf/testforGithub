/*Total quantity of products in stock regardless of product type*/
select ProductName, SUM(QuantityInStock) as 'Total Quantity'
from products 
group by productName;
