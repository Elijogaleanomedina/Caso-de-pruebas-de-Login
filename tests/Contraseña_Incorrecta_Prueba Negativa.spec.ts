import { test, expect, TestInfo, Page } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
async function attachScreenshot(page: Page, testInfo: TestInfo, name: string) {
  await testInfo.attach(name, {
    body: await page.screenshot({ fullPage: true }),
    contentType: "image/png",
  });
}
test('Contraseña Incorrecta (Prueba Negativa)', async ({ page}, testInfo )  => {
  await page.goto(process.env.TEST_URL!);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.TEST_USERNAME!);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.TEST_PASSWORDCASO2!);
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  await attachScreenshot(page, testInfo, `LoginOK-${timestamp}-before-login`);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#error')).toBeVisible();
  await expect(page.locator('#error')).toContainText('Your password is invalid!');
   await attachScreenshot(page, testInfo, `LoginOK-${timestamp}-after-login`);
}); 