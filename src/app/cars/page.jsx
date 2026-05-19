import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FadeUp from "@/components/animations/FadeUp";
import Link from "next/link";
import { fetchCars } from "@/lib/data";

export const metadata = {
  title: "Explore Car | DREAMS Car",
};


const ExploreCarsPage = async() => {
  const cars = await fetchCars()

  // console.log(cars)

  return (
    <main className="bg-background min-h-screen text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 pt-32">
        {/* Breadcrumb & Title */}
        <FadeUp className="mb-10 text-center">
          <nav className="flex justify-center items-center gap-2 text-on-surface-variant font-label-md text-label-md mb-2">
            <span>Home</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span>Listings</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary">Car Listings</span>
          </nav>
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface">Explore Our Premium Fleet</h1>
        </FadeUp>

        {/* Power Search Bar */}
        <FadeUp delay={0.2}>
          <div className="bg-surface-container-high p-4 rounded-xl mb-section-gap shadow-2xl relative z-20 border border-surface-container-highest">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-label-md font-label-md text-on-surface-variant">Pickup Location</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">location_on</span>
                  <input className="w-full bg-surface-container-lowest border-surface-container-highest rounded-lg pl-10 pr-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface outline-none transition-all" placeholder="Enter City or Airport" type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-label-md font-label-md text-on-surface-variant">Pickup Date</label>
                <div className="flex gap-2">
                  <input className="flex-grow bg-surface-container-lowest border-surface-container-highest rounded-lg px-3 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface outline-none transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" type="date" />
                  <input className="w-24 bg-surface-container-lowest border-surface-container-highest rounded-lg px-2 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface outline-none transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" type="time" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-label-md font-label-md text-on-surface-variant">Return Date</label>
                <div className="flex gap-2">
                  <input className="flex-grow bg-surface-container-lowest border-surface-container-highest rounded-lg px-3 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface outline-none transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" type="date" />
                  <input className="w-24 bg-surface-container-lowest border-surface-container-highest rounded-lg px-2 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface outline-none transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" type="time" />
                </div>
              </div>
              <button className="bg-primary-container hover:bg-orange-500 text-on-primary font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,152,0,0.3)] hover:shadow-[0_0_25px_rgba(255,152,0,0.5)]">
                <span className="material-symbols-outlined">search</span>
                Search Cars
              </button>
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-80 shrink-0">
            <FadeUp delay={0.3} yOffset={20}>
              <div className="bg-surface-container rounded-xl p-6 sticky top-24 border border-surface-container-highest">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-headline-md text-headline-md text-on-surface">Filters</h2>
                  <button className="text-primary text-label-md hover:underline">Reset</button>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface mb-4 uppercase tracking-widest">Car Brand</h3>
                    <div className="space-y-3">
                      {['Tesla', 'BMW', 'Mercedes', 'Audi'].map(brand => (
                        <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                          <input defaultChecked={brand === 'BMW'} className="w-5 h-5 rounded border-surface-container-highest bg-transparent text-primary-container focus:ring-primary accent-primary-container" type="checkbox" />
                          <span className="group-hover:text-primary transition-colors text-on-surface-variant">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface mb-4 uppercase tracking-widest">Transmission</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="px-4 py-2 rounded-lg border border-primary text-primary bg-primary/10 text-label-md transition-all">Automatic</button>
                      <button className="px-4 py-2 rounded-lg border border-surface-container-highest hover:border-primary text-on-surface-variant text-label-md transition-all">Manual</button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface mb-4 uppercase tracking-widest">Price Range</h3>
                    <input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container" type="range" />
                    <div className="flex justify-between mt-2 text-label-md text-on-surface-variant">
                      <span>$50</span>
                      <span>$1,000+</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface mb-4 uppercase tracking-widest">Fuel Type</h3>
                    <div className="space-y-3">
                      {['Electric', 'Hybrid', 'Petrol/Diesel'].map((fuel, idx) => (
                        <label key={fuel} className="flex items-center gap-3 cursor-pointer group">
                          <input defaultChecked={idx === 2} className="w-5 h-5 border-surface-container-highest bg-transparent text-primary-container focus:ring-primary accent-primary-container" name="fuel" type="radio" />
                          <span className="group-hover:text-primary transition-colors text-on-surface-variant">{fuel}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </aside>

          {/* Grid Content */}
          <div className="flex-grow">
            {/* Sorting & View Controls */}
            <FadeUp delay={0.4} yOffset={20}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-surface-container-low p-4 rounded-xl border border-surface-container-highest">
                <p className="text-on-surface-variant">Showing <span className="text-on-surface font-bold">1-6</span> of 154 Cars</p>
                <div className="flex items-center gap-4">
                  <select className="bg-surface-container border border-surface-container-highest rounded-lg text-label-md focus:ring-primary-container px-4 py-2 outline-none text-on-surface">
                    <option>Sort By: Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-container text-on-primary">
                      <span className="material-symbols-outlined">grid_view</span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-surface-container-highest text-on-surface-variant hover:border-primary hover:text-primary transition-all">
                      <span className="material-symbols-outlined">view_list</span>
                    </button>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {cars.map((car, idx) => (
                <FadeUp key={idx} delay={0.2 + (idx * 0.1)} yOffset={30}>
                  <div className="bg-[#1E1E1E] rounded-xl overflow-hidden flex flex-col border border-[#2A2A2A] hover:border-primary-container hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(255,152,0,0.15)] group h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        alt={`${car.brand} ${car.model}`} 
                        src={car.img} 
                      />
                      {car.badge && (
                        <div className={`absolute top-4 left-4 ${car.badgeColor} text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10 shadow-lg`}>
                          {car.badge}
                        </div>
                      )}
                      <button className="absolute top-4 right-4 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-primary transition-colors z-10">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                      </button>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-60"></div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow relative z-10 bg-[#1E1E1E]">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">{car.brand} {car.model}</h3>
                        <div className="flex items-center gap-1 text-[#FFB400]">
                          <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-label-md font-label-md text-on-surface">{car.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 mb-6 text-on-surface-variant text-label-md">
                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">settings_input_component</span> {car.transmission}</div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px]">
                            {car.fuel === 'Electric' ? 'bolt' : 'local_gas_station'}
                          </span> 
                          {car.fuel}
                        </div>
                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">person</span> {car.seats}</div>
                      </div>
                      
                      <div className="mt-auto pt-6 border-t border-surface-container-highest flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-on-surface-variant text-[12px] uppercase">Starting from</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-primary-container text-headline-md font-bold">${car.price}</span>
                            <span className="text-on-surface-variant text-label-md">/ day</span>
                          </div>
                        </div>
                        <Link href={`/car-details/${car._id}`} className="bg-primary-container hover:bg-primary-container/90 text-on-primary font-bold px-5 py-2.5 rounded-lg text-label-md transition-all active:scale-95 group-hover:shadow-[0_0_15px_rgba(255,152,0,0.3)]">Rent Now</Link>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Pagination */}
            <FadeUp delay={0.5} yOffset={20}>
              <div className="mt-12 flex justify-center items-center gap-2">
                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-surface-container-highest hover:border-primary hover:text-primary text-on-surface-variant transition-all">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-container text-on-primary font-bold shadow-[0_0_15px_rgba(255,152,0,0.3)]">1</button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-surface-container-highest hover:border-primary hover:text-primary text-on-surface-variant transition-all">2</button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-surface-container-highest hover:border-primary hover:text-primary text-on-surface-variant transition-all">3</button>
                <span className="text-on-surface-variant px-2">...</span>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-surface-container-highest hover:border-primary hover:text-primary text-on-surface-variant transition-all">18</button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-surface-container-highest hover:border-primary hover:text-primary text-on-surface-variant transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default ExploreCarsPage;

