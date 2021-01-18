/*List of the products with the price 
greater or equal to average product price*/

select productName, productPrice
from PRODUCTS
where productPrice >= ( select AVG(productPrice)
				        from PRODUCTS)