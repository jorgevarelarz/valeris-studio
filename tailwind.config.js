/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        sand: '#fff5d8',
        mist: '#f4e0ff',
        stone: '#433755',
        gold: '#ff7a00',
        sky: '#21d4fd',
        mint: '#54f08d',
        pink: '#ff3cac',
        acid: '#d8ff3e',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 28px 90px rgba(41, 0, 68, 0.22)',
        card: '0 28px 100px rgba(255, 60, 172, 0.22)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 12% 18%, rgba(255, 60, 172, 0.26), transparent 22%), radial-gradient(circle at 78% 14%, rgba(255, 122, 0, 0.22), transparent 20%), radial-gradient(circle at 54% 92%, rgba(216, 255, 62, 0.16), transparent 26%), linear-gradient(180deg, #7a001c 0%, #b1002d 44%, #d1123f 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        float: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        drift: 'drift 14s linear infinite',
        wiggle: 'wiggle 2.4s ease-in-out infinite',
        spinSlow: 'spinSlow 18s linear infinite',
        flash: 'flash 1.8s ease-in-out infinite',
        glide: 'glide 12s ease-in-out infinite',
        jitter: 'jitter 0.8s steps(2, end) infinite',
        neonPulse: 'neonPulse 1.6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.65', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(12px, -18px, 0) rotate(8deg)' },
          '100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg) translateY(0)' },
          '50%': { transform: 'rotate(6deg) translateY(-4px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        flash: {
          '0%, 100%': { opacity: '0.75' },
          '50%': { opacity: '1' },
        },
        glide: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '50%': { transform: 'translateX(10px) translateY(-8px)' },
        },
        jitter: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(-2px, 1px) rotate(-1deg)' },
          '50%': { transform: 'translate(2px, -1px) rotate(1deg)' },
          '75%': { transform: 'translate(-1px, 2px) rotate(-0.5deg)' },
        },
        neonPulse: {
          '0%, 100%': { filter: 'saturate(1) brightness(1)' },
          '50%': { filter: 'saturate(1.35) brightness(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
