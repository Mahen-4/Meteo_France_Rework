import { test, expect } from '@playwright/test';

test.describe("MSG Tests", ()=>{
  test('Err MSG', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Rechercher une ville').click();
    await page.getByPlaceholder('Rechercher une ville').fill('Napolie');
    await page.locator('form').getByRole('button').click();
    await expect(page.getByText('Ville / Pays Invalide')).toBeVisible();
  });
  
  test('Toaster MSG', async ({ page }) => {
    await page.goto('/');
    await page.locator('h1 > div > svg').click();
    await expect(page.getByRole('status')).toBeVisible();
  });  
})


