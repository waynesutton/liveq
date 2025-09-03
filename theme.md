# Slidvex Theme Design System

## Design Philosophy

Clean, minimalist, developer-focused aesthetic emphasizing readability and functionality. Inspired by modern developer tools and platforms like [colf.dev](https://colf.dev/).

## Typography

### Primary Font

- **Font Family**: Modern sans-serif, monospaced or clean uniform sans-serif
- **Font Weight**: Regular (400) for body text, Bold (700) for headers and buttons
- **Font Color**: Pure black (#000000) for maximum contrast
- **Font Size**:
  - Body: 14px-16px
  - Headers: 18px-24px
  - Small text: 12px-13px

### Font Styles

- **Headers**: Bold weight, black color
- **Body Text**: Regular weight, black color
- **Navigation**: Regular weight, black color
- **Buttons**: Bold weight, white text on black background
- **Data/Code**: Monospaced font for numerical data and technical content

## Color Palette

### Primary Colors

- **Background**: Pure white (#FFFFFF)
- **Text**: Pure black (#000000)
- **Buttons**: Black (#000000) with white text
- **Borders**: Light grey (#E5E5E5) for subtle separation

### Secondary Colors

- **Accent**: Subtle light grey (#F5F5F5) for alternating table rows
- **Hover States**: Very light grey (#F0F0F0)
- **Success**: Minimal green (#10B981) for positive actions
- **Error**: Minimal red (#EF4444) for errors

## Layout Structure

### Header Style (Based on colf.dev)

- **Background**: White
- **Navigation**: Horizontal strip at top with black text links
- **Active States**: Current page link maintains black color but can use subtle indicators
- **Right Section**: Small rectangular boxes with light grey background containing metrics
- **Height**: Compact, approximately 60-70px

### Main Content

- **Background**: White
- **Alignment**: Centered content with consistent margins
- **Spacing**: Generous whitespace between sections
- **Container**: Max-width container for optimal readability

### Footer Style (Based on planetscale.com)

- **Background**: White with subtle border top
- **Layout**: Multi-column grid with links and company information
- **Typography**: Smaller font size, regular weight
- **Links**: Black text with subtle hover effects
- **Social Icons**: Minimal, black icons on white background

## Component Styling

### Buttons

- **Primary**: Black background (#000000), white text, bold weight
- **Secondary**: White background, black border, black text
- **Size**: Standard height (40-48px), rounded corners (4-6px)
- **Hover**: Subtle opacity change or light grey background for secondary

### Tables

- **Background**: White
- **Headers**: Bold, black text
- **Rows**: Alternating very light grey and white backgrounds
- **Borders**: Minimal light grey borders or no borders
- **Alignment**: Left-aligned text, right-aligned numerical data

### Forms

- **Input Fields**: White background, black text, light grey borders
- **Focus States**: Black border or subtle shadow
- **Labels**: Black text, regular weight
- **Validation**: Minimal color indicators for success/error states

### Cards/Containers

- **Background**: White
- **Borders**: Light grey borders or subtle shadows
- **Padding**: Consistent internal spacing (16px-24px)
- **Corners**: Slightly rounded (4-8px)

## Interactive Elements

### Navigation

- **Links**: Black text, no underlines
- **Hover**: Subtle light grey background or opacity change
- **Active**: Current page indicator (subtle border or background)

### Data Visualization

- **Charts**: Minimal color palette, black text labels
- **Graphs**: Clean lines, minimal grid, focus on data
- **Icons**: Simple, outlined icons in black

## Modal Design System

### Modal Overlay
- **Background**: Semi-transparent black (rgba(0, 0, 0, 0.5))
- **Backdrop**: Click outside to close
- **Z-index**: High enough to appear above all content

### Modal Container
- **Background**: Pure white (#FFFFFF)
- **Border**: Light grey border (#E5E5E5) or subtle shadow
- **Border Radius**: 8px for modern feel
- **Padding**: 24px internal spacing
- **Max Width**: 500px for standard modals, 800px for wide modals
- **Position**: Centered on screen

### Modal Header
- **Title**: Bold, 20px, black text
- **Close Button**: Positioned top-right, minimal styling
- **Border Bottom**: Light grey separator line

### Modal Content
- **Typography**: Regular weight, 16px body text
- **Spacing**: Consistent 16px margins between elements
- **Forms**: Same styling as main site forms

### Modal Actions
- **Button Layout**: Right-aligned, consistent spacing
- **Primary Action**: Black button with white text
- **Secondary Action**: White button with black border
- **Button Spacing**: 12px between buttons

## Icon Guidelines

### Icon Requirements
- **Source**: ONLY use [Radix UI Icons](https://www.radix-ui.com/icons)
- **Installation**: `npm install @radix-ui/react-icons`
- **Usage**: Import individual icons as React components
- **Styling**: Black color (#000000) by default
- **Size**: 15x15px (Radix standard) or 16x16px for consistency

### Icon Implementation
```tsx
import { QuestionMarkIcon, ArrowUpIcon, PlusIcon } from "@radix-ui/react-icons";

// Use in components
<QuestionMarkIcon className="icon" />
<ArrowUpIcon className="icon upvote-icon" />
<PlusIcon className="icon add-icon" />
```

### Icon Classes
```css
.icon {
  width: 16px;
  height: 16px;
  color: var(--color-text);
}

.upvote-icon {
  width: 20px;
  height: 20px;
}

.add-icon {
  width: 18px;
  height: 18px;
}
```

## Responsive Design

### Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Adaptations

- **Navigation**: Collapsible hamburger menu
- **Tables**: Horizontal scroll or stacked layout
- **Buttons**: Full-width on small screens
- **Typography**: Slightly reduced font sizes
- **Modals**: Full-screen on mobile devices

## Accessibility

### Contrast

- **Text Contrast**: Minimum 4.5:1 ratio (black on white exceeds this)
- **Interactive Elements**: Clear focus indicators
- **Color Independence**: Information not conveyed by color alone

### Typography

- **Readability**: Minimum 16px for body text
- **Line Height**: 1.5-1.6 for optimal reading
- **Spacing**: Adequate letter-spacing for clarity

## Implementation Notes

### CSS Variables

```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-button: #000000;
  --color-button-text: #ffffff;
  --color-border: #e5e5e5;
  --color-accent: #f5f5f5;
  --color-hover: #f0f0f0;
  --color-success: #10b981;
  --color-error: #ef4444;
  --font-primary: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;
}
```

### Design Principles

1. **Minimalism**: Remove unnecessary visual elements
2. **Functionality**: Design serves the user's needs first
3. **Consistency**: Maintain visual hierarchy and spacing
4. **Performance**: Optimize for fast loading and smooth interactions
5. **Accessibility**: Ensure usability for all users
6. **Icon Consistency**: Use only Radix UI icons for visual consistency
7. **No Emojis**: Never use emojis in the application interface

## Brand Integration

### Logo Placement

- **Header**: Left-aligned, appropriate size for navigation
- **Footer**: Centered or left-aligned with company information

### Customization

- **Color Overrides**: Allow hosts to customize primary colors while maintaining contrast
- **Logo Integration**: Support for custom logos and branding
- **Theme Switching**: Light theme only (no dark mode initially)

This theme system creates a professional, developer-friendly interface that prioritizes readability and functionality while maintaining a clean, modern aesthetic inspired by colf.dev and other developer platforms.
