// @laban/ui — Glassmorphism + Lens Shutter animations

/* eslint-disable @typescript-eslint/no-require-imports */
declare var require: (module: string) => any;

let keyframes: any;

try {
  keyframes = require('framer-motion').keyframes;
} catch {
  console.warn('[laban-ui:animations] framer-motion not available — animations will be no-ops');
  keyframes = (..._args: any[]) => ({});
}

// Lens Shutter — aperture open/close
export const shutterOpen = keyframes`
  0% { clip-path: circle(0% at 50% 50%); opacity: 0; }
  50% { clip-path: circle(30% at 50% 50%); opacity: 0.7; }
  100% { clip-path: circle(50% at 50% 50%); opacity: 1; }
`;

export const shutterClose = keyframes`
  0% { clip-path: circle(50% at 50% 50%); opacity: 1; }
  100% { clip-path: circle(0% at 50% 50%); opacity: 0; }
`;

// Lens Shutter rotation (loading spinner)
export const shutterRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Rainbow Shimmer — gradient sweep
export const rainbowShimmer = keyframes`
  0% { backgroundPosition: '0% 50%'; }
  50% { backgroundPosition: '100% 50%'; }
  100% { backgroundPosition: '0% 50%'; }
`;

// Light Beam — splash screen entrance
export const lightBeam = keyframes`
  0% { opacity: 0; width: 0; }
  50% { opacity: 1; width: 300px; }
  100% { opacity: 0.5; width: 300px; }
`;

// Prism Crystal — rotate + scale reveal
export const prismReveal = keyframes`
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
  100% { transform: scale(1) rotate(360deg); opacity: 1; }
`;

// Frosted Glass hover — lift
export const glassHover = {
  rest: {
    y: 0,
    boxShadow: '0 8px 32px 0 rgba(0, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    transition: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] },
  },
  hover: {
    y: -4,
    boxShadow: '0 12px 40px 0 rgba(153, 0, 255, 0.15)',
    borderColor: 'transparent',
    transition: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] },
  },
};

// Guardian pulse — mascot idle animation
export const guardianPulse = keyframes`
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

// Lumen phoenix — fire flicker
export const phoenixFlicker = keyframes`
  0%, 100% { filter: brightness(1) hue-rotate(0deg); }
  25% { filter: brightness(1.2) hue-rotate(5deg); }
  75% { filter: brightness(0.9) hue-rotate(-5deg); }
`;
