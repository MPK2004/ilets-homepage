const testimonials = [
  {
    quote: "The AI feedback was a game-changer for my writing. I went from a 6.5 to an 8 in just one month!",
    name: 'Priya Sharma',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: "I loved the flexible schedule and the mock tests were exactly like the real exam. Highly recommended.",
    name: 'David Lee',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: "The personalized learning plan helped me focus on my weak areas. I scored a 7.5 in my first attempt!",
    name: 'Sarah Chen',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Loved by Students Worldwide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-lg shadow-lg relative border border-gray-700">
               <span className="absolute top-4 right-4 text-5xl text-blue-500/20">❞</span>
              <p className="text-gray-300 italic mb-6 text-left">"{testimonial.quote}"</p>
              <div className="flex items-center text-left">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-blue-400" />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">IELTS Achiever</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;