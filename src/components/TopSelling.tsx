import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function TopSelling() {
  const destinations = [
    {
      image: '/rome.jpg',
      name: 'Rome, Italy',
      price: '$5,42k',
      duration: '10 Days Trip',
    },
    {
      image: '/london.jpg',
      name: 'London, UK',
      price: '$4.2k',
      duration: '12 Days Trip',
    },
    {
      image: '/europe.jpg',
      name: 'Full Europe',
      price: '$15k',
      duration: '28 Days Trip',
    },
  ];

  return (
    <ScrollAnimation>
      <section id="flights" className="relative py-12 lg:py-20 px-4 sm:px-6 md:px-18 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-sm lg:text-base uppercase tracking-wider text-gray-400 font-medium">
              Top Selling
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mt-2"
              style={{ fontFamily: 'var(--font-volkhov), serif' }}
            >
              Top Destinations
            </h2>
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
            {destinations.map((destination, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-3">
                  {/* Image */}
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Top row: Name and Price */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                        {destination.name}
                      </h3>
                      <span className="text-lg lg:text-xl font-bold text-gray-900">
                        {destination.price}
                      </span>
                    </div>

                    {/* Bottom row: Duration with icon */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <span className="text-sm lg:text-base">{destination.duration}</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}

