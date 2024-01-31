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
    await expect(page.getByText('Vous devez vous connecter !')).toBeVisible()
  });  
})


test.describe("LOGS Tests", ()=>{
  test('Log IN', async ({ page }) => {
    await page.getByRole('link', { name: 'Log In' }).click();
    await expect(page).toHaveURL("/authForm")
    await page.getByRole('button', { name: 'GitHub' }).click();
    await expect(page).toHaveURL("/")
  });
   
})