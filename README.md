# Pexapark

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Setup
Run `npm install` before doing whatever.

## Run APP

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Data Mock

Mocks were builded through an Angular interceptor under the `mock`folder. As an helper, fakerJS library was installed to generate better and random data.

## Folder structure

  + `features` feature module contains every core component like DashboardComponent and Charts.
  + `mdoels` typescript models.
  + `services` app services
  + `shared` shared module contains ervery common compoments like SideNav and Toolbar
  + `state` store module
        - `effects` every crud action is done here in domain separated files.
        - `actions` store actions.
        - `reducers` store reducers.
        - `selectors` app state selectors

## UI
Angular Material kit was used for a faster prototyping.
Logo was randomly selected.

## Dashboard
A chart and a table are showing needed data.
The chart display **ONLY** capacity factor, for more data information, a table was provided in the second tab.

## Filters
An `autocomplete` component was builded to allow users to select a different farm.
Any time a farm is changed, a new set of data is loaded.
A `range date picker`component allow to select a set of dates as data filter.

```
### Warning
Please, be aware that, the range picker filter, does not work as espected due to mocked data. Every time a data is changed, a list of 21 days is returned.
```

## Running end-to-end tests

Cypress was used to build APP tests. Run `npm run test` to execute the end-to-end tests via Cypress. To use this command, you need to first run the `ng serve` command.
Alternatively run `npm run test:cy` to execute end-to-end test through terminal (instead of client application).

For more informations about [`Cypress`](https://github.com/cypress-io/cypress)
