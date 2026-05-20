import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FadeUp from "@/components/animations/FadeUp";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookingBtn from "@/components/sections/BookingBtn";

export const metadata = {
  title: "Chevrolet Camaro | DREAMS RENT",
};

const fetchSingleCars = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/cars/${id}`,
    {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    }
  );
  const data = await res.json();
  return data || {};
};

export default async function CarDetailsPage({params}) {

  const {id} = await params;

  const { token } = await auth.api.getToken({
        headers: await headers(),
    });


  const cars = await fetchSingleCars(id, token)
  const {bookingCount} = cars


  return (
    <main className="bg-background min-h-screen text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

  
      <section className="bg-surface-container-low pt-32 pb-24 relative overflow-hidden">
       
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none rounded-full"></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <FadeUp>
            <nav className="flex items-center gap-2 text-on-surface-variant text-label-md font-label-md mb-4">
              <a className="hover:text-primary transition-colors" href="/">Home</a>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <a className="hover:text-primary transition-colors" href="/listings">Listings</a>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-primary">Chevrolet Camaro</span>
            </nav>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-gutter">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-surface-container-high px-3 py-1 rounded text-[12px] font-bold text-on-surface">SEDAN</span>
                  <span className="bg-primary-container text-on-primary-container px-2 py-1 rounded text-[12px] font-bold shadow-[0_0_15px_rgba(255,152,0,0.3)]">2023</span>
                  <div className="flex items-center text-primary ml-2">
                    <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-[18px]">star_half</span>
                    <span className="text-on-surface-variant text-label-md ml-1">(5.0)</span>
                  </div>
                </div>
                <h1 className="text-display-lg font-display-lg text-on-surface mb-2">{cars.brand} - {cars.model}</h1>
                <div className="flex flex-wrap gap-4 mt-4 text-on-surface-variant text-label-md">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> Miami St, Destin, FL 32550, USA</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">visibility</span> Views : 250</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">calendar_today</span> Listed on: 01 Jan, 2024</span>
                </div>
              </div>
              <div className="flex gap-2 mt-6 md:mt-0">
                <button className="bg-surface-container-high text-on-surface px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-[20px]">analytics</span> Total Booking : {`${bookingCount || 200}`}
                </button>
                <button className="border border-outline-variant text-on-surface px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-surface-container-high transition-colors hover:border-primary-container hover:text-primary">
                  <span className="material-symbols-outlined text-[20px]">compare_arrows</span> Compare Listing
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop -mt-12 mb-section-gap relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-gutter">
            {/* Hero Image & Gallery */}
            <FadeUp delay={0.2} yOffset={40}>
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden group border border-surface-container-highest shadow-2xl">
                  <img alt="Chevrolet Camaro Hero" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" src={cars.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-12 h-12 rounded-full bg-surface/80 backdrop-blur text-on-surface flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-all">
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button className="w-12 h-12 rounded-full bg-surface/80 backdrop-blur text-on-surface flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-all">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-[12px] font-bold shadow-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">bolt</span> 4.2 Km Away
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-green-500/80 backdrop-blur text-white px-3 py-1 rounded-full text-[12px] font-bold shadow-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check</span> Airport delivery
                    </span>
                    <span className="bg-green-500/80 backdrop-blur text-white px-3 py-1 rounded-full text-[12px] font-bold shadow-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check</span> Home delivery
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  <div className="rounded-xl overflow-hidden border-2 border-primary-container h-24 shadow-[0_0_15px_rgba(255,152,0,0.3)]">
                    <img alt="Thumb 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX0md1SwLoCzDtGBUI7OOdYVxETFZd8UNXP-NtQh_m3CGxIyoZZ6fctpLzrSBxO2_7NO0SGnbwdN_-VGo6995_gu_fRMHbIsDVzLyh7yDuuirUFlG96c0VXIE6hIAPk-fmbiuiwel01Hdm9hdLg2Nsb2z2JYsJyX1NrtAnHNsfNcoQYBHRFhlI3k3dRUO3voA_SOLIsdcQcB0pK6FMQskqaJh4HnOze58T-EiF870yHqokfT3TSpwbsClDrHk0uCIEzL9oSOymZF0" />
                  </div>
                  <div className="rounded-xl overflow-hidden h-24 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <img alt="Thumb 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOgM9Ef-oWJq0z5zIntpWTGlVOfGmi96zhO8q_5pCmHvPccd8yfFdvYA5vBe2hjb0iv6v3WAPTm_s3OHIMauGBQTQkHiE8FpAjyrvATzzTpKh_RtK4OR1_A3IuEqZvt3n6YBf7UXkNoH93bWtZHbzZTwGILXPWDK1RqKWZhV4YZWOSfZ4nJqQWE5CB3lLeD6kPze0Y1qC-13ye5mDcx6Kn2FqsZMNzCsV-2oGFKbqQaSrOAUDBDtkJ9PwUO-knzVPDdOpqEluyXyw" />
                  </div>
                  <div className="rounded-xl overflow-hidden h-24 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <img alt="Thumb 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEfW12naBDvgI3Nzf0BhnaK32_i7eB_hilV3ngHbh9yFwwf2St6iJKN1oK9EpQnmCIfR1cwZY6bTCWtOvltHblGDudc7pcKLqZLFva7XZ1R3grO1bStEzElhgmLfCWDkqTFyn8R8xla0-U3KVQzhXfDQ5tjBNmjLmHeyImoLVJWut5OXbBbOQes2ME1MLHFLpsJRa1VzdYcv6hVGsmubzDIZrvtiYYX86q0A8dfyd_jFKOzB7lpvj_KzyY9YAbRHK2RDA8dbYbKns" />
                  </div>
                  <div className="rounded-xl overflow-hidden relative h-24 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
                    <img alt="Thumb 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn1kzbtNGG_8hGdYpFZKJ39gUvCekhKRA4w0ZPBsKU0NKhf94GOK0PBtzTOVKavpydN1bgDbgIKySVzozM7xmrRaFzX4h4nBkwYQuIXZUfh9BQ0u7SBBITxLS7qgabHAVzmVpVgyKyIReQ1qbH7qNNsZQfyaVkXnBI82_UpHBcJyF7aSAafm1pNuBZ7dZp0ghLY2IN3lY5gl75qyDKTSo6nr8fuCCwF6TZKIEGzu3LDACLqjOBWL430UvLiWW8_RaOQ-EkqOs3Veo" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-lg backdrop-blur-sm">+12</div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Extra Services */}
            <FadeUp delay={0.3} yOffset={40}>
              <div className="bg-surface-container-low p-gutter rounded-2xl border border-surface-container-highest shadow-xl">
                <h3 className="text-headline-md font-headline-md text-on-surface mb-6">Extra Service</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-[20px]">gps_fixed</span>
                    </div>
                    <span className="text-label-md">GPS Navigation</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-[20px]">wifi</span>
                    </div>
                    <span className="text-label-md">Wi-Fi Hotspot</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-[20px]">child_care</span>
                    </div>
                    <span className="text-label-md">Child Seats</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-[20px]">local_gas_station</span>
                    </div>
                    <span className="text-label-md">Fuel Options</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Listing Description */}
            <FadeUp delay={0.4} yOffset={40}>
              <div className="bg-surface-container-low p-gutter rounded-2xl border border-surface-container-highest shadow-xl">
                <h3 className="text-headline-md font-headline-md text-on-surface mb-6">Description of Listing</h3>
                <div className="text-on-surface-variant space-y-4 font-body-md leading-relaxed">
                  <p>Experience the raw power and iconic style of the Chevrolet Camaro. This modern muscle car combines a heritage-inspired design with cutting-edge technology, making every drive an event. Whether you're cruising through Miami's coastal roads or heading for a weekend getaway, the Camaro delivers unparalleled performance and comfort.</p>
                  <p>Our fleet is meticulously maintained to ensure safety and peak performance. This specific model features a high-output engine, premium interior finishes, and advanced safety features to provide peace of mind during your rental period.</p>
                  <button className="text-primary font-bold hover:underline mt-2">+ Show More</button>
                </div>
              </div>
            </FadeUp>

            {/* Specifications */}
            <FadeUp delay={0.5} yOffset={40}>
              <div className="bg-surface-container-low p-gutter rounded-2xl border border-surface-container-highest shadow-xl">
                <h3 className="text-headline-md font-headline-md text-on-surface mb-6">Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                  {[
                    { icon: 'directions_car', label: 'Body', value: 'Sedan' },
                    { icon: 'factory', label: 'Make', value: 'Chevrolet' },
                    { icon: 'settings_input_component', label: 'Transmission', value: 'Automatic' },
                    { icon: 'ev_station', label: 'Fuel Type', value: 'Petrol' },
                    { icon: 'speed', label: 'Mileage', value: '16 Km' },
                    { icon: 'calendar_month', label: 'Year', value: '2023' },
                    { icon: 'sensor_door', label: 'Doors', value: '2 Doors' },
                    { icon: 'bolt', label: 'Engine', value: '3,000 HP' },
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center gap-4 bg-surface-container p-4 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-colors group">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">{spec.icon}</span>
                      </div>
                      <div>
                        <p className="text-on-surface-variant text-[12px] uppercase font-bold tracking-wider">{spec.label}</p>
                        <p className="text-on-surface font-bold group-hover:text-primary transition-colors">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Features */}
            <FadeUp delay={0.6} yOffset={40}>
              <div className="bg-surface-container-low p-gutter rounded-2xl border border-surface-container-highest shadow-xl">
                <h3 className="text-headline-md font-headline-md text-on-surface mb-6">Car Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
                  {[
                    'Multi-zone A/C', 'Premium sound system', '6 Cylinders',
                    'Heated front seats', 'Bluetooth', 'Adaptive Cruise Control'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-green-500 bg-green-500/10 rounded-full w-6 h-6 flex items-center justify-center text-[16px]">check</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Tariff Table */}
            <FadeUp delay={0.7} yOffset={40}>
              <div className="bg-surface-container-low p-gutter rounded-2xl overflow-hidden border border-surface-container-highest shadow-xl">
                <h3 className="text-headline-md font-headline-md text-on-surface mb-6">Tariff</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-high rounded-lg">
                      <tr>
                        <th className="p-4 text-on-surface font-bold rounded-l-lg">Duration</th>
                        <th className="p-4 text-on-surface font-bold">Daily Price</th>
                        <th className="p-4 text-on-surface font-bold">Base Km</th>
                        <th className="p-4 text-on-surface font-bold rounded-r-lg">Extra Km Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      <tr className="hover:bg-surface-container/50 transition-colors">
                        <td className="p-4 text-on-surface-variant">4 to 5 Days</td>
                        <td className="p-4 text-primary font-bold">$150</td>
                        <td className="p-4 text-on-surface-variant">25 Km</td>
                        <td className="p-4 text-on-surface-variant">$2.80</td>
                      </tr>
                      <tr className="hover:bg-surface-container/50 transition-colors">
                        <td className="p-4 text-on-surface-variant">5 to 8 Days</td>
                        <td className="p-4 text-primary font-bold">$250</td>
                        <td className="p-4 text-on-surface-variant">90 Km</td>
                        <td className="p-4 text-on-surface-variant">$4.50</td>
                      </tr>
                      <tr className="hover:bg-surface-container/50 transition-colors">
                        <td className="p-4 text-on-surface-variant">8 to 15 Days</td>
                        <td className="p-4 text-primary font-bold">$380</td>
                        <td className="p-4 text-on-surface-variant">120 Km</td>
                        <td className="p-4 text-on-surface-variant">$6.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeUp>

            {/* Video Placeholder */}
            <FadeUp delay={0.8} yOffset={40}>
              <div className="bg-surface-container-low p-gutter rounded-2xl border border-surface-container-highest shadow-xl">
                <h3 className="text-headline-md font-headline-md text-on-surface mb-6">Video</h3>
                <div className="relative rounded-xl overflow-hidden aspect-video border border-surface-container-highest shadow-lg group">
                  <img alt="Video Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPbVluuxU7yY9EteVJD3vQrZ_lqYx0NqH2p2h64k-EoIEd1rMr0Ft4M0mNFeOacrUKEwgPIWQWO3v2ySr5tyL6l1e65e5eC3lfCqgGuqKyPynJiBrPDzop2er6hJqJuTLVNmlG3usOwT1owhOfOSkmnpHPL2e9FybT_TJbqtmCIKkAq6NYTa-MmRWPCADZ9fHrylmW7oCnIa0tVifnchnMqepsdm9lcMqRrYr8eTezrGkBh8GfdMK4rIjI4OJ7RXHA3yJESS8fB-U" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/50">
                    <button className="w-20 h-20 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_0_30px_rgba(255,152,0,0.4)] hover:scale-110 active:scale-95 transition-all">
                      <span className="material-symbols-outlined text-[48px]" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
                    </button>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Sidebar (Sticky) */}
          <div className="lg:col-span-4 space-y-gutter relative z-30">
            <div className="sticky top-28 space-y-gutter">
              
              {/* Pricing Card */}
              <FadeUp delay={0.4} yOffset={40}>
                <div className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/30 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-primary"></div>
                  <h4 className="text-headline-md font-headline-md text-on-surface mb-6">Pricing</h4>
                  
                  <div className="space-y-4 mb-8">
                    <label className="flex items-center justify-between p-4 rounded-xl border border-primary-container bg-primary/10 cursor-pointer shadow-inner">
                      <div className="flex items-center gap-3">
                        <input defaultChecked className="text-primary focus:ring-primary bg-surface-container border-outline-variant accent-primary-container w-5 h-5" name="price" type="radio" />
                        <span className="text-on-surface font-bold">Daily</span>
                      </div>
                      <span className="text-primary font-black text-lg">$300</span>
                    </label>
                    <label className="flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-primary/50 transition-colors cursor-pointer bg-surface-container-lowest">
                      <div className="flex items-center gap-3">
                        <input className="text-primary focus:ring-primary bg-surface-container border-outline-variant accent-primary-container w-5 h-5" name="price" type="radio" />
                        <span className="text-on-surface">Weekly</span>
                      </div>
                      <span className="text-on-surface font-bold text-lg">$820</span>
                    </label>
                    <label className="flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-primary/50 transition-colors cursor-pointer bg-surface-container-lowest">
                      <div className="flex items-center gap-3">
                        <input className="text-primary focus:ring-primary bg-surface-container border-outline-variant accent-primary-container w-5 h-5" name="price" type="radio" />
                        <span className="text-on-surface">Monthly</span>
                      </div>
                      <span className="text-on-surface font-bold text-lg">$2,400</span>
                    </label>
                  </div>
                  
                  <div className="flex gap-2 mb-6">
                    <button className="flex-1 py-3 bg-primary-container text-on-primary-container rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg">
                      <span className="material-symbols-outlined text-[18px]">delivery_dining</span> Delivery
                    </button>
                    <button className="flex-1 py-3 bg-surface-container text-on-surface-variant border border-outline-variant rounded-lg font-bold flex items-center justify-center gap-2 hover:text-on-surface hover:border-surface-variant transition-colors">
                      <span className="material-symbols-outlined text-[18px]">person</span> Self Pickup
                    </button>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="text-[12px] font-bold text-on-surface-variant uppercase mb-1 block">Delivery Location</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary">location_on</span>
                        <input className="w-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-lg pl-10 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" type="text" defaultValue="45, 4th Avenue, Mark Street USA" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[12px] font-bold text-on-surface-variant uppercase mb-1 block">Pickup Date</label>
                        <input className="w-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-lg px-3 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" type="date" />
                      </div>
                      <div>
                        <label className="text-[12px] font-bold text-on-surface-variant uppercase mb-1 block">Pickup Time</label>
                        <input className="w-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-lg px-3 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" type="time" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <BookingBtn cars = {cars}/>
                    <button className="w-full py-4 border-2 border-outline-variant text-on-surface rounded-xl font-bold hover:bg-surface-container hover:border-surface-variant transition-colors">Enquire Us</button>
                  </div>
                </div>
              </FadeUp>

              {/* Owner Card */}
              <FadeUp delay={0.5} yOffset={40}>
                <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-xl group">
                  <div className="flex items-center gap-4 mb-6">
                    <img alt="Owner" className="w-16 h-16 rounded-full border-2 border-primary-container group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANQfscytpSjOJHWrovnU7uLvi8TsTR4WbSCf7ABPnAxjxQAHO6YhkPTZiJFnqJgAypO83uL_CEsxo-YaDIDPPeiFf1DCxCJW89M9hn1R3fz4ialTbfloANO5HalVQ-bT_ABgTncqtYBS-MoAeAs9eK7o9EroPZUVxjEVIWu7wwV7PaW8SjE73GLYHFj1F_TkY8XlDVlOkizoyMPnsifNmfuq93cRbuQNdfBxPhKmy7_jN81-t3oVt3lYmrBrAb-9j0IGerdg8cjI0" />
                    <div>
                      <h5 className="text-on-surface font-bold text-headline-md group-hover:text-primary transition-colors">Brooklyn Cars</h5>
                      <div className="flex items-center text-primary">
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]">star_half</span>
                        <span className="text-on-surface-variant text-[12px] ml-1">(5.0)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-label-md bg-surface-container-lowest p-3 rounded-lg border border-surface-container-highest">
                      <span className="text-on-surface-variant">Email</span>
                      <span className="text-on-surface font-bold text-primary">info@example.com</span>
                    </div>
                    <div className="flex justify-between text-label-md bg-surface-container-lowest p-3 rounded-lg border border-surface-container-highest">
                      <span className="text-on-surface-variant">Phone</span>
                      <span className="text-on-surface font-bold">+1 (234) 567 890</span>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Map Card */}
              <FadeUp delay={0.6} yOffset={40}>
                <div className="rounded-2xl overflow-hidden h-64 border border-outline-variant/20 shadow-xl relative group">
                  <img alt="Map Location" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdJbx7HMywvyTRNu0LkERKYkS1AlnPoJ4p51pr8OKCgyGGatj_CF6pO7SXuMHgumHBxDEnvjJJssp_HZxly6wXfCe1RI4OUpABnSy1w6HoV7q2WRyR5u36MM1beVjKQfWrC5y-AQKV1yFEujc0Q73EDNfi01UiXaYYgppXaKDsdwm4RsENC_MXeHQ_c1cpYUomzB5x5bGFQCRtUxPsaRg-ghcaLIDG1km3TJNjv8-_0yILqyJo6ymYoq-JOU5tEfeY20x7REeS5L8" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="material-symbols-outlined text-primary-container text-5xl drop-shadow-[0_0_10px_rgba(255,152,0,0.8)] animate-bounce" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                  </div>
                </div>
              </FadeUp>

            </div>
          </div>
        </div>
      </main>
      
      {/* Recommended Section could go here, but for brevity we'll link straight to Footer */}
      
      <Footer />
    </main>
  );
}
