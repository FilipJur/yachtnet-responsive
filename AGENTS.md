---
name: yachtnet-responsive
description: CSS-only responsive retrofit for fixed-width YachtNet.cz (< 950px breakpoint)
---

# Build Agent Instructions - CSS Audit Integration

## CRITICAL: Proactive CSS Auditing Required

When working on this project, you MUST automatically invoke the @css-audit subagent via Task tool when making substantial CSS changes.

### When to Invoke @css-audit

**ALWAYS invoke after:**
- Creating new files in `src/css/components/`
- Modifying existing component files with >50 lines changed
- Adding >10 new CSS selectors to any file
- Before marking any CSS-related task "complete" or "done"
- When `git status` shows substantial CSS changes: >5 files OR >100 total lines

**SKIP audit for:**
- Single property micro-edits (e.g., "zero this padding", "change this color")
- Emergency hotfixes
- Code explicitly marked "TODO", "WIP", "TEMP", or "EXPERIMENTAL"
- Changes only to `tokens.css` (our source of truth)

### How to Invoke

Use the Task tool to invoke @css-audit:

```
Task: Run @css-audit after recent CSS changes
Focus areas:
- Token violations (hardcoded colors/spacing)
- Component bloat (>300 lines limit)
- Specificity creep (>0,3,0)
- Pattern duplication across files
- Safe autofix opportunities

Context: [Brief description of what you changed]
```

### Post-Audit Actions

After @css-audit completes:

1. **Review the report** - Check severity levels (Critical/Warning/Info)
2. **Apply autofixes** - Safe fixes are automatically applied (token replacements, sorting)
3. **Report critical issues** - If manual fixes needed, tell user immediately
4. **Rebuild CSS** - Always run `npm run css:build` after audit
5. **Confirm completion** - Only mark task "complete" after audit passes

### Example Workflow

```
User: "Style the contact form like the search form"

You:
1. Read existing search-form.css patterns
2. Create contact-form.css with similar structure
3. Detect: New file created + 120 lines added
4. Invoke: @css-audit (via Task tool)
5. Audit reports: 
   ✅ Auto-fixed: 24px → var(--space-lg)
   ⚠️  Warning: 320 lines (slightly over limit)
6. Report to user: "Created contact form. Audit found 320 lines (limit 300). 
   Should I split into smaller components?"
7. User: "Yes, split it"
8. You: Split into layout.css + form.css
9. Invoke: @css-audit again
10. Audit: ✅ All checks passed
11. Run: npm run css:build
12. Report: "Contact form complete. CSS audit passed."
```

### Current CSS Health

**Immediate attention needed:**
- `search-form.css`: 589 lines (MUST split into components/search-form/*.css)

**Approaching limits:**
- `content.css`: 316 lines (watch for growth)

**All other components**: <200 lines (healthy)

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
│   ├── dock.css
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
- **Navigation**: `.main-nav`, `.main-menu-item`, `.hamburger-menu`

## Development

```bash
npm run dev        # Live Server + CSS watch
npm run css:build  # Build once (Lightning CSS bundles imports)
```

**Source**: `src/css/main.css` (atomic imports) → **Output**: `css/responsive-mobile.css` (bundled)

## JavaScript

**File**: `js/responsive.js`

Mobile menu toggle functionality for hamburger navigation:
- **Auto-injects hamburger button** if not present in HTML (no manual HTML changes needed)
- Toggles `.is-open` class on menu
- Toggles `.is-active` class on hamburger button
- Closes menu when clicking outside
- Accessible with ARIA attributes

## HTML Changes Log

**⚠️ MANDATORY: Every HTML modification must be documented here ⚠️**

### index.html

| Date | Change | Line(s) | Description |
|------|--------|---------|-------------|
| Initial | Desktop CSS media query | 23 | Added `media="(min-width: 950px)"` to desktop CSS link to block it on mobile |
| Initial | Body attribute | 77 | Added `data-mobile-responsive` attribute to body |
| 2024-03-05 | Star rating fix | ~10727 | Added `<span style="width:93%" class="star-rating"></span>` inside `.star-rating-wrapper` for proper rating display |
| 2024-03-05 | Hamburger menu | ~97 | ~~Added hamburger button HTML~~ **DEPRECATED** - Now auto-injected by `js/responsive.js` |
| 2024-03-05 | Responsive JS | ~28 | Added `<script src="js/responsive.js" defer></script>` before Google Tag Manager |
| 2024-03-05 | Detailed search toggle | ~10726 | Styled existing link for both states ("podrobné vyhledávání" and "základní vyhledávání"); preserves desktop JS toggle behavior |
| 2025-03-06 | Hamburger auto-injection | ~97 | **REMOVED** hardcoded hamburger button; now dynamically created by `js/responsive.js` if not present |

## Implementation Strategy

1. **Desktop CSS blocked** for mobile viewports via media query
2. **Clean foundation**: 16px base font, predictable rem units
3. **Atomic CSS**: Modular files for easy multi-page refactoring
4. **Design tokens**: All colors/spacing via CSS custom properties
5. **Mobile-first**: Components built for mobile, will enhance for larger screens if needed

## CSS Atomicity Enforcement

**Agent**: @css-audit (subagent located at `.opencode/agents/css-audit.md`)

### When to Auto-Invoke Audit

**Proactively run @css-audit after:**
- Creating new component files in `src/css/components/`
- Major refactoring of existing components (>50 lines changed)
- Adding new CSS rules to any file (>10 new selectors)
- Before marking any CSS-related task "complete"
- When `git status` shows substantial CSS changes (>5 files or >100 lines)

**Skip audit for:**
- Micro-edits (single property changes like "zero this padding")
- Emergency hotfixes
- Experimental/WIP code explicitly marked as temporary

### Audit Behavior

**Automatic fixes (safe):**
- Replace hardcoded px with token variables (16px → var(--space-md))
- Replace hardcoded colors with tokens (#006ab2 → var(--color-primary))
- Sort CSS properties logically
- Remove empty rulesets

**Manual fixes required (report only):**
- Component files >300 lines (requires splitting)
- Selector specificity >0,3,0 (requires refactoring)
- Pattern duplication across files (requires extraction)
- Dead code detection (requires HTML verification)

### Retrofit-Specific Exceptions

SumoSelect library overrides are **EXPECTED** to have higher specificity. Do not flag these as violations:
- `.SumoSelect > .optWrapper.multiple > .options > li > span > i`
- `.SumoSelect > .CaptionCont:has(> label)`

Requirement: Must include comment `/* SumoSelect library override */`

### Severity Levels

- **CRITICAL** (block task completion): Token violations, component >300 lines
- **WARNING** (address soon): Specificity issues, magic numbers without comments
- **INFO** (nice to have): Pattern duplication suggestions

## Dependencies

jQuery, Fancybox, SumoSelect (don't break existing functionality)

## Current Status

✅ Atomic CSS architecture implemented  
✅ 16px base font with predictable rem units  
✅ Design tokens extracted from original CSS  
✅ Desktop CSS blocked for mobile viewports  
✅ Basic mobile layout structure in place  
✅ Hamburger menu with animations  
✅ Responsive JavaScript for menu toggle  
✅ Star rating properly implemented  
✅ Search form with pill tabs and styled SumoSelect  
✅ Detailed search toggle (hidden by default)  

🔄 Next: Component refinements → multi-page rollout
