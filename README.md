# RemWaste - Skip Hire Selection Interface

A modern web application for selecting and managing skip hire services. Built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design for all screen sizes
- Dark/Light theme support
- Interactive skip selection interface
- Detailed skip information display
- Image preview with fullscreen capability
- Theme persistence using localStorage
- Mobile-friendly interface with optimized touch interactions
- Interactive image enlargement for detailed skip viewing

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## Environment Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd remwaste
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with the following variables:

```env
VITE_API_BASE_URL=https://app.wewantwaste.co.uk/api
VITE_IMAGE_BASE_URL=https://yozbrydxdlcxghkphhtq.supabase.co
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Deployment

### Vercel Deployment

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

### Environment Variables in Production

When deploying to production, make sure to set the environment variables in your hosting platform:

- For Vercel: Add them in the project settings under "Environment Variables"
- For Netlify: Add them in Site settings > Build & deploy > Environment
- For other platforms: Follow their respective documentation for environment variable configuration

## Project Structure

```
src/
├── components/
│   ├── cards/          # Card components for skip display
│   ├── common/         # Reusable UI components
│   └── layout/         # Layout components
├── config/             # Configuration files
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── App.tsx            # Main application component
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Axios for API calls
- React Icons

## Customization

### Theme Colors

Theme colors can be customized in `src/index.css`:

```css
@theme {
  --color-primary: #000;
  --color-secondary: #fff;
  --color-dark-background: #121212;
  --color-lighter-dark-background: #1c1c1c;
}
```

### Custom Sizes

Custom size variables are defined in `src/index.css`:

```css
@theme {
  --size-card-height: 450px;
  --size-theme-switcher-width: 60px;
  --size-tooltip-max-width: 200px;
  --z-tooltip: 9999;
  --z-fullscreen: 99999;
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Technical Documentation

### Development Approach

#### 1. Technology Stack Selection

- **Vite + React + TypeScript**: Chosen for optimal SPA development with fast HMR and type safety
- **React 19**: Latest version for improved performance and features
- **Tailwind CSS**: For rapid UI development and consistent styling
- **ESLint + Prettier**: Using Vite's built-in configuration for code quality

#### 2. Project Architecture

##### Error Handling

- Implemented global error boundary for graceful error handling
- Axios interceptors for API error handling

##### API Integration

- Axios instance configuration with base URL and interceptors
- Environment-based configuration using .env
- Request/Response interceptors for global handling

##### Component Architecture

1. **Card Component**

   - Responsive design with hover effects
   - Fullscreen image preview with click-to-enlarge functionality
   - Dynamic pricing display
   - Tag system for metadata
   - Mobile-optimized touch interactions
   - Image enlargement for detailed skip viewing

2. **CardList Component**

   - Pagination implementation
   - Skeleton loading states
   - Responsive grid layout
   - Selection management
   - Mobile-friendly grid adjustments

3. **Layout System**
   - Responsive container
   - Theme switching
   - Navigation structure

##### State Management

- Local state for UI interactions
- Persistent theme preference using localStorage

##### Performance Optimizations

1. **Data Loading**
   - Suspense boundaries
   - Skeleton loaders
   - Pagination to prevent memory issues

##### Theme Implementation

- Tailwind's dark mode configuration
- CSS variables for theming
- Smooth transitions
- Persistent theme preference

### Development Workflow

1. **Setup Phase**

   - Project initialization with Vite
   - Dependencies configuration
   - Environment setup
   - Basic project structure

2. **Core Implementation**

   - API configuration
   - Error handling
   - Theme system
   - Base components

3. **Feature Development**

   - Card system
   - List management
   - Selection handling
   - Image optimization

4. **Polish Phase**
   - UI/UX improvements
   - Documentation
   - Deployment preparation
