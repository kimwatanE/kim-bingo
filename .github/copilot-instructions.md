# Soc Ops - Social Bingo Game

## Development Checklist (Run Before Commits)
- [ ] `npm run lint` - ESLint passes with no errors
- [ ] `npm run build` - TypeScript compiles + Vite build succeeds
- [ ] `npm run test` - All 21 Vitest tests pass

## Architecture

Single-page React app for in-person mixers. Players mark 5×5 bingo board squares and race to get 5 in a row.

**Key Decisions:**
- **Pure functional logic** - [bingoLogic.ts](../src/utils/bingoLogic.ts) separates game logic from React (21 passing tests, immutable patterns)
- **Custom hook** - [useBingoGame.ts](../src/hooks/useBingoGame.ts) orchestrates localStorage persistence + state transitions
- **State machine** - Simple `start` → `playing` → `bingo` flow in [App.tsx](../src/App.tsx)

## Key Files

- `src/components/` - UI (StartScreen, GameScreen, BingoBoard, BingoSquare, BingoModal)
- `src/hooks/useBingoGame.ts` - State management + persistence
- `src/utils/bingoLogic.ts` - Board generation, toggles, win detection
- `src/data/questions.ts` - **Customize questions here** (need ≥24)

## Critical Patterns

**Immutable Updates** - Always return new arrays/objects:
```typescript
return board.map((square) =>
  square.id === squareId && !square.isFreeSpace
    ? { ...square, isMarked: !square.isMarked }
    : square
);
```

**LocalStorage Persistence** - Versioned schema in `useBingoGame`:
- Key: `'bingo-game-state'`, version: `STORAGE_VERSION`
- Changes to schema require bumping version
- SSR-safe with `typeof window === 'undefined'` guards

**Free Space Rule** - Center square (index 12) is always marked and non-toggleable

**Win Detection** - `checkBingo()` checks 12 lines (5 rows + 5 cols + 2 diagonals), returns first winning line

## Styling

Tailwind CSS v4 - See [.github/instructions/tailwind-4.instructions.md](instructions/tailwind-4.instructions.md)
- Mobile-first, `aspect-square` for grid sizing, `active:` states for touch

## Design System (Cozy Coffee Shop Theme)

### Color Palette
```css
--color-espresso: #4a2c2a;    /* Dark brown - primary text, darkest elements */
--color-coffee: #6f4e37;       /* Medium brown - headers, primary buttons */
--color-latte: #c8a882;        /* Light brown - borders, accents */
--color-cream: #f5e6d3;        /* Cream - marked squares, warm highlights */
--color-foam: #faf7f2;         /* Off-white - backgrounds, unmarked squares */
--color-wood: #8b6f47;         /* Wood tone - hover states, table frame */
--color-stamp: #d4a574;        /* Coffee stamp - winning state */
```

### Typography
- **Display/Headings**: `Merriweather` (serif, weights 700/900) - Warm, traditional café feel
- **Body/UI**: `Lato` (sans-serif, weights 400/700) - Clean, readable for game text
- Fallbacks: `Georgia, serif` and `system-ui, sans-serif`

### Visual Language
- **Coffee stamps** (☕) instead of checkmarks on marked squares
- **Coaster aesthetic** - Squares styled like coffee-stained coasters with warm borders
- **Menu board styling** - Instructions presented as café chalkboard
- **Textured backgrounds** - Subtle canvas/linen texture overlay on body
- **Warm gradients** - Wood-grain inspired frame around game board
- **Coffee cup icons** - Throughout UI for brand consistency

### Component Patterns
- **Buttons**: Bold serif font, coffee brown bg, cream text, rounded-xl, border-2, active scale/color shift
- **Cards**: Dark espresso bg with cream/foam text, decorative coffee stain circles
- **Squares**: Light foam bg → cream when marked → stamp color when winning
- **Headers**: Coffee brown with espresso border, cream text, coffee cup logo
- **Modals**: Chalkboard/receipt style, dark brown with warm accents

### Key Design Rules
1. Always use coffee-themed emojis (☕) over generic ones
2. Prefer warm browns/creams over grays/blues
3. Add subtle shadows and textures for depth
4. Use Merriweather for emphasis, Lato for readability
5. Maintain 2-4px borders for that "handcrafted" feel
6. Include decorative coffee stain elements sparingly

## Deployment

Auto-deploys to GitHub Pages on push to `main`. Base path configured via `VITE_REPO_NAME` env var.
