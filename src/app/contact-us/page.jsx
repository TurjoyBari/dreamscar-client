import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FadeUp from "@/components/animations/FadeUp";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | DREAMS RENT",
};

export default function ContactUsPage() {
  return (
    <main className="bg-background min-h-screen text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      {/* Breadcrumb Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-surface-container-highest">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://placehold.co/1920x400/131313/393939?text=Contact+Background')" }}
        >
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <FadeUp>
            <h1 className="text-display-lg font-display-lg mb-4 text-on-surface tracking-tight">Contact Us</h1>
            <nav className="flex justify-center items-center gap-2 text-label-md font-label-md uppercase tracking-widest text-primary">
              <Link className="hover:text-on-surface transition-colors" href="/">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface-variant">Pages</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface-variant">Contact Us</span>
            </nav>
          </FadeUp>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-16 -mt-10 relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Card */}
          <FadeUp delay={0.1}>
            <div className="bg-surface-container border border-surface-container-highest p-8 rounded-xl text-center group hover:border-primary/50 transition-colors shadow-2xl h-full">
              <div className="w-16 h-16 bg-primary-container/10 text-primary-container rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined text-3xl">call</span>
              </div>
              <h3 className="text-headline-md font-headline-md mb-2 text-on-surface">Phone Number</h3>
              <p className="text-on-surface-variant text-body-md font-body-md">(888) 888-8888</p>
            </div>
          </FadeUp>

          {/* Email Card */}
          <FadeUp delay={0.2}>
            <div className="bg-surface-container border border-surface-container-highest p-8 rounded-xl text-center group hover:border-primary/50 transition-colors shadow-2xl h-full">
              <div className="w-16 h-16 bg-primary-container/10 text-primary-container rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <h3 className="text-headline-md font-headline-md mb-2 text-on-surface">Email Address</h3>
              <p className="text-on-surface-variant text-body-md font-body-md">johnsmith@example.com</p>
            </div>
          </FadeUp>

          {/* Location Card */}
          <FadeUp delay={0.3}>
            <div className="bg-surface-container border border-surface-container-highest p-8 rounded-xl text-center group hover:border-primary/50 transition-colors shadow-2xl h-full">
              <div className="w-16 h-16 bg-primary-container/10 text-primary-container rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <h3 className="text-headline-md font-headline-md mb-2 text-on-surface">Location</h3>
              <p className="text-on-surface-variant text-body-md font-body-md">367 Hillcrest Lane, USA</p>
            </div>
          </FadeUp>

          {/* Hours Card */}
          <FadeUp delay={0.4}>
            <div className="bg-surface-container border border-surface-container-highest p-8 rounded-xl text-center group hover:border-primary/50 transition-colors shadow-2xl h-full">
              <div className="w-16 h-16 bg-primary-container/10 text-primary-container rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined text-3xl">schedule</span>
              </div>
              <h3 className="text-headline-md font-headline-md mb-2 text-on-surface">Opening Hours</h3>
              <p className="text-on-surface-variant text-body-md font-body-md">Mon - Sat (10.00AM - 05.30PM)</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeUp>
            <div className="bg-surface-container border border-surface-container-highest rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
              {/* Image Part */}
              <div className="lg:w-1/2 relative min-h-[400px]">
                <img 
                  alt="Car Key Handover" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTDJHx2J5gQ2oquNoaolcqOSCq1BHJ2JYMeCF0N75mHRAmsqyQXXd3wosTy9HuSMoZO_6oaF8ONlzoja0SIDxlVeeVwjZW_XvZFr9af85sOs-yHYiKLZg82hvo--XZqkY1trmTO9mp_u3dFAEz-OVb1c5Yl0XXvk8ZEkJ-LVrOOBgV_zz0x842SUR07__0sBspDmGE3glQkZ3ufRvlnGCV9BsuBsKMoiK5vQ_9OueNIL7U-7VNW2PSaThYUATI3QzuTyjMnNOhjtU" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container to-transparent"></div>
              </div>
              
              {/* Form Part */}
              <div className="lg:w-1/2 p-10 md:p-16 relative z-10">
                <h2 className="text-headline-lg font-headline-lg mb-8 text-on-surface">Get in touch!</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-label-md font-label-md text-on-surface-variant mb-2">Name <span className="text-primary">*</span></label>
                      <input 
                        className="w-full bg-surface-container-lowest border border-surface-container-highest rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" 
                        placeholder="Enter your name" 
                        type="text" 
                      />
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-on-surface-variant mb-2">Email Address <span className="text-primary">*</span></label>
                      <input 
                        className="w-full bg-surface-container-lowest border border-surface-container-highest rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" 
                        placeholder="Enter your email" 
                        type="email" 
                      />
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-on-surface-variant mb-2">Phone number <span className="text-primary">*</span></label>
                      <input 
                        className="w-full bg-surface-container-lowest border border-surface-container-highest rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" 
                        placeholder="Enter your phone number" 
                        type="tel" 
                      />
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-on-surface-variant mb-2">Comments <span className="text-primary">*</span></label>
                      <textarea 
                        className="w-full bg-surface-container-lowest border border-surface-container-highest rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-on-surface" 
                        placeholder="Write your message..." 
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <button 
                    className="bg-primary-container hover:scale-95 active:scale-90 text-on-primary-container font-bold py-4 px-10 rounded-lg transition-transform uppercase tracking-wider text-label-md font-label-md" 
                    type="submit"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
