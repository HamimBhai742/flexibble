# Flexibble Frontend

A modern, responsive portfolio showcase platform built with React and Tailwind CSS, inspired by Dribbble's design aesthetic.

## 🚀 Features

### Core Functionality
- **Project Showcase**: Browse and discover creative projects
- **User Profiles**: Comprehensive user profile pages with project galleries
- **Project Upload**: Full-featured upload modal with drag & drop functionality
- **Project Details**: Detailed project view with modal overlay
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)

### UI/UX Features
- **Modern Navigation**: Sticky navbar with scroll effects
- **Category Filtering**: Filter projects by categories
- **Search Functionality**: Search through projects
- **Interactive Modals**: Project details and upload modals
- **Smooth Animations**: Hover effects and transitions
- **Touch-Friendly**: Mobile-optimized interactions

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Latest React with concurrent features
- **React Router DOM 7.9.4** - Client-side routing
- **Tailwind CSS 4.1.15** - Utility-first CSS framework
- **DaisyUI 5.3.7** - Tailwind CSS component library
- **React Icons 5.5.0** - Icon library

### Build Tools
- **Vite 7.1.7** - Fast build tool and dev server
- **ESLint 9.36.0** - Code linting
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

### Package Manager
- **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   └── Navbar.jsx          # Main navigation component
│   ├── Project/
│   │   ├── ProjectCard.jsx     # Project card component
│   │   └── ProjectCardDetails.jsx # Project details modal
│   └── Upload/
│       └── Upload.jsx          # Project upload modal
├── pages/
│   ├── Home/
│   │   └── Home.jsx           # Homepage with project grid
│   └── Profile/
│       └── Profile.jsx        # User profile page
├── layout/
│   └── Root.jsx              # Root layout component
├── routes/
│   └── routes.ts             # Application routing
├── json/
│   ├── categories.js         # Project categories data
│   ├── projects.js           # Sample projects data
│   └── userProjects.js       # User projects data
├── assets/
│   └── react.svg            # Static assets
├── App.jsx                  # Main app component
├── main.jsx                 # Application entry point
└── index.css               # Global styles with Tailwind
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dribble
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#8B5CF6)
- **Secondary**: Pink (#EC4899)
- **Accent**: Gray shades
- **Background**: Light gray (#F9FAFB)

### Typography
- **Font**: System fonts with fallbacks
- **Headings**: Bold weights (600-900)
- **Body**: Regular weight (400-500)

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Rounded full with hover effects
- **Modals**: Backdrop blur with smooth animations
- **Forms**: Clean inputs with focus states

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: 1280px+

## 🔧 Configuration

### Vite Configuration
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Tailwind CSS
- Configured with Tailwind CSS v4
- Custom utilities for scrollbar hiding
- DaisyUI for additional components

## 🌟 Key Features Implementation

### Navigation
- Sticky navbar with scroll detection
- Mobile-responsive hamburger menu
- Search functionality
- Upload button integration

### Project Showcase
- Grid layout with responsive columns
- Category filtering system
- Project cards with hover effects
- Modal-based project details

### User Profiles
- Comprehensive profile information
- Project gallery with tabs
- Statistics display
- Social links and contact info

### Upload System
- Drag & drop file upload
- Form validation
- Image preview
- Category selection

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Netlify/Vercel
The project includes a `_redirects` file for SPA routing support on Netlify.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from Dribbble
- Icons from React Icons
- UI components from DaisyUI
- Images from Unsplash

---

**Built with ❤️ using React and Tailwind CSS**
