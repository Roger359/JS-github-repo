## 🧠 Exercise Learning Goals

This learning exercise helped evolve your knowledge of Arrays.

### 🔍 You've unlocked 4 concepts:
- ➕ **Arrays**
- ➕ **Arrays Methods**
- ➕ **Length**



## 📘 Introduction

In JavaScript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, even mixed types.

To create an array, add elements between square brackets **`[]`**. To read from the array, put the index in square brackets **`[]`** after the identifier. The indices of an array start at zero.

For example:

```js
const numbers = [1, 'two', 3, 'four'];
numbers[2];
// => 3
```

To retrieve the number of elements that are in an array, use the **`length`** property:

```js
const numbers = [1, 'two', 3, 'four'];
numbers.length;
// => 4
```

To change an element in the array, you assign a value at the index:

```js
const numbers = [1, 'two', 3, 'four'];
numbers[0] = 'one';
numbers;
// => ['one', 'two', 3, 'four']
```

### Methods

Some of the **methods** that are available on every Array object can be used to add or remove from the array. Here are a few to consider when working on this exercise:

### push
A **`value`** can be *added* to the end of an array by using **`.push(value)`**. The method returns the new length of the array.

```js
const numbers = [1, 'two', 3, 'four'];
numbers.push(5); // => 5
numbers;
// => [1, 'two', 3, 'four', 5]
```

### pop

The last **`value`** can be removed from an array by using **`.pop()`** The method returns the removed value. **The length of the array will be decreased because of this change**.

```js
const numbers = [1, 'two', 3, 'four'];
numbers.pop(); // => four
numbers;
// => [1, 'two', 3]
```

### shift
The first **`value`** can be removed from an array by using **`.shift()`** The method returns the removed value. **The length of the array will be decreased because of this change**.

```js
const numbers = [1, 'two', 3, 'four'];
numbers.shift(); // => 1
numbers;
// => ['two', 3, 'four']
```

### unshift

A **`value`** can be added to the beginning of an array by using **`.unshift(value)`**. **The method returns the new length of the array**.

```js
const numbers = [1, 'two', 3, 'four'];
numbers.unshift('one'); // => 5
numbers;
// => ['one', 1, 'two', 3, 'four']
```

### splice
A **`value`** at a specific index can be removed from an array by using **`.splice(index, 1)`**. **The method returns the removed element(s)**.

```js
const numbers = [1, 'two', 3, 'four'];
numbers.splice(2, 1, 'one'); // => [3]
numbers;
// => [1, 'two', 'one', 'four']
```

### Advanced

These methods are more powerful than described:

- Both **`push`** and **`unshift`** allow you to push or unshift multiple values at once, by adding more arguments. That is not necessary to complete this exercise.
- Splice can remove multiple values by increasing the second argument. That is not necessary to complete this exercise.
- Splice can also add multiple values by adding them as arguments after the deleteCount. This can be used to replace values, or insert values in the middle of an array (for example by removing 0 elements). That is not necessary to complete this exercise.


## 🍝 Instructions

As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.

To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers. The position of a certain card corresponds to the index in the array. That means position 0 refers to the first card, position 1 to the second card etc.

### Note

All but two functions should update the array of cards and then return the modified array - a common way of working known as the Builder pattern, which allows you to nicely daisy-chain functions together.

The two exceptions are **getItem**, which should return the card at the given position, and **checkSizeOfStack** which should return **true** if the given size matches.


### 1️⃣ Retrieve a card from a stack
To pick a card, return the card at index **position** from the given stack.
```js
const position = 2;
getItem([1, 2, 4, 1], position);
// => 4
```

### 2️⃣ Exchange a card in the stack
Perform some sleight of hand and exchange the card at index **position** with the replacement card provided. **Return the adjusted stack**.
```js
const position = 2;
const replacementCard = 6;
setItem([1, 2, 4, 1], position, replacementCard);
// => [1, 2, 6, 1]
```

### 3. Insert a card at the top of the stack
Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.
```js
const newCard = 8;
insertItemAtTop([5, 9, 7, 1], newCard);
// => [5, 9, 7, 1, 8]
```

### 4. Remove a card from the stack
Make a card disappear by removing the card at the given **position** from the stack. Return the adjusted stack.
```js
const position = 2;
removeItem([3, 2, 6, 4, 8], position);
// => [3, 2, 4, 8]
```

### 5. Remove the top card from the stack
Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.

```js
removeItemFromTop([3, 2, 6, 4, 8]);
// => [3, 2, 6, 4]
```

### 6. Insert a card at the bottom of the stack
Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.
```js
const newCard = 8;
insertItemAtBottom([5, 9, 7, 1], newCard);
// => [8, 5, 9, 7, 1]
```

### 7. Remove a card from the bottom of the stack
Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.
```js
removeItemAtBottom([8, 5, 9, 7, 1]);
// => [5, 9, 7, 1]
```

### 8. Check the size of the stack
Check whether the size of the stack is equal to **`stackSize`** or not.
```js
const stackSize = 4;
checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
// => false
```