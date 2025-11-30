import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at center, #0a0a12 0%, #000000 100%)',
      perspective: '1000px'
    }}>
      {/* Animated Grid Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
        opacity: 0.3,
        zIndex: 0
      }}></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ zIndex: 1, textAlign: 'center', position: 'relative' }}
      >
        {/* QUANTUM CORE ANIMATION */}
        <div className="hero-animation-container" style={{ marginBottom: '4rem', position: 'relative', height: '400px', width: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}>
          
          {/* Central Singularity */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], boxShadow: ['0 0 20px var(--primary-color)', '0 0 60px var(--secondary-color)', '0 0 20px var(--primary-color)'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: '40px',
              height: '40px',
              background: '#fff',
              borderRadius: '50%',
              position: 'absolute',
              zIndex: 10,
              filter: 'blur(2px)'
            }}
          />

          {/* Rotating Rings - 3D Gyroscope Effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotateX: 360, rotateY: 360, rotateZ: 360 }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity, 
                ease: "linear", 
                delay: i * 0.5 
              }}
              style={{
                width: `${200 + i * 30}px`,
                height: `${200 + i * 30}px`,
                border: `2px solid ${i % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)'}`,
                borderRadius: '50%',
                position: 'absolute',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                boxShadow: `0 0 15px ${i % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)'}`,
                transformStyle: 'preserve-3d'
              }}
            />
          ))}

          {/* Orbital Particles */}
          {[...Array(12)].map((_, i) => (
             <motion.div
                key={`p-${i}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  transformStyle: 'preserve-3d'
                }}
             >
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: 'var(--accent-color)',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 0 10px var(--accent-color)'
                }} />
             </motion.div>
          ))}

        </div>

        <h1 className="glitch neon-text" data-text="ODYSSEY '25" style={{ marginBottom: '0.5rem' }}>
          ODYSSEY '25
        </h1>
        
        <h2 className="neon-text-secondary" style={{ marginBottom: '4rem', textTransform: 'uppercase' }}>
          Code <span style={{ color: 'var(--primary-color)' }}>//</span> Create <span style={{ color: 'var(--primary-color)' }}>//</span> Conquer
        </h2>

        <motion.button
          whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(255,255,255)", boxShadow: "0 0 20px var(--primary-color)" }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
          onClick={() => document.getElementById('registration').scrollIntoView()}
          style={{ fontSize: '1.5rem', padding: '20px 50px' }}
        >
          Initialize Sequence
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
