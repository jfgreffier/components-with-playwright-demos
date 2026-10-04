// import Playwright Test
import { expect, test } from '@playwright/test';

test('loads and displays greeting', async ({ mount }) => {
  // Render a Story
  const component = await mount('src/Fetch/Primary');

  await component.getByText('Load Greeting').click();
  // no need to wait before throwing an error if it cannot find an element

  // assert that the alert message is correct using
  // toHaveText, a matcher from Playwright.
  await expect(component.getByRole('heading')).toHaveText('hello there');
  await expect(component.getByRole('button')).toBeDisabled();
});
