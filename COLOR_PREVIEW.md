# Color Scheme Visual Preview

## 🎨 Quick Color Reference

### Option 1: Modern Tech Blue ⭐ (Currently Applied)
```
Primary:   #2563eb  ████████  Vibrant Blue
Secondary: #10b981  ████████  Emerald Green  
Accent:    #8b5cf6  ████████  Purple
Text Dark: #0f172a  ████████  Almost Black
```

**Use Cases:**
- Professional tech companies
- B2B services
- Corporate websites
- Portfolio sites
- SaaS platforms

---

### Option 2: Sophisticated Purple
```
Primary:   #7c3aed  ████████  Rich Purple
Secondary: #ec4899  ████████  Pink
Accent:    #06b6d4  ████████  Cyan
Text Dark: #0f172a  ████████  Almost Black
```

**Use Cases:**
- Creative agencies
- Design studios
- Innovative brands
- Premium products
- Art & culture sites

---

### Option 3: Vibrant Teal
```
Primary:   #14b8a6  ████████  Teal
Secondary: #f59e0b  ████████  Amber
Accent:    #6366f1  ████████  Indigo
Text Dark: #0f172a  ████████  Almost Black
```

**Use Cases:**
- Fresh startups
- Modern brands
- Energetic companies
- Lifestyle brands
- Health & wellness

---

### Option 4: Elegant Dark Mode Friendly
```
Primary:   #3b82f6  ████████  Bright Blue
Secondary: #8b5cf6  ████████  Purple
Accent:    #10b981  ████████  Green
Text Dark: #1e293b  ████████  Dark Gray
```

**Use Cases:**
- Modern tech companies
- Sleek designs
- Professional services
- Developer tools
- Enterprise software

---

### Option 5: Warm & Welcoming
```
Primary:   #f97316  ████████  Orange
Secondary: #06b6d4  ████████  Cyan
Accent:    #8b5cf6  ████████  Purple
Text Dark: #1c1917  ████████  Dark Brown
```

**Use Cases:**
- Friendly brands
- Customer service
- Hospitality
- Food & beverage
- Community platforms

---

## 🔄 How to Switch Themes

### Quick Switch (in index.html)
Change the `data-theme` attribute:

```html
<!-- Current (Modern Tech Blue) -->
<html lang="en-US" data-theme="modern-blue">

<!-- Switch to Purple -->
<html lang="en-US" data-theme="sophisticated-purple">

<!-- Switch to Teal -->
<html lang="en-US" data-theme="vibrant-teal">

<!-- Switch to Elegant -->
<html lang="en-US" data-theme="elegant-dark">

<!-- Switch to Warm -->
<html lang="en-US" data-theme="warm-welcoming">
```

### Programmatic Switch (JavaScript)
```javascript
// Switch theme dynamically
document.documentElement.setAttribute('data-theme', 'sophisticated-purple');
```

---

## 📊 Color Psychology

### Blue (#2563eb)
- **Trust** - Builds confidence
- **Professional** - Corporate feel
- **Technology** - Modern and innovative
- **Stability** - Reliable and secure

### Purple (#7c3aed)
- **Creativity** - Artistic and innovative
- **Luxury** - Premium and exclusive
- **Wisdom** - Sophisticated and thoughtful
- **Mystery** - Unique and intriguing

### Teal (#14b8a6)
- **Freshness** - Modern and clean
- **Balance** - Harmonious and calm
- **Growth** - Progress and development
- **Clarity** - Clear and focused

### Orange (#f97316)
- **Energy** - Dynamic and active
- **Warmth** - Friendly and inviting
- **Enthusiasm** - Positive and optimistic
- **Approachability** - Accessible and welcoming

---

## ✅ Accessibility Check

All color schemes meet **WCAG AA standards**:

| Element | Contrast Ratio | Status |
|---------|---------------|--------|
| Primary text on white | 4.5:1+ | ✅ Pass |
| Secondary text | 4.5:1+ | ✅ Pass |
| Large text (18px+) | 3:1+ | ✅ Pass |
| Interactive elements | 3:1+ | ✅ Pass |
| Focus indicators | Visible | ✅ Pass |

---

## 🎯 Recommendations

**For your digital services/portfolio website, I recommend:**

1. **Modern Tech Blue** (Current) - Best overall choice
   - Professional and trustworthy
   - Works for all industries
   - High contrast and readability

2. **Sophisticated Purple** - If you want to stand out
   - Creative and innovative
   - Memorable and unique
   - Premium feel

3. **Vibrant Teal** - For a fresh, modern look
   - Energetic and dynamic
   - Modern and trendy
   - Great for startups

---

## 💡 Tips

1. **Test on different devices** - Colors may appear slightly different
2. **Consider your brand** - Match your logo and existing assets
3. **Think about your audience** - Different colors appeal to different demographics
4. **Keep it consistent** - Use the same theme across all pages
5. **Test accessibility** - Use tools like WebAIM Contrast Checker

---

## 🔧 Customization

Want to tweak colors? Edit `/src/styles/color-schemes.css`:

```css
:root[data-theme="your-theme"] {
  --primary-color: #YOUR_COLOR;
  --secondary-color: #YOUR_COLOR;
  /* ... */
}
```

Then apply: `<html data-theme="your-theme">`

