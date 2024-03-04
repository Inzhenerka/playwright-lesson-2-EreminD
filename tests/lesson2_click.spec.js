const { test, expect } = require('@playwright/test');

test('click test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/click');
    
  // >>>>> дополнить код здесь
  await page.locator("#badButton").click();
  // <<<<<
    
  expect(await page.locator("#badButton").getAttribute("class")).toMatch(/btn-success/);
});
