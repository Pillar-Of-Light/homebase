# Homebase - Artist/Gospel Ministry Portfolio Template

A modern, single-page portfolio website template built with React, featuring a clean green and gold color scheme perfect for musicians, artists, and faith-based ministries. Designed for showcasing music, visuals, writings, and connecting with your community.

## Features

- 🎨 Modern, responsive design with green primary and gold accent colors
- 🎵 Sections for Music, Visuals, Writings, and Beliefs
- 📝 Contact form (Communion section)
- ✨ Smooth animations and hover effects
- 📱 Mobile-friendly layout
- 🎭 Easy to customize content and styling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Basic knowledge of React and JavaScript

## Installation

1. **Clone or download this repository**
   ```bash
   git clone [your-repo-url]
   cd homebase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Personal Information

**Update the site name and tagline:**
- Edit `/src/components/layout/header.jsx` - Change "zonkleberg" and tagline
- Edit `/src/components/layout/footer.jsx` - Update copyright text
- Edit `/src/components/sections/landing.jsx` - Customize hero text and intro

### 2. Color Scheme

**Modify colors in `/src/styles/variables.css`:**
```css
--color-green-primary: #22c55e;  /* Main accent color */
--color-green-dark: #16a34a;     /* Secondary green */
--color-gold: #ffd700;            /* Gold accents */
```

### 3. Content Sections

**Landing Section** (`/src/components/sections/landing.jsx`)
- Update hero title and description
- Customize CTA button text and link

**Beliefs Section** (`/src/components/sections/doctrine.jsx`)
- Edit the `principles` array to add/modify your core beliefs
- Update the quote box with your own statement

**Music Section** (`/src/components/sections/music.jsx`)
- Edit the `releases` array to add your music releases
- Update platform links (Bandcamp, SoundCloud, Spotify)

**Visuals Section** (`/src/components/sections/visuals.jsx`)
- Edit the `visualWorks` array to showcase your visual art
- Add actual images by replacing placeholder divs

**Writings Section** (`/src/components/sections/writings.jsx`)
- Edit the `writings` array to feature your blog posts or articles
- Update links to your actual content

**Contact Form** (`/src/components/sections/communion.jsx`)
- Integrate with your email service (currently logs to console)
- Update social media links at the bottom

### 4. Navigation

Edit `/src/components/layout/header.jsx` to:
- Add/remove navigation links
- Change section IDs (make sure they match section IDs in content)

### 5. Images and Media

- Add your images to `/public` or `/src/assets`
- Update placeholder content with real images in visual works
- Consider adding a favicon in `/public`

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## Deployment

This site can be deployed to:
- **Netlify**: Connect your GitHub repo and deploy automatically
- **Vercel**: Import project and deploy with one click
- **GitHub Pages**: Run `npm run build` and deploy the `build` folder

### Quick Deploy to Netlify:
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `build`

## File Structure

```
homebase/
├── public/              # Static files
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # Main content sections
│   │   └── ui/          # Reusable UI components
│   ├── styles/          # CSS files
│   │   ├── variables.css  # Color scheme and design tokens
│   │   └── globals.css    # Global styles
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
└── package.json
```

## Customization Tips

1. **Keep it personal**: Replace all placeholder content with your own story
2. **Update regularly**: Add new music, visuals, and writings as you create
3. **Test responsively**: Check on mobile devices and different screen sizes
4. **Optimize images**: Compress images before adding them to keep load times fast
5. **Connect forms**: Integrate the contact form with a service like Formspree or EmailJS

## Support

For React-specific questions, see [React documentation](https://reactjs.org/)

For Create React App help, see [CRA documentation](https://create-react-app.dev/)

## License

This template is free to use and customize for your own projects.
