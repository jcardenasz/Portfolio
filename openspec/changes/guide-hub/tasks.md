## 1. Project Setup

- [x] 1.1 Create `src/app/pages/guides/` directory structure
- [x] 1.2 Create `src/assets/guides/` directory for Markdown files
- [x] 1.3 Add initial guide Markdown file (e.g., `getting-started.md`)
- [x] 1.4 Export new pages from `src/app/pages/index.ts`

## 2. Routing Configuration

- [ ] 2.1 Add `/guides` route to `src/app/app.routes.ts` for GuideHub component
- [ ] 2.2 Add `/guides/:guideName` route for GuideDetail component
- [ ] 2.3 Update `src/app/app.routes.server.ts` if needed for SSR prerendering

## 3. GuideHub Component (List View)

- [ ] 3.1 Create `guide-hub.ts` component class with guide list signal
- [ ] 3.2 Create `guide-hub.html` template with responsive guide list layout
- [ ] 3.3 Create `guide-hub.css` with Tailwind utility classes for styling
- [ ] 3.4 Implement guide discovery logic (list .md files from assets)
- [ ] 3.5 Add RouterLink directives for navigation to guide detail pages

## 4. GuideDetail Component (Single Guide View)

- [ ] 4.1 Create `guide-detail.ts` component class with guide content loading
- [ ] 4.2 Create `guide-detail.html` template for rendered guide content
- [ ] 4.3 Create `guide-detail.css` with Tailwind styling for readability
- [ ] 4.4 Implement Markdown-to-HTML conversion service
- [ ] 4.5 Ensure SSR compatibility for dynamic content loading

## 5. Markdown Rendering Service

- [ ] 5.1 Create `guide-service.ts` for fetching and parsing Markdown files
- [ ] 5.2 Implement basic Markdown parser (headers, code blocks, emphasis)
- [ ] 5.3 Add DOM sanitization for rendered HTML content
- [ ] 5.4 Handle error cases (missing files, invalid Markdown)

## 6. Navigation Updates

- [ ] 6.1 Add "Guides" button to footer navigation (`footer.html`)
- [ ] 6.2 Add "Guides" link to navbar if applicable
- [ ] 6.3 Ensure consistent styling with existing navigation buttons

## 7. Testing & Verification

- [ ] 7.1 Run `npm install` to verify no dependency issues
- [ ] 7.2 Run `npm run build` to verify SSR build succeeds
- [ ] 7.3 Test guide hub displays list of available guides
- [ ] 7.4 Test clicking a guide navigates to detail page
- [ ] 7.5 Verify Markdown renders correctly with proper formatting
- [ ] 7.6 Test responsiveness on mobile and desktop
- [ ] 7.7 Verify accessibility (semantic HTML, keyboard navigation)