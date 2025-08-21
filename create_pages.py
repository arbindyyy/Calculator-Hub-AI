import os
import re
import json

def get_calculator_implementations(js_content, tools_data):
    """
    Parses the JS file to extract the raw string of the calculatorImplementations object.
    This is a fragile way to do this, but it avoids needing a full JS parser.
    """
    try:
        # A non-greedy regex to find the calculatorImplementations object
        match = re.search(r'const calculatorImplementations = (\{.*?\});', js_content, re.DOTALL)
        if not match:
            print("Error: Could not find calculatorImplementations object.")
            return {}

        implementations_str = match.group(1)
        implementations = {}

        all_tools = [tool for category in tools_data.values() for tool in category]

        for tool in all_tools:
            tool_id = tool['id']
            # A more specific regex for the getHTML part of each known tool
            html_regex = re.compile(r"'" + re.escape(tool_id) + r"'\s*:\s*\{\s*getHTML:\s*\(\)\s*=>\s*`(.*?)`", re.DOTALL)
            html_match = html_regex.search(implementations_str)
            if html_match:
                html_content = html_match.group(1).strip()
                # Remove the calculator-result-area from the form, as we will add it generically
                html_content = re.sub(r'<div class="calculator-result-area">.*?</div>', '', html_content, flags=re.DOTALL).strip()
                implementations[tool_id] = html_content

        return implementations

    except Exception as e:
        print(f"An error occurred while parsing implementations: {e}")
        return {}


def get_tools_data(js_content):
    """
    Parses the JS file to extract the toolsData object and convert it to a Python dict.
    """
    try:
        # A non-greedy regex to find the toolsData object
        match = re.search(r'const toolsData = (\{.*?\});', js_content, re.DOTALL)
        if not match:
            print("Error: Could not find toolsData object.")
            return {}

        json_str = match.group(1)

        # Add quotes to unquoted keys.
        json_str = re.sub(r"([{,]\s*)([\w-]+)\s*:", r'\1"\2":', json_str)

        # Replace single quotes with double quotes.
        json_str = json_str.replace("'", '"')

        # Remove trailing commas from lists and objects, which are invalid in JSON
        json_str = re.sub(r',\s*([\]}])', r'\1', json_str)

        return json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"An error occurred while parsing toolsData: {e}")
        lines = json_str.split('\n')
        if e.lineno <= len(lines):
            error_line = lines[e.lineno - 1]
            print(f"Problematic line ({e.lineno}): {error_line}")
            print(" " * (e.colno - 1) + "^")
        return {}
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return {}


def create_page_content(tool, form_html):
    """
    Generates the full HTML content for a calculator page.
    """
    title_parts = tool['title'].split(' ')
    gradient_text = title_parts[0]
    rest_of_title = ' '.join(title_parts[1:])

    # Basic FAQ generation
    faq1_q = f"What is the {tool['title']}?"
    faq1_a = f"The {tool['title']} helps you {tool['description'].lower()}."
    faq2_q = f"How do I use the {tool['title']}?"
    faq2_a = f"Simply enter the required values into the form fields. The calculator will automatically update with the result."

    return f"""<section class="calculator-page-section" id="{tool['id']}">
    <div class="tools-container">
        <div class="section-header">
            <h1 class="section-title">
                <span class="gradient-text">{gradient_text}</span> {rest_of_title}
            </h1>
            <p class="section-description">
                {tool['description']}
            </p>
        </div>

        <div class="calculator-form-container">
            <form class="calculator-form">
                {form_html}
            </form>
            <div class="calculator-result-area">
                <p class="result-title">Result</p>
                <p class="result-value" id="resultValue">--</p>
                <p class="result-interpretation" id="resultInterpretation"></p>
            </div>
        </div>

        <div class="content-section" style="margin-top: var(--space-2xl); text-align: left;">
            <h2>Understanding the {tool['title']}</h2>
            <p>This section explains the purpose of the {tool['title']} and how it can be used in various scenarios. Detailed explanations of the inputs and outputs are provided to help you get the most out of this tool.</p>
        </div>

        <div class="faq-section" style="margin-top: var(--space-2xl); text-align: left;">
            <h2>Frequently Asked Questions (FAQ)</h2>
            <div class="faq-item" style="margin-bottom: var(--space-lg);">
                <h3>{faq1_q}</h3>
                <p>{faq1_a}</p>
            </div>
            <div class="faq-item" style="margin-bottom: var(--space-lg);">
                <h3>{faq2_q}</h3>
                <p>{faq2_a}</p>
            </div>
        </div>

        <script type="application/ld+json">
        {{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{{
            "@type": "Question",
            "name": "{faq1_q}",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "{faq1_a}"
            }}
          }}, {{
            "@type": "Question",
            "name": "{faq2_q}",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "{faq2_a}"
            }}
          }}]
        }}
        </script>
    </div>
</section>
"""

def main():
    # Define paths
    js_file_path = 'static/js/main.js'
    content_dir = 'content'

    # Ensure content directory exists
    if not os.path.exists(content_dir):
        os.makedirs(content_dir)

    # Read the main JS file
    try:
        with open(js_file_path, 'r', encoding='utf-8') as f:
            js_content = f.read()
    except FileNotFoundError:
        print(f"Error: Could not find {js_file_path}")
        return

    # Get the data
    tools_data = get_tools_data(js_content)
    if not tools_data:
        print("Could not process tools data. Exiting.")
        return

    implementations = get_calculator_implementations(js_content, tools_data)

    # Existing pages to skip
    skip_list = ['bmi-calculator', 'age-calculator', 'mortgage-calculator']

    # Loop through all tools and create pages
    all_tools = [tool for category in tools_data.values() for tool in category]

    created_count = 0
    for tool in all_tools:
        tool_id = tool['id']
        if tool_id in skip_list:
            continue

        # Get the form HTML, or use a placeholder for unimplemented calculators
        form_html = implementations.get(tool_id, '<div class="form-group"><p>This calculator is being updated. Please check back soon!</p></div>')

        # Generate the full page content
        page_html = create_page_content(tool, form_html)

        # Write the new file
        file_path = os.path.join(content_dir, f"{tool_id}.html")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(page_html)
        created_count += 1

    print(f"\nPage generation complete! Created {created_count} new pages.")

if __name__ == '__main__':
    main()
