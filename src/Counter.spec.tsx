import { expect, test } from '@playwright/test';

test('renders', async ({ mount }) => {
  const component = await mount("src/Counter/Primary");

  await expect(component).toBeVisible();
});

test('increments the counter', async ({ mount }) => {
  // TODO
});
