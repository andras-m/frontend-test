# FrontendTest

This is a simple front-end application fetching a list of products from an endpoint. Users are able to add the products to the cart in various amounts, with respect to `minOrderAmount` and `availableAmount`. The app updates the `availableAmount` locally, when we add the items to the cart.  
Cart page displays the products added to the cart and calculates the total price. The application doesn't store the cart items in localstorage or by any other means, so the cart will be empty after a page refresh.

The detailed documentation is available in the `/documentation` folder.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Install dependencies

Run `npm install` to install the dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
