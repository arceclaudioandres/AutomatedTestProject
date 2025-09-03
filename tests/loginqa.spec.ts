import { test, expect } from '@playwright/test';

test('login works correctly with Identity Provider', async ({ page }) => {
  // 1. Ir al home
  await page.goto('https://agri-ar-v2-qa.pilkington.com/');

  // 2. Esperar redirección al login externo (regex para que funcione aunque cambie el hash)
  await page.waitForURL(/https:\/\/identity-qa\.pilkington\.com\/identityexternal\/login.*/);

  // 3. Completar login
  await page.fill('input#username', 'ARCECLAUDIOCCQA');
  await page.fill('input#password', 'Tlwn722g#');

  // 4. Marcar Terms and Conditions
  await page.getByLabel('I agree to the Terms and Conditions').click();


  // 5. Guardar URL antes de hacer login
  const urlBefore = page.url();

  // 6. Click en Sign In y esperar navegación
  // Click Sign In
  await page.screenshot({ path: 'login-bclick.png', fullPage: true });
  await page.click('button:has-text("Sign In")');
  await page.waitForURL('https://agri-ar-v2-qa.pilkington.com/', { timeout: 60000 });

  // 7. Guardar URL después del login
  const urlAfter = page.url();

  // 8. Validar que cambió la URL
  expect(urlAfter).not.toBe(urlBefore);


  // Localizar el mat-card-title visible que contiene "Claims Report"
  const claimsCardClaimReport = page.locator('mat-card-title:has-text("Claims Report")');

  // Validar que esté visible
  await expect(claimsCardClaimReport).toBeVisible({ timeout: 60000 });
  await claimsCardClaimReport.click();

  const claimsHeader = page.locator('label:has-text("Claims Report")'); // Ajustar según el HTML
  await expect(claimsHeader).toBeVisible({ timeout: 60000 });

  // 1️⃣ Localizar todos los items de claims
  const claimItems = page.locator('claim-report-item');

  // 2️⃣ Esperar a que al menos uno sea visible
  await expect(claimItems.first()).toBeVisible({ timeout: 60000 });

  // 3️⃣ Opcional: validar que hay al menos un item
  const count = await claimItems.count();
  expect(count).toBeGreaterThan(0);

});
