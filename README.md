# equals-ignore-case
equalsIgnoreCase in javascript.

## Installation
Install using npm:

```
npm install equals-ignore-casee
```

## Example
```
const equalsIgnoreCase = require("equals-ignore-case")("en-US");
ignoreCase.equals('FOO', 'Foo'); // => true
```

## API

### factory(locale)
Returns a compare function for the provided locale.

### compare.equalsIgnoreCase(string1, string2)
Returns true if the specified strings are equal in the specified locale ignoring case.

## License
MIT
