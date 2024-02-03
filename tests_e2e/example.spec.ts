import { test, expect } from '@playwright/test';

test.beforeEach(async({ page })=>{
  await page.goto("/")
})
test.describe("MSG Tests", ()=>{
  
  test('Err MSG', async ({ page }) => {
    await page.getByPlaceholder('Rechercher une ville').click();
    await page.getByPlaceholder('Rechercher une ville').fill('Napolie');
    await page.locator('form').getByRole('button').click();
    await expect(page.getByText('Ville / Pays Invalide')).toBeVisible();
  });
  
  test('Toaster MSG', async ({ page }) => {
    await page.locator('h1 > div > svg').click();
    test.setTimeout(120000);
    await expect(page.getByText('Vous devez vous connecter !')).toBeVisible();
  });  
})


test.describe("LOGS Tests", ()=>{
  test('Log IN', async ({ page }) => {
    await page.getByRole('link', { name: 'Log In' }).click();
    await expect(page).toHaveURL("/authForm");
    await page.getByRole('button', { name: 'GitHub' }).click();
    test.setTimeout(120000);
    await expect(page).toHaveURL("/");
    await expect(page.getByRole('link', { name: 'Favorites' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log Out' })).toBeVisible();
    await page.getByRole('heading', { name: 'Paris Aujourd\'hui' }).getByRole('img').click();
    test.setTimeout(120000);
    await expect(page.getByText('Favorie ajouté !')).toBeVisible();
    await page.getByRole('link', { name: 'Favorites' }).click();
    await page.goto('/favorites_list');
    await expect(page).toHaveURL("/favorites_list");
    await expect(page.getByRole('heading', { name: 'Paris' })).toBeVisible();
    await page.locator('a').first().click();
    await expect(page).toHaveURL("/");
    await page.getByRole('heading', { name: 'Paris Aujourd\'hui' }).locator('path').click();
    await page.getByText('Favorie supprimé !').click();
    await page.getByRole('button', { name: 'Log Out' }).click();
    await expect(page).toHaveURL("/");
  });
   
})