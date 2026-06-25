import { expect, test } from "@playwright/test";

test.describe("smoke", () => {
    test('vue component renders correctly', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Astro Basics/);
    });
});