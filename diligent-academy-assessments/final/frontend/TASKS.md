# Tasks

## 1. Refactor the SignUp form

- Remove the `name` and add a `firstName` and a `lastName` field to the `SignUp` form.
- Validate the data before you save the data. All fields should be mandatory and at least 2 characters long. Don't forget to update the `User` type as well. For the validation you should use `zod` validation library. You can find some useful information [here](https://react-hook-form.com/get-started#SchemaValidation) and [here](https://github.com/colinhacks/zod)
- Save the data to the backend, and use the `useMutation` hook from `react-query` library.

## 2. Add search to the rooms table.

- The `SearchField` component is already implemented, you can find it in the components folder.
- Your task is to use this component in the `Rooms` page. Put it above the room's table.
- Every time the user types something in this field the application should send a request to the backend to filter out the records.
- Implement a `debounce` logic to prevent sending too many requests to the backend.

## 3. Clear the searchbar

- When you type something into `SearchBar` you should have an "x" icon at the end of the input.
- If you click on this icon the `SearchBar` value should be cleared and the table should show all of the results.

## 4. Create a page where the users can create new rooms

- Create a new page (page and route)
- Create a form with validation, it should have only one field the name
- The room name should be at least 5 characters long
- When you save it you should send the userId and the createdAt fields as well to the backend

## 5. Fix the layout

- Please correct the layout on the `Room` page. It should be 2 columns.
- The left side should be 2/3 of the available space and the right side 1/3 wide.

## 6. Cards

- In the `Room` page you can see cards with the available story points. The task here is to refactor these cards and add an ability to select one with one click. Please create a custom `Card` component, and add the following functionalities to this new component:
    - The selected one should have a different background colour.
    - The cursor should be pointer over the card.

## 7. Stories list

- In the `Room` page you can see an example story list. Your task here is to refactor this list and create a new `StoryListItem` component.
- Add the `getStoriesByRoomId` query to the page, you should list the result of this query in the newly created `StoryListItem` component.
- The user should be able to select one Story from the list.

## 8. Create story

- Implement a story creation form. You should show the form in a modal window when the user presses the **Create new story** button.
- Add a modal component to the page
- Create a form with validation
    - The form should have only one field, the name.
    - The name is mandatory and at least 2 characters long.
    - For the form use `react-hook-form` and `zod`
- The `createStory` query is done for you just have to create the mutation for it.

## 9. Delete story

- Add a delete icon at the end of the story's line.
- If the user presses this button you should delete the story, for this, you can use the `deleteStory` query.

## 10. Timer

- Implement a countdown timer. We recommend using the `timerSeconds` state to store the actual time and decrease it every second, but you can have another solution if you wish.
- If the countdown expires show the votes next to the user names.
- You can get the current votes by the `getVotesByStoryId` query.
- The user should not be able to start the timer without a selected story.
- If the timer has started and the user selects another story the timer should be reseted.
- You can selct a card when the timer has started.

## 11. Show the results

- If the user presses the `Show results` button the countdown should stop and you should show the user votes after the user name.
- You can get the current votes by the `getVotesByStoryId` query.
- Instead of the cards, a basic pie chart should be visible. You should show the distribution of the votes in a piechart. You can find here the MUI Pie chart documentation: https://mui.com/x/react-charts/pie/#basics

## 12. Save the final story point to the story

- After the user presses the `Show results` button, the timer and the start/stop button should disappear and a `Finish voting` button and a select field with the available votes should appear.
- You have to add a select field to the page and the `Finish voting` button as well.
- If the user presses the `Finish voting` button you should save the final vote to the story.
- You can use the `updateStory` query.

## 13. Strikethrough estimated stories

- If the story has the final story point its name should be strikethrough, and should not be able to select any more.

## 14. Not found page - 404

- Create a not-found page. The content is not important, but this should be visible every time the user tries to open a wrong URL.

# Bonus tasks

- Create tests (think about what kind of tests would make sense for a UI)
- Add global error handling (hint: error boundaries)
