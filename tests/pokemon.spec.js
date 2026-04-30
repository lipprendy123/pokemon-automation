const {test, expect} = require('@playwright/test');

test('Pokemon - Find Pikachu and explore more pokemon', async ({page}) =>  {

    await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', {get: () => undefined});
    });

    await page.goto('/us/', { waitUntil: 'domcontentloaded' });
await page.waitForLoadState('domcontentloaded');

try {
  const acceptCookies = page.locator('button:has-text("Accept All")');
  await acceptCookies.waitFor({ state: 'visible', timeout: 5000 });
  await acceptCookies.click();
  await page.waitForTimeout(1000);
  console.log('Cookie accepted');
} catch {
  console.log('No cookie popup');
}
console.log('Step 1 : Opened pokemon.com/us/');

await page.waitForTimeout(1600);
const pokedexLink = page.locator('nav a:has-text("Pokédex")').first();
await pokedexLink.waitFor({ state: 'visible' });
await pokedexLink.click();
await page.waitForLoadState('domcontentloaded');
await page.waitForURL('**/pokedex**');
console.log('Step 2 : Navigated to Pokedex');

try {
  const acceptCookies2 = page.locator('button:has-text("Accept All")');
  await acceptCookies2.waitFor({ state: 'visible', timeout: 5000 });
  await acceptCookies2.click();
  await page.waitForTimeout(1000);
  console.log('Cookie accepted on Pokedex');
} catch {
  console.log('No cookie on Pokedex');
}

const searchInput = page.locator('input#searchInput');
await searchInput.waitFor({ state: 'visible' });
await searchInput.fill('Pikachu');
await page.waitForTimeout(1500)
await searchInput.press('Enter');
await page.waitForTimeout(2000);
console.log('Step 3 : Searched for Pikachu');


    const pikachuCard = page.locator('a[href*="pikachu"]').first();
await pikachuCard.waitFor({ state: 'visible' });
await pikachuCard.click();
await page.waitForURL('**/pokedex/pikachu**');
console.log('Step 4 : Selected Pikachu');

    await page.evaluate(() => window.scrollTo({top: 500, behavior: 'smooth'}));
await page.waitForTimeout(800);
await page.evaluate(() => window.scrollTo({top: 1000, behavior: 'smooth'}));
await page.waitForTimeout(800);
await page.evaluate(() => window.scrollTo({top: 1500, behavior: 'smooth'}));
await page.waitForTimeout(800);
await page.evaluate(() => window.scrollTo({top: 1300, behavior: 'smooth'}));
await page.waitForTimeout(1000);
await expect(page.locator('a[href*="type=electric"]').first()).toBeVisible();
console.log('Step 5: Scrolled through Pikachu details');

    
const exploreBtn = page.locator('a[href="/us/pokedex"]');
await exploreBtn.waitFor({ state: 'visible', timeout: 10000 });
await exploreBtn.scrollIntoViewIfNeeded();
await page.waitForTimeout(1500);
await exploreBtn.click();
await page.waitForURL('**/pokedex**');
console.log('Step 6: Clicked Explore More Pokemon');

    await page.waitForSelector('a[href*="/us/pokedex/"]', {state: 'visible'});
const pokemonCards = page.locator('a[href*="/us/pokedex/"]');
await expect(pokemonCards.first()).toBeVisible();

    for(let scrollY = 0; scrollY <= 3000; scrollY += 600) {
        await page.evaluate((y) => window.scrollTo({top: y, behavior: 'smooth'}), scrollY);
        await page.waitForTimeout(700);
    }

    const cardCount = await pokemonCards.count();
    console.log(`Step 7: Pokemon list displayed - ${cardCount} Pokemon visible`);

    expect (cardCount).toBeGreaterThan(0);
    console.log('\n Completed')
})