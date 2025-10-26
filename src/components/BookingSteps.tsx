import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function BookingSteps() {
  const steps = [
    {
      iconColor: 'bg-yellow-400',
      iconPaths: [
        <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />,
        <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      ],
      title: 'Choose Destination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    },
    {
      iconColor: 'bg-orange-500',
      iconPaths: [
        <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      ],
      title: 'Make Payment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    },
    {
      iconColor: 'bg-teal-500',
      iconPaths: [
        <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      ],
      title: 'Reach Airport on Selected Date',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    },
  ];

  return (
    <ScrollAnimation>
      <section id="bookings" className="relative py-16 lg:py-24 px-4 sm:px-6 md:px-18 lg:px-16 xl:px-24 bg-white overflow-hidden">
        {/* Subtle blue gradient in top right */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Booking Steps */}
            <div>
              <div className="mb-8">
                <span className="text-sm lg:text-base uppercase tracking-wider text-gray-500 font-medium">
                  Easy and Fast
                </span>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2"
                  style={{ fontFamily: 'var(--font-volkhov), serif' }}
                >
                  Book Your Next Trip In 3 Easy Steps
                </h2>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="flex gap-4">
                      {/* Icon Container */}
                      <div className={`${step.iconColor} rounded-xl p-3 flex-shrink-0 transition-transform duration-300 shadow-md`}>
                        <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
                          {step.iconPaths}
                        </svg>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            {/* Right Side - Trip Card */}
            <div className="relative">
              {/* Main Trip Card */}
              <ScrollAnimation delay={200}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02]">
                  {/* Image */}
                  <div className="relative h-80">
                    <Image
                      src="/greece.jpg"
                      alt="Trip To Greece"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                        Trip To Greece
                      </h3>
                      <p className="text-sm text-gray-600">
                        14-29 June | by Robbin jc
                      </p>
                    </div>

                    {/* Action Icons */}
                    <div className="flex gap-4 mb-5 pb-5 border-b border-gray-200">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    </div>

                    {/* Participants */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.196-2.121M9 14a3.001 3.001 0 002-5.609M15 10a3 3 0 11-6 0m3 6h5a2 2 0 002-2V6a2 2 0 00-2-2h-5.35" />
                        </svg>
                        <span className="text-sm text-gray-600">24 people going</span>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Overlay Card - Ongoing Trip To Rome */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 z-20">
                <div className="flex items-center gap-3">
                  {/* Status indicator */}
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Ongoing</p>
                    <h4 className="text-base font-bold text-gray-900">
                      Trip To Rome
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}
