interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden">
      {/* Decorative coffee beans scattered in background */}
      <div className="absolute top-10 left-[10%] text-4xl opacity-20 animate-[float_6s_ease-in-out_infinite]">☕</div>
      <div className="absolute top-[20%] right-[15%] text-3xl opacity-15 animate-[float_8s_ease-in-out_infinite_1s]">☕</div>
      <div className="absolute bottom-[25%] left-[8%] text-5xl opacity-10 animate-[float_7s_ease-in-out_infinite_2s]">☕</div>
      <div className="absolute bottom-[15%] right-[12%] text-3xl opacity-20 animate-[float_9s_ease-in-out_infinite_1.5s]">☕</div>
      
      <div className="text-center max-w-2xl w-full relative z-10">
        {/* Animated hero section */}
        <div className="mb-10 animate-[fadeInScale_0.8s_ease-out]">
          {/* Large decorative coffee cup with steam */}
          <div className="relative inline-block mb-6">
            <div className="text-8xl filter drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]">☕</div>
            {/* Steam wisps */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl opacity-40 animate-[fadeInUp_2s_ease-in-out_infinite]">~</div>
            <div className="absolute -top-8 left-1/2 -translate-x-8 text-3xl opacity-30 animate-[fadeInUp_2.5s_ease-in-out_infinite_0.3s]">~</div>
            <div className="absolute -top-8 left-1/2 translate-x-4 text-3xl opacity-30 animate-[fadeInUp_2.3s_ease-in-out_infinite_0.5s]">~</div>
          </div>
          
          <h1 
            className="text-6xl md:text-7xl font-black mb-3 tracking-tight"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#faf7f2',
              textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 0 40px rgba(212, 165, 116, 0.3)'
            }}
          >
            Coffee Chat
          </h1>
          <p 
            className="text-3xl tracking-widest"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#d4a574',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            BINGO
          </p>
        </div>
        
        {/* Elegant instruction card with staggered animation */}
        <div 
          className="bg-gradient-to-br from-[#3d2517] via-[#4a2c2a] to-[#3d2517] rounded-2xl p-8 md:p-10 shadow-2xl border-2 border-[#8b6f47]/40 mb-10 relative backdrop-blur-sm animate-[fadeInUp_0.8s_ease-out_0.2s] opacity-0"
          style={{ animationFillMode: 'forwards' }}
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#d4a574]/60 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#d4a574]/60 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#d4a574]/60 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#d4a574]/60 rounded-br-2xl"></div>
          
          {/* Floating coffee stain decorations */}
          <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#8b6f47]/30 blur-sm"></div>
          <div className="absolute -bottom-2 -left-2 w-10 h-10 rounded-full bg-[#8b6f47]/20 blur-sm"></div>
          <div className="absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-[#d4a574]/20 blur-sm"></div>
          
          <h2 
            className="font-bold text-[#f5e6d3] mb-6 text-2xl tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            How to Play
          </h2>
          <div className="space-y-4 text-left">
            {[
              { icon: '☕', text: 'Find people who match the prompts', delay: '0.4s' },
              { icon: '☕', text: 'Tap a square when you find a match', delay: '0.5s' },
              { icon: '☕', text: 'Get 5 in a row to win BINGO!', delay: '0.6s' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg bg-[#5c3d2e]/30 border border-[#8b6f47]/20 hover:bg-[#5c3d2e]/50 hover:border-[#d4a574]/40 transition-all duration-300 animate-[fadeInUp_0.6s_ease-out] opacity-0"
                style={{ animationDelay: item.delay, animationFillMode: 'forwards' }}
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <span 
                  className="text-[#faf7f2] text-lg"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Prominent call-to-action button with animation */}
        <button
          onClick={onStart}
          className="group relative w-full md:w-auto px-12 py-5 rounded-2xl text-xl font-bold overflow-hidden shadow-2xl border-2 border-[#d4a574] active:scale-95 transition-transform duration-200 animate-[fadeInUp_0.8s_ease-out_0.7s] opacity-0"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            animationFillMode: 'forwards',
            background: 'linear-gradient(135deg, #8b6f47 0%, #6f4e37 50%, #8b6f47 100%)',
            backgroundSize: '200% 100%'
          }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <span className="relative z-10 flex items-center justify-center gap-3 text-[#faf7f2]">
            <span className="text-3xl animate-[float_3s_ease-in-out_infinite]">☕</span>
            <span className="tracking-wide">Start Brewing</span>
          </span>
        </button>
        
        {/* Subtle tagline */}
        <p 
          className="mt-6 text-[#c8a882] text-sm tracking-widest animate-[fadeInUp_0.8s_ease-out_0.9s] opacity-0"
          style={{ fontFamily: 'Crimson Pro, serif', animationFillMode: 'forwards' }}
        >
          Break the ice, one cup at a time
        </p>
      </div>
    </div>
  );
}
