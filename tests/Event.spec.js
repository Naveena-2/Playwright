const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';


    function futureDateValue() {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    return date.toISOString().slice(0, 16);
}


test('Create event, book event and verify seat reduction', async ({ page }) => {

    
    await page.goto(`${BASE_URL}/login`);

    await page
        .getByPlaceholder('you@email.com')
        .fill('naveenashree138@gmail.com');

    await page
        .getByLabel('Password')
        .fill('Navee@1234*');

    await page
        .locator('#login-btn')
        .click();

    
    await expect(
        page.getByText('Browse Events →')
    ).toBeVisible();


   

    await page.goto(`${BASE_URL}/admin/events`);

    
    const eventTitle = `Test Event ${Date.now()}`;

    await page.locator('#event-title-input').fill(eventTitle);

    await page.locator('#admin-event-form textarea').fill('Event created for Playwright assessment');

    await page.getByLabel('City').fill('Coimbatore');

    await page.getByLabel('Venue').fill('Playwright Testing Center');

    await page.getByLabel('Event Date & Time').fill(futureDateValue());

    await page.getByLabel('Price ($)').fill('100');

    await page.getByLabel('Total Seats').fill('50');

    await page.locator('#add-event-btn').click();

    
    await expect(page.getByText('Event created!')).toBeVisible();

    await page.goto(`${BASE_URL}/events`);

    const eventCards = page.locator('[data-testid="event-card"]');

    await expect(eventCards.first()).toBeVisible();

    const matchedEventCard = eventCards.filter({hasText: eventTitle});

    await expect(matchedEventCard).toBeVisible({timeout: 5000});

    const seatText = matchedEventCard.getByText(/seat/i).first();

    const seatsBeforeText = await seatText.innerText();

    const seatsBeforeBooking = parseInt(seatsBeforeText.match(/\d+/)[0]);

    console.log('Seats before booking:', seatsBeforeBooking);

    await matchedEventCard.getByTestId('book-now-btn').click();

    await expect(page.locator('#ticket-count')).toHaveText('1');

    await page.getByLabel('Full Name').fill('Naveena');

    await page.locator('#customer-email').fill('naveenashree138@gmail.com');

    await page.getByPlaceholder('+91 98765 43210').fill('+91 98765 43210');

    await page.locator('.confirm-booking-btn').click();

    const bookingReference = page.locator('.booking-ref').first();

    await expect(bookingReference).toBeVisible();

    const bookingRef = (await bookingReference.innerText()).trim();

    console.log('Booking Reference:', bookingRef);

    await page.getByText('View My Bookings').click();

    await expect(page).toHaveURL(`${BASE_URL}/bookings`);   

    const bookingCards = page.locator('#booking-card');

    await expect(bookingCards.first()).toBeVisible();

    const matchedBookingCard = bookingCards.filter({
        has: page.locator('.booking-ref', {
            hasText: bookingRef
        })
    });

    await expect(matchedBookingCard).toBeVisible();

    await expect(matchedBookingCard).toContainText(eventTitle);

    await page.goto(`${BASE_URL}/events`);

    const eventCardsAfterBooking =
        page.locator('[data-testid="event-card"]');

    await expect(eventCardsAfterBooking.first()).toBeVisible();

    const matchedEventCardAfterBooking =eventCardsAfterBooking.filter({
            hasText: eventTitle
        });

    await expect(matchedEventCardAfterBooking).toBeVisible();

    const seatTextAfterBooking =
        matchedEventCardAfterBooking
            .getByText(/seat/i)
            .first();

    const seatsAfterText =
        await seatTextAfterBooking.innerText();

    const seatsAfterBooking = parseInt(
        seatsAfterText.match(/\d+/)[0]
    );

    console.log('Seats before booking:', seatsBeforeBooking);
    console.log('Seats after booking:', seatsAfterBooking);

    expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);

});