import React from 'react';
export function TravelIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
      {/* Background linear */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-mint-50 to-coral-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-linear-to-br from-coral-300 to-coral-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-32 right-24 w-24 h-24 bg-linear-to-br from-blue-300 to-blue-400 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/3 right-16 w-12 h-12 bg-linear-to-br from-mint-300 to-mint-400 rounded-full opacity-20 animate-float"></div>
      {/* Main illustration */}
      <svg className="relative z-10 w-full max-w-lg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Map background */}
        <rect x="50" y="80" width="400" height="340" rx="20" fill="url(#mapGradient)" opacity="0.1"/>
        
        {/* Location pins scattered */}
        <g opacity="0.6">
          <path d="M120 150 L120 170 L125 180 L130 170 L130 150 C130 144.5 125.5 140 120 140 C114.5 140 110 144.5 110 150 Z" fill="url(#pinGradient1)"/>
          <circle cx="120" cy="148" r="4" fill="white"/>
          
          <path d="M380 200 L380 220 L385 230 L390 220 L390 200 C390 194.5 385.5 190 380 190 C374.5 190 370 194.5 370 200 Z" fill="url(#pinGradient2)"/>
          <circle cx="380" cy="198" r="4" fill="white"/>
          
          <path d="M300 320 L300 340 L305 350 L310 340 L310 320 C310 314.5 305.5 310 300 310 C294.5 310 290 314.5 290 320 Z" fill="url(#pinGradient3)"/>
          <circle cx="300" cy="318" r="4" fill="white"/>
        </g>
        {/* Traveler (left figure with backpack) */}
        <g transform="translate(150, 180)">
          {/* Backpack */}
          <rect x="35" y="45" width="30" height="40" rx="8" fill="url(#backpackGradient)"/>
          <rect x="40" y="50" width="8" height="12" rx="2" fill="#FF6A88" opacity="0.5"/>
          <rect x="52" y="50" width="8" height="12" rx="2" fill="#FF6A88" opacity="0.5"/>
          
          {/* Body */}
          <ellipse cx="50" cy="80" rx="25" ry="30" fill="url(#travellerShirt)"/>
          
          {/* Head */}
          <circle cx="50" cy="35" r="18" fill="#FFD4C8"/>
          
          {/* Hair */}
          <path d="M35 30 Q35 20 50 18 Q65 20 65 30" fill="#4A3F35"/>
          
          {/* Hat */}
          <ellipse cx="50" cy="20" rx="20" ry="8" fill="url(#hatGradient)"/>
          <rect x="45" y="15" width="10" height="8" rx="2" fill="#FF9A8B"/>
          
          {/* Arms */}
          <ellipse cx="28" cy="75" rx="8" ry="22" fill="#FFD4C8" transform="rotate(-20 28 75)"/>
          <ellipse cx="72" cy="75" rx="8" ry="22" fill="#FFD4C8" transform="rotate(20 72 75)"/>
          
          {/* Legs */}
          <rect x="38" y="105" width="10" height="35" rx="5" fill="#4A5568"/>
          <rect x="52" y="105" width="10" height="35" rx="5" fill="#4A5568"/>
          
          {/* Shoes */}
          <ellipse cx="43" cy="142" rx="8" ry="5" fill="#2D3748"/>
          <ellipse cx="57" cy="142" rx="8" ry="5" fill="#2D3748"/>
        </g>
        {/* Local guide (right figure) */}
        <g transform="translate(280, 180)">
          {/* Body */}
          <ellipse cx="50" cy="80" rx="25" ry="30" fill="url(#guideShirt)"/>
          
          {/* Head */}
          <circle cx="50" cy="35" r="18" fill="#E8B4A0"/>
          
          {/* Hair */}
          <path d="M35 32 Q35 18 50 16 Q65 18 65 32" fill="#2D1810"/>
          
          {/* Arms - one raised pointing */}
          <ellipse cx="28" cy="70" rx="8" ry="22" fill="#E8B4A0" transform="rotate(-45 28 70)"/>
          <ellipse cx="72" cy="75" rx="8" ry="22" fill="#E8B4A0" transform="rotate(15 72 75)"/>
          
          {/* Legs */}
          <rect x="38" y="105" width="10" height="35" rx="5" fill="#2C5282"/>
          <rect x="52" y="105" width="10" height="35" rx="5" fill="#2C5282"/>
          
          {/* Shoes */}
          <ellipse cx="43" cy="142" rx="8" ry="5" fill="#1A365D"/>
          <ellipse cx="57" cy="142" rx="8" ry="5" fill="#1A365D"/>
        </g>
        {/* Map/compass icon floating */}
        <g transform="translate(240, 100)">
          <circle cx="0" cy="0" r="25" fill="white" opacity="0.9"/>
          <circle cx="0" cy="0" r="20" stroke="url(#compassGradient)" strokeWidth="2" fill="none"/>
          <path d="M0 -15 L5 0 L0 15 L-5 0 Z" fill="url(#compassGradient)"/>
        </g>
        {/* Gradients */}
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FACFE"/>
            <stop offset="100%" stopColor="#00F2FE"/>
          </linearGradient>
          
          <linearGradient id="pinGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF9A8B"/>
            <stop offset="100%" stopColor="#FF6A88"/>
          </linearGradient>
          
          <linearGradient id="pinGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#43E97B"/>
            <stop offset="100%" stopColor="#38F9D7"/>
          </linearGradient>
          
          <linearGradient id="pinGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4FACFE"/>
            <stop offset="100%" stopColor="#00F2FE"/>
          </linearGradient>
          
          <linearGradient id="backpackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF9A8B"/>
            <stop offset="100%" stopColor="#FF6A88"/>
          </linearGradient>
          
          <linearGradient id="travellerShirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4FACFE"/>
            <stop offset="100%" stopColor="#00F2FE"/>
          </linearGradient>
          
          <linearGradient id="guideShirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#43E97B"/>
            <stop offset="100%" stopColor="#38F9D7"/>
          </linearGradient>
          
          <linearGradient id="hatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF9A8B"/>
            <stop offset="100%" stopColor="#FF6A88"/>
          </linearGradient>
          
          <linearGradient id="compassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9A8B"/>
            <stop offset="100%" stopColor="#FF6A88"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}