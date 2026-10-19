import { expect, test } from '@playwright/test';
import './Counter.story';

test('loads and displays greeting', async ({ mount }) => {
  // Arrange
  const component = await mount('src/Fetch/Primary');

  // Act
  await component.getByText('Load Greeting').click();

  // Assert
  await expect(component.getByRole('heading')).toHaveText('hello there');
  await expect(component.getByRole('button')).toBeDisabled();
});
