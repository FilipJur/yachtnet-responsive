# CSS Design System Comparison: Responsive vs Desktop

## Executive Summary

| Aspect | Desktop CSS | Responsive CSS | Status |
|--------|-------------|----------------|--------|
| **Base Font Size** | 13px (62.5% html) | 16px (100% html) | ⚠️ Different |
| **Colors** | Hardcoded hex | CSS tokens | ✅ Aligned |
| **Border Radius** | 0 (sharp corners) | 0 (sharp corners) | ✅ Aligned |
| **Typography Scale** | 13px base, rem units | 16px base, rem units | ⚠️ Different |
| **Layout System** | Float-based | Flexbox/Grid | ❌ Different |
| **Icons** | Sprite PNG | Inline SVG | ❌ Different |

---

## 1. TOKENS & FOUNDATION

### Colors - ALIGNED ✅

| Color | Desktop | Responsive Token | Match |
|-------|---------|------------------|-------|
| Primary | `#006ab2` | `var(--color-primary)` | ✅ Yes |
| Secondary | `#ee7f00` | `var(--color-secondary)` | ✅ Yes |
| Text | `#58585a` | `var(--color-text)` | ✅ Yes |
| Background | `#eceded` | `var(--color-bg)` | ✅ Yes |
| White | `#fff` | `var(--color-bg-white)` | ✅ Yes |
| Success | `#449d09` | `var(--color-success)` | ✅ Yes |
| Error | `#e44959` | `var(--color-error)` | ✅ Yes |

**Additional Responsive Tokens** (not in desktop):
- `--color-primary-dark: #005a9e`
- `--color-secondary-dark: #d97100`
- `--color-dark-blue: #1a3a5c`
- `--color-text-light: #9c9e9f`
- `--color-text-muted: #999999`
- `--color-border: #f0f0f0`
- `--color-border-hover: #d0d0d0`

### Typography - DIFFERENT ⚠️

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Base Font Size** | 13px (1.3rem) | 16px (1rem) | ⚠️ **CRITICAL** |
| **HTML Font Size** | 62.5% | 100% | ⚠️ **CRITICAL** |
| **Body Line Height** | 1.4 | 1.5 | ⚠️ Different |
| **h1 Size** | Not defined | 24px (1.5rem) | ❌ N/A |
| **h2 Size** | 28px (2.8rem) | 18px (1.125rem) | ❌ **MAJOR** |
| **h2 Line Height** | 1 | 1.2 | ⚠️ Different |
| **h4 Size** | 15px (1.5rem) | 16px (1rem) | ⚠️ Different |
| **Strong Size** | 105% | Same as parent | ⚠️ Different |

**Impact**: The 16px base creates larger text overall, affecting all component spacing calculations.

### Spacing - DIFFERENT ⚠️

| Spacing | Desktop | Responsive Token | Pixel Equiv |
|---------|---------|------------------|-------------|
| XS | 4px | `var(--space-xs)` | 4px |
| SM | 8px | `var(--space-sm)` | 8px |
| MD | 16px | `var(--space-md)` | 16px |
| LG | 24px | `var(--space-lg)` | 24px |
| XL | 32px | `var(--space-xl)` | 32px |

**Note**: Desktop uses various hardcoded values (10px, 13px, 15px, 17px, 20px) while responsive uses consistent 4px grid.

---

## 2. COMPONENTS

### Header - PARTIAL ⚠️

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Background** | `#006ab2` | `var(--color-primary)` | ✅ Aligned |
| **Height** | 35px | 35px | ✅ Aligned |
| **Line Height** | 35px | 35px | ✅ Aligned |
| **Text Color** | `#fff` | `var(--color-bg-white)` | ✅ Aligned |
| **Min Width** | 950px | None (100%) | ⚠️ Different |
| **Content Width** | 950px centered | 100% with padding | ⚠️ Different |
| **Logo** | Visible | Visible | ✅ Aligned |
| **Contact Info** | Full display | Hidden (`display: none`) | ❌ Missing |
| **Phone Link** | Present | Present | ✅ Aligned |

**Missing in Responsive**:
- Full header navigation (`.header-nav`)
- Extended contact information

### Navigation - DIFFERENT ❌

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Position** | Static, in flow | Fixed top | ❌ **MAJOR** |
| **Height** | 77px | 70px | ⚠️ Different |
| **Background** | White (default) | `var(--color-bg-white)` | ✅ Aligned |
| **Text Transform** | Uppercase | Normal | ❌ **MAJOR** |
| **Layout** | Horizontal float | Hamburger menu | ❌ **MAJOR** |
| **Hover Effect** | Blue underline (6px) | None (mobile) | ⚠️ Different |
| **Active State** | Blue underline | Blue text color | ⚠️ Different |
| **Font Size** | 16px (1.6rem) | 16px (1rem) | ⚠️ Different actual size |

**Responsive Additions**:
- Hamburger menu button (not in desktop)
- Full-screen overlay navigation
- Logo repositioning

### Hero/Carousel - DIFFERENT ❌

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Height** | Not fixed | 420px | ❌ Different |
| **Margin Top** | 0 | 70px (navbar) | ⚠️ Different |
| **Text Overlay** | Varies | Gradient + shadow | ❌ **MAJOR** |
| **h1 Size** | Desktop default | `clamp(2rem, 8vw, 2.75rem)` | ❌ **MAJOR** |
| **Subtitle** | Not present | Present with styling | ❌ Added |
| **Accent Line** | Not present | Orange 60px × 3px | ❌ Added |
| **Pager Dots** | Default | Square 8px | ⚠️ Different |
| **Active Pager** | Default | 32px wide | ⚠️ Different |

**Responsive Enhancements** (not in desktop):
- Gradient overlay for text readability
- Text shadows
- Decorative accent line
- Retina image support

### Search Form Tabs - PARTIAL ⚠️

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Layout** | Horizontal list | Flex wrap (pills) | ⚠️ Different |
| **Background (inactive)** | `#eceded` | `#eceded` | ✅ Aligned |
| **Background (active)** | `#006ab2` | `#006ab2` | ✅ Aligned |
| **Text Color (inactive)** | `#58585a` | `#58585a` | ✅ Aligned |
| **Text Color (active)** | `#fff` | `#fff` | ✅ Aligned |
| **Border Radius** | 0 | 0 | ✅ Aligned |
| **Text Transform** | Uppercase | Uppercase | ✅ Aligned |
| **Font Size** | 13px | 13px (hardcoded) | ✅ Aligned |
| **Padding** | Not specified | 8px 16px | ⚠️ Added |

**Issues in Responsive**:
- Hardcoded values instead of tokens:
  - `padding: 8px 16px` (should use `--space-sm` and `--space-md`)
  - `font-size: 13px` (no token, but matches desktop)
  - Colors hardcoded instead of tokenized

### Search Form Layout - DIFFERENT ❌

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Container Background** | White | `#fff` (hardcoded) | ⚠️ Hardcoded |
| **Container Border** | 1px `#ddd` | 1px `#ddd` (hardcoded) | ⚠️ Hardcoded |
| **Container Padding** | Not specified | 16px | ⚠️ Added |
| **Layout** | 2-column float | CSS Grid auto-fit | ❌ **MAJOR** |
| **Column Gap** | Fixed | `var(--space-md)` | ⚠️ Different |
| **Input Height** | Not specified | 40px | ⚠️ Added |

**Issues in Responsive**:
- Hardcoded colors in `layout.css`:
  - `background: #fff` (line 7)
  - `border: 1px solid #ddd` (line 11)
  - `padding: 16px` (line 9)
- Hardcoded in `tabs.css`:
  - All colors and spacing

### SumoSelect Styling - ALIGNED ✅

| Element | Desktop | Responsive | Status |
|---------|---------|------------|-------|
| **Height** | ~40px | 40px | ✅ Aligned |
| **Border Radius** | 0 | 0 | ✅ Aligned |
| **Border Color** | `#f0f0f0` | `var(--color-border)` | ✅ Aligned |
| **Checkboxes** | Custom styled | Custom styled | ✅ Aligned |
| **Multi-select buttons** | OK/Cancel | OK/Cancel (hidden by default) | ⚠️ Different |

### Content Sections - DIFFERENT ❌

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Section Background** | `#eceded` or white | `var(--color-bg-white)` | ⚠️ Different |
| **Section Border Radius** | 0 | 0 | ✅ Aligned |
| **Section Padding** | Varies | `var(--space-lg)` (24px) | ⚠️ Different |
| **h2 Display** | Hidden (sections 2,3) | Visible with left border | ❌ **MAJOR** |
| **h2 Styling** | Not present | Left border accent | ❌ Added |
| **Border Accent** | Not present | 4px solid (orange/blue) | ❌ Added |

**Responsive Pattern** (not in desktop):
```css
.hp-main-column > section h2 {
  font-size: var(--font-lg);
  font-weight: 800;
  color: var(--color-dark-blue);
  padding-left: var(--space-md);
  border-left: var(--space-xs) solid;
}
```

### Article Cards ("Mohlo by vás zajímat") - DIFFERENT ❌

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Layout** | 2-column float | CSS Grid auto-fit | ❌ **MAJOR** |
| **Width** | 304px fixed | 100% / auto-fit | ❌ **MAJOR** |
| **Card Height** | 249px (36+3+46+196) | 180px min | ❌ **MAJOR** |
| **h3 Styling** | Blue bg, white text, uppercase | White text, text shadow | ❌ **MAJOR** |
| **h3 Height** | 36px | Auto | ⚠️ Different |
| **Image Position** | Sprite background | Full cover background | ❌ **MAJOR** |
| **Text Position** | Below image | Overlay at bottom | ❌ **MAJOR** |

**Desktop Structure**:
```
┌─────────────────┐
│  Blue Header    │ ← h3, uppercase, centered
├─────────────────┤
│                 │
│     Image       │ ← Sprite background (187px)
│                 │
├─────────────────┤
│   Link text     │ ← Gray background
└─────────────────┘
```

**Responsive Structure**:
```
┌─────────────────┐
│                 │
│    Image        │ ← Full cover
│                 │
│  White text     │ ← Overlay with gradient
│  with shadow    │
└─────────────────┘
```

### Aside/Sidebar (News & Tips) - DIFFERENT ❌

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **h4 Background** | `#006ab2` | White | ❌ **MAJOR** |
| **h4 Text Color** | White | `var(--color-text)` | ❌ **MAJOR** |
| **h4 Text Transform** | Uppercase | Uppercase | ✅ Aligned |
| **h4 Border** | 14px transparent right | 4px left accent | ❌ **MAJOR** |
| **Icon Position** | Absolute right | Not present | ❌ Missing |
| **List Height** | 431px fixed | Auto | ⚠️ Different |
| **List Padding** | 15px 10px | 0 | ⚠️ Different |
| **Card Style** | None | White card with border | ❌ **MAJOR** |

**Desktop h4**:
```css
background-color: #006ab2;
border-right: solid 14px transparent;
color: #fff;
height: 26px;
```

**Responsive h4**:
```css
background: transparent;
border-left: var(--space-xs) solid var(--color-secondary);
color: var(--color-text);
```

### Footer - PARTIAL ⚠️

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Background** | `#eceded` | `var(--color-bg)` | ✅ Aligned |
| **Min Width** | 950px | None | ⚠️ Different |
| **Layout** | Table-row | Block | ❌ **MAJOR** |
| **Padding** | 20px 0 | `var(--space-xl)` (32px) | ⚠️ Different |
| **Content Width** | 950px centered | 100% with padding | ⚠️ Different |
| **h5 Styling** | Not specified | Bold, uppercase, primary color | ⚠️ Added |
| **Link Hover** | Not specified | Color change | ⚠️ Added |
| **Copyright Background** | Not specified | `var(--color-primary)` | ⚠️ Added |

### Search Results - DIFFERENT ❌

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Layout** | HTML Table | CSS Grid cards | ❌ **MAJOR** |
| **Row Structure** | 5 columns | Grid areas | ❌ **MAJOR** |
| **Border** | 1px top `#eceded` | None (cards have borders) | ⚠️ Different |
| **Cell Padding** | 17px 0 | `var(--space-md)` | ⚠️ Different |
| **Boat Name Size** | 20px (2rem) | `var(--font-lg)` (18px) | ⚠️ Different |
| **Location Icon** | Sprite PNG | Inline SVG | ❌ Different |
| **Specs Icons** | Sprite PNG | Inline SVG | ❌ Different |
| **Status Icons** | Sprite PNG | Inline SVG | ❌ Different |

### Boat Detail - PARTIAL ⚠️

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Section Background** | White | `var(--color-bg-white)` | ✅ Aligned |
| **Section Border Radius** | 0 | 0 | ✅ Aligned |
| **h3 Background** | `#006ab2` | `var(--color-primary)` | ✅ Aligned |
| **h3 Text Color** | White | White | ✅ Aligned |
| **h3 Text Transform** | Not specified | Uppercase | ⚠️ Added |
| **Tech Specs Layout** | 3-column float | 2-4 column grid | ❌ **MAJOR** |
| **Condition List** | Float-based | Flex/Block | ❌ **MAJOR** |
| **Price Display** | Desktop layout | Card style | ❌ **MAJOR** |
| **Form Inputs** | Default | 44px min-height | ⚠️ Different |

### Gallery - PARTIAL ⚠️

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **h3 Background** | `#006ab2` | `var(--color-primary)` | ✅ Aligned |
| **h3 Text Transform** | Uppercase | Uppercase | ✅ Aligned |
| **Layout** | Fixed height | Auto height grid | ❌ **MAJOR** |
| **Grid** | Not specified | Auto-fit, min 160px | ❌ Added |
| **Image Aspect** | Original | 4:3 forced | ⚠️ Different |

---

## 3. TECHNICAL DIFFERENCES

### Icon System - DIFFERENT ❌

| Aspect | Desktop | Responsive |
|--------|---------|------------|
| **Source** | `icon-sprite.png` | Inline SVG data URIs |
| **Format** | PNG (25px × 612px) | SVG |
| **Retina Support** | `icon-sprite2x.png` | Built-in SVG |
| **Icons** | 20+ icons in sprite | Custom SVG per use case |
| **Maintenance** | Single file | Scattered in CSS |

**Example Desktop**:
```css
background-image: url("../img/icon-sprite.png");
background-position: 0 -297px;
```

**Example Responsive**:
```css
background: url("data:image/svg+xml,%3Csvg...%3E") center/contain no-repeat;
```

### Layout System - DIFFERENT ❌

| Aspect | Desktop | Responsive |
|--------|---------|------------|
| **Primary Method** | Floats (`float: left`) | Flexbox + Grid |
| **Clearfix** | Extensive use | None needed |
| **Widths** | Fixed pixel values | Percentage + tokens |
| **Container** | 950px centered | 100% with padding |
| **Responsive** | None | Mobile-first approach |

### Shadows - ALIGNED ✅

| Element | Desktop | Responsive | Status |
|---------|---------|------------|--------|
| **Usage** | Minimal | Minimal | ✅ Aligned |
| **Values** | None | `0 -2px 10px rgba(0,0,0,0.2)` (dock only) | ⚠️ Added |

---

## 4. HARD-CODED VALUES IN RESPONSIVE

### Search Form Components (Need Tokenization)

| File | Line | Hardcoded Value | Should Be |
|------|------|-----------------|-----------|
| `tabs.css` | 19 | `padding: 8px 16px` | `var(--space-sm) var(--space-md)` |
| `tabs.css` | 21 | `font-size: 13px` | Consider token |
| `tabs.css` | 23 | `color: #58585a` | `var(--color-text)` |
| `tabs.css` | 24 | `background: #eceded` | `var(--color-bg)` |
| `tabs.css` | 36 | `background: #ddd` | Consider token |
| `tabs.css` | 37 | `color: #006ab2` | `var(--color-primary)` |
| `tabs.css` | 40 | `background: #006ab2` | `var(--color-primary)` |
| `tabs.css` | 41 | `color: #fff` | `var(--color-bg-white)` |
| `tabs.css` | 42 | `border-color: #006ab2` | `var(--color-primary)` |
| `layout.css` | 7 | `background: #fff` | `var(--color-bg-white)` |
| `layout.css` | 9 | `padding: 16px` | `var(--space-md)` |
| `layout.css` | 11 | `border: 1px solid #ddd` | Consider token |
| `layout.css` | 25 | `border-left: 4px solid` | `var(--space-xs)` |

### Total Token Violations: 13

---

## 5. COMPONENT RATINGS

| Component | Rating | Notes |
|-----------|--------|-------|
| **Tokens** | ✅ Aligned | All desktop colors tokenized |
| **Typography** | ⚠️ Partial | Different base size, heading scales differ |
| **Header** | ⚠️ Partial | Contact info hidden, otherwise matches |
| **Navigation** | ❌ Different | Mobile hamburger vs desktop horizontal |
| **Hero** | ❌ Different | Enhanced with modern styling |
| **Search Form** | ⚠️ Partial | 13 hardcoded values need fixing |
| **Content Sections** | ❌ Different | Added headings, card styling |
| **Article Cards** | ❌ Different | Complete redesign for mobile |
| **Sidebar/Aside** | ❌ Different | Card-based vs blue headers |
| **Footer** | ⚠️ Partial | Added styling, same colors |
| **Search Results** | ❌ Different | Table→Grid transformation |
| **Boat Detail** | ⚠️ Partial | Same colors, different layout |
| **Gallery** | ⚠️ Partial | Same colors, grid layout |

---

## 6. RECOMMENDATIONS

### Immediate Fixes (Critical)

1. **Tokenize hardcoded values in search-form components**
   - 13 violations across tabs.css and layout.css
   - Replace colors with `var(--color-*)`
   - Replace spacing with `var(--space-*)`

### Alignment Decisions Needed

1. **Typography Scale**
   - Desktop: 13px base, h2=28px
   - Responsive: 16px base, h2=18px
   - Decision: Keep 16px for mobile readability? Or reduce h2 to match proportion?

2. **Article Card Design**
   - Desktop: Blue header, gray body, sprite image
   - Responsive: Full-bleed image with text overlay
   - Decision: Keep modern mobile design or align closer to desktop?

3. **Sidebar Headers**
   - Desktop: Blue background, white text
   - Responsive: White background, colored left border
   - Decision: This is a reasonable mobile adaptation

### Documentation Needs

1. **Icon System Migration**
   - Document why SVG replaced sprite
   - Note: Sprite still used for star ratings (correctly)

2. **Layout System Change**
   - Document float→grid migration
   - Note: Desktop layout preserved above 950px

3. **Mobile-First Additions**
   - Document hamburger menu pattern
   - Document card-based layouts
   - Document touch target sizing (44px)

---

## 7. VERIFICATION CHECKLIST

- [x] All desktop colors mapped to tokens
- [x] No border-radius in responsive (matches desktop)
- [ ] Typography scale documented
- [ ] Hardcoded values tokenized
- [ ] Icon system migration documented
- [ ] Touch targets meet 44px minimum
- [ ] Focus states implemented
- [ ] Reduced motion support added
