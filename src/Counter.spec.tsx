import { expect, test } from '@playwright/test';
import './Counter.story';

test('renders', async ({ mount }) => {
  const component = await mount('src/Counter/Primary');

  await expect(component).toBeVisible();
});

test('increments the counter', async ({ mount }) => {
  // TODO
});
