import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import MagicButton from './MagicButton';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10 overflow-hidden"
        >
          <div className="p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="text-center md:text-left z-10">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Ace Your IELTS?</h2>
              <p className="text-gray-300 mb-8 max-w-xl">
                Join thousands of successful students who have achieved their dream scores with our platform.
              </p>
              <MagicButton>
                <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                  Get Started for Free
                </button>
              </MagicButton>
            </div>
            <div className="relative hidden md:flex items-center justify-center h-full">
              <div className="transform -rotate-12">
                <FaPaperPlane className="text-blue-500/10 text-[250px] absolute inset-0 m-auto transform -translate-x-4 -translate-y-4" />
                <FaPaperPlane className="text-blue-500/20 text-[250px] absolute inset-0 m-auto" />
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;