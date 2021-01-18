create view vw_order_for_employee
as
select e.FirstName, e.LastName,count(*) as 'Number of Orders'
from ORDERS o join EMPLOYEES e
on o.employeeid = e.employeeid
group by e.LastName, e.FirstName