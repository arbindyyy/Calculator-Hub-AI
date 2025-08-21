import os
from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Go to the local server
        page.goto('http://localhost:8000')

        # Find the Age calculator card and click it
        age_card_link = page.locator('a[href="age-calculator.html"]')
        age_card_link.click()

        # Wait for the new page to load
        page.wait_for_load_state()

        # Expect the title of the new page to be correct
        expect(page).to_have_title("Age Calculator - Calculator Hub AI")

        # Expect the H1 of the new page to be correct
        h1 = page.locator('h1.section-title')
        expect(h1).to_contain_text('Age')

        # Verify the calculator works
        birth_date_input = page.locator('#birthDate')
        result_value = page.locator('#resultValue')

        birth_date_input.fill('2000-01-01')

        # The result depends on the current date, so we can't expect a fixed value.
        # Instead, we'll just check that the result is not empty.
        expect(result_value).not_to_be_empty()

        # Take a screenshot
        page.screenshot(path='jules-scratch/verification/verification_new_system.png')

        browser.close()

if __name__ == '__main__':
    run_verification()
