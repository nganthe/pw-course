import { test } from '@playwright/test';
test('Open Registration page', async ({ page }) => {
    await test.step('Truy cập trang chủ', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Truy cập trang Product', async () => {
        await page.locator('//a[text()="Bài học 2: Product page"]').click();
    });
    await test.step('Thêm 2 sản phẩm thứ nhất vào giỏ hàng', async () => {
        await page.locator('//div[@class="product-info"][.//div[text()="Product 1"]]//button[text()="Add to Cart"]').click();
        await page.locator('//div[@class="product-info"][.//div[text()="Product 1"]]//button[text()="Add to Cart"]').click();

    });
    await test.step('Thêm 3 sản phẩm thứ hai vào giỏ hàng', async () => {
        await page.locator('//div[@class="product-info"][.//div[text()="Product 2"]]//button[text()="Add to Cart"]').click();
        await page.locator('//div[@class="product-info"][.//div[text()="Product 2"]]//button[text()="Add to Cart"]').click();
        await page.locator('//div[@class="product-info"][.//div[text()="Product 2"]]//button[text()="Add to Cart"]').click();
    });
    await test.step('Thêm 1 sản phẩm thứ ba vào giỏ hàng', async () => {
        await page.locator('//div[@class="product-info"][.//div[text()="Product 3"]]//button[text()="Add to Cart"]').click();

    });
});