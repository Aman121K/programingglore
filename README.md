# Webinnova React.js Website

This is a React.js conversion of the Webinnova PHP website, maintaining the same design and functionality.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd webinnova-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
webinnova-react/
├── public/
│   ├── assets/          # All CSS, images, and JS files
│   └── index.html       # Main HTML template
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.js    # Header component
│   │   ├── Footer.js    # Footer component
│   │   └── MobileMenu.js # Mobile menu component
│   ├── pages/           # Page components
│   │   ├── Home.js
│   │   ├── AboutUs.js
│   │   ├── Services.js
│   │   └── ...
│   ├── services/        # API services
│   ├── utils/           # Utility functions
│   ├── App.js           # Main app component with routing
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
└── package.json
```

## 📝 Conversion Status

### ✅ Completed
- [x] React project setup
- [x] Routing configuration
- [x] Header component
- [x] Footer component
- [x] Mobile menu component
- [x] Assets copied
- [x] CSS imports configured

### 🔄 In Progress / To Do
- [ ] Convert Home page content from index.php
- [ ] Convert About Us page from about-us.php
- [ ] Convert all HTML pages to React components:
  - [ ] Services
  - [ ] Portfolio
  - [ ] Contact
  - [ ] FAQ
  - [ ] App Development
  - [ ] Web Development
  - [ ] Web Designing
  - [ ] Ecommerce
  - [ ] SEO
  - [ ] Social Media Marketing
  - [ ] Social Media Post Creation

## 🔧 How to Convert Pages

### Step 1: Copy HTML Content
Copy the HTML content from the original PHP/HTML file (between `<body>` and `</body>` tags, excluding header/footer).

### Step 2: Convert to JSX
- Replace `class` with `className`
- Replace `href="page.html"` with `<Link to="/page">`
- Replace `href="page.php"` with `<Link to="/page">`
- Replace inline `onclick` with React event handlers
- Convert PHP includes to React component imports
- Replace PHP variables with React state/props

### Step 3: Handle Dynamic Content
- Replace PHP database queries with API calls or state
- Convert PHP loops to `.map()` functions
- Replace PHP conditionals with JavaScript conditionals

### Step 4: Add useEffect for Scripts
If the page uses jQuery plugins or other scripts, initialize them in `useEffect`:

```javascript
useEffect(() => {
  // Initialize scripts here
  if (window.jQuery) {
    // jQuery code
  }
}, []);
```

## 📧 Form Handling

Forms should be converted to use React state and API calls. Create API endpoints or use a service like:
- Formspree
- EmailJS
- Your own backend API

Example:
```javascript
const [formData, setFormData] = useState({});

const handleSubmit = async (e) => {
  e.preventDefault();
  // Send form data to API
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};
```

## 🎨 Styling

All CSS files are imported in `src/index.css`. The original design is maintained through:
- Bootstrap CSS
- Custom CSS files
- Component-specific styles

## 🔌 API Integration

For backend functionality (forms, database), you'll need to:
1. Create API endpoints (Node.js/Express, PHP, etc.)
2. Update `src/services/api.js` with API calls
3. Replace PHP includes with API calls

## 📱 Mobile Menu

The mobile menu is already implemented and functional. It includes:
- Logo and close button
- Navigation links
- Phone number at the bottom

## 🚀 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📄 License

Same as the original website.

## 🤝 Contributing

When converting pages:
1. Maintain the exact same design
2. Ensure all links work correctly
3. Test on mobile devices
4. Verify all forms submit correctly
5. Check that all images load properly

## 📞 Support

For issues or questions, contact: Info@webinnova.co.uk

