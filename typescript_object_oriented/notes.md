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

##### Key Principles of Object-oriented programming

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

  - How to override members inherited from bank account.

  ```typescript
  abstract class BankAccount {
    deposit(amount: string) {
      this.balance = this.balance + amount;
    }
  }

  //to override just recall in child class and rewrite code
  class SavingsAccount {
    deposit(amount: string) {
      let newAmmount = amount + amount * (this._interestRate / 100);
      this.balance += newAmmount;
    }
  }
  ```

  ### Interfaces and Polymorphism

  - Role of Interfaces

    - Act as a contract that defines a set of rules
    - Can also be seen as creating a standard for the code
    - Come in handy to enforce the standard on methods when they exist on different objects. So they are not connected classes.
    - Also come in handy saying exactly what exists in object and holding it to that

  - Class or Interface?

    - Classes generate code that make it to production

    - Interfaces are used solely in development.

  - Creating an interface: below shows syntax

  ```typescript
  interface DepositWithdrawal {
    routingNumber: number;

    deposit(amount: number): void;
    withdrawal(amount: number): void;
  }
  ```

  - Example of using a generic with interface

  ```Typescript
  //This interface uses generics so that it can be used and the types of the routingNumber and bankNumber can vary depending on case usage
  export interface AccountInfo<TRouteNumber, TBankNumber> {
    routingNumber: TRouteNumber;
    bankNumber: TBankNumber;
  }

  export interface AccountSettings {
    id: number;
    title: number;
    balance: number;
    interestRate?: number;
    accountInfo?: AccountInfo<string ,number>
  }
  ```

  - Using interfaces with Classes

  ```typescript
  class ATM implements DepositWithdrawal {}
  ```
