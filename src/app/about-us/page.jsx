import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FadeUp from "@/components/animations/FadeUp";
import Link from "next/link";

export const metadata = {
  title: "About Us | DREAMS RENT",
};

export default function AboutUsPage() {
  return (
    <main className="bg-background min-h-screen text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      {/* Hero / Breadcrumb */}
      <section className="relative py-24 md:py-32 bg-surface-container-low border-b border-surface-container-highest overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <FadeUp>
            <h1 className="text-display-lg font-display-lg mb-4 text-on-surface tracking-tight">About Us</h1>
            <nav className="flex justify-center items-center gap-2 text-label-md font-label-md uppercase tracking-widest text-primary">
              <Link className="hover:text-on-surface transition-colors" href="/">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface-variant">Pages</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface-variant">About Us</span>
            </nav>
          </FadeUp>
        </div>
      </section>

      {/* About Our Company Section */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp delay={0.1}>
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary-container opacity-50"></div>
              <div className="bg-primary-container/10 p-4 rounded-xl">
                <img 
                  alt="Luxury Car" 
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyA_mmpIlzrPGuJIi5Zf1xB5_8yBsUy4kLWvjEZtcLH6o1fZiWaRMaW8erenPVe2ggoDHn-5ghmdPv61lSfod6AbcChF1g_UUHBPvT8AC-WRzpGDTQNRbhxyf3RCbI6FSrDALL2KSmCEvNyVIREaiCrUWDjb2LEpvRiHX6TYCIuLyzP24zdli4ES-yL4NoveO2Av0tqbsCmVw9shdjLyC6EZ6tR_20xUwnr5u8vN4QqydSPAwrCDIS6h3XuJ-2eCr4NDnVGrK7neQ" 
                />
              </div>
              <div className="absolute bottom-12 -left-8 bg-primary-container text-on-primary-container p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-headline-md text-headline-md font-black">12+</p>
                <p className="text-label-md font-label-md uppercase">Years Experience</p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div>
              <p className="text-primary font-bold tracking-widest uppercase mb-4 text-label-md font-label-md">About Our Company</p>
              <h2 className="text-headline-lg font-headline-lg mb-6 leading-tight">Best Solution For Premium Vehicle Services</h2>
              <p className="text-on-surface-variant text-body-lg font-body-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Verified luxury fleet',
                  '24/7 Premium support',
                  'Seamless booking process',
                  'Professional chauffeurs'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <span className="text-body-md font-body-md text-on-surface-variant">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <FadeUp>
            <h2 className="text-headline-lg font-headline-lg mb-4">How It Works</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Discover how easy it is to rent your dream car with our streamlined three-step process.</p>
          </FadeUp>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative">
            {/* Connectors for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px border-t border-dashed border-outline-variant -translate-y-12"></div>
            {[
              { icon: 'location_on', title: '1. Choose Locations', desc: 'Select your preferred pick-up and drop-off points from our wide network of locations.' },
              { icon: 'calendar_month', title: '2. Pick-Up Date', desc: 'Select the dates and times that work best for your travel schedule.' },
              { icon: 'directions_car', title: '3. Book your Car', desc: 'Finalize your selection and get ready for an unparalleled driving experience.' }
            ].map((step, idx) => (
              <FadeUp key={idx} delay={0.1 * idx} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-primary-container flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300 z-10">
                  <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-headline-md font-headline-md mb-2 text-on-surface">{step.title}</h3>
                <p className="text-on-surface-variant text-body-md font-body-md">{step.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Facts By The Numbers */}
      <section className="relative py-section-gap overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1500')] bg-fixed bg-center bg-cover opacity-5"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              { icon: 'sentiment_very_satisfied', count: '5K+', label: 'Happy Customers' },
              { icon: 'garage', count: '840+', label: 'Count of Cars' },
              { icon: 'car_repair', count: '206K+', label: 'Car Solutions' },
              { icon: 'speed', count: '66K+', label: 'Total Kilometers' }
            ].map((fact, idx) => (
              <FadeUp key={idx} delay={0.1 * idx}>
                <div className="bg-surface-container-high/80 backdrop-blur-md p-8 rounded-xl border border-outline-variant text-center hover:border-primary-container transition-colors">
                  <div className="text-primary-container mb-4">
                    <span className="material-symbols-outlined text-4xl">{fact.icon}</span>
                  </div>
                  <p className="text-headline-lg font-headline-lg text-primary-container">{fact.count}</p>
                  <p className="text-label-md font-label-md uppercase tracking-wider text-on-surface-variant mt-2">{fact.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="text-headline-lg font-headline-lg mb-4 text-on-surface">Why Choose Us</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">We provide the best car rental services with a focus on quality, speed, and customer satisfaction.</p>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            { icon: 'auto_awesome', title: 'Easy & Fast Booking', desc: 'Our intuitive platform allows you to book your preferred vehicle in just a few clicks, saving you valuable time.' },
            { icon: 'pin_drop', title: 'Many Pickup Locations', desc: 'With hundreds of strategic locations worldwide, we ensure you can start your journey wherever you are.' },
            { icon: 'thumb_up', title: 'Customer Satisfaction', desc: 'Our commitment to excellence is reflected in our thousands of positive reviews from happy travelers globally.' }
          ].map((item, idx) => (
            <FadeUp key={idx} delay={0.1 * idx}>
              <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant hover:border-primary-container transition-all group h-full">
                <div className="w-16 h-16 bg-surface-container-high rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-headline-md font-headline-md mb-4 text-on-surface">{item.title}</h3>
                <p className="text-on-surface-variant">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-gap bg-surface-container-low overflow-hidden relative">
        <div className="absolute -right-20 top-0 text-[200px] font-black opacity-5 select-none" style={{ WebkitTextStroke: '1px rgba(255,192,129,0.5)', color: 'transparent' }}>REVIEWS</div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-16">
            <FadeUp>
              <h2 className="text-headline-lg font-headline-lg mb-4 text-on-surface">What People Say About Us?</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Real stories from real customers who have experienced the Dreams Rent difference.</p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            <FadeUp delay={0.1}>
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant relative">
                <span className="material-symbols-outlined text-6xl text-primary-container/20 absolute top-4 right-8">format_quote</span>
                <div className="flex items-center gap-4 mb-6">
                  <img alt="Client" className="w-16 h-16 rounded-full object-cover border-2 border-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtFGraNSDz2D0dSNcEJEkIUHkDptKfxF8v3Kjs6sGSqiLmdgsHxC_S8BUlypi88IyEsdByq_91UcC4_XFTumVsBMgDeHhKZjB7F4jSJKRpDpOBf-SwwDjSutMEgOQrRLjhghB2D9vJ9kJos2W0iH-JfLOrPkRU3e93D-SMliUFIRwgYm1FevlyX90ij8KGD5cro8HBppr-w5Bke0x-DnGLnzwZHzNPqY7qPJvHM3D79W2LKmPeuIdOKGW_pLEKXLBGku4Ve4LBM-0" />
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface">Rabien Ustoc</h4>
                    <div className="flex text-primary-container">
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="ml-2 text-on-surface-variant text-label-md">(5.0)</span>
                    </div>
                  </div>
                </div>
                <p className="text-body-lg italic text-on-surface-variant">"The service was impeccable. From the moment I booked the Porsche online to the actual pickup, everything was handled with extreme professionalism. Highly recommended for luxury travel."</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant relative">
                <span className="material-symbols-outlined text-6xl text-primary-container/20 absolute top-4 right-8">format_quote</span>
                <div className="flex items-center gap-4 mb-6">
                  <img alt="Client" className="w-16 h-16 rounded-full object-cover border-2 border-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRPAYsINfQ5xapP-iY1Y1keOEocepB6wE4igdrvQc_OjpNCEEkOiM3x2gOxIgh_2pwoWZfEct4eHhtqWo04pl7PMTCMUeSeqIOIrfiYicldMfKD9tBx89s0fl4fNcY7oWtBwTfky-ZOwJV6uhPJ9QHsobt5YpYf5uDNukYMnI28fArsFc7ROJv1dKRl5SaSUCso5VdzD3wOHXBbv9zTokb75b72ocpgL63ALMBlnso-_-rYVjvh-5mnh_WXIm-amnUmUZaLcp8Acs" />
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface">Valerie L. Ellis</h4>
                    <div className="flex text-primary-container">
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="ml-2 text-on-surface-variant text-label-md">(5.0)</span>
                    </div>
                  </div>
                </div>
                <p className="text-body-lg italic text-on-surface-variant">"Best car rental experience I've had in years. The car was spotless, the pickup was instant, and the staff was incredibly helpful. I won't use any other service for my business trips."</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section-gap max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="text-headline-lg font-headline-lg mb-4 text-on-surface">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant">Answers to the most common questions about our premium rental services.</p>
          </FadeUp>
        </div>
        <div className="space-y-4">
          {[
            { q: 'What is about rental car deals?', a: 'We offer exclusive seasonal deals and long-term rental discounts for our premium fleet. Contact our support team to learn more about current promotions.' },
            { q: 'In which areas do you operate?', a: 'We currently operate in over 50 major cities across North America, Europe, and Asia, with primary hubs at international airports.' },
            { q: 'What documents are required for rental?', a: 'You will need a valid driver\'s license (international if applicable), a major credit card in the driver\'s name, and a valid passport or ID.' },
            { q: 'Can I cancel my booking for free?', a: 'Yes, most bookings can be cancelled with a full refund up to 48 hours before the scheduled pick-up time.' }
          ].map((faq, idx) => (
            <FadeUp key={idx} delay={0.1 * idx}>
              <details className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant open:border-primary-container">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-on-surface group-hover:text-primary transition-colors">
                  {faq.q}
                  <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  {faq.a}
                </div>
              </details>
            </FadeUp>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
