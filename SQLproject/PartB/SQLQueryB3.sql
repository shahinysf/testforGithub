select CustomerID, CompanyName, ContactName, Country, Phone
from Customers
where Country ='France' or Country = 'Spain'
order by CustomerID
