# stackoverflow-users README

## Brief

Display a list of the top stackoverflow users

## Setup

Please ensure npm v6.7.0 and node v11.10.0 are installed
then in the root run

### `npm install`

to start the dev server run

### `npm run dev`

then you should be able to open localhost:3000 in your browser.

To run the test suite run

### `npm run test`

To run the docz server (component documentation) run

### `npm run docz:dev`

## Stack

- This project has been built using react and next and is server side rendered.
- Redux has been configured to handle the data in this app.
- Jest and React Testing Library are used to run the unit tests.
- The base JavaScript linting rules come from the open source airbnb rules.
- Emotion has been added to style the application.

## Assumptions I have made building this app

- The only browser that requires supporting is the latest Chrome Browser (across all breakpoints). I have not spent time testing other browsers (but of course in a production environment I would).
- A no javascript version of the site is not required.
- Accessibility is important. I have ensured that the app has a 100% rating in the Chrome accessibility audit.
- Styling the ui is not a priority for this task. With more time I would like to improve the visual appearance.
- No requirements for pagination. The results displayed are the first page of results from the api.
- The tests are not exhaustive, with more time I would like to have added more tests especially for the service file.
- I have not included any end to end tests, with more time I would have liked to use cyprus to write tests to simulate real user behaviour.
- I wanted to add a detail view by adding a next <link> to a "detail" page with the users id in the url but I ran out of time.

## Known bugs

- The CSS-in-JS is not currently compiled server side, which means when the page loads there is a flash of unstyled content. This can be fixed with configuring emotion to work with next.

## Additional Questions

Explain your design decisions?

- I wanted to keep the design simple and accessible so I chose a font which was clean and used colours that had a good contrast with background colours.
- The design is mobile first. On mobile the image, name and reputations stars stack but on wider screens they side horizontally to take advantage of the the extra room.
- The reputation number was hard to compare for each user so I added a star system to make it easier for the user to understand.
- I used Redux to manage the state of the component however for the requirements of this project I think Redux may be overkill and using a simple fetch would have sufficed.

Which architectural patterns have you used in the past for web development?

- MVC - model, view, controller

Top 5 tools I could not live without

- VS code
- Prettier & Eslint
- Git
- Chrome dev tools
- Babel
