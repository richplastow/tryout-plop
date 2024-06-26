# Step 3: Set up tests for Example 1

[^ Notes](./00-notes.md)

## Install Vitest as a dev dependency

Before installation, node_modules/ was 7,714,199 bytes (34.7 MB on disk) for
5,895 items.

```sh
npm install -D vitest
# added 72 packages, and audited 269 packages in 27s
# 80 packages are looking for funding
#   run `npm fund` for details
# found 0 vulnerabilities
```

After installation, node_modules/ is 52,063,853 bytes (71.5 MB on disk) for
6,978 items, so Vitest adds about 35 MB for about 1,000 items.

Replace `"test": "echo \"Error: no test specified\" && exit 1"` with
`"test": "vitest"` in the package.json file.

## Check that Vitest is working correctly

Create a simple test file example-tests/example-1.test.js to check Vitest works:

```js
import { expect, test } from 'vitest'
const sum = (a, b) => a + b;
test('adds 1 + 2 to equal 3', () => expect(sum(1, 2)).toBe(3))
```

```sh
npm test
#  DEV  v1.6.0 /Users/richplastow/Documents/richplastow/tryout-plop
#  ✓ example-tests/example-1.test.js (1)
#    ✓ adds 1 + 2 to equal 3
#  Test Files  1 passed (1)
#       Tests  1 passed (1)
#    Start at  22:44:08
#    Duration  91ms (transform 7ms, setup 0ms, collect 5ms, tests 1ms, environment 0ms, prepare 31ms)
#  PASS  Waiting for file changes...
#        press h to show help, press q to quit
```

If you change example-1.test.js so that it fails, you should see the Terminal
immediately shows the error.

## Set up a couple more Vitest scripts

In the package.json file, add:

```json
  "scripts": {
    "coverage": "vitest run --coverage",
    "plop": "plop",
    "preflight": "vitest run",
    "test": "vitest"
  },
```

```sh
npm run preflight
# > tryout-plop@0.0.1 preflight
# > vitest run
#  RUN  v1.6.0 .../tryout-plop
#  ✓ example-tests/example-1.test.js (1)
#    ✓ adds 1 + 2 to equal 3
#  Test Files  1 passed (1)
#       Tests  1 passed (1)
#    Start at  22:51:19
#    Duration  124ms (transform 11ms, setup 0ms, collect 5ms, tests 1ms, environment 0ms, prepare 37ms)
npm run coverage
# > tryout-plop@0.0.1 coverage
# > vitest run --coverage
#  MISSING DEPENDENCY  Cannot find dependency '@vitest/coverage-v8'
# ? Do you want to install @vitest/coverage-v8? › (y/N)
y
# added 23 packages, and audited 292 packages in 9s
# 82 packages are looking for funding
#   run `npm fund` for details
# found 0 vulnerabilities
# Package @vitest/coverage-v8 installed, re-run the command to start.
# > tryout-plop@0.0.1 coverage
# > vitest run --coverage
#  RUN  v1.6.0 .../tryout-plop
#       Coverage enabled with v8
#  ✓ example-tests/example-1.test.js (1)
# ...
#  % Coverage report from v8
# -----------------|---------|----------|---------|---------|-------------------
# File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
# -----------------|---------|----------|---------|---------|-------------------
# All files        |       0 |        0 |       0 |       0 |                   
#  tryout-plop     |       0 |        0 |       0 |       0 |                   
# ...
#   script.js      |       0 |        0 |       0 |       0 | 1-3               
# -----------------|---------|----------|---------|---------|-------------------
```
