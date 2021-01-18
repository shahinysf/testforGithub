-- create table EMPLOYEES
create table EMPLOYEES (
	EmployeeID INT NOT NULL PRIMARY KEY,
	FirstName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	Email VARCHAR(50),
	Phone VARCHAR(50),
	DateBirth DATE NOT NULL,
	DateStart DATE NOT NULL,
	
);

-- create table CUSTOMERS
create table CUSTOMERS (
	CustomerID INT NOT NULL PRIMARY KEY,
	CustomerName VARCHAR(50) NOT NULL,
	Province VARCHAR(50),
	City VARCHAR(50),
	Address VARCHAR(50),
	Postcode VARCHAR(50),
	Phone VARCHAR(20)
);

-- create table PRODUCTS
create table PRODUCTS (
	ProductID  INT NOT NULL PRIMARY KEY,
	ProductName VARCHAR(30) ,
	ProductType VARCHAR(10),
	QuantityInStock INT,
	ProductPrice DECIMAL(4,1),
	Discontinued BIT
);

-- create table DSTINATIONS
create table DESTINATIONS (
	DestinationID INT NOT NULL PRIMARY KEY,
	Province VARCHAR(50),
	City VARCHAR(50),
	Address VARCHAR(50),
	Distance INT
);

-- create table SHIPMENT
create table SHIPMENT (
	ShipperID INT NOT NULL PRIMARY KEY,
	CompanyName VARCHAR(50),
	CompanyRatio DECIMAL(3,2),
	Province VARCHAR(50),
	City VARCHAR(50),
	Address VARCHAR(50),
	Phone VARCHAR(50)
);

-- create table ORDERS
create table ORDERS (
	OrderID INT NOT NULL,
	ProductID INT FOREIGN KEY REFERENCES PRODUCTS(ProductID),
	OrderedQuantity INT,
	CustomerID INT FOREIGN KEY REFERENCES CUSTOMERS(CustomerID),
	EmployeeID INT FOREIGN KEY REFERENCES EMPLOYEES(EmployeeID),
	DestinationID INT FOREIGN KEY REFERENCES DESTINATIONS(DestinationID),
	ShipperID INT FOREIGN KEY REFERENCES SHIPMENT(ShipperID),
	OrderedDate DATE,
	ShippingDate DATE
);




