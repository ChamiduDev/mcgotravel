'use client';

import Image from 'next/image';

interface Testimonial {
  name: string;
  handle: string;
  review: string;
  avatar: string | null;
  gradient?: string;
  initials?: string;
}

interface KineticTestimonialsProps {
  testimonials: Testimonial[];
  cardClassName?: string;
  avatarClassName?: string;
  desktopColumns?: number;
  tabletColumns?: number;
  mobileColumns?: number;
  speed?: number;
  title?: string;
  subtitle?: string;
}

export default function KineticTestimonials({
  testimonials,
  cardClassName = 'hover:scale-105 shadow-lg',
  avatarClassName = 'ring-2 ring-orange-500',
  desktopColumns = 3,
  tabletColumns = 3,
  mobileColumns = 1,
  speed = 1.5,
  title = 'Customer Reviews',
  subtitle = 'What our users think about our product',
}: KineticTestimonialsProps) {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const reversedTestimonials = [...testimonials].reverse();

  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 md:px-18 lg:px-16 xl:px-24 overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-blue-50/20">
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm lg:text-base uppercase tracking-wider text-orange-600 font-semibold">
            {title}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mt-3"
            style={{ fontFamily: 'var(--font-volkhov), serif' }}
          >
            {subtitle}
          </h2>
        </div>

        {/* Scrolling testimonials container */}
        <div className="overflow-hidden relative">
          {/* First row - scrolling left */}
          <div 
            className="flex gap-6"
            style={{
              animation: `scroll-left ${speed * 60}s linear infinite`
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`left-${index}`}
                className={`flex-shrink-0 w-[400px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-transform duration-300 ${cardClassName}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold ${avatarClassName} ${
                    !testimonial.avatar && `bg-gradient-to-br ${testimonial.gradient || 'from-orange-400 to-blue-500'}`
                  } ${testimonial.avatar && 'overflow-hidden'}`}>
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-sm">{testimonial.initials || 'AA'}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
                    <p className="text-sm text-orange-600">{testimonial.handle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{testimonial.review}</p>
              </div>
            ))}
          </div>

          {/* Second row - scrolling right */}
          <div 
            className="flex gap-6 mt-6 mb-8"
            style={{
              animation: `scroll-right ${speed * 70}s linear infinite`
            }}
          >
            {[...reversedTestimonials, ...reversedTestimonials].map((testimonial, index) => (
              <div
                key={`right-${index}`}
                className={`flex-shrink-0 w-[400px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-transform duration-300 ${cardClassName}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold ${avatarClassName} ${
                    !testimonial.avatar && `bg-gradient-to-br ${testimonial.gradient || 'from-orange-400 to-blue-500'}`
                  } ${testimonial.avatar && 'overflow-hidden'}`}>
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-sm">{testimonial.initials || 'AA'}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
                    <p className="text-sm text-orange-600">{testimonial.handle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

