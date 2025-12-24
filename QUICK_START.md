# Quick Start Guide

## 🚀 Installation & Running

```bash
# Navigate to the React project
cd webinnova-react

# Install dependencies
npm install

# Start development server
npm start
```

The website will open at `http://localhost:3000`

## 📋 Next Steps

### 1. Convert Page Content

Each page component in `src/pages/` currently has placeholder content. You need to:

1. Open the original PHP/HTML file (e.g., `index.php`, `about-us.php`, etc.)
2. Copy the HTML content (between `<body>` and `</body>`, excluding header/footer)
3. Convert to JSX:
   - `class` → `className`
   - `href="page.html"` → `<Link to="/page">`
   - `onclick` → `onClick`
   - Inline styles → React style objects or CSS classes
4. Replace PHP includes with React component imports
5. Convert PHP variables to React state/props

### 2. Example Conversion

**Before (PHP/HTML):**
```html
<a href="about-us.php">About Us</a>
<div class="hero-section">
  <?php include 'feedback/connection.php'; ?>
</div>
```

**After (React/JSX):**
```jsx
<Link to="/about-us">About Us</Link>
<div className="hero-section">
  {/* Use API call or component instead */}
</div>
```

### 3. Set Up Backend API

For forms and database operations, you need a backend API. Options:

**Option A: Keep PHP Backend**
- Keep your PHP files in a separate backend folder
- Create API endpoints (e.g., `api/contact.php`)
- Update `src/services/api.js` to point to your PHP API

**Option B: Node.js/Express Backend**
- Create a new Express.js server
- Set up routes for forms and data
- Update API_BASE_URL in `src/services/api.js`

**Option C: Third-party Services**
- Use Formspree for contact forms
- Use EmailJS for email sending
- Use Firebase/Supabase for database

### 4. Environment Variables

Create a `.env` file in the root:

```env
REACT_APP_API_URL=http://localhost:3001/api
```

### 5. Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder that you can deploy to any static hosting (Netlify, Vercel, etc.)

## 🎨 Design Notes

- All original CSS is preserved
- Design should look identical to the PHP version
- Mobile menu includes logo and phone number
- All assets are in `public/assets/`

## ✅ Checklist

- [ ] Convert Home page content
- [ ] Convert About Us page
- [ ] Convert all service pages
- [ ] Convert Portfolio page
- [ ] Convert Contact page with form handling
- [ ] Convert FAQ page
- [ ] Set up backend API for forms
- [ ] Test all links and navigation
- [ ] Test mobile menu
- [ ] Test forms submission
- [ ] Test on different browsers
- [ ] Test responsive design

## 🐛 Common Issues

**CSS not loading?**
- Check that assets are in `public/assets/`
- Verify CSS import paths in `src/index.css`

**Images not showing?**
- Use `/assets/images/` path (starts with `/`)
- Images should be in `public/assets/images/`

**Swiper not working?**
- Check that Swiper script loads in `App.js`
- Verify Swiper initialization in page components

**Forms not submitting?**
- Set up backend API first
- Update `src/services/api.js` with correct endpoints

## 📞 Need Help?

Contact: Info@webinnova.co.uk

