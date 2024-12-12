import React, { useState, useEffect } from "react";
import image1 from '../assets/salah.jpg'
import image2 from '../assets/tennis.jpg'
import image3 from '../assets/boxing.jpg'


export default function HeroCarousel() {
    const slides = [
        {
          id: 1,
          image: image1
        },
        {
          id: 2,
          image: image2
        },
        {
          id: 3,
          image: image3
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      // Automatically change slide every 7 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 7000); // 7000ms = 7 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, []);
    
      return (
        <div className="relative w-full h-[600px] overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            ))}
          </div>
    
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &#8249; {/* Left Arrow */}
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &#8250; {/* Right Arrow */}
          </button>
    
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      );
    }