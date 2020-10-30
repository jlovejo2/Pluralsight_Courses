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

### Role of inheritance

- inheritance provides a way to reuse code across class in a family heirarchy

```typescript
class BankAccount {
  bankAccount: number;

  constructor(id: number) {....}
}

class CheckingAccount extends BankAccount {
  //use inheritance for a checking account which is a bank account to inherit the bankaccount class code

  constructor(id: number) {
    super(id); //required to bring the constructor info to the bankAccount
  }
}
```

- Role of Abstract Class??

  - if the class can instantiated it should be a normal/concrete class.
  - if the class is a base for other classes and is only a foundation for instances of other classes. It should be Abstract class.

  ```typescript
  //how to create an abstract class
  abstract class BankAccount {

    // Abstract member (must be defined by child the inherits this class)
    abstract accountType: AccountType;

    // Concrete member
    deposts () {...}

  }
  ```
