const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';

async function loginAndGoToBooking(page) {
    await page.goto(`${BASE_URL}/login`);

    await page.getByPlaceholder('you@email.com').fill('naveenashree138@gmail.com');

    await page.getByLabel('Password').fill('Navee@1234*');

    await page.locator('#login-btn').click();

    await expect(page.getByText('Browse Events →')).toBeVisible();}

test('Single ticket booking is eligible for refund', async ({ page }) => {

    await loginAndGoToBooking(page);
    await page.goto(`${BASE_URL}/events`);
    const firstEventCard = page.locator('[data-testid="event-card"]').first();
    await expect(firstEventCard).toBeVisible();

    await firstEventCard.getByTestId('book-now-btn').click();

    await page.getByLabel('Full Name').fill('Naveena');

    await page.locator('#customer-email').fill('naveenashree138@gmail.com');

    await page.getByPlaceholder('+91 98765 43210').fill('+91 98765 43210');

    await page.locator('.confirm-booking-btn').click();

    await page.getByText('View My Bookings').click();

    await expect(page).toHaveURL(`${BASE_URL}/bookings`);
    
    await page.getByText('View Details').first().click();

    await expect(page.getByText('Booking Information')).toBeVisible();


    const bookingRef = (await page.locator('h1').first().innerText()).trim();

    console.log('Booking Reference:', bookingRef);

    const eventTitle = (await page.locator('h1').last().innerText()).trim();

    console.log('Event Title:', eventTitle);

    expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0));


    const refundButton = page.locator('button').filter({hasText: 'Check eligibility for refund?'});

    await expect(refundButton).toBeVisible();

    await refundButton.click();


    await expect(page.locator('#refund-spinner')).toBeVisible();

    await expect(page.locator('#refund-spinner')).not.toBeVisible({timeout: 6000});

    const refundResult = page.locator('#refund-result');

    await expect(refundResult).toBeVisible();

    await expect(refundResult).toContainText('Eligible for refund');

    await expect(refundResult).toContainText('Single-ticket bookings qualify for a full refund')});


test('Group ticket booking is NOT eligible for refund', async ({ page }) => {

    await loginAndGoToBooking(page);

    await page.goto(`${BASE_URL}/events`);

    const firstEventCard = page.locator('[data-testid="event-card"]').first();

    await expect(firstEventCard).toBeVisible();

    await firstEventCard.getByTestId('book-now-btn').click();

    const plusButton = page.locator('button:has-text("+")');
    await plusButton.click();
    await plusButton.click();

    await page.getByLabel('Full Name').fill('Naveena');

    await page.locator('#customer-email').fill('naveenashree1@gmail.com');

    await page.getByPlaceholder('+91 98765 43210').fill('+91 98765 43210');

    await page.locator('.confirm-booking-btn').click();

    await page.getByText('View My Bookings').click();

    await expect(page).toHaveURL(`${BASE_URL}/bookings`);
    await page.getByText('View Details').first().click();

    await expect(page.getByText('Booking Information')).toBeVisible();

    const bookingRef = (await page.locator('h1') .first().innerText()).trim();

    console.log('Booking Reference:', bookingRef);

    const eventTitle = (await page.locator('h1').last().innerText()).trim();

    console.log('Event Title:', eventTitle);

    expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0));

    const refundButton = page.locator('button').filter({hasText: 'Check eligibility for refund?'});
    await expect(refundButton).toBeVisible();
    await refundButton.click();

    await expect(page.locator('#refund-spinner')).toBeVisible();

    await expect(page.locator('#refund-spinner')).not.toBeVisible({timeout: 6000});

    const refundResult = page.locator('#refund-result');

    await expect(refundResult).toBeVisible();

    await expect(refundResult).toContainText('Not eligible for refund');

    await expect(refundResult).toContainText('Group bookings (3 tickets) are non-refundable');});