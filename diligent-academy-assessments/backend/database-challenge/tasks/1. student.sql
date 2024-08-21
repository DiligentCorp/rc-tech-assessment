CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    homeroom_id INTEGER,
    CONSTRAINT fk_homeroom FOREIGN KEY (homeroom_id) REFERENCES homeroom(id)
);

INSERT INTO student (name, email, homeroom_id) VALUES
('John', 'john@school.com', 1),
('Adam', 'adam@school.com', 1),
('Lucy', 'lucy@school.com', 2);

SELECT * FROM student;
SELECT * FROM student WHERE name ILIKE 'John';
SELECT * FROM student WHERE id = 2;
