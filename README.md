# Musician's Website

A modern, responsive musician's website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎵 **Home Page** - Dynamic hero section with featured albums
- 👤 **About Page** - Artist biography and achievements
- 🎸 **Music Page** - Discography with streaming platform links
- 🎥 **Videos Page** - Music videos and live performances
- 🎤 **Tour Page** - Upcoming tour dates and ticket information
- 📧 **Contact Page** - Contact form and social media links
- 📱 **Responsive Design** - Mobile-friendly with Tailwind CSS
- 🎨 **Modern UI** - Clean design with smooth transitions

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies (already done):
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/app
  /about         - About page
  /contact       - Contact page
  /music         - Music/discography page
  /tour          - Tour dates page
  /videos        - Videos page
  layout.tsx     - Root layout with navigation
  page.tsx       - Home page
/components
  Navigation.tsx - Navigation component
  Footer.tsx     - Footer component
/public          - Static assets
```

## Customization

### Update Artist Information

1. **Site Title**: Edit `app/layout.tsx` metadata
2. **Artist Name**: Update in `components/Navigation.tsx` and `components/Footer.tsx`
3. **Content**: Edit individual page files in the `/app` directory

### Styling

The site uses Tailwind CSS for styling. Colors and themes can be customized in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles

### Add Images

Place images in the `/public` directory and reference them using:
```tsx
<Image src="/your-image.jpg" alt="Description" width={500} height={300} />
```

## Tailwind CSS Cheatsheet (for Bootstrap Users)

Common Bootstrap to Tailwind conversions:

- `container` → `container mx-auto px-4`
- `row` → `flex` or `grid`
- `col-*` → `grid-cols-*` with `grid`
- `btn` → `px-* py-* rounded bg-*`
- `text-center` → `text-center`
- `mt-3` → `mt-3` or `mt-4` (similar spacing)
- `d-flex` → `flex`
- `justify-content-*` → `justify-*`
- `align-items-*` → `items-*`

## Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

