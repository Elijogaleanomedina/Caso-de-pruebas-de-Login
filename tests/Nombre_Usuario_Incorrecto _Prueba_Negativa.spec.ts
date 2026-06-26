import { test, expect, TestInfo, Page } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
async function attachScreenshot(page: Page, testInfo: TestInfo, name: string) {
  await testInfo.attach(name, {
    body: await page.screenshot({ fullPage: true }),
    contentType: "image/png",
  });
}
test('Caso de Prueba 2: Nombre de Usuario Incorrecto (Prueba Negativa)', async ({ page}, testInfo )  => {
  await page.goto(process.env.TEST_URL!);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.TEST_USERNAMECASO2!);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.TEST_PASSWORD!);
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  await attachScreenshot(page, testInfo, `LoginOK-${timestamp}-before-login`);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#error')).toBeVisible();
  await expect(page.locator('#error')).toContainText('Your username is invalid!');
   await attachScreenshot(page, testInfo, `LoginOK-${timestamp}-after-login`);
});




