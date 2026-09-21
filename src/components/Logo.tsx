import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
  showText?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
  showText = true,
  onClick,
}) => {
  const symbolSize = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  }[size];

  const textSize = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  const textColor = variant === 'light' ? 'text-white' : 'text-[#0b192c]';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      dir="rtl"
    >
      {/* Minimal Digital Brand Symbol */}
      <div className={`relative flex items-center justify-center shrink-0 ${symbolSize}`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* Base rounded square frame */}
          <rect
            width="40"
            height="40"
            rx="10"
            className={variant === 'light' ? 'fill-white/10' : 'fill-[#0b192c]'}
          />
          {/* Back document leaf / digital page */}
          <path
            d="M13 10C13 8.89543 13.8954 8 15 8H27C28.1046 8 29 8.89543 29 10V26C29 27.1046 28.1046 28 27 28H15C13.8954 28 13 27.1046 13 26V10Z"
            fill="#38bdf8"
            fillOpacity="0.4"
          />
          {/* Front interactive folio (book/doc) */}
          <path
            d="M10 13C10 11.3431 11.3431 10 13 10H24C25.6569 10 27 11.3431 27 13V29C27 30.6569 25.6569 32 24 32H13C11.3431 32 10 30.6569 10 29V13Z"
            fill="#2563eb"
          />
          {/* Clean document text stripes */}
          <rect x="14" y="15" width="8" height="2" rx="1" fill="white" fillOpacity="0.9" />
          <rect x="14" y="19" width="8" height="2" rx="1" fill="white" fillOpacity="0.9" />
          <rect x="14" y="23" width="5" height="2" rx="1" fill="white" fillOpacity="0.75" />
          {/* Digital access spark point */}
          <circle cx="29" cy="11" r="2.75" fill="#38bdf8" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-extrabold tracking-tight ${textSize} ${textColor}`}
            style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
          >
            مكتبتي
          </span>
          <span
            className={`text-[10px] tracking-wider uppercase font-semibold ${
              variant === 'light' ? 'text-blue-200/80' : 'text-slate-400'
            }`}
          >
            Maktabti
          </span>
        </div>
      )}
    </div>
  );
};
