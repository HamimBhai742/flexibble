# Flexibble

A modern, responsive portfolio showcase platform built with React and Tailwind CSS, inspired by Dribbble's design aesthetic.

🌐 **Live Demo**: [https://flexibble-742.netlify.app](https://flexibble-742.netlify.app)

## ✨ Features

- **Project Showcase** - Browse and discover creative projects with grid layout
- **User Profiles** - Comprehensive profile pages with project galleries
- **Project Upload** - Full-featured upload modal with drag & drop
- **Project Details** - Detailed project view with modal overlay
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern Navigation** - Sticky navbar with smooth interactions
- **Interactive Modals** - Project details and upload modals

## 🛠️ Tech Stack

- **React 19.1.1** - Latest React with concurrent features
- **React Router DOM 7.9.4** - Client-side routing
- **Tailwind CSS 4.1.15** - Utility-first CSS framework
- **DaisyUI 5.3.7** - Component library
- **React Icons 5.5.0** - Icon library
- **Vite 7.1.7** - Fast build tool and dev server

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/Navbar.jsx
│   ├── Project/
│   │   ├── ProjectCard.jsx
│   │   └── ProjectCardDetails.jsx
│   └── Upload/Upload.jsx
├── pages/
│   ├── Home/Home.jsx
│   └── Profile/Profile.jsx
├── layout/Root.jsx
├── routes/routes.ts
├── json/
│   ├── categories.js
│   ├── projects.js
│   └── userProjects.js
└── main.jsx
```

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm dev
   ```

3. **Open browser**
   ```
   http://localhost:5173
   ```

## 📜 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🎨 Design System

- **Colors**: Purple primary, pink secondary, gray accents
- **Typography**: System fonts with bold headings
- **Components**: Rounded cards, smooth animations, backdrop blur modals
- **Responsive**: Mobile-first design with breakpoints

## 🚀 Deployment

```bash
pnpm build
```

Deploy the `dist` folder to any static hosting service. Includes `_redirects` file for SPA routing.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/name`)
5. Open Pull Request

---

**Built with ❤️ using React and Tailwind CSS**
