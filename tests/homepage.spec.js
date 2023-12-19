// @ts-check
const { test, expect } = require('@playwright/test');

const resumeURL = 'https://cs-601.vercel.app/'; // Replace with the URL of the student's resume page

/* This test checks that the page title is not empty */
test('Check Page Title', async ({ page }) => {
  await page.goto(resumeURL);
  const title = await page.title();
  await expect(title).not.toBe('');
});

/* This test checks that the meta description for SEO is not empty */
test('Check SEO Meta Description', async ({ page }) => {
  await page.goto(resumeURL);
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  await expect(metaDescription).not.toBe('');
});

/* This test checks that the meta keywords for SEO are not empty */
test('Check SEO Meta Keywords', async ({ page }) => {
  await page.goto(resumeURL);
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
  await expect(metaKeywords).not.toBe('');
});

/* This test checks that the responsive meta tag is present */
test('Check Responsive Meta Tag', async ({ page }) => {
  await page.goto(resumeURL);
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content');
  await expect(viewportMeta).toBe('width=device-width, initial-scale=1.0');
});

