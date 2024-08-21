SELECT s.name, s.email
FROM student s
JOIN homeroom h ON s.homeroom_id = h.id
WHERE h.name ILIKE '9A';