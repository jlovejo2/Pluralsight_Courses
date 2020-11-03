import { ingredients } from './ingredients';

export function bakeCookies() {
  const bowl = combine(ingredients);

  const batter = mix(bowl);

  const cookieSheet = { batter, temp: 375, minutes: 10 };

  bake(cookieSheet, cookies => {
    eat(cookies);
  });
}

function combine(i: string[]): object {
  const bowl = {};

  return bowl;
}

function mix(bowl: object): object {
  const batter = {};
  return batter;
}

function bake(
  cookieSheet: { batter: any; temp: number; minutes: number },
  cb: (cookies: any) => void,
) {
  const cookies: any[] = [];

  //callback function says this is what should be down when baking function is complete
  cb(cookies);
}

function eat(cookies: any) {
  console.log('yummy!');
}
