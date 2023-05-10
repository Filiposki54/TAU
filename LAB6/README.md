##LAB6 GithubActions

Do zadania wygenerowałem api wykonujące proste obliczenia arytnemtyczne. testy są ucruchamiane poprzez plik yaml dodany do .github/workflows
```
name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npx mocha test.js

```
![App Screenshot](1.PNG)
Test ponizej został zmodyfikowany tak aby aplikacja go nie przeszła w związku z czym po cimicie w githubaction można zaobserować błąd
Po wejściu w niego można zobaczyć co w testach poszło nie tak poniewarz są opisane tak samio jakby były w terminalu 
![App Screenshot](2.PNG)