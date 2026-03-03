---
name: yachtnet-responsive
description: CSS-only responsive retrofit for fixed-width YachtNet.cz (< 950px breakpoint)
---

# YachtNet.cz Responsive Retrofit

## Scope

Make YachtNet.cz responsive for viewports < 950px via CSS overrides only. Desktop experience (> 950px) must remain unchanged.

**Source**: SiteSucker download from https://www.yachtnet.cz  
**Original**: SSR PHP (static HTML output only)  
**Deliverable**: CSS file + viewport meta changes for manual deployment

## Site Structure

```
yachtnet.cz/
├── /                           (index.html)
├── /plachetnice/              (search results)
├── /pronajem-lodi-v-*/        (Croatia, Italy, Greece)
├── /pronajem-lode-*.html      (boat details, dynamic IDs)
├── /kapitanske-kurzy/         (courses + 5 subpages)
├── /prodej-lodi/
├── /pro-jachtare/             (+ insurance, weather, links)
├── /kontakt/
├── /o-nas/, /novinky/, /tipy/
├── /porovnani-lodi/, /chartrovky/
└── /pronajem-ricnich-lodi/
```

**Priority pages**: index.html, /plachetnice/, boat detail pages, kontakt.html

## Technical Constraints

- Target: `@media (max-width: 949px)` only
- CSS overrides via `@layer` (8 layers defined)
- Original CSS files untouched
- Browser support: Chrome 105+, Safari 15.4+, Firefox 121+

## CSS Architecture

```css
@layer reset, containers, navigation, layouts, components, tables, footer, utilities;
```

**Enabled features**: `@layer`, `@container`, `:has()`, nesting (Lightning CSS), `clamp()`

## Key Classes

**Containers**: `.page-content-wrapper`, `header div`, `.main-nav`, `.claim`, `.footer-section-wrapper`  
**Layout**: `.main-column`, `.hp-main-column`, `.search-main-column`, `aside`, `.hp-aside`  
**Search**: `.search-form-wrapper`, `.search-form-left-column`, `.search-form-right-column`, `.search-result-table`  

**Palette**: `#006ab2` (primary), `#ee7f00` (secondary), `#eceded` (bg), `#58585a` (text)

## Development

```bash
npm run dev        # Live Server + CSS watch
npm run css:build  # Build once
```

**Source**: `src/css/main.css` → **Output**: `css/responsive-mobile.css`

## Modified Files

16 HTML files updated with:
- Viewport: `width=device-width, initial-scale=1.0`
- CSS link: `<link rel="stylesheet" href="css/responsive-mobile.css">`

## Dependencies

jQuery, Fancybox, SumoSelect (don't break existing functionality)
