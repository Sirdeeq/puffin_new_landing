# Puffin Group Ltd - Next.js Technical Specification

## Project Overview
Convert the existing static HTML website to a modern Next.js React application with enhanced SEO capabilities and optimized performance.

## Technical Requirements

### 1. Environment Setup

#### Node.js Version
```
node: >=16.14.0
npm: >=8.0.0
```

#### Next.js Configuration (next.config.js)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'], // Add any external image domains
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
```

#### Package.json Dependencies
```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "next-seo": "^6.0.0",
    "react-hook-form": "^7.43.0",
    "framer-motion": "^10.0.0",
    "sharp": "^0.32.0"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "typescript": "latest"
  }
}
```

### 2. File Structure Implementation

#### Public Directory Structure
```
public/
├── assets/
│   ├── css/
│   │   ├── bootstrap.css
│   │   ├── style.css
│   │   └── responsive.css
│   ├── images/
│   ├── icons/
│   ├── photos/
│   ├── partners/
│   ├── subs/
│   ├── team/
│   └── videos/
└── favicon.ico
```

#### Source Directory Structure
```
src/
├── app/
│   ├── layout.js
│   ├── page.js (homepage)
│   ├── about/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── subsidiaries/
│   │   ├── puffin-agro/
│   │   │   └── page.js
│   │   ├── buildwise/
│   │   │   └── page.js
│   │   ├── puffin-energy/
│   │   │   └── page.js
│   │   ├── laser-shield/
│   │   │   └── page.js
│   │   ├── maz-logistics/
│   │   │   └── page.js
│   │   └── swingtide/
│   │       └── page.js
│   ├── projects/
│   │   └── page.js
│   ├── testimonial/
│   │   └── page.js
│   ├── faq/
│   │   └── page.js
│   ├── privacy/
│   │   └── page.js
│   ├── news-detail/
│   │   └── page.js
│   ├── service-detail/
│   │   └── page.js
│   ├── coming-soon/
│   │   └── page.js
│   └── not-found/
│       └── page.js
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   └── MobileMenu.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   └── Team.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Accordion.jsx
│       ├── Card.jsx
│       └── Form.jsx
├── styles/
│   ├── globals.css
│   └── components.css
└── utils/
    ├── seo.js
    ├── data.js
    └── helpers.js
```

### 3. SEO Implementation

#### SEO Component Structure
Create a reusable SEO component:

```jsx
// src/components/SEO.jsx
import Head from 'next/head';
import { usePathname } from 'next/navigation';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website'
}) {
  const pathname = usePathname();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://puffingroupltd.com';
  const fullUrl = url || `${siteUrl}${pathname}`;
  
  const defaultTitle = 'Puffin Group Ltd - Building a Smarter Africa';
  const defaultDescription = 'A diversified conglomerate delivering smart solutions across agriculture, construction, energy, logistics, consulting, and trade.';
  const defaultImage = '/assets/images/favicon.png';
  
  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || 'Puffin Group, Agriculture, Construction, Energy, Logistics, Consulting'} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Puffin Group Ltd" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Head>
  );
}
```

#### Structured Data Implementation
Add JSON-LD structured data for better search engine understanding:

```jsx
// src/utils/structuredData.js
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Puffin Group Ltd',
  'url': 'https://puffingroupltd.com',
  'logo': 'https://puffingroupltd.com/assets/headerLogo2_1.png',
  'sameAs': [
    'https://facebook.com/puffingroupltd',
    'https://twitter.com/puffingroupltd',
    'https://instagram.com/puffingroupltd'
  ],
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+2347074404041',
    'contactType': 'customer service',
    'areaServed': 'NG',
    'availableLanguage': 'en'
  }
};

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url
  }))
});
```

### 4. Image Optimization

#### Next.js Image Component Implementation
Replace all standard `<img>` tags with Next.js optimized images:

```jsx
// Before (HTML)
<img src="assets/images/resource/about-7.jpg" alt="About Puffin" />

// After (Next.js)
import Image from 'next/image';

<Image
  src="/assets/images/resource/about-7.jpg"
  alt="About Puffin"
  width={600}
  height={400}
  quality={85}
  priority={true} // For above-the-fold images
  style={{
    maxWidth: '100%',
    height: 'auto'
  }}
/>
```

#### Responsive Image Implementation
For responsive images with different sizes:

```jsx
<Image
  src="/assets/images/resource/about-7.jpg"
  alt="About Puffin"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  quality={85}
  style={{
    objectFit: 'cover'
  }}
/>
```

### 5. Component Architecture

#### Layout Component
```jsx
// src/app/layout.js
import '../styles/globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

#### Reusable UI Components
```jsx
// src/components/ui/Button.jsx
import Link from 'next/link';

export default function Button({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'medium',
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50'
  };
  
  const sizeClasses = {
    small: 'h-8 px-3 text-sm',
    medium: 'h-10 px-4 py-2',
    large: 'h-12 px-6 text-lg'
  };
  
  const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
  
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
```

### 6. Form Handling

#### Contact Form Implementation
```jsx
// src/components/sections/Contact.jsx
'use client';

import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Submit form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        reset();
        // Show success message
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle network error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register('firstName', { required: 'First name is required' })}
            className={`w-full px-4 py-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
        </div>
        
        <div>
          <input
            type="text"
            placeholder="Last Name"
            {...register('lastName', { required: 'Last name is required' })}
            className={`w-full px-4 py-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
        </div>
      </div>
      
      <div>
        <input
          type="email"
          placeholder="Email Address"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      
      <div>
        <input
          type="text"
          placeholder="Purpose"
          {...register('purpose', { required: 'Purpose is required' })}
          className={`w-full px-4 py-2 border rounded-md ${errors.purpose ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>}
      </div>
      
      <div>
        <textarea
          placeholder="Your Message"
          rows="4"
          {...register('message', { required: 'Message is required' })}
          className={`w-full px-4 py-2 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Submit Now'}
      </button>
    </form>
  );
}
```

### 7. API Routes for Form Handling

#### Contact Form API Endpoint
```javascript
// src/app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate data
    if (!data.firstName || !data.lastName || !data.email || !data.purpose || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Send email or save to database
    // This is where you would integrate with your email service or database
    
    // Example using nodemailer or similar service
    // await sendEmail(data);
    
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

### 8. Performance Optimization

#### Code Splitting
```jsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable SSR if client-only
});
```

#### Lazy Loading Images
```jsx
// For below-the-fold images
<Image
  src="/assets/images/resource/about-7.jpg"
  alt="About Puffin"
  width={600}
  height={400}
  quality={85}
  loading="lazy" // Lazy load for better performance
/>
```

### 9. Accessibility Implementation

#### Semantic HTML Structure
```jsx
// Use proper semantic elements
<section aria-labelledby="about-heading">
  <h2 id="about-heading">About Puffin Group</h2>
  <p>Content here...</p>
</section>
```

#### ARIA Labels for Interactive Elements
```jsx
<button 
  aria-expanded={isOpen} 
  aria-controls="accordion-content"
  onClick={toggleAccordion}
>
  FAQ Question
</button>
```

### 10. Deployment Configuration

#### Environment Variables (.env.local)
```
NEXT_PUBLIC_SITE_URL=https://puffingroupltd.com
NEXT_PUBLIC_CONTACT_EMAIL=info@puffingroupltd.com
NEXT_PUBLIC_PHONE=+2347074404041
```

#### Vercel Deployment Configuration (vercel.json)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "next.config.js",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/",
      "status": 200
    }
  ]
}
```

## Migration Strategy

### 1. Content Migration
- Extract content from HTML files into structured data
- Create content management approach (JSON files or CMS)
- Maintain consistent messaging across all pages

### 2. Styling Migration
- Convert existing CSS to CSS modules or Tailwind CSS
- Maintain visual consistency with original design
- Optimize for performance and maintainability

### 3. Functionality Migration
- Implement all interactive elements (accordions, carousels, forms)
- Ensure mobile responsiveness
- Add proper error handling

### 4. Testing Strategy
- Unit tests for components
- Integration tests for forms
- End-to-end tests for critical user flows
- Accessibility testing
- Performance testing (Lighthouse)

## Quality Assurance

### 1. Cross-Browser Compatibility
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Android Chrome)

### 2. Performance Benchmarks
- Lighthouse scores >90 for all metrics
- Core Web Vitals compliance
- Page load times <3 seconds

### 3. SEO Validation
- Proper meta tags on all pages
- Valid structured data
- XML sitemap generation
- robots.txt implementation

## Maintenance Considerations

### 1. Content Updates
- Easy content management approach
- Clear documentation for non-technical team members
- Version control with Git

### 2. Security
- Regular dependency updates
- HTTPS enforcement
- Form spam protection

### 3. Monitoring
- Performance monitoring
- Error tracking
- Uptime monitoring

This technical specification provides a comprehensive guide for converting the Puffin Group Ltd website to Next.js while ensuring optimal SEO performance and image optimization.