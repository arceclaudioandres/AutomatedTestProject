import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',         // carpeta donde están tus tests
  fullyParallel: true,        // correr tests en paralelo
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',           // reporte HTML fácil de abrir

  use: {
    headless: true,                 // funciona en Codespaces sin navegador
    screenshot: 'on',  // screenshot solo si falla
    video: 'on',                     // graba video siempre
    trace: 'on',         // trace solo si falla
    ignoreHTTPSErrors: true,         // útil si el QA env tiene certificados auto-firmados
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
