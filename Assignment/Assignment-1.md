# Theory :-

## 1. What are the basic data types in TypeScript?

The basic data types in TypeScript are:

- number: Represents both integer and floating-point numbers, like in JavaScript.

- string: Represents textual data, such as words, sentences, or characters.

- boolean: Represents a logical value indicating true or false.

- null: Represents an intentional absence of an object value.

- undefined: Represents a variable that has been declared but not assigned any value.

- object: Represents a non-primitive type that includes arrays, functions, classes, objects, etc.

- symbol: Represents a unique, immutable value often used as object property keys.

- any: Represents any type, allowing dynamic typing (similar to regular JavaScript).

- void: Represents the absence of any type. Usually used for functions that do not return a value.

- never: Represents the type of values that never occur. Used for functions that never return, or throw exceptions.

- array: Represents an array of values. It can be written in two ways: type[] or Array<type>.

- tuple: Represents an array with a fixed number of elements, each with its own type.

- enum: Represents a set of named constants with an associated numeric value.

## 2. What is Generic data type ?

A generic data type is a type that allows you to define functions, classes, or interfaces with placeholders for other types. This enables you to create reusable and flexible components that can work with different data types without sacrificing type safety.

Generics are represented using angle brackets <T>, where T is a type parameter that can be any valid TypeScript type.

```TypeScript
function betterEcho<T>(data: T){
    return data;
}
console.log(betterEcho("Sk"));
console.log(betterEcho<number>(1708));
console.log(echo({age: 20,name:"sk"}));
```

## 3. What is type inferring in TS ?

Type inference in TypeScript is the ability of the compiler to automatically deduce the type of a variable or an expression based on its value and usage in the code.

```TypeScript
let age = 25; // TypeScript infers 'age' as type number.
let name = "John"; // TypeScript infers 'name' as type string.
let isActive = true; // TypeScript infers 'isActive' as type boolean.
```

## 4. What are the possible ways to define typing for functions ?

```Typescript
function add(a: number, b: number): number {
  return a + b;
}
```

## 5. How to define Generic type for Classes ?

Defining generic types for classes in TypeScript allows you to create classes that can work with different types while maintaining type safety. To define a generic type for a class, you can use the angle brackets <T> to declare the type parameter, and then use T as a placeholder for the type that will be provided when creating an instance of the class.

```Typescript
class ClassName<T> {
  // Class members and methods can use 'T' as a type.
  // ...
}
```
