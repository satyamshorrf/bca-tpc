import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Announcement from './AnnouncementPage';

const HomePage = () => {
  const images = [
    'TPC.jpg',
 
    '1.jpg',
    'un1.jpg',
    'un2.jpg',
    'un3.jpg',
   
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center  p-2">
      
    
      <div className="relative  w-full lg:w-[100rem] h-[80vh] sm:h-[60vh] lg:h-[90vh] overflow-hidden group rounded-md">
        <motion.img
          src={images[current]}
          alt={`slide-${current}`}
          className="w-full h-full object-cover transition-all duration-500"
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full bg-white ${
                index === current ? 'opacity-100' : 'opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

     
      <div className=" relative left-[1rem] right-[2rem] w-full lg:w-[45rem] h-[60vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden group rounded-md ">
        <Announcement />
      </div>
    </div>
  );
};

export default HomePage;
