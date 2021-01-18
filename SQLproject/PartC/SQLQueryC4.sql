create view vw_employee_info
as
select  EmployeeID,
		LastName + ',' + FirstName as Name,
		'(' + substring(Phone, 1, 3) + ') ' + substring(Phone, 4, 3) + '-' + substring(Phone, 7, 4) as PhoneNumber
from Employees
