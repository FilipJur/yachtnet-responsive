This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
css/
  components/
    search-form/
      sumoselect/
        base.css
        multiple.css
      detailed.css
      layout.css
      submit.css
      tabs.css
    search-results/
      base.css
      cards.css
      layout.css
      pagination.css
      specs.css
      status.css
    boat-detail.css
    content.css
    dock.css
    footer.css
    gallery.css
    header.css
    hero.css
    navigation.css
    search-form.css
  layout.css
  main.css
  reset.css
  tokens.css
  typography.css
  utilities.css
```

# Files

## File: css/components/search-form/sumoselect/base.css
```css
/* ========================================
   SEARCH FORM - SUMOSELECT BASE
   ======================================== */

/* Main select box container */
.SumoSelect {
  width: 100%;
  position: relative;
  margin: var(--space-xs) 0 0 0;
}

/* Hide server-rendered CaptionCont, show JS-created one */
.SumoSelect > .CaptionCont:not(:has(> label)) {
  display: none !important;
}

/* SumoSelect library override - The clickable caption/display area */
.SumoSelect > .CaptionCont:has(> label) {
  width: 100%;
  height: 40px;
  padding: 0 44px 0 18px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-bg-input);
  cursor: pointer;
  display: flex !important;
  align-items: center;
  transition: all 0.2s ease;
  position: relative;
}

.SumoSelect > .CaptionCont:has(> label):hover {
  border-color: var(--color-border-hover);
  background: var(--color-bg-light);
}

.SumoSelect.open > .CaptionCont:has(> label),
.SumoSelect > .CaptionCont:has(> label):focus-visible {
  border-color: var(--color-primary);
  background: var(--color-bg-white);
  outline: 2px dashed var(--color-primary);
  outline-offset: 2px;
}

/* Selected value text */
.SumoSelect > .CaptionCont > span {
  font-size: var(--font-base);
  color: var(--color-text);
  font-weight: 500;
}

/* Placeholder text color */
.SumoSelect > .CaptionCont > span.placeholder {
  color: var(--color-text-muted);
  font-style: normal;
}

/* SumoSelect library override - Dropdown arrow */
.SumoSelect > .CaptionCont > label {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: transparent !important;
}

.SumoSelect > .CaptionCont > label > i {
  background-image: none !important;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid var(--color-text-light);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease;
}

.SumoSelect > .CaptionCont.opened > label > i {
  transform: translate(-50%, -50%) rotate(180deg);
  border-top-color: var(--color-primary);
}

/* SumoSelect library override - Dropdown options container */
.SumoSelect > .optWrapper {
  position: absolute;
  top: calc(100% + var(--space-sm));
  left: 0;
  right: 0;
  width: 100%;
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: -100;
  max-height: 280px;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;
}

.SumoSelect > .optWrapper.open {
  top: 55px;
  z-index: 100;
  opacity: 1;
  visibility: visible;
  animation: slideDown 0.2s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Options list */
.SumoSelect > .optWrapper > .options {
  list-style: none;
  margin: 0;
  padding: var(--space-xs) 0;
}

.SumoSelect > .optWrapper > .options li {
  padding: 0;
  margin: 0;
}

.SumoSelect > .optWrapper > .options li label {
  display: block;
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-base);
  color: var(--color-text);
  cursor: pointer;
  transition: background 0.15s ease;
}

.SumoSelect > .optWrapper > .options li:hover label {
  background: var(--color-bg-light);
}

.SumoSelect > .optWrapper > .options li.selected label {
  background: var(--color-bg-selected);
  color: var(--color-primary);
  font-weight: 600;
}

.SumoSelect > .optWrapper > .options li:focus-visible {
  outline: 2px dashed var(--color-primary);
  outline-offset: -2px;
}

/* Disabled State */
.SumoSelect.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.SumoSelect.disabled > .CaptionCont {
  background: var(--color-bg-light);
  cursor: not-allowed;
}

.SumoSelect.disabled > .CaptionCont:hover {
  border-color: var(--color-border);
}
```

## File: css/components/search-form/sumoselect/multiple.css
```css
/* ========================================
   SEARCH FORM - SUMOSELECT MULTI-SELECT
   ======================================== */

/* Reset multiple select option padding */
.SumoSelect > .optWrapper.multiple > .options > li {
  padding-left: 0;
  position: relative;
}

/* SumoSelect library override - Custom CSS checkboxes */
.SumoSelect > .optWrapper.multiple > .options > li > span {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  display: block;
}

.SumoSelect > .optWrapper.multiple > .options > li > span > i {
  background-image: none !important;
  width: var(--space-lg);
  height: var(--space-lg);
  position: relative;
  display: block;
  border: 1px solid var(--color-border);
  border-radius: var(--space-xs);
  background: var(--color-bg-white);
  transition: all 0.15s ease;
}

.SumoSelect > .optWrapper.multiple > .options > li:focus-visible > span > i {
  outline: 2px dashed var(--color-primary);
  outline-offset: 2px;
}

.SumoSelect > .optWrapper.multiple > .options > li.selected > span > i {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.SumoSelect > .optWrapper.multiple > .options > li.selected > span > i::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid var(--color-bg-white);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* SumoSelect library override - OK/Cancel Buttons */
.SumoSelect > .optWrapper.multiple > .MultiControls {
  display: none;
}

.SumoSelect > .optWrapper.multiple.okCancelInMulti > .MultiControls {
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-md);
  border-top: 1px solid var(--color-border);
  margin-top: var(--space-xs);
}

.SumoSelect > .optWrapper.multiple > .MultiControls > p {
  flex: 1;
  margin: 0;
  padding: var(--space-sm) var(--space-md);
  text-align: center;
  font-size: var(--font-sm);
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.SumoSelect > .optWrapper.multiple > .MultiControls > p.btnOk {
  background: var(--color-primary);
  color: var(--color-bg-white);
}

.SumoSelect > .optWrapper.multiple > .MultiControls > p.btnOk:hover {
  background: var(--color-primary-dark);
}

.SumoSelect > .optWrapper.multiple > .MultiControls > p.btnCancel {
  background: var(--color-bg-light);
  color: var(--color-text);
  border-right: none;
}

.SumoSelect > .optWrapper.multiple > .MultiControls > p.btnCancel:hover {
  background: var(--color-bg-hover);
}
```

## File: css/components/search-form/detailed.css
```css
/* ========================================
   SEARCH FORM - DETAILED SEARCH
   ======================================== */
.detailed-search-wrapper {
  display: none;
  margin-top: var(--space-md);
}

.detailed-search-wrapper .search-form-left-column {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}

.detailed-search-wrapper .search-form-built-sign,
.detailed-search-wrapper .search-form-built-year {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

@media (min-width: 600px) {
  .detailed-search-wrapper .search-form-left-column {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .detailed-search-wrapper .search-form-built-sign,
  .detailed-search-wrapper .search-form-built-year {
    grid-column: span 1;
  }
}
```

## File: css/components/search-form/layout.css
```css
/* ========================================
   SEARCH FORM - LAYOUT
   ======================================== */

/* Form Container */
.hp-main-column > section:first-child {
  background: var(--color-bg-white);
  border-radius: var(--space-md);
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.06);
}

.hp-main-column > section:first-child h2 {
  font-size: var(--font-xl);
  font-weight: 800;
  color: var(--color-primary-dark);
  margin: 0 0 var(--space-lg) 0;
  padding-left: var(--space-md);
  border-left: 4px solid var(--color-secondary);
  letter-spacing: -0.3px;
}

/* Main Form Layout */
#searchForm {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.search-form-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
  gap: var(--space-md);
}

.search-form-left-column,
.search-form-right-column {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  width: 100%;
}

/* Form Groups */
.search-form-period,
.search-form-pax {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.group-label {
  display: block;
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--space-xs);
}

/* Input Wrappers */
.search-form-label {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.search-form-label.search-form-from,
.search-form-label.search-form-till,
.search-form-label.search-form-pax-min,
.search-form-label.search-form-pax-max {
  font-size: var(--font-sm);
  color: var(--color-text-light);
  font-weight: 500;
}

/* Responsive */
@media (min-width: 600px) {
  .search-form-wrapper {
    gap: var(--space-md);
  }

  .search-form-left-column,
  .search-form-right-column {
    flex: 1;
    min-width: 280px;
  }

  .search-form-period,
  .search-form-pax {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-md);
  }

  .search-form-period .search-form-label,
  .search-form-pax .search-form-label {
    flex: 1;
  }

  .search-form-period .group-label,
  .search-form-pax .group-label {
    flex-basis: 100%;
  }
}
```

## File: css/components/search-form/submit.css
```css
/* ========================================
   SEARCH FORM - SUBMIT & TOGGLE
   ======================================== */

/* Submit Wrapper Layout */
.submit-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-md);
}

/* Toggle Link */
.submit-wrapper a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  width: 100%;
  padding: var(--space-md);
  background: transparent;
  border: 1px dashed var(--color-bg-light);
  border-radius: 10px;
  color: var(--color-text-light);
  font-size: var(--font-sm);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-wrapper a:hover,
.submit-wrapper a:focus-visible {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(0, 106, 178, 0.03);
  outline: 2px dashed var(--color-primary);
  outline-offset: 2px;
}

.submit-wrapper a:not(.active)::after {
  content: "+";
  font-size: var(--font-lg);
  font-weight: 400;
}

.submit-wrapper a.active {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(0, 106, 178, 0.05);
}

.submit-wrapper a.active::after {
  content: "−";
  font-size: var(--font-lg);
  font-weight: 400;
}

/* Submit Button */
#searchForm button[type="submit"],
#searchForm input[type="submit"] {
  width: 100%;
  height: 40px;
  background: var(--color-secondary);
  color: var(--color-bg-white);
  border: none;
  border-radius: 10px;
  font-size: var(--font-base);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: var(--space-sm);
  box-shadow: 0 4px 12px rgba(238, 127, 0, 0.3);
}

#searchForm button[type="submit"]:hover,
#searchForm input[type="submit"]:hover {
  background: var(--color-secondary-dark);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(238, 127, 0, 0.4);
}

#searchForm button[type="submit"]:active,
#searchForm input[type="submit"]:active,
#searchForm button[type="submit"]:focus-visible,
#searchForm input[type="submit"]:focus-visible {
  background: var(--color-secondary-darker);
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(238, 127, 0, 0.3);
  outline: 2px dashed var(--color-primary);
  outline-offset: 2px;
}
```

## File: css/components/search-form/tabs.css
```css
/* ========================================
   SEARCH FORM - TAB PILLS
   ======================================== */
.search-form-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin: 0 0 var(--space-lg) 0;
  padding: 0;
  list-style: none;
}

.search-form-tabs li {
  flex: 0 0 auto;
}

.search-form-tabs a {
  display: block;
  padding: var(--space-sm) var(--space-md);
  text-align: center;
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--color-text);
  background: var(--color-bg-light);
  border-radius: var(--space-xl);
  border: 1px solid transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
}

.search-form-tabs a:hover {
  background: var(--color-bg-hover);
  color: var(--color-primary);
}

.search-form-tabs a.active {
  background: var(--color-primary);
  color: var(--color-bg-white);
  border-color: var(--color-primary);
  box-shadow: 0 2px 8px rgba(0, 106, 178, 0.3);
}

.search-form-tabs a:focus-visible {
  outline: 2px dashed var(--color-primary);
  outline-offset: 2px;
}
```

## File: css/components/search-results/base.css
```css
/* ========================================
   SEARCH RESULTS - BASE
   Table reset and card grid structure
   ======================================== */

/* Reset table structure */
.search-result-table,
.search-result-table tbody,
.search-result-table thead,
.search-result-table tfoot {
  display: block;
  width: 100%;
}

/* Main container styling */
.search-main-column > div {
  background: var(--color-bg-white);
  border-radius: var(--space-md);
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.06);
}

/* Transform each row into a card using CSS Grid */
.search-result-table tr {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "header header header price"
    "specs specs specs specs"
    "status status status status"
    "actions actions actions actions";
  gap: var(--space-md);
  background: var(--color-bg-white);
  border-radius: var(--space-md);
  padding: var(--space-md);
  margin-bottom: calc(var(--space-md) * 2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  width: 100% !important;
  max-width: 100% !important;
}

/* Hide <br> tags inside cards */
.search-result-table tr br {
  display: none;
}

/* Recommended badge using :has() */
.search-result-table tr:has(.recommended-company) {
  border: 2px solid rgba(238, 127, 0, 0.3);
  padding-top: calc(var(--space-md) + 32px);
}

.search-result-table tr:has(.recommended-company)::before {
  content: "DOPORUČUJEME";
  position: absolute;
  top: var(--space-md);
  left: var(--space-md);
  background: var(--color-secondary);
  color: var(--color-bg-white);
  letter-spacing: 0.5px;
  border-radius: var(--space-xs);
  padding: 6px 12px;
  font-size: var(--font-xs);
  font-weight: 700;
}

/* Hide the original SSR recommended-company element to avoid duplication */
.search-result-table .recommended-company,
.search-result-table .search-result-label {
  display: none !important;
}

/* First cell: Header (name, instance, location) - spans 3 columns */
.search-result-table td:nth-child(1) {
  grid-area: header;
  grid-column: 1 / 4;
  padding: 0;
  border: none;
}

.search-result-table td:nth-child(1) strong {
  display: block;
  margin-bottom: var(--space-xs);
}

.search-result-table td:nth-child(1) strong a {
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

/* Boat instance name (text after <br>) */
.search-result-table td:nth-child(1) br + * {
  font-size: var(--font-sm);
  color: var(--color-text-muted);
}

/* Location styling */
.search-result-table td:nth-child(1) .loc-map,
.search-result-table td:nth-child(1) a[href="#"][data-lat] {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-primary);
  font-size: var(--font-sm);
  text-decoration: none;
  margin-top: var(--space-xs);
}

/* Location pin icon */
.search-result-table td:nth-child(1) .loc-map::before,
.search-result-table td:nth-child(1) a[href="#"][data-lat]::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23006ab2' stroke-width='2'%3E%3Cpath d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E")
    center/contain no-repeat;
  flex-shrink: 0;
}
```

## File: css/components/search-results/cards.css
```css
/* ========================================
   SEARCH RESULTS - CARDS
   Price display and action buttons
   ======================================== */

/* Fourth cell: Price in top right corner */
.search-result-table td:nth-child(4) {
  grid-area: price;
  grid-column: 4 / 5;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0;
  border: none;
}

.search-result-table td:nth-child(4) > div:first-child {
  height: var(--space-md);
}

/* Hide "cena po slevě" text but show discount percentage */
.search-result-table td:nth-child(4) > div:first-of-type strong {
  color: transparent;
  position: relative;
  display: inline-block;
}

.search-result-table td:nth-child(4) > div:first-of-type strong span {
  color: var(--color-secondary);
  font-size: var(--font-sm);
  font-weight: 500;
  position: absolute;
  right: 0;
  top: 0;
}

/* Price styling - larger, below discount */
.search-result-table td:nth-child(4) > div:nth-of-type(2) {
  margin-top: var(--space-xs);
}

.search-result-table td:nth-child(4) strong:last-of-type {
  font-size: var(--font-2xl);
  font-weight: 700;
  color: var(--color-secondary);
  display: block;
}

/* Fifth cell: Action buttons */
.search-result-table td:nth-child(5) {
  grid-area: actions;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding: var(--space-sm) 0 0 0;
  border-top: 1px solid var(--color-border);
  border-bottom: none;
}

.search-result-table td:nth-child(5) button,
.search-result-table td:nth-child(5) a {
  flex: 1;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-sm);
  font-weight: 500;
  border-radius: var(--space-xs);
  cursor: pointer;
  text-decoration: none;
}

/* Compare button */
.search-result-table td:nth-child(5) button {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border-hover);
  color: var(--color-text);
}

/* Reserve button (default - online state) */
.search-result-table td:nth-child(5) a {
  background: var(--color-success);
  border: none;
  color: var(--color-bg-white);
  font-weight: 600;
}

/* Reserve button for "na dotaz" state */
.search-result-table tr:has(.state-option) td:nth-child(5) a {
  background: var(--color-text-muted);
}
```

## File: css/components/search-results/layout.css
```css
/* ========================================
   SEARCH RESULTS - LAYOUT
   Filter pills, sorting bar, and general layout
   ======================================== */

/* Main container adjustments */
.main-column {
  width: 100%;
}

/* Search form area inherits from search-form.css */
/* Sorting links */
.main-column > div > p:first-of-type {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  align-items: center;
  font-size: var(--font-sm);
  margin-bottom: var(--space-md);
}

.main-column > div > p:first-of-type a {
  color: var(--color-primary);
  text-decoration: none;
}

.main-column > div > p:first-of-type a:hover {
  text-decoration: underline;
}

/* Active sort indicator */
.main-column > div > p:first-of-type strong {
  color: var(--color-secondary);
}

/* ========================================
   SEARCH MAIN COLUMN - MOBILE LAYOUT
   ======================================== */

/* Show aside as filter pills */
.search-main-column aside {
  display: block;
  margin-top: var(--space-md);
  background: var(--color-bg-light);
  border-radius: var(--space-md);
  padding: var(--space-md);
}

.search-main-column aside h4 {
  font-size: var(--font-sm);
  font-weight: 600;
  margin-bottom: var(--space-sm);
  color: var(--color-text);
}

.search-main-column aside > div {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.search-main-column aside p {
  background: var(--color-bg-white);
  padding: 6px 12px;
  border-radius: var(--space-md);
  font-size: var(--font-sm);
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  margin: 0;
  border: 1px solid var(--color-border);
}

.search-main-column aside p span {
  color: var(--color-text-muted);
  font-size: var(--font-xs);
  font-weight: 500;
}

/* Sorting links as scrollable filter bar */
.search-main-column > section > div:first-of-type > p:first-of-type {
  display: flex;
  gap: var(--space-xs);
  overflow-x: auto;
  padding-bottom: var(--space-xs);
  margin-bottom: var(--space-md);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  font-size: 0;
}

.search-main-column
  > section
  > div:first-of-type
  > p:first-of-type::-webkit-scrollbar {
  display: none;
}

.search-main-column > section > div:first-of-type > p:first-of-type a,
.search-main-column > section > div:first-of-type > p:first-of-type strong {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  padding: 6px 14px;
  border-radius: var(--space-xl);
  font-size: var(--font-sm);
  white-space: nowrap;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 400;
  display: inline-flex;
  align-items: center;
}

.search-main-column > section > div:first-of-type > p:first-of-type a.active,
.search-main-column > section > div:first-of-type > p:first-of-type strong {
  background: var(--color-primary);
  color: var(--color-bg-white);
  border-color: var(--color-primary);
  font-weight: 500;
}

.search-main-column > section > div:first-of-type > p:first-of-type a:hover {
  border-color: var(--color-primary);
  background: var(--color-bg-light);
}

/* Hide sidebar on mobile (override for search-main-column aside) */
.sidebar,
.complementary {
  display: none;
}
```

## File: css/components/search-results/pagination.css
```css
/* ========================================
   SEARCH RESULTS - PAGINATION
   Pagination controls styling
   ======================================== */

/* Hide first pagination, keep only bottom one */
.search-main-column > section > div:first-of-type > .pagination-control {
  display: none;
}

/* Pagination container */
.pagination-control {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-xs);
  padding: var(--space-md) 0;
}

.pagination-control a,
.pagination-control span {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 var(--space-sm);
  font-size: var(--font-sm);
  border-radius: var(--space-xs);
  text-decoration: none;
}

.pagination-control a {
  background: var(--color-bg-white);
  color: var(--color-primary);
  border: 1px solid var(--color-border);
}

.pagination-control span.disabled {
  background: var(--color-bg-light);
  color: var(--color-text-muted);
}

.pagination-control a.step {
  padding: 0 var(--space-md);
}

/* Ellipsis styling */
.pagination-control .ellipses {
  color: var(--color-text-muted);
  pointer-events: none;
}
```

## File: css/components/search-results/specs.css
```css
/* ========================================
   SEARCH RESULTS - SPECS
   Year, charter, people, cabins icons
   ======================================== */

/* Second & Third cells: Specs layout */
.search-result-table td:nth-child(2) {
  grid-column: 1 / 3;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: var(--space-sm);
  padding: 0;
  border: none;
}

.search-result-table td:nth-child(3) {
  grid-column: 3 / 5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: var(--space-sm);
  padding: 0;
  border: none;
}

/* Style all spec items */
.search-result-table td:nth-child(2) > *,
.search-result-table td:nth-child(3) > * {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  min-width: 60px;
  text-align: center;
}

/* Year styling */
.search-result-table .search-result-built {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-sm);
  color: var(--color-text);
}

.search-result-table .search-result-built::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23006ab2' stroke-width='2'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'/%3E%3C/svg%3E")
    center/contain no-repeat;
}

/* Charter company styling */
.search-result-table .search-result-category {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-sm);
  color: var(--color-text);
}

.search-result-table .search-result-category::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23006ab2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 6v16'/%3E%3Cpath d='m19 13 2-1a9 9 0 0 1-18 0l2 1'/%3E%3Cpath d='M9 11h6'/%3E%3Ccircle cx='12' cy='4' r='2'/%3E%3C/svg%3E")
    center/contain no-repeat;
}

/* People count styling */
.search-result-table div[title="počet osob"] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-sm);
  color: var(--color-text);
}

.search-result-table div[title="počet osob"]::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23006ab2' stroke-width='2'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3Cpath d='M22 21v-2a4 4 0 0 0-3-3.87'/%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'/%3E%3C/svg%3E")
    center/contain no-repeat;
}

/* Cabins count styling */
.search-result-table div[title="počet kajut"] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-sm);
  color: var(--color-text);
}

.search-result-table div[title="počet kajut"]::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23006ab2' stroke-width='2'%3E%3Cpath d='M2 20V12a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8'/%3E%3Cpath d='M4 16h16'/%3E%3Cpath d='M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4'/%3E%3C/svg%3E")
    center/contain no-repeat;
}

/* ========================================
   RESPONSIVE BREAKPOINTS
   ======================================== */

/* Small screens: 2 columns for specs */
@media (max-width: 420px) {
  .search-result-table td:nth-child(2),
  .search-result-table td:nth-child(3) {
    flex-direction: column;
  }

  .search-result-table td:nth-child(2) > *,
  .search-result-table td:nth-child(3) > * {
    flex: 1;
    min-width: auto;
  }
}
```

## File: css/components/search-results/status.css
```css
/* ========================================
   SEARCH RESULTS - STATUS
   Availability states (online, na dotaz)
   ======================================== */

/* Status row - full width above actions, right aligned */
.search-result-table td:nth-child(4) > div:last-of-type {
  grid-area: status;
  grid-column: 1 / 5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-xs);
  font-size: var(--font-base); /* 16px - content always 16px */
  font-weight: 600;
  padding: var(--space-xs) 0;
  width: 100%;
  margin-inline: var(--space-sm);
}

/* Status styling */
.search-result-table .state-available {
  color: var(--color-success);
}

/* Circle check icon for available status */
.search-result-table .state-available::before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23449d09' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E") center/contain no-repeat;
  margin-right: var(--space-xs);
  flex-shrink: 0;
}

.search-result-table .state-option {
  color: var(--color-text-muted);
}

.search-result-table .state-option::before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%2358585a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E") center/contain no-repeat;
  margin-right: var(--space-xs);
  flex-shrink: 0;
}
```

## File: css/components/boat-detail.css
```css
/* Boat Detail Page - Mobile Responsive Styles
 * Transforms desktop sidebar layout into stacked card-based mobile layout
 * Note: Sticky booking bar is TODO - skipping for now
 */

/* Main container adjustments */
.boat-main-column {
  width: 100%;
  max-width: 100%;
}

/* Boat title - h2 should be larger on mobile */
.boat-main-column > h2 {
  font-size: 1.5rem; /* 24px */
  font-weight: 700;
  color: var(--color-primary);
  margin: var(--space-md) 0 var(--space-sm);
  line-height: 1.2;
}

/* Location meta line */
.boat-main-column > p {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-base); /* 16px base */
  color: var(--color-text);
  margin-bottom: var(--space-md);
}

.boat-main-column > p a.loc-map {
  color: var(--color-primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* Map pin icon for location links */
.boat-main-column > p a.loc-map::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23006ab2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E")
    center/contain no-repeat;
  flex-shrink: 0;
}

/* Card sections - Tech Specs, Conditions, Recap */
.boat-tech-wrapper,
.boat-condition-wrapper,
.boat-recap-wrapper {
  background: var(--color-bg-white);
  border-radius: 8px;
  margin-bottom: var(--space-md);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

/* Section headers - blue background */
.boat-tech-wrapper h3,
.boat-condition-wrapper h3,
.boat-recap-wrapper h3 {
  background: var(--color-primary);
  color: white;
  padding: var(--space-sm) var(--space-md);
  font-size: 0.875rem; /* 14px - slightly larger for headers */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}
/* Tech specs - 2 column grid layout */
.boat-tech-wrapper dl {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md) var(--space-lg);
  padding: var(--space-lg);
  margin: 0;
}

@media only screen and (min-width: 620px) {
  .boat-tech-wrapper dl {
    grid-template-columns: repeat(4, 1fr);
  }
}
.boat-tech-wrapper dl + dl {
  border-top: 1px solid var(--color-border);
}

.boat-tech-wrapper dt {
  font-size: 0.75rem; /* 12px - smaller labels */
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  margin-bottom: 4px;
}

.boat-tech-wrapper dd {
  font-size: var(--font-base); /* 16px - content always 16px */
  color: var(--color-text);
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
}

/* Rental conditions - improved layout matching mockup */
.boat-condition-wrapper dl {
  display: block;
  padding: var(--space-lg);
  margin: 0;
}

.boat-condition-wrapper dt {
  font-size: var(--font-base); /* 16px - content always 16px */
  color: var(--color-text);
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  margin-top: var(--space-md);
  margin-bottom: var(--space-xs);
}

.boat-condition-wrapper dt:first-child {
  margin-top: 0;
}

.boat-condition-wrapper dd {
  margin: 0;
}

.boat-condition-wrapper dd ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.boat-condition-wrapper dd li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-sm) 0;
  font-size: var(--font-base); /* 16px - content always 16px */
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
}

.boat-condition-wrapper dd li:last-child {
  border-bottom: none;
}

/* First level items (Kauce, Poplatky na základně) - bold label */
.boat-condition-wrapper dd:first-of-type li:first-child,
.boat-condition-wrapper dd:first-of-type li:only-child {
  font-weight: 600;
}

/* Price styling - right aligned */
.boat-condition-wrapper dd li .price,
.boat-condition-wrapper dd li strong:last-child,
.boat-condition-wrapper dd li span:last-child {
  font-weight: 700;
  text-align: right;
  flex-shrink: 0;
  margin-left: var(--space-sm);
}

/* Extract price from text content for base fees and add-ons */
.boat-condition-wrapper dd li {
  position: relative;
}

/* Style the price portion (text after <br>) */
.boat-condition-wrapper dd li br + * {
  display: block;
  font-weight: 700;
  margin-left: auto;
}

/* Section dividers between Poplatky and Lze přiobjednat */
.boat-condition-wrapper dl dt:nth-of-type(2) {
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-md);
}

/* Booking recap - improved layout matching mockup */
.boat-recap-wrapper dl {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md) var(--space-lg);
  padding: var(--space-lg);
  margin: 0;
}

.boat-recap-wrapper dt {
  font-size: 0.75rem; /* 12px - smaller labels */
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  margin-bottom: 4px;
}

.boat-recap-wrapper dd {
  font-size: var(--font-base); /* 16px - content always 16px */
  color: var(--color-text);
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
}

/* Price section - styled as highlight box */
.boat-recap-wrapper .price-section {
  background: var(--color-bg-light);
  border-radius: 8px;
  padding: var(--space-md);
  margin: var(--space-md);
  text-align: center;
}

.boat-recap-wrapper .price-original {
  font-size: var(--font-base);
  color: var(--color-text-light);
  text-decoration: line-through;
  margin-bottom: var(--space-xs);
}

.boat-recap-wrapper .discount-wrapper {
  color: var(--color-secondary);
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  margin-bottom: var(--space-xs);
}

.boat-recap-wrapper .price-final {
  color: var(--color-success);
  font-size: 1.5rem; /* 24px - larger for final price */
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.boat-recap-wrapper .price-note {
  font-size: var(--font-sm);
  color: var(--color-text-light);
  margin: 0;
}

/* Legacy paragraph styling for backwards compatibility */
.boat-recap-wrapper > p {
  padding: 0 var(--space-md);
  margin: var(--space-xs) 0;
  font-size: var(--font-base); /* 16px */
}

.boat-recap-wrapper > p strong {
  color: var(--color-success);
  font-size: 1.25rem;
}

.boat-recap-wrapper > p:has(strong) {
  background: var(--color-bg-light);
  border-radius: 8px;
  padding: var(--space-md);
  margin: var(--space-md);
  text-align: center;
}

/* Booking form */
.booking-form {
  background: var(--color-bg-white);
  border-radius: 8px;
  padding: var(--space-lg);
  margin-top: var(--space-md);
  margin-bottom: var(--space-md);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.booking-form div {
  margin-bottom: var(--space-md);
}

.booking-form label {
  display: block;
  font-size: var(--font-base); /* 16px */
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.booking-form input[type="text"],
.booking-form input[type="email"],
.booking-form input[type="tel"],
.booking-form textarea {
  width: 100%;
  min-height: 44px;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: var(--font-base); /* 16px - content always 16px */
  font-family: inherit;
  background: var(--color-bg-white);
  box-sizing: border-box;
}

.booking-form textarea {
  min-height: 100px;
  resize: vertical;
}

.booking-form input:focus,
.booking-form textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(0, 106, 178, 0.1);
}

/* Fix duplicate message - hide the second one */
.booking-form .message ~ .message {
  display: none;
}

/* Availability message with circle-check icon */
.booking-form .message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding: var(--space-md);
  background: rgba(68, 157, 9, 0.1);
  border-radius: 6px;
  margin: var(--space-md) 0;
  text-align: center;
}

.booking-form .message strong {
  color: var(--color-success);
  font-weight: 700;
  font-size: var(--font-base); /* 16px */
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

/* Circle check icon for success state */
.booking-form .message strong::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23449d09' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E")
    center/contain no-repeat;
  flex-shrink: 0;
}

.booking-form .message strong.unverified {
  color: var(--color-secondary);
}

/* Circle icon for unverified state */
.booking-form .message strong.unverified::before {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23ee7f00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M12 16h.01'/%3E%3C/svg%3E")
    center/contain no-repeat;
}

.booking-form .message span {
  color: var(--color-text-light);
  font-size: var(--font-base); /* 16px */
}

/* Submit button with shopping cart icon */
.booking-form button[type="submit"] {
  width: 100%;
  min-height: 48px;
  background: var(--color-success);
  color: white;
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  margin: var(--space-md) 0;
}

/* Shopping cart icon */
.booking-form button[type="submit"]::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='21' r='1'/%3E%3Ccircle cx='19' cy='21' r='1'/%3E%3Cpath d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'/%3E%3C/svg%3E")
    center/contain no-repeat;
  flex-shrink: 0;
}

.booking-form button[type="submit"]:active {
  transform: scale(0.98);
}

/* Privacy hint */
.booking-form .hint {
  font-size: 12px;
  color: var(--color-text-light);
  text-align: center;
  margin: 0;
}

.booking-form .hint a {
  color: var(--color-primary);
  text-decoration: underline;
}

/* TODO: Sticky booking bar for mobile
 * This would display the boat name and quick price info
 * fixed at the top when scrolling, based on boat-recap-wrapper data
 * Skipping for now as per requirements
 */
```

## File: css/components/content.css
```css
/* ========================================
   CONTENT COMPONENTS
   Sections, articles, sidebars
   ======================================== */

/* Main column full width on mobile */
.hp-main-column {
  width: 100%;
}

/* ========================================
   SECTION CARDS (in hp-main-column)
   ======================================== */
.hp-main-column > section {
  background: var(--color-bg-white);
  border-radius: var(--space-md);
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--color-border);
}

/* Section headings with colored left border */
.hp-main-column > section h2 {
  font-size: var(--font-xl);
  font-weight: 800;
  color: var(--color-dark-blue);
  margin: 0 0 var(--space-md) 0;
  padding-left: var(--space-md);
  border-left: 4px solid;
  letter-spacing: -0.3px;
}

/* First section (search) - orange border */
.hp-main-column > section:first-child h2 {
  border-color: var(--color-secondary);
}

/* Second section (reviews) - blue border */
.hp-main-column > section:nth-child(2) h2 {
  border-color: var(--color-primary);
}

/* Third section (articles) - blue border */
.hp-main-column > section:nth-child(3) h2 {
  border-color: var(--color-primary);
}

/* ========================================
   RATINGS SECTION
   ======================================== */
.rating-stars-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-md);
  background: linear-gradient(135deg, #e8f4fc 0%, #f0f8ff 100%);
  border-radius: 10px;
  margin-bottom: var(--space-sm);
}

/* Star rating - Desktop CSS ported to mobile */
.star-rating-wrapper {
  font-size: 0;
  height: 26px;
  line-height: 0;
  margin: 12px auto 8px;
  overflow: hidden;
  text-indent: -999em;
  width: 150px;
  background: url("../img/star-sprite.png") repeat-x;
}

.star-rating-wrapper .star-rating {
  background: url("../img/star-sprite.png") repeat-x;
  background-position: 0 100%;
  display: block;
  float: left;
  height: 26px;
}

/* Retina display support */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .star-rating-wrapper,
  .star-rating-wrapper .star-rating {
    background-image: url("../img/star-sprite2x.png");
    background-size: 30px 52px;
  }
}

.rating-stars-wrapper p {
  margin: 0;
  text-align: center;
  font-size: var(--font-sm);
  color: var(--color-text-muted);
}

.rating-claim-wrapper {
  text-align: center;
  padding: var(--space-sm);
  background: #f8f9fa;
  border-radius: 8px;
}

.rating-claim-wrapper p {
  margin: 0;
  font-size: var(--font-sm);
  color: var(--color-text);
  line-height: 1.5;
}

.rating-claim-wrapper strong {
  color: var(--color-primary);
  font-weight: 700;
}

/* ========================================
   ARTICLES SECTION - "Mohlo by vás zajímat"
   ======================================== */
.hp-main-column > section:nth-child(3) {
  margin-bottom: var(--space-md);
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
}

/* Make h2 span full width in the grid */
.hp-main-column > section:nth-child(3) > h2 {
  grid-column: 1 / -1;
  margin-bottom: 0;
}

.hp-main-column article {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: var(--space-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* Individual background images for each article */
.hp-main-column article:nth-of-type(1) {
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 30, 60, 0.85) 100%),
    url("../img/responsive/bg-kapitanske-kurzy.jpg") center/cover no-repeat;
}

.hp-main-column article:nth-of-type(2) {
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 30, 60, 0.85) 100%),
    url("../img/responsive/bg-ricni-lode.jpg") center/cover no-repeat;
}

.hp-main-column article:nth-of-type(3) {
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 30, 60, 0.85) 100%),
    url("../img/responsive/bg-plavba.jpg") center/cover no-repeat;
}

.hp-main-column article:nth-of-type(4) {
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 30, 60, 0.85) 100%),
    url("../img/responsive/bg-chartrovky.jpg") center/cover no-repeat;
}

/* Article content */
.hp-main-column article h3 {
  margin: 0;
  padding: 60px var(--space-md) var(--space-sm);
  position: relative;
  z-index: 2;
}

.hp-main-column article h3 a {
  color: var(--color-bg-white);
  text-decoration: none;
  font-size: var(--font-base);
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  display: block;
}

.hp-main-column article p {
  margin: 0;
  padding: 0 var(--space-md) var(--space-md);
  position: relative;
  z-index: 2;
}

.hp-main-column article p a {
  color: rgba(255, 255, 255, 0.9); /* Semi-transparent white - OK for overlay text */
  text-decoration: none;
  font-size: var(--font-base);
  line-height: 1.5;
  display: block;
}

/* ========================================
   ASIDE - News & Tips (hp-aside)
   ======================================== */

aside.hp-aside {
  width: 100%;
  margin-top: var(--space-md);
}

/* News and Tips sections - card styling */
aside.hp-aside > section {
  background: var(--color-bg-white);
  border-radius: var(--space-md);
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
}

/* Aside headings */
aside.hp-aside h4 {
  margin: 0 0 var(--space-md) 0;
  font-size: var(--font-lg);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding-left: var(--space-md);
  border-left: 4px solid var(--color-secondary);
  color: var(--color-text);
}

/* First section (news) - orange border */
aside.hp-aside > section:first-child h4 {
  border-left-color: var(--color-secondary);
}

/* Second section (tips) - blue border */
aside.hp-aside > section:nth-child(2) h4 {
  border-left-color: var(--color-primary);
}

aside.hp-aside h4 a {
  color: var(--color-primary);
  text-decoration: none;
}

/* News/Tips lists */
aside.hp-aside ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* List items */
aside.hp-aside li {
  padding: var(--space-md) 0;
  border-bottom: 1px solid #f0f0f0;
}

aside.hp-aside li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

aside.hp-aside li:first-child {
  padding-top: 0;
}

/* News item titles */
aside.hp-aside li strong {
  display: block;
  margin-bottom: var(--space-sm);
}

aside.hp-aside li strong a {
  color: var(--color-primary);
  text-decoration: none;
  font-size: var(--font-lg);
  font-weight: 600;
  line-height: 1.4;
}

/* News descriptions */
aside.hp-aside li p {
  margin: 0;
  font-size: var(--font-base);
  color: var(--color-text-muted);
  line-height: 1.6;
}

aside.hp-aside li p strong {
  display: inline;
  font-weight: 600;
  color: var(--color-text);
}

aside.hp-aside li p a {
  color: var(--color-primary);
  text-decoration: none;
}

/* "More news/tips" link */
aside.hp-aside li:last-child a {
  display: block;
  text-align: center;
  color: var(--color-primary);
  font-weight: 600;
  font-size: var(--font-base);
  padding: var(--space-sm);
}
```

## File: css/components/dock.css
```css

```

## File: css/components/footer.css
```css
/* ========================================
   FOOTER COMPONENT
   ======================================== */
footer {
  width: 100%;
  background: var(--color-dark-blue);
  color: var(--color-bg-white);
  padding: var(--space-xl) var(--space-md);
  margin-top: var(--space-md);
}

/* Footer sections wrapper */
.footer-section-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

/* Individual footer sections */
footer section {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: var(--space-md);
}

footer section:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

/* Footer headings */
footer h5 {
  font-size: var(--font-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 var(--space-sm) 0;
  color: var(--color-bg-white);
}

/* Footer lists */
footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

/* Footer list items */
footer li {
  font-size: var(--font-base);
}

/* Footer links */
footer a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: var(--font-sm);
  transition: color 0.2s;
}

footer a:hover {
  color: var(--color-bg-white);
}

/* Certification image */
footer img#ypchlogo {
  max-width: 120px;
  height: auto;
}

/* Copyright wrapper */
.footer-copyright-wrapper {
  margin-top: var(--space-lg);
  padding-top: var(--space-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

/* Copyright text */
.footer-copyright-wrapper small,
.footer-copyright-wrapper small a {
  font-size: var(--font-sm);
  color: rgba(255, 255, 255, 0.6);
}
```

## File: css/components/gallery.css
```css
/* Gallery Component - Responsive Styles
 * Overrides desktop sidebar gallery layout for mobile
 * Full-width single column layout matching mockup
 */

/* Mobile-first: Remove fixed heights and convert to full-width stack */
.aside-gallery {
  width: 100%;
  margin-top: var(--space-md);
  background: var(--color-bg-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.aside-gallery h3 {
  font-size: 1.125rem; /* 18px */
  background-color: var(--color-primary);
  color: var(--color-bg-white);
  padding: var(--space-sm) var(--space-md);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 0;
}

.aside-gallery h4 {
  display: none; /* Hide boat name in gallery header, already shown above */
}

/* Override desktop's fixed inline height with important */
.aside-gallery .gallery {
  height: auto !important;
  max-height: none !important;
  overflow: visible;
  padding: var(--space-sm);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
  gap: var(--space-sm);
}

/* Gallery items - 2 column grid */
.aside-gallery .gallery a {
  display: block;
  width: 100%;
  margin: 0;
  border-radius: 4px;
  overflow: hidden;
}

.aside-gallery .gallery a img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

/* Hide the h5.hidden element inside gallery */
.aside-gallery .gallery h5.hidden {
  display: none;
}
```

## File: css/components/header.css
```css
/* Hide header completely on mobile - contact info available in footer */
header {
  display: none;
}
```

## File: css/components/hero.css
```css
/* ========================================
   HERO COMPONENT - Modern Maritime Editorial
   ======================================== */

/* Hero/Carousel Container */
#carousel {
  position: relative;
  width: 100%;
  height: 420px;
  margin-top: var(--navbar-height);
  overflow: hidden;
}

/* Individual slides with background images */
.claim {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Subtle overlay gradient for better text readability */
.claim::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    165deg,
    rgba(0, 40, 80, 0.2) 0%,
    rgba(0, 30, 60, 0.4) 50%,
    rgba(0, 20, 40, 0.7) 100%
  );
  pointer-events: none;
}

/* Slide background images */
.slide1 {
  background-image: url('../img/claim1.jpg');
}

.slide2 {
  background-image: url('../img/claim2.jpg');
}

.slide3 {
  background-image: url('../img/claim3.jpg');
}

/* Retina display support */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .slide1 {
    background-image: url('../img/claim12x.jpg');
  }
  
  .slide2 {
    background-image: url('../img/claim22x.jpg');
  }
  
  .slide3 {
    background-image: url('../img/claim32x.jpg');
  }
}

/* Modern text overlay - Editorial asymmetric layout */
.claim div {
  position: absolute;
  left: var(--space-md);
  right: var(--space-md);
  bottom: 80px;
  z-index: 2;
}

/* Modern H1 styling - Bold maritime editorial */
.claim div h1 {
  font-family: 'texgyreadventorbold', 'Arial CE', 'Helvetica CE', Arial, Helvetica, sans-serif;
  font-size: clamp(2rem, 8vw, 2.75rem);
  color: var(--color-bg-white);
  line-height: 1.1;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.2);
  margin: 0;
  letter-spacing: -0.02em;
}

/* Subtitle - Elegant refinement */
.claim div h1 span {
  display: block;
  font-family: 'texgyreadventorregular', 'Arial CE', 'Helvetica CE', Arial, Helvetica, sans-serif;
  font-size: clamp(1.125rem, 4vw, 1.375rem);
  color: rgba(255, 255, 255, 0.92);
  margin-top: var(--space-sm);
  letter-spacing: 0.02em;
  line-height: 1.3;
  font-weight: 400;
}

/* Decorative accent line */
.claim div::before {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: var(--color-secondary);
  margin-bottom: var(--space-md);
  border-radius: 2px;
}

/* Carousel Pager Container */
.carousel-pager {
  padding: var(--space-md);
  background: var(--color-bg-light);
}

/* Pager list */
.carousel-pager ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-sm);
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Individual pager dots */
.carousel-pager li {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(0, 106, 178, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Active pager dot */
.carousel-pager li.cycle-pager-active {
  width: 32px;
  border-radius: 4px;
  background: var(--color-primary);
}
```

## File: css/components/navigation.css
```css
/* ========================================
   NAVIGATION COMPONENT
   Mobile navigation with hamburger menu
   ======================================== */

.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  background: var(--color-bg-white);
  z-index: 999;
  padding: 0 var(--space-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Hamburger Menu Button - overrides inline display:none */
.hamburger-menu {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 5px;
  order: 2;
  z-index: 1001;
}

.hamburger-menu span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Hamburger animation when active */
.hamburger-menu.is-active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-menu.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.is-active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu overlay */
.main-nav > ul {
  position: fixed;
  top: var(--navbar-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-bg-white);
  flex-direction: column;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: var(--space-md);
  overflow-y: auto;
  z-index: 998;
  /* Animation properties */
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  display: flex;
  pointer-events: none;
}

/* Show menu when open */
.main-nav > ul.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}

.main-nav ul ul {
  display: none !important;
}

/* Logo positioning - move to start */
.main-nav > a[href="index.html"] {
  order: -1;
}

.main-nav img {
  height: 32px;
  width: auto;
}

/* Menu links */
.main-menu-item {
  display: block;
  color: var(--color-text);
  font-size: var(--font-base);
  font-weight: 600;
  text-decoration: none;
  padding: var(--space-md) var(--space-sm);
  white-space: nowrap;
}

/* Active/current page indicator */
.main-menu-item[href="index.html"] {
  color: var(--color-primary);
}
```

## File: css/components/search-form.css
```css
/* ========================================
   SEARCH FORM COMPONENT
   Split into atomic sub-components
   ======================================== */

@import url("search-form/tabs.css");
@import url("search-form/layout.css");
@import url("search-form/sumoselect/base.css");
@import url("search-form/sumoselect/multiple.css");
@import url("search-form/detailed.css");
@import url("search-form/submit.css");
```

## File: css/layout.css
```css
/* ========================================
   LAYOUT
   Core layout structures
   ======================================== */
.wrapper {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

#page-content,
.page-content-wrapper {
  width: 100%;
  max-width: 100%;
  padding: var(--space-md);
  background: var(--color-bg-light);
}

.main-column,
.hp-main-column {
  width: 100%;
  margin-bottom: var(--space-lg);
}

aside,
.hp-aside {
  width: 100%;
}
@media only screen and (min-width: 950px) {
  .hamburger-menu {
    display: none !important;
  }
}
```

## File: css/main.css
```css
/* ========================================
   YACHTNET MOBILE CSS
   Atomic architecture for multi-page refactor
   ======================================== */

/* Design tokens (colors, spacing, typography) */
@import url("tokens.css");

/* Base reset */
@import url("reset.css");

/* Typography system */
@import url("typography.css");

/* Layout foundations */
@import url("layout.css");

/* Components */
@import url("components/header.css");
@import url("components/navigation.css");
@import url("components/hero.css");
@import url("components/search-form.css");
@import url("components/content.css");
@import url("components/dock.css");
@import url("components/search-results/base.css");
@import url("components/search-results/specs.css");
@import url("components/search-results/cards.css");
@import url("components/search-results/status.css");
@import url("components/search-results/pagination.css");
@import url("components/search-results/layout.css");
@import url("components/gallery.css");
@import url("components/boat-detail.css");
@import url("components/footer.css");

/* Utility classes */
@import url("utilities.css");
```

## File: css/reset.css
```css
/* ========================================
   BASE RESET
   ======================================== */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%; /* 16px = 1rem */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family:
    "texgyreadventorregular", "Arial CE", "Helvetica CE", Arial, Helvetica,
    sans-serif;
  font-size: var(--font-base);
  line-height: 1.5;
  color: var(--color-text);
  margin: 0;
  padding: 0;
  min-width: 320px;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

input,
select,
textarea,
button {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}
```

## File: css/tokens.css
```css
/* ========================================
   DESIGN TOKENS
   Colors, spacing, typography scale
   ======================================== */
:root {
  /* Colors from main.min.css */
  --color-primary: #006ab2;
  --color-primary-dark: #005a9e;
  --color-secondary: #ee7f00;
  --color-secondary-dark: #d97100;
  --color-secondary-darker: #c26400;
  --color-text: #58585a;
  --color-text-light: #9c9e9f;
  --color-text-muted: #999999;
  --color-bg: #eceded;
  --color-bg-white: #ffffff;
  --color-bg-light: #f5f5f5;
  --color-bg-hover: #ebebeb;
  --color-bg-input: #fafafa;
  --color-bg-selected: rgba(0, 106, 178, 0.08);
  --color-border: #f0f0f0;
  --color-border-hover: #d0d0d0;
  --color-success: #449d09;
  --color-error: #e44959;
  --color-dark-blue: #1a3a5c; /* Footer, headings */

  /* Layout */
  --navbar-height: 70px;

  /* Spacing scale (16px base) */
  --space-xs: 0.25rem; /* 4px */
  --space-sm: 0.5rem; /* 8px */
  --space-md: 1rem; /* 16px */
  --space-lg: 1.5rem; /* 24px */
  --space-xl: 2rem; /* 32px */

  /* Typography */
  --font-xs: 0.75rem; /* 12px */
  --font-base: 1rem; /* 16px */
  --font-sm: 0.875rem; /* 14px */
  --font-lg: 1.125rem; /* 18px */
  --font-xl: 1.25rem; /* 20px */
  --font-2xl: 1.5rem; /* 24px */
}
```

## File: css/typography.css
```css
/* ========================================
   TYPOGRAPHY
   ======================================== */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family:
    "texgyreadventorregular", "Arial CE", "Helvetica CE", Arial, Helvetica,
    sans-serif;
  color: var(--color-primary);
  line-height: 1.2;
  margin: 0 0 var(--space-md) 0;
  font-weight: normal;
}

h1 { font-size: var(--font-2xl); }
h2 { font-size: var(--font-xl); }
h3 { font-size: var(--font-lg); }
h4 { font-size: var(--font-base); }
h5,
h6 { font-size: var(--font-sm); }

p {
  margin: 0 0 var(--space-md) 0;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

strong,
b {
  font-family:
    "texgyreadventorbold", "Arial CE", "Helvetica CE", Arial, Helvetica,
    sans-serif;
  font-weight: normal;
}

em,
i {
  font-family:
    "texgyreadventoritalic", "Arial CE", "Helvetica CE", Arial, Helvetica,
    sans-serif;
}

ul,
ol {
  margin: 0 0 var(--space-md) 0;
  padding-left: var(--space-lg);
}

li {
  margin-bottom: var(--space-xs);
}
```

## File: css/utilities.css
```css
/* ========================================
   UTILITY CLASSES
   ======================================== */
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-muted { color: var(--color-text-light); }

.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-light { background-color: var(--color-bg); }

/* Page content padding adjustment for dock */
body:not(:has(.dock.is-empty)) #page-content {
  padding-bottom: 80px;
}
```
