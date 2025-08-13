# Food Animation App

A minimal Next.js application that displays a food animation. This project is configured for static export, making it easy to deploy to services like Cloudflare Pages.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the animation.

## Building for Production

To create a static export build:

```bash
npm run build
```

This will generate the static files in the `out` directory.

## Testing the Production Build

To test the production build locally:

```bash
npm run start
```

This will serve the static files from the `out` directory using the `serve` package.

## Deployment on Cloudflare Pages

This project is configured for deployment to Cloudflare Pages using Next.js static export.

### Deploy to Cloudflare Pages

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Deploy to Cloudflare Pages"
   git push origin main
   ```

2. **Set up Cloudflare Pages:**
   - Log in to the [Cloudflare dashboard](https://dash.cloudflare.com)
   - Go to **Workers & Pages** > **Create**
   - Select the **Pages** tab
   - Select **Connect to Git**
   - Choose your GitHub repository
   - Configure build settings:
     - **Framework preset:** Next.js (Static HTML Export)
     - **Build command:** `npx next build`
     - **Build directory:** `out`
     - **Production branch:** `main`

3. **Deploy:**
   - Click **Save and Deploy**
   - Cloudflare Pages will automatically build and deploy your site
   - You'll receive a `*.pages.dev` subdomain for your project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run start
```

### Configuration

- **Framework:** Next.js with static export
- **Build Command:** `npx next build`
- **Output Directory:** `out`
- **Deployment:** Automatic on push to main branch

### Features

- Static HTML export optimized for Cloudflare Pages
- Responsive design with Tailwind CSS
- Food animation component with iframe integration
- Error handling for missing assets
- Automatic deployment on git push

## Project Structure

- `app/page.js` - The main page component that renders the food animation
- `components/FoodAnimation.jsx` - The main animation component
- `components/utility.js` - Utility hooks like window size detection
- `public/foodGallery/` - Static assets for the food animation

## Troubleshooting

If you encounter missing assets or errors in the animation, the application includes fallback placeholders to ensure it still works.
