create view vw_supplier_items
AS
SELECT s.SupplierID, s.Name, p.ProductID, p.ProductName
FROM Suppliers s JOIN Products p
ON s.SupplierID = p.SupplierID

