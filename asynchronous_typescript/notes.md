## Asynchronous Typescript Code

What is Asynchronous code?

### The Main Types

- Callbacks

  - call some code which once it is done it then calls the callback function to do more.
  - can then call another callback, and another .
  - Pyramid of Doom
    Examples:

  ```typescript
  const getHeroTreeCallback = function(email: string, callback: any) {
    getHeroCallback(email, hero => {
      getOrdersCallback(hero.id, accountRep => {
        hero.accountRep = accountRep;
        callback(hero);
      });
    });
  };
  ```

````

```typescript
const getHeroTreeCallback = function(email: string, callback: any) {
  getHeroCallback(email, hero => {
    getOrdersCallback(hero.id, orders => {
      hero.orders = orders;
      getAccountRepCallback(hero.id, accountRep => {
        hero.accountRep = accountRep;
        callback(hero);
      });
    });
  });
};
````

- Will experience these in setInterval, setTimeout, modals, etc.

- Promises

  - Allow us to take asynchronous activites and use .then() to call our code

    Example

  ```typescript
  const getHeroTreeCallback = function(searchEmail: string) {
      let hero: Hero;
      return getHeroPromise(searchEmail)
      /*-- Promise.all says go make these two promise calls at the same time and when both are done, all are done.  Then move on to next thing  --*/
          .then( hero: Hero) => Promise.all([ getOrders(hero), getAccountRep(hero)])
          .then(result: [Order[], AccountRepresentative]) => {
              const [orders, accountRep] = result;
              hero.orders = orders;
              hero.accountRep = accountRep;
              return hero;
          }
  ```

- Async Await

  - Can treat asychronous coding like it is synchronous coding

  Example

  ```typescript
  const getHeroTreeAsync = async function(email: string) {
    const hero = await getHeroAsync(email);
    const [orders, accountRep] = await Promise.all([
      getOrdersAsync(hero),
      getAccountRepAsync(hero),
    ]);
    hero.orders = orders;
    hero.accountRep = accountRep;
    return hero;
  };
  ```

  - setInterval & setTimeout

    - are asynchronous functions that run in the browser

- Modal are another example of asynchronous behavior

- Axios is a third party library for such behaviour
