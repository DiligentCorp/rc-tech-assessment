CREATE TABLE homeroom  (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO homeroom (name) VALUES
('9A'),
('9B'),

SELECT * FROM homeroom;
SELECT * FROM homeroom WHERE name ILIKE '9A';
SELECT * FROM homeroom WHERE id = 2;