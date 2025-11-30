import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Code, Terminal, Brain, ShieldAlert, CheckCircle } from 'lucide-react';

const Guidebook = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="guidebook" className="container" style={{ padding: '5rem 20px' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="neon-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '3rem' }}>
          Participant Guidebook
        </h2>

        {/* Logistics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <motion.div 
            variants={itemVariants} 
            className="glass-panel" 
            style={{ textAlign: 'center', cursor: 'default' }}
            whileHover={{ scale: 1.05, borderColor: 'var(--primary-color)', boxShadow: '0 0 20px rgba(0, 243, 255, 0.3)' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Clock size={48} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
            <h3>Duration</h3>
            <p>5 Hours of Intense Coding</p>
          </motion.div>
          <motion.div 
            variants={itemVariants} 
            className="glass-panel" 
            style={{ textAlign: 'center', cursor: 'default' }}
            whileHover={{ scale: 1.05, borderColor: 'var(--secondary-color)', boxShadow: '0 0 20px rgba(188, 19, 254, 0.3)' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users size={48} color="var(--secondary-color)" style={{ marginBottom: '1rem' }} />
            <h3>Team Size</h3>
            <p>1 - 4 Members</p>
          </motion.div>
          <motion.div 
            variants={itemVariants} 
            className="glass-panel" 
            style={{ textAlign: 'center', cursor: 'default' }}
            whileHover={{ scale: 1.05, borderColor: 'var(--accent-color)', boxShadow: '0 0 20px rgba(255, 230, 0, 0.3)' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ShieldAlert size={48} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
            <h3>Eligibility</h3>
            <p>UET Lahore Undergrads</p>
          </motion.div>
        </div>

        {/* Rules Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 className="neon-text-secondary" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
            ⚙️ Rules of the Sprint
          </h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
             {[
               "Project Selection: You must select ONE project from the list provided within the first 30 mins.",
               "Originality: Core logic must be coded during the 5-hour sprint.",
               "Resources: Internet & AI (Gemini, ChatGPT) allowed!",
               "Submission: Hard deadline. Late submissions disqualified.",
               "Conduct: Uphold UET Code of Conduct."
             ].map((rule, index) => (
               <motion.li 
                 key={index}
                 variants={itemVariants}
                 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}
               >
                 <CheckCircle size={20} color="var(--primary-color)" />
                 {rule}
               </motion.li>
             ))}
          </ul>
        </div>

        {/* Tracks Section */}
        <h3 className="neon-text-secondary" style={{ marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
          💻 Technical Tracks
        </h3>
        <p style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
          Note: These are the types of projects available. Your team must choose <strong>only one</strong> project from a specific track.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <motion.div 
            variants={itemVariants} 
            className="glass-panel" 
            style={{ borderColor: 'var(--primary-color)', cursor: 'pointer' }}
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(0, 243, 255, 0.1)', boxShadow: '0 0 30px rgba(0, 243, 255, 0.2)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Code size={32} color="var(--primary-color)" />
              <h4>Web Development</h4>
            </div>
            <p>Functional web apps, front-end design, back-end APIs. Focus on UI/UX and data handling.</p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="glass-panel" 
            style={{ borderColor: 'var(--secondary-color)', cursor: 'pointer' }}
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(188, 19, 254, 0.1)', boxShadow: '0 0 30px rgba(188, 19, 254, 0.2)' }}
          >
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Terminal size={32} color="var(--secondary-color)" />
              <h4>TUI / CLI</h4>
            </div>
            <p>Command-Line interfaces, text-based games, automation tools. Focus on logic and efficiency.</p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="glass-panel" 
            style={{ borderColor: 'var(--accent-color)', cursor: 'pointer' }}
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 230, 0, 0.1)', boxShadow: '0 0 30px rgba(255, 230, 0, 0.2)' }}
          >
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Brain size={32} color="var(--accent-color)" />
              <h4>AI/ML Integration</h4>
            </div>
            <p>Utilize pre-trained models and APIs. Can be a web app or standalone script—focus is on creative integration.</p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Guidebook;
