import os
from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get the absolute path to the index.html file
        file_path = os.path.abspath('index.html')

        # Go to the local file
        page.goto(f'file://{file_path}')

        # Find the BMI calculator card and click it
        # The card is inside an <a> tag, so we can click the link
        bmi_card_link = page.locator('a[href="bmi-calculator.html"]')
        bmi_card_link.click()

        # Wait for the new page to load
        page.wait_for_load_state()

        # Expect the title of the new page to be correct
        expect(page).to_have_title("BMI Calculator - Calculator Hub AI")

        # Expect the H1 of the new page to be correct
        h1 = page.locator('h1.section-title')
        expect(h1).to_contain_text('BMI')

        # Verify the calculator works
        height_input = page.locator('#height')
        weight_input = page.locator('#weight')
        result_value = page.locator('#resultValue')

        height_input.fill('180')
        weight_input.fill('80')

        expect(result_value).to_have_text('24.7')

        # Take a screenshot
        page.screenshot(path='jules-scratch/verification/verification_bmi_page.png')

        browser.close()

if __name__ == '__main__':
    run_verification()
