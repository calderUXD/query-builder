

# QueryBuilder

Test Project

## Project Setup

1. Install NX `npm install -g nx`;
2. Run `yarn`

## Project Structure

- [APP](https://github.com/calderUXD/query-builder/tree/main/apps/query) : Core app
- [COMPONENTS Lib](https://github.com/calderUXD/query-builder/tree/main/libs/components) : Core Components and Storybook
- [DATA/Models](https://github.com/calderUXD/query-builder/tree/main/libs/data) : Models, Interfaces, Dropdowns
- [STATE MANAGEMENT](https://github.com/calderUXD/query-builder/tree/main/libs/state) : State, Reducers, Actions

## Run Project

- APP: `nx run query:serve` or `yarn nx run query:serve`
- STORYBOOK: `nx run components:storybook` or `yarn nx run components:storybook`

## What did not get done
1. A bit more cleand up state management.
2. Animations
3. Validation on the inputs for different typse et.
4. cleanup priting out of the SQL, "" when string not when number etc.



