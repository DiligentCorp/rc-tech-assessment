# Database challenge

## Principles and rules

- Please use the prepared `.sql` files to solve the tasks.
- You can use any database system or online tool to test your solution. We recommend [SQL Fiddle](https://sqlfiddle.com/postgresql/online-compiler).

## Tasks

1. Create the `student` table with the following fields: `name` and `email`. What fields would you create, and what would be their types? Insert the following students with their emails:
   - John, john@school.com
   - Adam, adam@school.com
   - Lucy, lucy@school.com

2. Create the `homeroom` table. Each homeroom has a name, and it has to be **unique**. Every student can be in only one class. How would you modify the table if we had a lot of read operations by searching on the class name? Insert the following homerooms:
   - 9A
   - 9B

3. How would you query every student in a given homeroom by name? Assume the following students are in the homerooms:
   - John in 9A
   - Adam in 9A
   - Lucy in 9B

4. Create the `subject` table. Each subject has a name. Every student can attend multiple subjects. Where would you store the grades of the students? Insert the following subjects:
   - Algebra
   - Biology
   - World History

5. How would you get the average grade of students for a given subject by the subjects name? Assume the following grades:
   - John: Algebra (3), Biology (2), World History (5)
   - Adam: Algebra (4), Biology (3), World History (2)
   - Lucy: Algebra (5), Biology (4), World History (3)