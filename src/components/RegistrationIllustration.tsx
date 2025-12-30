import React from 'react'

export const RegistrationIllustration = () => {
  return (
    <>
      {/* Right Side - Illustration */}
      <div className="flex-1 hidden relative bg-linear-to-br from-[#FF6B6B] via-[#FF8E53] to-[#FFD93D] p-12 lg:flex items-center justify-center lg:min-h-screen">
        <div className="relative z-10 max-w-lg">
          <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl">
            {/* Background elements */}
            <circle cx="250" cy="250" r="200" fill="white" opacity="0.1" />
            <circle cx="100" cy="100" r="60" fill="white" opacity="0.05" />
            <circle cx="400" cy="380" r="80" fill="white" opacity="0.05" />
            
            {/* Map/Paper */}
            <rect x="150" y="180" width="200" height="160" rx="8" fill="white" opacity="0.95" />
            <line x1="170" y1="210" x2="320" y2="210" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
            <line x1="170" y1="240" x2="280" y2="240" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round" />
            <line x1="170" y1="270" x2="300" y2="270" stroke="#FF8E53" strokeWidth="3" strokeLinecap="round" />
            <circle cx="200" cy="305" r="8" fill="#FF6B6B" />
            <circle cx="240" cy="295" r="6" fill="#4ECDC4" />
            <circle cx="280" cy="310" r="7" fill="#FFD93D" />
            
            {/* Guide character (left) */}
            <circle cx="120" cy="280" r="35" fill="#4ECDC4" />
            <circle cx="120" cy="260" r="20" fill="#FFE5CC" />
            <circle cx="115" cy="258" r="3" fill="#333" />
            <circle cx="125" cy="258" r="3" fill="#333" />
            <path d="M 110 268 Q 120 272 130 268" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
            
            {/* Guide's arm pointing */}
            <path d="M 140 290 L 180 250" stroke="#FFE5CC" strokeWidth="12" strokeLinecap="round" />
            <circle cx="180" cy="250" r="8" fill="#FFE5CC" />
            
            {/* Traveler character (right) */}
            <circle cx="380" cy="290" r="35" fill="#FF8E53" />
            <circle cx="380" cy="270" r="20" fill="#FFE5CC" />
            <circle cx="375" cy="268" r="3" fill="#333" />
            <circle cx="385" cy="268" r="3" fill="#333" />
            <ellipse cx="380" cy="275" rx="6" ry="4" fill="#FF6B6B" opacity="0.3" />
            
            {/* Backpack */}
            <rect x="395" y="285" width="20" height="25" rx="4" fill="#FFD93D" />
            <rect x="399" y="290" width="12" height="8" rx="2" fill="#FF6B6B" />
            
            {/* Location pins floating around */}
            <g transform="translate(300, 120)">
              <path d="M 0 0 L -8 -20 L 8 -20 Z" fill="#FF6B6B" />
              <circle cx="0" cy="-5" r="6" fill="#FF6B6B" />
              <circle cx="0" cy="-5" r="3" fill="white" />
            </g>
            
            <g transform="translate(180, 140)">
              <path d="M 0 0 L -6 -15 L 6 -15 Z" fill="#4ECDC4" />
              <circle cx="0" cy="-4" r="5" fill="#4ECDC4" />
              <circle cx="0" cy="-4" r="2" fill="white" />
            </g>
            
            <g transform="translate(420, 180)">
              <path d="M 0 0 L -7 -18 L 7 -18 Z" fill="#FFD93D" />
              <circle cx="0" cy="-5" r="5.5" fill="#FFD93D" />
              <circle cx="0" cy="-5" r="2.5" fill="white" />
            </g>
            
            {/* Sparkles */}
            <g opacity="0.6">
              <path d="M 80 200 L 82 206 L 88 208 L 82 210 L 80 216 L 78 210 L 72 208 L 78 206 Z" fill="white" />
              <path d="M 420 250 L 422 254 L 426 256 L 422 258 L 420 262 L 418 258 L 414 256 L 418 254 Z" fill="white" />
              <path d="M 200 380 L 201 383 L 204 384 L 201 385 L 200 388 L 199 385 L 196 384 L 199 383 Z" fill="white" />
            </g>
          </svg>
          
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">
              Discover Hidden Treasures
            </h2>
            <p className="text-white/90 text-lg">
              Connect with local guides who know the real story behind every corner
            </p>
          </div>
        </div>
        {/* Decorative linear overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
    </>
  )
}

