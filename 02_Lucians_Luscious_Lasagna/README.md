## 🧠 Exercise Learning Goals

This learning exercise helped evolve your knowledge of **Basics**.

### 🔍 You've unlocked 4 concepts:
- 🧩 **Booleans**
- 🔢 **Numbers**
- ➕ **Arithmetic Operators**
- 💬 **Strings**

## 📘 Introduction

JavaScript is a dynamic language, supporting object-oriented, imperative, and declarative (e.g., functional programming) styles.

---

## 🧩 Variables

There are a few primary ways to assign values to names in JavaScript — using **variables** or **constants**.  
On Exercism, variables are always written in **camelCase**; constants are written in **SCREAMING_SNAKE_CASE**.  

There is no official guide to follow, and various companies and organizations have different style guides.  
*Feel free to write variables any way you like.* The benefit of following the exercise convention is that they’ll be highlighted differently in most IDEs and the Exercism interface.

Variables in JavaScript can be defined using the **`const`**, **`let`**, or **`var`** keyword.

A variable can reference different values over its lifetime when using **`let`** or **`var`**.  
For example, **`myFirstVariable`** can be defined and redefined many times using the assignment operator **`=`**:

```js
let myFirstVariable = 1;
myFirstVariable = 'Some string';
myFirstVariable = new SomeComplexClass();
```

In contrast to **`let`** and **`var`**, variables that are defined with **`const`** can only be assigned once.  
This is used to define constants in JavaScript.

```js
const MY_FIRST_CONSTANT = 10;

// Can not be re-assigned.
MY_FIRST_CONSTANT = 20;
// => TypeError: Assignment to constant variable.
```

## 🍝 Instructions

Lucian’s girlfriend is on her way home, and he hasn’t cooked their anniversary dinner!

In this exercise, you’re going to write some code to help Lucian cook an exquisite lasagna from his favorite cookbook.

You have **four tasks** related to the time spent cooking the lasagna.

---

### 1️⃣ Define the expected oven time in minutes

Define the **`EXPECTED_MINUTES_IN_OVEN`** constant that represents how many minutes the lasagna should be in the oven.  
It must be exported. According to the cookbook, the expected oven time in minutes is **`40`**.

---

### 2️⃣ Calculate the remaining oven time in minutes

Implement the **`remainingMinutesInOven`** function that takes the actual minutes the lasagna has been in the oven as a **parameter** and **returns** how many minutes the lasagna still has to remain in the oven, based on the **expected oven time** from the previous task.

```js
remainingMinutesInOven(30);
// => 10
```

### 3️⃣ Calculate the preparation time in minutes

Implement the **`preparationTimeInMinutes`** function that takes the number of layers you added to the lasagna as a **parameter** and **returns** how many minutes you spent preparing the lasagna, assuming each layer takes **2 minutes** to prepare.

```js
preparationTimeInMinutes(2);
// => 4
```

### 4️⃣ Calculate the total working time in minutes

Implement the ```totalTimeInMinutes``` function that takes two parameters:

```numberOfLayers``` — the number of layers you added to the lasagna

```actualMinutesInOven``` — the number of minutes the lasagna has been in the oven

The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes and the time in minutes the lasagna has spent in the oven.

```js
totalTimeInMinutes(3, 20);
// => 26
```

```
// testing
npx jest
```

