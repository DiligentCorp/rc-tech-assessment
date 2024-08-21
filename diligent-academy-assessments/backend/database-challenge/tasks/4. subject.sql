CREATE TABLE subject (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO subject (name) VALUES
('Algebra'),
('Biology'),
('World History');

SELECT * FROM subject;

CREATE TABLE student_subject (
    student_id INTEGER,
    subject_id INTEGER,
    grade INTEGER CHECK (grade BETWEEN 1 AND 5),
    PRIMARY KEY (student_id, subject_id),
    CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES student(id) ON DELETE CASCADE,
    CONSTRAINT fk_subject FOREIGN KEY (subject_id) REFERENCES subject(id) ON DELETE CASCADE
);

INSERT INTO student_subject (student_id, subject_id, grade) VALUES
(1, 1, 3),
(1, 2, 2),
(1, 3, 5),
(2, 1, 4),
(2, 2, 3),
(2, 3, 2),
(3, 1, 5),
(3, 2, 4),
(3, 3, 3);

SELECT * FROM student_subject;
