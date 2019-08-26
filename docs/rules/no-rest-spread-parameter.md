# Disallow usage of the rest parameter syntax (no-rest-spread-parameter)

The [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) and [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) syntax were introduced in ES6. In older browsers, this syntax is transpiled down to ES5. The resulting code loops over `arguments` to create a new array object, which causes performance issues. If your app supports older browsers, copy `arguments` using `Array.prototype.slice` instead.

## Rule details

Examples of **incorrect** code:

```js
// rest
function foo(...args) {
    console.log(args);
}

// spread
const arr = ['foo', ...otherArr];
```

Examples of **correct** code:

```js
const ArraySlice = Array.prototype.slice;

function foo() {
    const args = ArraySlice.call(arguments, 0);
    console.log(args);
}

const arr = ['foo'].concat(otherArray);
```
