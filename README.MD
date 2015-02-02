# js-type-function
Create a function in JavaScript with type-checked parameters without compiling.

## Instalation

The module supports CommonJS, AMD (require.js) or global assignment to variable when using in browser. You only need to include/require `src/module.js` file.

## Usage

Create your function using `TypeFunction.create` method:

```
var createUser = TypeFunction.create(['String'], function(name) {
  // ...
});
createUser('John'); // will pass
createUser(123); // will log error
```

## License

MIT © Patrik Gallik
