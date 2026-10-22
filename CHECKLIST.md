# ✅ Post-Conversion Checklist

## Immediate Tasks

### 1. Add Logo Image

- [x] Create or obtain Steel & Soul Garage logo
- [x] Saved as `src/assets/images/logo.webp` (1024×1024 WebP)

### 2. Update Google Maps

- [x] Embed the map for "Calle 51 A # 35-39 Sur - Fatima - Bogotá D.C. - Colombia" (`src/pages/[lang]/index.astro`)

### 3. Test All Links

- [ ] Instagram link works
- [ ] TikTok link works
- [ ] Email link opens mail client
- [ ] Phone link opens phone dialer (on mobile)
- [ ] Google Maps loads correctly

## Optional Enhancements

### QR Payment Feature

- [ ] Create QR code image for payments
- [ ] Add modal/dialog component
- [ ] Update payment button to show QR code
- [ ] Or redirect to payment page

### Language Switching Enhancement

- [ ] Add cookie support for server-side language detection
- [ ] Enhance UI with flag icons
- [x] Add URL-based language parameter (e.g., `/es/`)
- [x] Use Astro's i18n routing

### Additional Content

- [ ] Add gallery/portfolio section
- [ ] Add services page
- [ ] Add testimonials
- [ ] Add blog/news section

### SEO & Analytics

- [x] Add favicon (`public/favicon.svg`)
- [x] Update meta descriptions
- [x] Add Open Graph images, canonical and `hreflang` links
- [ ] Set up Google Analytics
- [ ] Submit sitemap to search engines

### Performance

- [x] Use WebP for the logo
- [ ] Compress the logo (`logo.webp` is ~2.5 MB)
- [ ] Add loading states for iframe
- [ ] Consider CDN for static assets
- [ ] Test on PageSpeed Insights

## Pre-Deployment

### Quality Checks

- [x] Run `bun run build` successfully
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Verify dark mode works correctly
- [ ] Check language toggle functionality
- [ ] Verify all external links open in new tabs

### Accessibility

- [ ] Test keyboard navigation
- [ ] Verify screen reader compatibility
- [ ] Check color contrast ratios
- [ ] Ensure all images have alt text

### Configuration

- [x] Keep `base: '/'` (served from the custom domain root)
- [x] Set `site` to `https://www.steel-and-soul-garage.co`
- [x] Deploy to GitHub Pages with GitHub Actions (`.github/workflows/deploy.yml`, runs on every merge to `main`)

## Documentation

- [x] Created this checklist
- [x] Update main README.md with project-specific info

## Testing Status

- [x] Build completes without errors
- [x] Dev server runs successfully
- [x] TypeScript types generate correctly
- [x] Manual testing in browser
- [x] Mobile responsive testing
- [ ] Cross-browser testing

---

**Current Status**: ✅ Live at https://www.steel-and-soul-garage.co
