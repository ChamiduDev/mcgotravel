import Image from 'next/image';
import Link from 'next/link';
import TextHighlighter from "@/components/ui/text-highlighter";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 overflow-hidden bg-white">
      {/* Curved background split */}
      <div className="absolute inset-0 pointer-events-none">
        {/* White left side */}
        <div className="absolute inset-0 bg-white"></div>
        {/* Orange/peach right side with curve */}
        <div className="absolute inset-y-0 right-0 w-[60%] lg:w-[55%] bg-gradient-to-br from-orange-50 via-orange-50/80 to-orange-100/40" 
             style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
        </div>
      </div>

      {/* Decore.png decorative image */}
      <div className="absolute top-0 right-0 w-[50%] lg:w-[45%] h-full pointer-events-none">
        <Image
          src="/Decore.png"
          alt="Decorative background"
          fill
          className="object-cover object-right-top opacity-70"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-18 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-16">
          
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8 z-20 pt-8 lg:pt-12 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-block">
              <span className="text-orange-500 text-sm lg:text-lg font-medium uppercase tracking-wider">
                Best Destinations Around The World
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[72px] 2xl:text-[84px] font-bold text-gray-900 leading-[1.1]" style={{ fontFamily: 'var(--font-volkhov), serif' }}>
              Travel,{' '}
              <span className="relative inline-block">
                <TextHighlighter type="wavy" highlightColor="#FF9800">
                <span className="relative z-10">enjoy</span>
                </TextHighlighter>
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-orange-300 opacity-30 rounded-sm -z-0"></span>
              </span>
              <br />
              and live a new
              <br />
              and full life
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>

            {/* Buttons */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              {/* Find out more button */}
              <Link
                href="#find-more"
                className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-orange-500 text-white rounded-lg font-semibold text-base lg:text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Find out more
              </Link>

              {/* Play Demo button */}
              <Link
                href="#play-demo"
                className="inline-flex items-center gap-2 lg:gap-3 text-gray-900 font-semibold text-base lg:text-lg group"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-orange-300">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="hidden sm:inline group-hover:text-orange-500 transition-colors duration-300">Play Demo</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative lg:h-[550px] xl:h-[600px] mt-8 lg:mt-0">
            {/* Girl image positioned on the right */}
            <div className="relative h-[450px] lg:h-full flex items-end justify-center lg:justify-end lg:pr-4 xl:pr-8">
              <div className="relative w-full max-w-sm lg:max-w-none lg:w-auto">
                <Image
                  src="/girl.png"
                  alt="Traveler"
                  width={550}
                  height={650}
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating airplane decorations */}
            <div className="absolute top-10 left-8 hidden lg:block">
              <svg
                className="w-12 h-12 text-blue-400 opacity-90 animate-bounce-slow"
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
            </div>

            <div className="absolute bottom-40 right-4 lg:right-8 hidden lg:block">
              <svg
                className="w-16 h-16 text-blue-300 opacity-70 animate-bounce-slow-delay"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

