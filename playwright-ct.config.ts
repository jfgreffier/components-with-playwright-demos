import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'components',
      testDir: './src',
      timeout: 10_000,
      expect: {
        timeout: 1_000,
      },
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:5173/playwright/gallery/index.html',
        serviceWorkers: 'block',
        reuseContext: true,
        viewport: { width: 500, height: 600 },
      },
    },
  ],
  webServer: {
    command: 'npx vite',
    url: 'http://localhost:5173/playwright/gallery/index.html',
    reuseExistingServer: !process.env.CI,
  },
});
