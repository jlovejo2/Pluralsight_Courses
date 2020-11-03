import './design/index.scss';

import {
  Hero,
  getHeroAsync,
  showFetching,
  showMessage,
  openModal,
  sayHelloTimer,
} from './lib';
import { replaceHeroListComponent } from './heroes.component';
import { getDataAfterDelay } from './examples/get-ingredients';

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

function getIngredients() {
  showMessage('Ingredients for baking amazing cookies:', 'Ingredients');
  getDataAfterDelay(1500, function(ingredients: string[]) {
    ingredients.forEach(i => showMessage(`${i}`, 'Ingredients', true));
  });
}

async function render() {
  showMessage();
  showFetching('.hero-list');
  let hero: Hero;
  try {
    hero = await getHeroAsync(searchEmailElement.value);
  } catch (err) {
    console.error(err);
    showMessage(err);
  } finally {
    replaceHeroListComponent(hero);
  }
}
