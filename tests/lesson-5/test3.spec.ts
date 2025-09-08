import { test } from '@playwright/test';
test('Open Registration page', async ({ page }) => {
    await test.step('Truy cập trang chủ', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Truy cập Todo page', async () => {
        await page.locator('//a[text()="Bài học 3: Todo page"]').click();
    });
    await test.step('Thêm 2 sản phẩm thứ nhất vào giỏ hàng', async () => {
       for (let i = 1; i <= 100; i++) {
      await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
      await page.locator('//button[@id="add-task"]').click(); 
    }
    });
    await test.step("Xoá các todo số lẻ", async () => {
    page.on('dialog', async dialog => dialog.accept());
    for (let i = 1; i <= 100; i += 2) {
    await page.locator(`//li[span[text()="Todo ${i}"]]//button[text()= "Delete"]`).click();
    }
  });
});