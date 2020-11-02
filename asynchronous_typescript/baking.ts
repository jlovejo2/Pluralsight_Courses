

const ingredients = [
    '2 1/4 cups all-purpose flour',
    '1 teaspoon baking sode',
    '1 teaspoon salt',
    '1 cup (2 sticks) butter',
    '3/4 cup granulated sugar',
    '3/4 cup packed brown sugar',
    '1 tespoon vanilla extract',
    '2 large eggs',
    '2 cups (12-oz pkg) chocolate chips'
]

export function bakeCookies() {
    const bowl = combine(ingredients);

    const batter = mix(bowl)

    const cookieSheet = { batter, temp: 375, minutes: 10}

    bake(cookieSheet, cookies => {

        eat(cookies);
    })
}

function combine(i: any): object {
    const bowl = {
    }

    return bowl;
}

function mix(bowl: object): object {
    const batter = {

    }
    return batter
}

function bake(cookieSheet: {batter: any, temp: number, minutes: number}, cb: (cookies: any) => void) {
    const cookies: any[] = [];

    //callback function says this is what should be down when baking function is complete
    cb(cookies);
}

function eat(cookies:any) {
    console.log('yummy!');
}