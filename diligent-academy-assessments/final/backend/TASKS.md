## Tasks - order is up to you

We would like to implement the following behaviors, we encourage contract-first approach but the order is up to you.

### Database tasks

- Create table for Tickets, must have columns are id, name, board_id, status_id, deleted_at. Other columns are up to you.
- Create a migration and alter Boards table, add a new column _key_ which should be a unique text field

### Implement Status related flow

- Create Status
- Get Board Statuses
- Add Status for Board
- Update position of Status (take care of the order)
- Update Status
- Delete Status (soft delete)

These include creating OpenAPI spec for endpoints, Zod schemas for validation, actions, business logic, repository methods and the Status entity.

### Implement Ticket related flow

- Create Ticket
- Get Board tickets
- Get Board - Status tickets
- Get Ticket by id with key (Board key - ticket identifier)
- Add Ticket for Board
- Update ticket status
- Delete Ticket (soft delete)

These include creating OpenAPI spec for endpoints, Zod schemas for validation, actions, business logic, repository methods and the Ticket entity.

### Backlog related flow

The backlog is the part of the board which consists of the tickets that are not assigned to any status. -> Returns the Board's Backlog by Id

- /boards/{id}/backlog endpoint
- Write a function in the Board entity that returns the Backlog of that board to encapsulate properties and behavior.

### Refactor task

- Create Value Object for the Board key (you can check BoardName class for example)
  - validate it being uppercase and check the character length to be 3 or 4 (up to you)
- Incude the newly added _key_ column to the Board entity (create a property, include in the view function), mapper, create-Board endpoint.

### Bonus

- Implement unit testing for your business logic (use-cases)
- Usually tickets have an identifier that consists of the Board key and the ticket key: RCP-1321
- Implement Sprint related flow functionality
  - A project manager is able to create sprints.
    <!-- TODO what are sprints -->
  - assign tickets
  - table containing: sprint end-date, start-date, sprint goal
  - create entity
