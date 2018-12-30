# Contributing
Contributions are always welcomed!

## Issues
Have a question, extension request, or need to report a bug? Open an issue [here][open-issue-url]!

## Developing
All that is needed to work with this project is [Node.js][nodejs-url], [git][git-url], and your favorite editor or IDE, although we recommend [VS Code][vscode-url].

### Getting Started
To start working on this project:

Clone the repo, change into the directory where you cloned the directory, and then run install the dependencies.  

```sh     
git clone https://github.com/swellaby/vscode-rust-pack.git
cd vscode-rust-pack 
npm i
```

### Tests
We have a few tests that validate the extension has the expected attributes. The tests are written using [Mocha][mocha-url] with [Mocha's TDD interface][mocha-tdd-url]. Make sure you add/update tests accordingly if you change the extension. The tests are located in the [test/][tests] directory

Run the tests:
```sh
npm test
```  

### Linting
This repo uses [eslint][eslint-url] for linting. You can run [eslint][eslint-url] at any time by executing the npm `lint` script:

```sh
npm run lint
```  

### Submitting Changes
Swellaby members should create a branch within the repository, make changes there, and then submit a Pull Request. 

Outside contributors should fork the repository, make changes in the fork, and then submit a Pull Request. Check out the [GitHub Forking Projects Guide][fork-guide-url] for more info.

#### PR Validation
When you create a Pull Request to merge changes, the [PR Validation Build Job][ci-pipeline-url] in Azure Pipelines will be triggered automatically to run test and lint checks. 

## Publishing
Once changes are merged into the master branch the [CI Job][ci-pipeline-url] will be triggered automatically. Once it passes the [CD Pipeline][cd-pipeline-url] will be triggered automatically which will notify the maintainers and request maintainer approval. Once a maintainer approves the updates they will be automatically published to the marketplace. 

<br />

[Back to Top](#Contributing)

[open-issue-url]: https://github.com/swellaby/vscode-rust-pack/issues/new/choose
[nodejs-url]:https://nodejs.org/en/download/
[git-url]: https://git-scm.com/download
[vscode-url]: https://code.visualstudio.com/
[tests]: ./../test/
[eslint-url]: https://eslint.org/
[mocha-url]: https://mochajs.org/
[mocha-tdd-url]: https://mochajs.org/#tdd
[fork-guide-url]: https://guides.github.com/activities/forking/
[ci-pipeline-url]: https://dev.azure.com/swellaby/OpenSource/_build?definitionId=46
[cd-pipeline-url]: https://dev.azure.com/swellaby/OpenSource/_release?view=mine&definitionId=9
