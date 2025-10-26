'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      avatar: '/girl.png',
      quote: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
      name: 'Mike taylor',
      location: 'Lahore, Pakistan',
    },
    {
      avatar: '/girl.png',
      quote: 'McGo has helped me to see the world in a better light. The trips are well-organized and the destinations are breathtaking.',
      name: 'Chris Thomas',
      location: 'CEO of Red Button',
    },
    {
      avatar: '/girl.png',
      quote: 'The booking process was smooth and the experience was unforgettable. Highly recommend for anyone looking for adventure.',
      name: 'Sarah Johnson',
      location: 'New York, USA',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <ScrollAnimation>
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 md:px-18 lg:px-16 xl:px-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/20">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Title and Navigation Dots */}
            <div>
              <div className="mb-10">
                <span className="text-sm lg:text-base uppercase tracking-wider text-blue-600 font-semibold">
                  Testimonials
                </span>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mt-3"
                  style={{ fontFamily: 'var(--font-volkhov), serif' }}
                >
                  What People Say{' '}
                  <br />
                  <span className="ml-6">About Us.</span>
                </h2>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === activeIndex ? 'bg-blue-600 scale-125 ring-4 ring-blue-100' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Testimonial Cards */}
            <div className="relative">
              {/* Testimonial Cards Container */}
              <div className="relative h-[450px]">
                {/* Active Testimonial Card */}
                <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 lg:p-10 transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] border border-gray-100">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8">
                    <svg className="w-12 h-12 text-blue-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  {/* Avatar */}
                  <div className="mb-8">
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-full p-1 animate-pulse"></div>
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1.5">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <Image
                            src={testimonials[activeIndex].avatar}
                            alt={testimonials[activeIndex].name}
                            width={84}
                            height={84}
                            className="rounded-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8 italic relative z-10">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  {/* Name and Location */}
                  <div className="border-t-2 border-gradient-to-r from-blue-500 to-purple-500 bg-gradient-to-r from-blue-500 to-purple-500 h-0.5 mb-6 mt-6"></div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>

                {/* Next Testimonial Card (Partially Visible) */}
                {testimonials.length > 1 && (
                  <div className="absolute bottom-0 left-4 right-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 transform translate-y-12 opacity-60 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-300 to-purple-300 p-1 flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-gray-200"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-700 mb-1">
                          {testimonials[(activeIndex + 1) % testimonials.length].name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {testimonials[(activeIndex + 1) % testimonials.length].location}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 space-y-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-xl flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 group"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 group"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}

