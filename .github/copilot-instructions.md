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

## Deployment

Auto-deploys to GitHub Pages on push to `main`. Base path configured via `VITE_REPO_NAME` env var.
