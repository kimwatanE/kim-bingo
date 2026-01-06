import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Coffee shop header */}
      <header className="flex items-center justify-between p-3 bg-[#6f4e37] border-b-4 border-[#4a2c2a] shadow-md">
        <button
          onClick={onReset}
          className="text-[#faf7f2] text-sm px-3 py-1.5 rounded bg-[#4a2c2a] active:bg-[#8b6f47] transition-colors"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          ← Back
        </button>
        <h1 className="font-bold text-[#faf7f2] flex items-center gap-2" style={{ fontFamily: 'Merriweather, serif' }}>
          <span>☕</span>
          <span>Coffee Chat</span>
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-[#6f4e37] text-sm py-3 px-4 bg-[#faf7f2]/80" style={{ fontFamily: 'Lato, sans-serif' }}>
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator - coffee shop style */}
      {hasBingo && (
        <div className="bg-[#d4a574] text-[#4a2c2a] text-center py-3 font-bold text-sm border-y-2 border-[#a67c52] shadow-md" style={{ fontFamily: 'Merriweather, serif' }}>
          ☕ BINGO! You got a line! ☕
        </div>
      )}

      {/* Board with coffee table aesthetic */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
