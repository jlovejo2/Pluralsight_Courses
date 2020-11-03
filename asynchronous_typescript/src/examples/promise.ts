import { heroes } from './heroes';
import { Hero } from '../lib';

/**
 * Return a fulfilled promise after a given delay.
 */
const delay: (ms: number) => Promise<void> = (ms: number) => {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
};

/**
 * Return a fulfilled promise of heroes
 */
const getHeroesDelayedAsync: () => Promise<Hero[]> = function() {
  return new Promise<Hero[]>(resolve => resolve(heroes));
};

/**
 * Return a fulfilled promise of empty array
 */
const getHeroesEmpty: () => Promise<Hero[]> = () => Promise.resolve([]);

/**
 * Get the heroes via a Promise
 */
export const getHeroesViaPromise: () => Promise<Hero[]> = function() {
  return delay(1000).then(() => getHeroesDelayedAsync());
};

/**
 * Create and return a promise.
 * When invoked, it will settle
 * by either resolve or reject.
 */
export const getHeroesViaNewPromise: () => Promise<Hero[]> = function() {
  const newPromise = new Promise<Hero[]>((resolve, reject) => {
    return delay(1000)
      .then(() => getHeroesDelayedAsync())
      .then((heroes: Hero[]) => {
        if (heroes && heroes.length) {
          resolve(heroes);
        } else {
          reject(Error('uh oh! Errors!'));
        }
      });
  });
  return newPromise;
};

/**
 * Get the heroes,
 * except this always causes a Promise reject
 */
export const getHeroesViaPromiseReject: () => Promise<Hero[]> = function() {
  const newPromise = new Promise<Hero[]>((resolve, reject) => {
    return delay(1000)
      .then(() => getHeroesEmpty())
      .then((heroes: Hero[]) => {
        if (heroes && heroes.length) {
          resolve(heroes);
        } else {
          reject(Error('uh oh! Errors!'));
        }
      });
  });
  return newPromise;
};

/**
 * Get the heroes
 * Except this always causes a Promise to reject, too
 */
export const getHeroesViaPromiseRejectShorter: () => Promise<
  Hero[] | (() => Promise<never>)
> = function() {
  const getsHeroesOrDoesIt = () =>
    Promise.reject('bad error occured getting the heroes');

  return delay(1000).then(() => getsHeroesOrDoesIt);
};
