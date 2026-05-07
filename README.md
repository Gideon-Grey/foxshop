# FoxShop — simple marketplace template FSD

Modern frontend e-commerce application built with **Next.js 16**, **React 19** and **Redux Toolkit**.  
The project simulates a real online marketplace with categories, product catalog, cart system and promo sections.

---

## Demo

Live: https://your-deploy-url.vercel.app

---

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Redux Toolkit
- SCSS Modules
- Next Image Optimization

---

## Features

### 🛍 Product system

- Product catalog by categories
- Mock product data (no backend required)
- Promo products with discounts
- Dynamic product pages (`/product/[id]`)

### Cart system

- Add / remove products
- Quantity control
- Cart drawer (sidebar UI)
- Total price calculation

### Search

- Live product filtering by title

### UI / UX

- Responsive design (mobile-first support)
- Promo blocks between sections
- Lazy-loaded images
- LCP optimization with Next/Image

### Performance

- Image optimization via `next/image`
- Lazy loading for product cards
- Code splitting via App Router

---

## Responsive Design

- Mobile (≤480px)
- Tablet (≤768px)
- Desktop (≥1024px)

---

## Architecture

The project follows a **modular feature-based structure**:
src/
├── app/
├── entities/
├── features/
├── widgets/
├── shared/

- **entities** → business models (Product, Cart)
- **features** → logic (search, cart actions)
- **widgets** → UI blocks (ProductList, Header, CartDrawer)
- **shared** → utilities and configs

---

## UI Highlights

- Promo blocks between product sections
- Category-based layout on homepage
- Sticky cart drawer
- Optimized image rendering

---

## Installation

```bash
git clone https://github.com/your-repo/foxshop.git
cd foxshop
npm install
npm run dev
```
