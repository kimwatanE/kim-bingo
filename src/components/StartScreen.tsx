interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center max-w-sm">
        {/* Coffee shop logo/title */}
        <div className="mb-6">
          <div className="text-6xl mb-3">☕</div>
          <h1 className="text-5xl font-black mb-2" style={{ color: '#4a2c2a', fontFamily: 'Merriweather, serif' }}>
            Coffee Chat
          </h1>
          <p className="text-xl" style={{ color: '#6f4e37', fontFamily: 'Merriweather, serif', fontWeight: 700 }}>Bingo</p>
        </div>
        
        {/* Menu board style instructions */}
        <div className="bg-[#4a2c2a] rounded-lg p-6 shadow-lg border-4 border-[#6f4e37] mb-8 relative">
          {/* Coffee stain decoration */}
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#8b6f47] opacity-30"></div>
          <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-[#8b6f47] opacity-20"></div>
          
          <h2 className="font-bold text-[#f5e6d3] mb-4 text-lg" style={{ fontFamily: 'Merriweather, serif' }}>How to Play</h2>
          <ul className="text-left text-[#faf7f2] text-sm space-y-2.5" style={{ fontFamily: 'Lato, sans-serif' }}>
            <li className="flex items-start">
              <span className="mr-2">☕</span>
              <span>Find people who match the prompts</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">☕</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">☕</span>
              <span>Get 5 in a row to win BINGO!</span>
            </li>
          </ul>
        </div>

        {/* Coffee cup button */}
        <button
          onClick={onStart}
          className="w-full bg-[#6f4e37] text-[#faf7f2] font-bold py-4 px-8 rounded-xl text-lg shadow-lg border-2 border-[#4a2c2a] active:bg-[#8b6f47] active:scale-95 transition-all"
          style={{ fontFamily: 'Merriweather, serif' }}
        >
          ☕ Start Brewing
        </button>
      </div>
    </div>
  );
}
