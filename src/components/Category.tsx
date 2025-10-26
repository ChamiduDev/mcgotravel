import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function Category() {
  const services = [
    {
      icon: '/Calculated Weather .png',
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      icon: '/Best Flightss.png',
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
      icon: '/Local Events.png',
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    },
    {
      icon: '/Customization.png',
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers',
    },
  ];

  return (
    <ScrollAnimation>
      <section id="destinations" className="relative py-12 lg:py-20 px-4 sm:px-6 md:px-18 lg:px-16 xl:px-24 bg-white overflow-hidden">
      {/* Decorative grid pattern in background */}
      <div className="absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 pointer-events-none">
        <div className="grid grid-cols-6 gap-2 opacity-30">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className="text-gray-400 text-xs lg:text-base"
              style={{
                color: i % 7 === 0 ? '#ef4444' : i % 9 === 0 ? '#3b82f6' : '#d1d5db',
              }}
            >
              +
            </div>
          ))}
        </div>
      </div>

      {/* Decorative orange shape */}
      <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-72 lg:h-72 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <span className="text-sm lg:text-base uppercase tracking-wider text-gray-600 font-medium">
            Category
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-bold text-gray-900 mt-2"
            style={{ fontFamily: 'var(--font-volkhov), serif' }}
          >
            We Offer Best Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div
                className="bg-white rounded-2xl p-6 lg:p-8 transition-all duration-300 cursor-pointer group text-center flex flex-col items-center shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-orange-200"
              >
              {/* Icon without background */}
              <div className="flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
    </ScrollAnimation>
  );
}

