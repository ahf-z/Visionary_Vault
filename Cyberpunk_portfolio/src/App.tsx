import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Konami from 'react-konami-code';

const App = () => {
  const [isTerminalVisible, setIsTerminalVisible] = useState(true);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isDestroying, setIsDestroying] = useState(false);

  const handleKonami = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 5000);
  };

  const handleDestroy = () => {
    setIsDestroying(true);
    // Add cool destruction effects here
    setTimeout(() => {
      setIsDestroying(false);
      setIsTerminalVisible(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-dark-terminal p-4">
      <Konami action={handleKonami} />
      
      <AnimatePresence>
        {isTerminalVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto"
          >
            <div className="terminal-window">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-cyber text-matrix-green">
                  <TypeAnimation
                    sequence={[
                      '> INITIALIZING PORTFOLIO...',
                      1000,
                      '> WELCOME TO THE MATRIX...',
                      1000,
                      '> SYSTEM READY',
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                  <span className="terminal-cursor" />
                </h1>
              </div>

              <div className="space-y-4">
                <section className="mb-8">
                  <h2 className="text-xl font-cyber text-cyber-blue mb-2">{'>'} ABOUT_ME.exe</h2>
                  <p className="text-matrix-green">
                    Greetings, fellow human! I'm a code wizard who turns coffee into bugs and bugs into features.
                    When I'm not debugging the matrix, I'm probably debugging my life choices.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-cyber text-cyber-blue mb-2">{'>'} SKILLS.sys</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'Cloud'].map((skill) => (
                      <div key={skill} className="cyber-button text-center">
                        {skill}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-cyber text-cyber-blue mb-2">{'>'} PROJECTS.dat</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((project) => (
                      <motion.div
                        key={project}
                        whileHover={{ scale: 1.05 }}
                        className="terminal-window cursor-pointer"
                      >
                        <h3 className="text-neon-pink">Project {project}</h3>
                        <p className="text-matrix-green">Click to explore the matrix...</p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-cyber text-cyber-blue mb-2">{'>'} AI_NONSENSE.bin</h2>
                  <div className="terminal-window">
                    <p className="text-neon-pink">
                      "This developer's code is so clean, it makes my circuits tingle!"
                      - AI Overlord 9000
                    </p>
                  </div>
                </section>

                <button
                  onClick={handleDestroy}
                  className="cyber-button w-full mt-8"
                >
                  [DESTROY PORTFOLIO]
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80"
        >
          <div className="text-4xl font-cyber text-neon-pink animate-glitch">
            YOU FOUND THE SECRET!
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
