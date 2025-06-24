# Auction Galary

A modern React + Vite web application for browsing, bidding, and favoriting unique auction items. The app features a clean UI, real-time notifications, and a responsive design using Tailwind CSS and DaisyUI.

## Overview

Auction Galary allows users to:
- Browse a curated list of rare and collectible items
- Place bids on items (UI only, no backend)
- Add items to their favorites list
- View total bid amount for favorite items
- Enjoy a visually appealing, responsive interface

## Features
- **Auction Items Table:** Browse items, see current bids, and time left
- **Favorites:** Add/remove items to a favorites list with notifications
- **Banner & Navbar:** Modern landing section and navigation
- **Footer:** Simple, branded footer
- **Responsive Design:** Works on desktop and mobile
- **Notifications:** Toasts for adding/removing favorites

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint the Code

```bash
npm run lint
```

## Project Structure

```
public/
  auction.json         # Auction items data
  Banner-min.jpg       # Banner image
  Group 3466088.png    # Avatar image
  vite.svg             # Favicon
src/
  App.jsx              # Main app logic
  Components/
    Auction Items/
      AuctionItems.jsx     # Table of auction items
      FevourateItem.jsx    # Favorite item card
      singleItem.jsx       # Single auction item row
    Baner/Baner.jsx        # Banner section
    Footer/Footer.jsx      # Footer
    Navbar/Navbar.jsx      # Navigation bar
  App.css              # Main styles (Tailwind, DaisyUI, custom)
  index.css            # (empty, reserved for global styles)
  main.jsx             # App entry point
index.html             # Main HTML file
vite.config.js         # Vite configuration
eslint.config.js       # ESLint configuration
```

## Data Model

Auction items are loaded from `public/auction.json`:

```json
[
  {
    "id": 1,
    "title": "Vintage Leica M3 Camera",
    "description": "A classic Leica M3 35mm film camera, a favorite among collectors and professional photographers.",
    "currentBidPrice": 2850,
    "timeLeft": "2 Days left",
    "bidsCount": 12,
    "image": "https://..."
  },
  ...
]
```

## Technologies Used
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [react-hot-toast](https://react-hot-toast.com/)
- [ESLint](https://eslint.org/)

## Credits
- UI images and icons are for demo purposes only.
- Developed as an assignment project.
