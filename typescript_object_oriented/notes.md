## Object Oriented Typescript Code

### The Role of Objects

- store state
- pass state
- group related functionality
- can place multiple functions in an object

### Object Creation Techniques

- constructor funcion
- object literals
- object.create(): creates a base object to build on
- class

### Object Oriented Concepts

- code resuse
- faster dev time frame
- real world mapping of objects
- modular architecture
- more maintable code base

- Abstraction
- Encapsulation: hit start and everything will happen
- Inheritance: objects can share functionality
- Polymorphic Behacior: objects exhibit same behavior but in a different way

### Role of Classes

- Class can be blueprint to build an object
- Organize Code in a class

- private \_age: number; is normally refered to as a field

- Example of setting up age as a field instead of property

```typescript
class Person {
  private _age: number;

  get age() {
    return this._age;
  }

  set age(value: number) {
    if (value > 0) {
      this._age = value;
    }
  }
}
```

- Constructor is used when creating a new instance of seeding the object with the data

- Static members you can only have one of these per application
