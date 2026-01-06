import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div 
      className="grid grid-cols-5 gap-1.5 w-full max-w-md mx-auto aspect-square p-3 rounded-xl shadow-xl"
      style={{ 
        background: 'linear-gradient(135deg, #8b6f47 0%, #6f4e37 100%)',
        border: '4px solid #4a2c2a'
      }}
    >
      {board.map((square) => (
        <BingoSquare
          key={square.id}
          square={square}
          isWinning={winningSquareIds.has(square.id)}
          onClick={() => onSquareClick(square.id)}
        />
      ))}
    </div>
  );
}
