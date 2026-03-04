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

- Target: Mobile viewports < 950px only
- Desktop CSS blocked via `media="(min-width: 950px)"` on link tag
- Original CSS files untouched (separate responsive CSS file)
- Browser support: Chrome 105+, Safari 15.4+, Firefox 121+
- Base font size: 16px (1rem = 16px for predictable calculations)

## CSS Architecture (Atomic)

```
src/css/
├── tokens.css          # Design tokens (colors, spacing, typography)
├── reset.css           # Base reset with 16px foundation
├── typography.css      # Text styles
├── layout.css          # Core layout structures
├── components/         # Modular components
│   ├── header.css
│   ├── navigation.css
│   ├── hero.css
│   ├── search-form.css
│   ├── content.css
│   └── footer.css
├── utilities.css       # Helper classes
└── main.css            # Imports all modules
```

**Design Tokens (CSS Custom Properties)**:
```css
--color-primary: #006ab2
--color-secondary: #ee7f00
--color-text: #58585a
--color-bg: #eceded
--space-md: 1rem      /* 16px */
--font-base: 1rem     /* 16px */
```

**Key Classes**:
- **Containers**: `.wrapper`, `.page-content-wrapper`, `.main-column`, `aside`
- **Layout**: `.hp-main-column`, `.search-main-column`, `.hp-aside`
- **Search**: `.search-form-wrapper`, `.search-form-tabs`, `.SlectBox`
- **Navigation**: `.main-nav`, `.main-menu-item`

## Development

```bash
npm run dev        # Live Server + CSS watch
npm run css:build  # Build once (Lightning CSS bundles imports)
```

**Source**: `src/css/main.css` (atomic imports) → **Output**: `css/responsive-mobile.css` (bundled)

## Modified Files

**index.html**:
- Added `media="(min-width: 950px)"` to desktop CSS link
- Added `data-mobile-responsive` attribute to body

## Implementation Strategy

1. **Desktop CSS blocked** for mobile viewports via media query
2. **Clean foundation**: 16px base font, predictable rem units
3. **Atomic CSS**: Modular files for easy multi-page refactoring
4. **Design tokens**: All colors/spacing via CSS custom properties
5. **Mobile-first**: Components built for mobile, will enhance for larger screens if needed

## Dependencies

jQuery, Fancybox, SumoSelect (don't break existing functionality)

## Current Status

✅ Atomic CSS architecture implemented
✅ 16px base font with predictable rem units
✅ Design tokens extracted from original CSS
✅ Desktop CSS blocked for mobile viewports
✅ Basic mobile layout structure in place

🔄 Next: UI mockup reference → component refinements → multi-page rollout
