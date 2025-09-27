import { motion } from 'framer-motion';
import { FaRobot, FaPenNib, FaHeadphones } from 'react-icons/fa';
import { useState, useRef } from 'react';

const features = [
  {
    icon: <FaRobot className="text-blue-400" size={32} />,
    title: 'AI Band Score',
    description: 'Get an instant, accurate band score for your speaking and writing tests, powered by our advanced AI.',
  },
  {
    icon: <FaPenNib className="text-blue-400" size={32} />,
    title: 'Unlimited Mock Tests',
    description: 'Practice with a vast library of official-level mock tests to build confidence and improve your timing.',
  },
  {
    icon: <FaHeadphones className="text-blue-400" size={32} />,
    title: 'Expert Speaking Practice',
    description: 'Engage in one-on-one speaking sessions with certified tutors to perfect your fluency and pronunciation.',
  },
];



const Card = ({ feature, index }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.2), transparent 40%)`,
        }}
      />
      <div className="flex justify-center items-center h-16 w-16 rounded-full bg-blue-500/10 mx-auto mb-6">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </motion.div>
  );
};


const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">The Future of IELTS Prep is Here</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">We provide the tools and support you need to excel in every module of the IELTS exam.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Features;