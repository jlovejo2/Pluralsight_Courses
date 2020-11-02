import axios from 'axios';

import { Hero } from './interfaces';

export const getHeroAsync = async function(email: string) {
  try {
    console.log('entered get hero...')
    const response = await axios.get(`api/heroes?email=${email.toLowerCase()}`);
    const { data } = response;
    console.log('data from get: ', data)
    const hero: Hero = data[0];
    return hero;
  } catch (error) {
    console.error(`Developer Error: Async Data Error: ${error.message}`);
    throw new Error(`Oh no! We're unable to fetch the Hero`);
  }
};
