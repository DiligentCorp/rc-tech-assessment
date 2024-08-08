[//]: # (Create the student table with the following fields: name and email. What fields would you create, what would be the type of them? How would you modify the table if we had a lot of read operations by searching on the student email.)

[//]: # (Note to interviewer: They have to figure out the id and why it is useful and the unique constraint on the email field.)

[//]: # ()

[//]: # (How would you modify the database to add class as a functionality, each class has a name. How would you query every student in a given class?)

[//]: # (Note to interviewer: They have to figure out that this is a one to many, because one student can only be in one class.)

[//]: # ()

[//]: # (How would you design the subject as a functionality? Where would you store the grades of the students?)

[//]: # (Note to interviewer: They have to figure out that this is a many to many, and that you can story the grade in the join table.)

# Database challenge

## Principles and rules

- Please use the prepared `.sql` files to solve the tasks.

## Tasks

1. Create the student table with the following fields: name and email. What fields would you create, what would be the
   type of them?


2. Create the class table, each class has a name, and it have to be **unique**.
   Every student can be in only one class.
   How would you modify the table if we had a lot of read operations by searching on the class name.

3. How would you query every student in a given class by name?

4. Create the subject table, each subject has a name. Every student can attend multiple subjects.
   Where would you store the grades of the students?

5. How would you get the average grade of a students for a given subject by name?