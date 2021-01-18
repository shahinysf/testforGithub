/*Average price for each type of products*/
select productName, productType, productPrice, 
	   AVG(productPrice) over (partition by productType) as Average
from PRODUCTS

