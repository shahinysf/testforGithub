select ShipCity, count(ShipCity) as Count
from Orders
group by ShipCity
having count(ShipCity) > 30
order by Count