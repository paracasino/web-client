# Para Casino

Client application for _Para Casino_. An application mainly created for me to learn more about different technologies and such in a larger project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You must have [NodeJs][nvm] and [npm][npm] installed (npm is installed with NodeJs).

To get hot reloading working properly, you may have to [increase the amount of inotify watchers][increase-inotify-watchers].

### Installing

To get up and running with the development environment, simply run:

```sh
npm install
npm start
```

Whenever you want to start the project again, simply run `npm start`. The app will open itself in the browser on http://localhost:3000.

## Running the tests

End-to-end tests are run by running `npm run e2e-ci`. Unit tests are run by running `npm test`.

### End-to-end tests

Cypress is used for end-to-end testing. Run the end to end tests in a browser by running:

```sh
npm run e2e
```

Or in headless mode (in the terminal) by running:

```sh
npm run e2e-ci
```

### Unit tests

These tests are testing the modules in isolation, ensuring they keep working as expected provided the same input. Run the test by simply running:

```sh
npm test
```

## Deployment

**TODO when deployment procedure is decided.**

## Built With

| Tool | Description |
|:-----|:------------|
| [TypeScript][typescript] | Language used. Superset of JavaScript for scalable development. |
| [React][react] | Web framework/library used for creating view components. |
| [Redux][redux] | Tool for managing the application's global state. |
| [Cypress][cypress] | Tool for end-to-end testing of web applications. |

## Contributing

Please read [CONTRIBUTING.md][contributing] for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

[SemVer][semver] is used for versioning. For the versions available, see the [tags on this repository][tags].

## Authors

* **Kenny Ek** - [GitHub][kennyek]

See also the list of [contributors][contributors] who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE][license] file for details.

[contributing]: CONTRIBUTING.md
[contributors]: https://github.com/paracasino/web-client/contributors
[cypress]: https://www.cypress.io/
[increase-inotify-watchers]: https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers
[kennyek]: https://github.com/kennyek/
[license]: LICENSE
[npm]: 
[nvm]: https://github.com/nvm-sh/nvm
[react]: https://reactjs.org/
[redux]: https://redux.js.org/
[semver]: http://semver.org/
[tags]: https://github.com/paracasino/web-client/tags
[typescript]: https://www.typescriptlang.org/
