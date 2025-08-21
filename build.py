import os
import re
import shutil

def main():
    # Clean the dist directory
    if os.path.exists('dist'):
        shutil.rmtree('dist')
    os.makedirs('dist')

    # Copy static assets
    shutil.copytree('static', 'dist/static')

    # Read the templates
    with open('templates/base.html', 'r') as f:
        base_template = f.read()
    with open('templates/header.html', 'r') as f:
        header_partial = f.read()
    with open('templates/footer.html', 'r') as f:
        footer_partial = f.read()

    # Inject header and footer into the base template
    page_template = base_template.replace("{{ include 'header.html' }}", header_partial)
    page_template = page_template.replace("{{ include 'footer.html' }}", footer_partial)

    # Process each file in the content directory
    for filename in os.listdir('content'):
        if filename.endswith('.html'):
            with open(os.path.join('content', filename), 'r') as f:
                content = f.read()

            # Extract metadata directly from the content's HTML tags
            title = "Calculator Hub AI" # Default title
            title_match = re.search(r'<h1 class="section-title.*?>(.*?)</h1>', content, re.DOTALL)
            if title_match:
                # Clean up the extracted title (remove tags and extra whitespace)
                raw_title = title_match.group(1)
                clean_title = re.sub(r'<.*?>', '', raw_title).strip()
                clean_title = re.sub(r'\s+', ' ', clean_title)
                title = f"{clean_title} - Calculator Hub AI"

            description_match = re.search(r'<p class="section-description.*?>(.*?)</p>', content, re.DOTALL)
            description = description_match.group(1).strip() if description_match else "A collection of useful calculators."

            # Inject the content and metadata
            final_page = page_template.replace("{{ content }}", content)
            final_page = final_page.replace("{{ title }}", title)
            final_page = final_page.replace("{{ description }}", description)

            # Write the final HTML to the dist directory
            with open(os.path.join('dist', filename), 'w') as f:
                f.write(final_page)

    print("Website built successfully!")

if __name__ == '__main__':
    main()
