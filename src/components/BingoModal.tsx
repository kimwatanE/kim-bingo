interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div 
        className="bg-[#4a2c2a] rounded-2xl p-8 max-w-xs w-full text-center shadow-2xl animate-[bounce_0.5s_ease-out] border-4 border-[#d4a574] relative"
      >
        {/* Coffee stain decorations */}
        <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#8b6f47] opacity-40"></div>
        <div className="absolute -bottom-2 -left-2 w-10 h-10 rounded-full bg-[#8b6f47] opacity-30"></div>
        
        {/* Coffee cups celebration */}
        <div className="text-6xl mb-4">☕☕☕</div>
        <h2 
          className="text-4xl font-black text-[#d4a574] mb-3" 
          style={{ 
            fontFamily: 'Merriweather, serif',
            textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
          }}
        >
          BINGO!
        </h2>
        <p className="text-[#f5e6d3] mb-6 text-base" style={{ fontFamily: 'Lato, sans-serif' }}>
          Perfect brew! You completed a line!
        </p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-[#d4a574] text-[#4a2c2a] font-bold py-3 px-6 rounded-lg shadow-lg border-2 border-[#a67c52] active:bg-[#c8a882] active:scale-95 transition-all"
          style={{ fontFamily: 'Merriweather, serif' }}
        >
          ☕ Keep Sipping
        </button>
      </div>
    </div>
  );
}
