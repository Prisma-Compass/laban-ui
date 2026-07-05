// PRISMA Splash Screen — "The Awakening Prism"
// Source: Cẩm nang Thương hiệu PRISMA.md §5.1

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHASES = {
  BEAM: 'beam',       // White light enters
  REFRACT: 'refract', // Prism refracts into rainbow
  REVEAL: 'reveal',   // Brand tagline appears
  DONE: 'done',       // Transition to app
};

export default function SplashScreen({ onComplete, duration = 5000 }) {
  const [phase, setPhase] = useState(PHASES.BEAM);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(PHASES.REFRACT), duration * 0.3),
      setTimeout(() => setPhase(PHASES.REVEAL), duration * 0.6),
      setTimeout(() => {
        setPhase(PHASES.DONE);
        onComplete?.();
      }, duration),
    ];
    return () => timers.forEach(clearTimeout);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {phase !== PHASES.DONE && (
        <motion.div
          className="prisma-splash"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#090A0F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            zIndex: 9999,
            overflow: 'hidden',
          }}
        >
          {/* Light Beam */}
          <motion.div
            className="light-beam"
            initial={{ opacity: 0, x: '-50vw', y: '-50vh', rotate: 45 }}
            animate={{
              opacity: phase === PHASES.BEAM ? [0, 1, 1] : 0,
              x: phase === PHASES.BEAM ? ['-50vw', '0vw'] : '0vw',
              y: phase === PHASES.BEAM ? ['-50vh', '0vh'] : '0vh',
            }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: '400px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
              filter: 'blur(3px)',
              pointerEvents: 'none',
            }}
          />

          {/* Prism Crystal */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: phase !== PHASES.BEAM ? 1 : 0,
              rotate: phase === PHASES.REFRACT ? 360 : 0,
            }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              width: '140px',
              height: '140px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              filter: 'blur(0.5px)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Lens Shutter inside prism */}
            <motion.div
              animate={{ rotate: phase === PHASES.REFRACT ? 360 : 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.15)',
                background: 'conic-gradient(from 0deg, #FF0055, #FF6A00, #FFD800, #00FF66, #00FFFF, #9900FF, #FF0055)',
                filter: 'blur(2px)',
              }}
            />
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={phase === PHASES.REVEAL ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              fontFamily: '"PRISMA SANS", "Inter", sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              color: '#FFFFFF',
              marginTop: '40px',
              letterSpacing: '-0.02em',
              textShadow: '0 0 60px rgba(0, 255, 255, 0.3)',
            }}
          >
            PRISMA
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={phase === PHASES.REVEAL ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="prisma-tagline"
            style={{ marginTop: '12px' }}
          >
            Unlocking Potential, Structuring Life.
          </motion.p>

          {/* Rainbow particles */}
          {phase === PHASES.REFRACT && (
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
                  transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatDelay: 1 }}
                  style={{
                    position: 'absolute',
                    top: `${30 + Math.random() * 40}%`,
                    left: `${30 + Math.random() * 40}%`,
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: ['#FF0055','#FF6A00','#FFD800','#00FF66','#00FFFF','#9900FF'][i % 6],
                    filter: 'blur(1px)',
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
