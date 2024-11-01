IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'siscard02')
BEGIN
    CREATE DATABASE siscard02;
END;
GO

USE siscard02;
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Products]') AND type in (N'U'))
BEGIN
    CREATE TABLE Products (
        id INT PRIMARY KEY IDENTITY(1,1),
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2),
        stock INT
    );
END;
GO
