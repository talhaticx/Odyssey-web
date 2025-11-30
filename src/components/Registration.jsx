import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    members: '',
    track: 'WebDev'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration Simulated for Team: ${formData.teamName}`);
  };

  return (
    <section id="registration" style={{ padding: '4rem 20px', background: 'rgba(0,0,0,0.3)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel"
        >
          <h2 className="neon-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Register Your Squad
          </h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>Team Name</label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid var(--primary-color)',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>Team Members (Comma Separated)</label>
              <input
                type="text"
                name="members"
                value={formData.members}
                onChange={handleChange}
                placeholder="Member 1, Member 2..."
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid var(--primary-color)',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>Select Track</label>
              <select
                name="track"
                value={formData.track}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(0,0,0,0.8)',
                  border: '1px solid var(--primary-color)',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              >
                <option value="WebDev">Web Development</option>
                <option value="TUI">TUI / CLI</option>
                <option value="AI">AI/ML Integration</option>
              </select>
            </div>

            <button
              type="button" // Changed from non-standard "=link" to "button"
              className="btn-primary"
              style={{ marginTop: '1rem', width: '100%' }}
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSerhl2qFNf_tZneQnDMvoUvxW0VNJjsgugR1sqS4uuAKlqWDA/viewform?usp=publish-editor', '_blank')}
            >
              Register
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;
