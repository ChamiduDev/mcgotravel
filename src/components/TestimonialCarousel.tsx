'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

interface TestimonialData {
  description: string;
  image: string;
  name: string;
  handle: string;
}

interface TestimonialCarouselProps {
  data: TestimonialData[];
}

export default function TestimonialCarousel({ data }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const current = data[activeIndex];

  return (
    <ScrollAnimation>
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 md:px-18 lg:px-16 xl:px-24 bg-white">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-sm lg:text-base uppercase tracking-wider text-orange-600 font-semibold">
              Testimonials
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mt-3"
              style={{ fontFamily: 'var(--font-volkhov), serif' }}
            >
              What People Say About Us.
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 transition-all duration-500 hover:shadow-3xl border border-orange-100">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div>

              {/* User Info and Image */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full bg-white p-1">
                      <Image
                        src={current.image}
                        alt={current.name}
                        width={88}
                        height={88}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {current.name}
                  </h3>
                  <p className="text-sm text-orange-600 font-medium">
                    {current.handle}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                "{current.description}"
              </p>

              {/* Decorative line */}
              <div className="mt-8 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-blue-400 rounded-full"></div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-orange-500 scale-125 ring-4 ring-orange-100'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl flex items-center justify-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-110 group"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 group"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}

