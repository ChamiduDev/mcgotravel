import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import TopSelling from "@/components/TopSelling";
import BookingSteps from "@/components/BookingSteps";
import KineticTestimonials from "@/components/KineticTestimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: 'Ava Thompson',
    handle: '@ava_thompson',
    review: 'McGo is a game-changer! The booking process is smooth, and the destinations are absolutely stunning.',
    avatar: null,
    gradient: 'from-pink-400 to-rose-500',
    initials: 'AT',
  },
  {
    name: 'Elijah Carter',
    handle: '@elijah_ui',
    review: 'Absolutely mesmerizing! The attention to detail in McGo\'s service is incredible.',
    avatar: null,
    gradient: 'from-blue-400 to-cyan-500',
    initials: 'EC',
  },
  {
    name: 'Sophia Martinez',
    handle: '@sophia_codes',
    review: 'As a frequent traveler, I love how intuitive and powerful McGo is. It\'s a must-have for planning trips!',
    avatar: null,
    gradient: 'from-purple-400 to-indigo-500',
    initials: 'SM',
  },
  {
    name: 'Michael Brown',
    handle: '@michaelb_dev',
    review: 'This changed the way I travel. The booking experience is top-notch!',
    avatar: null,
    gradient: 'from-orange-400 to-amber-500',
    initials: 'MB',
  },
  {
    name: 'Liam Anderson',
    handle: '@liamdesigns',
    review: 'The best travel platform I\'ve ever used! Seamless booking and amazing destinations.',
    avatar: null,
    gradient: 'from-green-400 to-emerald-500',
    initials: 'LA',
  },
  {
    name: 'Olivia Hayes',
    handle: '@olivia_h',
    review: 'This is absolutely mind-blowing. McGo makes travel planning effortless and fun!',
    avatar: null,
    gradient: 'from-blue-500 to-violet-500',
    initials: 'OH',
  },
  {
    name: 'Daniel Lee',
    handle: '@daniel_dev',
    review: 'Brilliant execution! The user experience feels effortless and elegant.',
    avatar: null,
    gradient: 'from-teal-400 to-cyan-500',
    initials: 'DL',
  },
  {
    name: 'Sarah Green',
    handle: '@sarahgreen',
    review: 'I can\'t stop recommending McGo. It makes travel planning feel premium!',
    avatar: null,
    gradient: 'from-rose-400 to-pink-500',
    initials: 'SG',
  },
  {
    name: 'Mia Patel',
    handle: '@miapatel',
    review: 'McGo took my travel experience to the next level. Highly recommend!',
    avatar: null,
    gradient: 'from-yellow-400 to-orange-500',
    initials: 'MP',
  },
  {
    name: 'James Walker',
    handle: '@jameswalker',
    review: 'This is the future of travel booking! Can\'t believe something this good exists.',
    avatar: null,
    gradient: 'from-indigo-500 to-purple-500',
    initials: 'JW',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Category />
      <TopSelling />
      <BookingSteps />
      <KineticTestimonials 
        testimonials={testimonials}
        cardClassName="hover:scale-105 shadow-lg"
        avatarClassName="ring-2 ring-orange-500"
        speed={1.5}
        title="Customer Reviews"
        subtitle="What our users think about McGo"
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
