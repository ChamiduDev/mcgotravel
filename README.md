# McGo - Modern Travel Website

A beautiful, responsive travel website built with Next.js, featuring smooth animations, modern UI/UX design, and a fully functional booking experience.

## 🌟 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Scroll-triggered animations with Intersection Observer API
- **Dynamic Navbar** - Glassy background effect on scroll, smooth section navigation
- **Hero Section** - Eye-catching hero with gradient text effects
- **Category Section** - Service showcase with hover animations
- **Top Selling Destinations** - Interactive destination cards
- **Booking Steps** - Step-by-step booking process with trip cards
- **Kinetic Testimonials** - Infinite scrolling testimonials in opposite directions
- **About Page** - Project information and company attribution
- **Contact Section** - Beautiful contact form with company information
- **Modern Footer** - Comprehensive site navigation and social links

## 🛠️ Tech Stack

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Volkhov & Inter Fonts** - Custom typography
- **Next.js Font Optimization** - Optimized web fonts
- **Intersection Observer API** - Scroll-based animations

## 📁 Project Structure

```
mcgotravel/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with font configuration
│   │   ├── page.tsx          # Main page component
│   │   └── globals.css       # Global styles and keyframes
│   └── components/
│       ├── Navbar.tsx        # Fixed navigation bar
│       ├── Hero.tsx          # Hero section
│       ├── Category.tsx      # Service categories
│       ├── TopSelling.tsx    # Top selling destinations
│       ├── BookingSteps.tsx  # Booking process section
│       ├── KineticTestimonials.tsx  # Scrolling testimonials
│       ├── About.tsx         # About section
│       ├── Contact.tsx       # Contact section
│       ├── Footer.tsx        # Footer component
│       └── ScrollAnimation.tsx  # Reusable animation wrapper
└── public/
    ├── logogo.png           # Logo
    ├── girl.png             # Hero image
    ├── Decore.png           # Hero decoration
    └── *.png                # Various icons and images
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mcgotravel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Color Scheme**: Orange and blue gradient theme
- **Typography**: Volkhov for headings, Inter for body text
- **Animations**: Fade-in and slide-up effects on scroll
- **Hover Effects**: Card lifting, shadow enhancement, color transitions
- **Mobile Menu**: Slide-down navigation for mobile devices

## 🔗 Navigation

The navbar includes smooth scrolling to sections:
- **Destinations** - Category section
- **Hotel** - Category section
- **Flights** - Top selling destinations
- **Bookings** - Booking steps section
- **About** - About page
- **Login/Sign Up** - Contact section

## 📦 Key Components

### ScrollAnimation
Reusable wrapper component that applies fade-in and slide-up animations when elements enter the viewport.

### Kinetic Testimonials
Infinitely scrolling testimonials with two rows moving in opposite directions for a dynamic effect.

### Dynamic Navbar
Navbar background becomes glassy on scroll while maintaining transparency at the top of the page.

## 🌐 Deployment

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/hello-world)

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📄 License

This project is a sample web design created by **MC Digital Innovate Software Company**.

## 👨‍💻 Created By

**MC Digital Innovate Software Company**

Visit: [https://mcdi.vercel.app](https://mcdi.vercel.app)

---

**Note**: This is a sample web design showcasing modern web development techniques and responsive design principles.
