import { test } from '@playwright/test';
test('Open Registration page', async ({ page }) => {
    await test.step('Truy cập trang chủ', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Truy cập trang Registration', async () => {
        await page.locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]').click();
    });
    await test.step('Nhập thông tin vào form Registration', async () => {
        await page.locator("//input[@id='username']").fill('ngantt54');
        await page.locator("//input[@id='email']").fill('ngantt.27@gmail.com');
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='reading']").check();
        await page.locator('//select[@id="interests"]').selectOption("music");
        await page.locator('//select[@id="country"]').selectOption("canada");
        await page.locator('//input[@id="dob"]').fill("1991-04-27");
        await page.locator('//input[@id="profile"]').setInputFiles("tests/lesson-5/image.png");
        await page.locator("//textarea[@id='bio']").fill('Testing Biography');
        await page.locator("//input[@id='rating']").fill('6');
        await page.locator("//input[@id='favcolor']").fill('#a52727');
        await page.locator("//input[@id='newsletter']").check();
        //await page.locator('//label[for="toggleOption"]').click(); 
        //await page.locator('//input[@id="customDate"]').fill("2025-04-30");

    });
    await test.step('Click button Registrater', async () => {
        await page.locator('//button[text() ="Register"]').click();
    });
});