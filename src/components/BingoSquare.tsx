import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border-2 rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight';

  // Coffee-stained coaster look
  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[#d4a574] border-[#a67c52] text-[#4a2c2a] shadow-md'
      : 'bg-[#f5e6d3] border-[#c8a882] text-[#4a2c2a] shadow-sm'
    : 'bg-[#faf7f2] text-[#6f4e37] border-[#c8a882] active:bg-[#f5e6d3] shadow-sm';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm bg-[#6f4e37] text-[#faf7f2] border-[#4a2c2a]' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
      style={{ fontFamily: 'Lato, sans-serif' }}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {/* Coffee stamp instead of checkmark */}
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-[#8b6f47] text-base" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>☕</span>
      )}
    </button>
  );
}
