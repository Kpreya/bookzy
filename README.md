# Bookzie - Second-hand Book E-commerce Platform

A comprehensive e-commerce platform for buying and selling second-hand books, built with React and Tailwind CSS.

## Project Overview

Bookzie is a modern, responsive e-commerce website that allows users to browse, search, and purchase second-hand books. The platform includes features such as real-time price comparison, advanced filtering options, and a seamless shopping experience.

## Features

- Responsive design that works on all devices
- Advanced search functionality with filters
- Real-time price comparison tool
- User authentication system
- Shopping cart functionality
- Product categorization and filtering
- Detailed product pages with reviews
- Admin dashboard for product management

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (for icons)
- Vite (build tool)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── App.tsx             # Main application component
```

## Component Documentation

### Navbar Component
The navigation bar provides:
- Brand logo and name
- Search functionality
- Cart and user account links
- Responsive mobile menu

### Home Page
Features:
- Hero section with call-to-action
- Featured categories grid
- Popular books showcase
- Why choose us section

### Footer Component
Includes:
- Quick links
- Customer service links
- Social media links
- Copyright information

## Styling

The project uses Tailwind CSS for styling, following a consistent design system:

- Colors:
  - Primary: Indigo-600
  - Secondary: Purple-600
  - Text: Gray-900
  - Background: White/Gray-50

- Typography:
  - Headings: Font-bold
  - Body: Regular weight
  - Consistent spacing using Tailwind's spacing scale

## Best Practices

1. Component Organization:
   - Each component is in its own file
   - Components are organized by feature/page
   - Shared components in components/ directory

2. TypeScript Usage:
   - Strict type checking enabled
   - Interface definitions for props
   - Type safety for API responses

3. Performance Optimization:
   - React.memo for expensive components
   - Lazy loading for routes
   - Image optimization

4. Accessibility:
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation support

## Deployment

The project is deployed on Netlify. To deploy your own instance:

1. Create a Netlify account
2. Connect your repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.