#!/bin/bash

# Script to add responsive CSS link and fix viewport to all HTML files

HTML_FILES=$(find . -maxdepth 1 -name "*.html" -type f ! -name "_*.html")

for file in $HTML_FILES; do
  echo "Processing: $file"
  
  # Fix viewport meta tag
  sed -i '' 's/<meta name="viewport" content="width=950">/<meta name="viewport" content="width=device-width, initial-scale=1.0">/g' "$file"
  
  # Add responsive CSS link after main.min css (if not already present)
  if ! grep -q "responsive-mobile.css" "$file"; then
    sed -i '' 's|main.min%EF%B9%96v=2.1.1.css">|main.min%EF%B9%96v=2.1.1.css">\n  <link rel="stylesheet" href="css/responsive-mobile.css">|g' "$file"
  fi
  
  echo "  ✓ Updated $file"
done

echo ""
echo "All HTML files updated successfully!"
echo ""
