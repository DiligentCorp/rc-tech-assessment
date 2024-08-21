SELECT s.name AS subject_name, AVG(ss.grade) AS average_grade
FROM student_subject ss
JOIN subject s ON ss.subject_id = s.id
WHERE s.name ILIKE 'world History'
GROUP BY s.name;