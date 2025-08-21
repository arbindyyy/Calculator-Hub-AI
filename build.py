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

            # Extract metadata from comments
            title_match = re.search(r'<!-- title: (.*) -->', content)
            description_match = re.search(r'<!-- description: (.*) -->', content)

            title = title_match.group(1) if title_match else "Calculator Hub AI"
            description = description_match.group(1) if description_match else "A collection of useful calculators."

            # Remove metadata comments from the final content
            content = re.sub(r'<!-- title: (.*) -->', '', content)
            content = re.sub(r'<!-- description: (.*) -->', '', content)

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
