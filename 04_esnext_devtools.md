
![](assets/baner.png)

---
## Agenda

- Krótka historia JavaScript'u (ECMA Script'u)
- *TC39 Process*
- Wsparcie przeglądarek
- *Chrome DevTools (zajawka)*
- Istotne / interesujące / nowe *'ficzery'* JS

---

# ECMAScript (JavaScript)

---

## Krótka historia JS

### 1995 r.

Brendan Eich 
*JavaScript* jako część *Netscape Navigator*

Coś jak [Scheme](https://en.wikipedia.org/wiki/Scheme_programming_language) ale ze składnią podobną do Javy.

### 1996 r.

Netscape przekazuje JS do [ECMA International](http://www.ecma-international.org)

**TC 39** (Technical Committee 39)

Powstaje standard *ECMAScript* (ECMA-262)

### 1999 r.

ECMAScript 3

---

![](https://ekiy5aot90-flywheel.netdna-ssl.com/wp-content/uploads/2015/07/segue-blog-java-vs-javascript.png)

---


## Krótka historia JS [2]

### 2009 r.

ECMAScript 5

### 2015 r.

ECMAScript 6 == ES6 == ES2015
Bardzo dużo nowych feature'ów

Rozpoczął się [proces stopniowej ewolucji języka](https://tc39.github.io/process-document/)

---

## TC 39 Process

ECMAScript proposals [GitHub Repo](https://github.com/tc39/proposals)

- Stage 0 - Strawman
- Stage 1 - Proposal
- Stage 2 - Draft
- Stage 3 - Candidate
- Stage 4 - Finished

Co roku nowy release zawierający jakąś część stage 4: ECMAScript 2016, ECMAScript 2017, ECMAScript...

Stage 1 - 3  == ES.Next

---

## Silniki JS

- Chrome - V8
- Firefox - SpiderMonkey
- Safari - JavaScriptCore
- Edge - Chakra

Bardzo zróżnicowany poziom pokrycia feature'ów.

[Compatibility table](http://kangax.github.io/compat-table/es6/)

--- 

## babel-preset-env

[Opis działania](https://github.com/babel/babel/tree/master/packages/babel-preset-env#how-it-works)

Transpiluje feature'y z aktualnego standardu do ES5.
ES2015-2017  --> ES5

Dodatkowo można ustawić docelowe środowisko, co wyłącza transformację feature'ów tam dostępnych. 

*preset-stage-3*
*preset-stage-2* == stage-2 i 3

---

# Chrome DevTools (zajawka)

### << live demo >>

[Filmik, o którym wspomniałem na zajęciach](https://youtu.be/-q1z8BPFItw)

---

# Istotne / interesujące / nowe *'ficzery'* JS

### 'this', closure
Podstawa rozumnego programowania w JS. 

[MDN - this](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/this)
[MDN - closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

### dziedziczenie prototypowe
równie istotne
[MDN - dziedziczenie...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
[FunFun Function - playlista](https://www.youtube.com/playlist?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub)

---

## istotne / interesujące / nowe *'ficzery'* JS

- default function parameters
- rest parameters
- spread operator
- destructing declarations / assignment / parameters
- rest / spread properties
- object literal (getters, setters / computed properties / shorthand properties / shorthand methods)
- template literals
- const / let
- arrow function
- class
- new Built-ins: Map, Set, Promise, ...
- async / await

---

## default function parameters

```js
function func(a, b = 'default') {
  console.log(a, b);
}

func(1);

// 1 'default'
```

---

## rest parameters

```js
function func(a, ...args){
  console.log(a, args);
}

func(1, 2, 3);

// 1 [2,3]

```

---

## spread operator

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// [1,2,3,4,5,6]
```

---

## destructing declarations / assignment / parameters

```js
const [a, b, c] = [1,2,3];

//---

const {a, b} = {a: 1, b: 2, c: 3};
const {a: foo, b: foo2} = {a: 1, b: 2, c: 3};

//---

[a, b] = [1, 2]
({a, b} = {a: 1, b: 2});

//---

function func({a, b = 'default'}){
	console.log(a,b);
}

func({a: 1}); // 1 default

```

---

## rest / spread properties

```js
const obj1 = {a: 1};
const obj2 = {b: 2, c: 3};
const obj3 = {...obj1, ...obj2};

const {a, ...other} = obj3;

```

---

## object literal (computed properties / shorthand properties / shorthand methods)

```js
const computedName = computeTheName();
const propShorthand = 'bar';

const obj = {
  [computedName]: 'foo',
  propShorthand,
  methodShorthand(){
    return 'hello';
  }
};

```
---

## object literal (getters, setters)

```js
const obj = {
  arr: ['v1', 'v2'],
  
  get latest() {
    if (this.arr.length === 0) return undefined;
    return this.arr[this.arr.length - 1];
  },
  
  set latest(v) {
    if (this.arr.length === 0) this.arr.push(v);
    this.arr[this.arr.length - 1] = v;
  },
};

```

---

## template literals

```js
const val = 'hello';
const myObject = {
  toString() {
    return 'value of myObject.toString()';
  },
};


const foo = `${val}. obj: ${myObject}`;
console.log(foo);

// hello. obj: value of myObject.toString()
```

---

## const / let

* `const`, `let` - block scope
* var - function scope

uwaga:
```js
const someObj = {a: 'original'};

someObj = foo;  // Syntax Error!

// but

someObj.a = 'modified';
console.log(someObj);

// {a: 'modified'}

```

---

## arrow function

```js
const counter= {
  cnt: 0,
  observe(el){
    el.addEventListener('click', () => {
      // this === counter
      this.cnt++;
    });              
  }
};

const pow2 = (a) => a * a;
//---
const pow2 = (a) => {
  return a * a;
}

// returning an object
const func = () => ({a: 1});

```

---

## class

```js
class Base {
  constructor(a) {
    this.a = a;
  }
}

class Foo extends Base {
  constructor(a, b) {
    super(a);
    this.b = b;
  }
  
  foo() {
    return `a: ${this.a} b: ${this.b}`;
  }
}

const instance = new Foo('foo', 'bar');

console.log(instance.foo());
// a: foo b: bar

```

---

## new Built-ins: Map, Set, Promise, ...

[MDN - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
[MDN - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
[MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
...
```js
const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    const rand = Math.random();
    if(Math.round(rand) === 1){
      resolve(rand);
    } else {
      reject(rand);
    }
  }, 1000);
});

promise
  .then(result => console.log(`ok ${result}`))
  .catch(reason => consol.log(`bad ${reason}`));
```

---

## async / await
```js
async function fetchJSON(url){
  const response = await fetch(url);
  const responseJson = await response.json();
  
  return responseJson;
}

fetchJSON('<<url_to_the_json>>')
  .then(result => {/*...*/})
```

---

## Inne ciekawe linki

[https://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/](https://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/)

[http://2ality.com/2015/11/tc39-process.html](http://2ality.com/2015/11/tc39-process.html)

[https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Layout](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Layout)


