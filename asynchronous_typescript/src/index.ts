import './design/index.scss';

import {
  Hero,
  // getHeroAsync,
  showFetching,
  showMessage,
  openModal,
  sayHelloTimer,
  getHeroTreePromise,
  showFetchingCallBack,
  // getHeroTreeCallback,
} from './lib';
import { replaceHeroListComponent } from './heroes.component';
import { getDataAfterDelay } from './examples/get-ingredients';
import {
  getHeroesViaNewPromise,
  getHeroesViaPromise,
  getHeroesViaPromiseReject,
  getHeroesViaPromiseRejectShorter,
} from './examples/promise';
import {
  getHeroesViaAsyncAwait,
  getHeroesAndThrow,
  getHeroesAndTryCatch,
} from './examples/await';
import { getHeroTreeAsync } from './lib/data/await';

const searchEmailElement = document.getElementById(
  'search-email',
) as HTMLInputElement;
const button = document.querySelector('.search-button');
searchEmailElement.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.code === 'Enter') render();
});
button.addEventListener('click', render);

document.querySelector('#open-modal').addEventListener('click', async () => {
  openModal().then((resp: string) => {
    const msg =
      resp === 'yes'
        ? `Yay! This is fun! 😄`
        : `Aw, that is sad. Let's try harder to have fun 😞`;

    showMessage(msg, 'Response from Modal');
  });
});

document.querySelector('#run-timer').addEventListener('click', async () => {
  sayHelloTimer(10000);
});

document
  .querySelector('#show-ingredients')
  .addEventListener('click', getIngredients);

document
  .getElementById('resolved-promise')
  .addEventListener('click', resolvedPromise);

document
  .getElementById('resolved-using-promise-ctor')
  .addEventListener('click', resolvedUsingPromiseConstructor);

document
  .getElementById('rejected-promise')
  .addEventListener('click', rejectedPromise);

document
  .getElementById('rejected-promise-shorter')
  .addEventListener('click', rejectedPromiseShorter);

document
  .getElementById('async-heroes')
  .addEventListener('click', renderHeroesAsync);

document
  .getElementById('async-throw')
  .addEventListener('click', renderHeroesButThrow);

function getIngredients() {
  showMessage('Ingredients for baking amazing cookies:', 'Ingredients');
  getDataAfterDelay(1500, showIngredients);
}

function showIngredients(ingredients: string[]) {
  ingredients.forEach(i => showMessage(`${i}`, 'Ingredients', true));
}

function wrapUp() {
  showFetching(false);
}

function handleErrors(error: any) {
  console.error('Oh no! rejected promise!');
  console.error(error);
  showMessage(`Something bad happened`, 'Error');
}

function showHeroes(heroes: Hero[]) {
  console.table(heroes);
  showMessage(`Returned ${heroes.length} heroes`);
  heroes.forEach(h => showMessage(JSON.stringify(h), 'heroes', true));
}

function resolvedPromise() {
  showFetching();
  showMessage();
  getHeroesViaPromise()
    .then(showHeroes)
    .catch(handleErrors)
    .finally(wrapUp);
}

function resolvedUsingPromiseConstructor() {
  showFetching();
  showMessage();
  // TODO - get heroes, with new Promise
  getHeroesViaNewPromise()
    .then(showHeroes)
    .catch(handleErrors)
    .finally(wrapUp);
}

function rejectedPromise() {
  showFetching();
  showMessage();
  // TODO - rejected promise
  getHeroesViaPromiseReject()
    .then(showHeroes)
    .catch(handleErrors)
    .finally(wrapUp);
}

function rejectedPromiseShorter() {
  showFetching();
  showMessage();
  // TODO - rejected promise, but shorter
  getHeroesViaPromiseRejectShorter()
    .then(showHeroes)
    .catch(handleErrors)
    .finally(wrapUp);
}

async function renderHeroesAsync() {
  showFetching();
  showMessage();
  // TODO - getHeroesViaAsyncAwait
  try {
    const heroes = await getHeroesViaAsyncAwait();
    showHeroes(heroes);
  } catch (error) {
    handleErrors(error);
  } finally {
    wrapUp();
  }
}

/**
 * Get the heroes, but an error is thrown!
 * Handle errors gracefully?
 * Always end by turning off progress indicator.
 */
async function renderHeroesButThrow() {
  showFetching();
  showMessage();
  // TODO - getHeroesAndThrow
}

async function render() {
  showMessage();
  showFetchingCallBack('.hero-list');
  showFetching();
  // let hero: Hero;
  getHeroTreePromise(searchEmailElement.value)
    .then((hero: Hero) => replaceHeroListComponent(hero))
    .catch((error: any) => {
      console.error(error);
      showMessage(error);
      replaceHeroListComponent();
    })
    .finally(wrapUp);
}

// try {
//   hero = await getHeroAsync(searchEmailElement.value);
// } catch (err) {
//   console.error(err);
//   showMessage(err);
// } finally {
//   replaceHeroListComponent(hero);
// }

// getHeroTreeCallback(
//   searchEmailElement.value,
//   (hero: Hero) => {
//     replaceHeroListComponent(hero);
//   },
//   (errorMsg: string) => {
//     console.log(errorMsg);
//     showMessage(errorMsg);
//     replaceHeroListComponent();
//   },
// );
