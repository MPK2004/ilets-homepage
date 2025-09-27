import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative text-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
<motion.h1 
  variants={itemVariants} 
  className="
    text-5xl md:text-7xl font-extrabold leading-tight mb-4 
    bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400
    animate-[text-gradient-animation_3s_ease-in-out_infinite] bg-[length:200%_auto]
  "
>
  Unlock Your IELTS Potential
</motion.h1>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6 text-blue-400"
          >
            with AI-Powered Prep
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Experience a smarter way to prepare. Personalized feedback, unlimited mock tests, and expert guidance—all in one place.
          </motion.p>
          <motion.button 
            variants={itemVariants}
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;