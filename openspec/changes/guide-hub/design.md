## Context

The portfolio website currently lacks a centralized location for technical guides and knowledge material. Users may want to learn about technologies used, implementation details, or best practices related to the projects showcased. This creates friction for knowledge sharing and onboarding.

## Goals / Non-Goals

**Goals:**
- Provide a dedicated section for technical guides
- Display Markdown files as readable HTML content
- Allow users to click on guide titles to view full content
- Maintain consistency with existing Angular/Tailwind styling
- Enable easy addition of new guides by adding .md files

**Non-Goals:**
- User authentication or private guide access
- Guide editing interface (will use file-based approach)
- Commenting or discussion features on guides
- Full-text search across guide content (initial implementation)

## Decisions

### Markdown Rendering Approach
**Decision:** Use Angular's built-in DOM sanitization with a simple Markdown-to-HTML converter for initial implementation.
**Rationale:** 
- Avoids adding new dependencies for a simple use case
- Maintains Angular 20 compatibility and SSR support
- Sufficient for basic technical guides with code blocks and formatting
- Can be enhanced later with a dedicated library if needed
**Alternatives Considered:**
- `marked` or `showdown` libraries: Rejected to minimize bundle size and dependencies
- Angular Markdown component: Not officially maintained for Angular 20
- Server-side Markdown rendering: Would complicate SSR implementation unnecessarily

### Component Structure
**Decision:** Create two components: GuideHub (list view) and GuideDetail (single guide view).
**Rationale:**
- Separates concerns: listing vs detailed view
- Enables clean routing: /guides for list, /guides/:id for detail
- Reusable GuideDetail component for potential future use
- Follows existing pattern in project (Projects/ProjectDetail components)

### Routing Strategy
**Decision:** Add /guides route for hub and /guides/:guideName for individual guides.
**Rationale:**
- Consistent with existing project routing (projects/:route)
- Clean, intuitive URL structure
- Supports future expansion to nested guide categories
- Maintains SSR compatibility through existing server route configuration

### Storage Location
**Decision:** Store guide Markdown files in src/assets/guides/
**Rationale:**
- Follows Angular asset conventions
- Files are accessible at runtime and build time
- Easy to version control alongside code
- Publicly accessible via HTTP without special routing
- Avoids complicating the component structure with service-based file loading

## Risks / Trade-offs

[Limited Markdown feature support] → Initial converter may not support all Markdown syntax (tables, task lists, etc.). Mitigation: Start with basic support and enhance converter as needed, or switch to library if requirements grow.

[File discovery mechanism] → Need to scan directory for .md files. Mitigation: Create a guide service that reads from assets folder during build or runtime; for SSR compatibility, consider build-time generation of guide list.

[Performance with many guides] → Loading all guides at once could impact performance. Mitigation: Implement pagination or lazy loading if guide count exceeds practical threshold (initially expect <20 guides).

## Migration Plan

1. Add GuideHub and GuideDetail components
2. Update footer navigation with Guides button
3. Configure new routes in app.routes.ts
3. Create assets/guides/ directory and add initial .md files
4. Implement basic Markdown rendering service
5. Test locally and verify SSR build works
6. Deploy as part of regular deployment process

Rollback: Simply remove the new components, routes, and navigation button; no data migration needed.

## Open Questions

- Should guide titles be extracted from Markdown frontmatter or filename? Answer: Frontmatter.
- How should we handle guide categorization or tagging in the future? Answer: Tags like the projects.
- What level of Markdown syntax support is required initially (basic vs extended)? Answer: Extended.
- Should we highlight code blocks in rendered guides, and if so, with what theme? Answer: Yes, contrasted theme (if white background black theme).
