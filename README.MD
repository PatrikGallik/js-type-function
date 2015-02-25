# js-type-function
Create a function in JavaScript with type-checked parameters without compiling.

## Instalation

The module supports CommonJS, AMD (require.js) or global assignment to variable when using in browser. You only need to include/require `src/module.js` file.

## Usage

Create your function using `TypeFunction.create` method. First parameter is a list of function parameter types. Second parameter is the function.

```
var createUser = TypeFunction.create(['String'], function(name) {
  // ...
});
createUser('John'); // will pass
createUser(123); // will throw an exception
```

### Suported types

* String
* Number
* Integer
* Object
* Array
* RegExp

### Catching exceptions

Invoking function with bad arguments will throw `InvalidArgumentsException`. It contains list of invalid arguments.

```
try {
  createUser(123)
} catch (e) {
  console.log(e.invalidArguments);
  // will log "Argument: "123" should be String, Number given. "
}
```

## License

MIT © Patrik Gallik
