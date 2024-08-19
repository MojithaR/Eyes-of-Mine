-- Create the Employee table
CREATE TABLE Employee (
    emp_id VARCHAR(10) PRIMARY KEY,  -- Employee ID, VARCHAR with a length of 10
    emp_name VARCHAR(100) NOT NULL   -- Employee Name, cannot be null
);

-- Insert sample data into the Employee table
INSERT INTO Employee (emp_id, emp_name) VALUES ('EMP001', 'John Doe');
INSERT INTO Employee (emp_id, emp_name) VALUES ('EMP002', 'Jane Smith');
INSERT INTO Employee (emp_id, emp_name) VALUES ('EMP003', 'Alice Johnson');
INSERT INTO Employee (emp_id, emp_name) VALUES ('EMP004', 'Bob Brown');

-- Select all data from the Employee table to verify

SELECT * FROM Employee;


