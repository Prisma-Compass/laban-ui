# Contributing to @laban/ui

## Quick Start

```bash
git clone https://github.com/prisma-compass/laban-ui.git
cd laban-ui
npm install
npm run storybook  # View components at http://localhost:6006
```

## Development

- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run storybook` — Component documentation
- `npm run lint` — Lint code
- `npm run typecheck` — Type check

## Adding a Component

1. Create `src/components/YourComponent.tsx`
2. Create `src/components/YourComponent.stories.tsx`
3. Export from `src/index.ts`
4. Run `npm run storybook` to preview

## PR Checklist

- [ ] Component has Storybook story
- [ ] TypeScript types exported
- [ ] Works in both light and dark mode
- [ ] No external dependencies added without discussion
