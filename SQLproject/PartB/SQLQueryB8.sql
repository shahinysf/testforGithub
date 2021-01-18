select ProductID, 
	   	 ProductName, 
 QuantityPerUnit,
	       UnitPrice

from   Products

where  ProductName like '%Coffee%' 
OR     ProductName like '%Chai%'

order by UnitPrice DESC
