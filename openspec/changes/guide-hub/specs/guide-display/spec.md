## ADDED Requirements

### Requirement: Markdown Guide Display
The system SHALL render Markdown files as HTML with syntax highlighting and proper formatting for technical guides.

#### Scenario: Basic Markdown Rendering
- **WHEN** a user navigates to /guides/introduction-to-ts.md
- **THEN** the guide content should display with: 
  * Proper line breaks
  * Code blocks preserved with syntax highlighting
  * Headers maintained as h1-h6 tags
  * Emphasis and italics rendered correctly

#### Scenario: Code Block Formatting
- **WHEN** a guide contains a code snippet
- **THEN** the code should be: 
  * Wrapped in <pre><code> tags
  * Preserved indentation
  * Syntax-highlighted based on language detection

### Requirement: Guide Navigation
The system SHALL allow users to click styled guide titles in the hub to view detailed content.

#### Scenario: Title Click
- **WHEN** a user clicks a guide title in the list
- **THEN** the router should navigate to /guides/guide-name
  * URL structure must match route configuration
  * GuideDetail component should load

### Requirement: Dynamic Content Loading
The system SHALL fetch Markdown content dynamically at runtime or build time.

#### Scenario: Content Fetches
- **WHEN** a guide page loads
- **THEN** the system should: 
  * Read the Markdown file from src/assets/guides/
  * Convert content to HTML using Markdown parser
  * Inject into GuideDetail component
  * Maintain SSR hydration

## Open Questions

- Should syntax highlighting use a specific theme (default Tailwind colors or custom)? Answer: Default Tailwind colors.
- Should we cache guide content for performance? Answer: Yes.
- How should the Markdown parser handle unsupported syntax (e.g., tables)? Answer: As human readable as possible.
