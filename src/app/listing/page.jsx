import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FadeUp from "@/components/animations/FadeUp";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { redirect } from "next/navigation";
import CancelListingBtn from "@/components/sections/CancelListingBtn";

export const metadata = {
  title: "User Listing | DREAMS RENT",
};

export default async function DashboardPage() {

  const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session);

    if (!session?.user || !token) {
        redirect("/login")
    }

const res = await fetch(
  `${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/cars/user/${session?.user?.id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: "no-store"
  }
)

if (!res.ok) {
  const errorText = await res.text()
  console.log(errorText)

  throw new Error("Failed to fetch cars")
}

const cars = await res.json()
 


  return (
    <main className="bg-background min-h-screen text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-surface-container-lowest py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-surface-container-highest rotate-12 opacity-20"></div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <FadeUp>
            <h1 className="text-headline-lg font-headline-lg mb-4 text-on-surface uppercase tracking-tight">User Listing</h1>
            <nav className="flex justify-center items-center gap-2 text-on-surface-variant text-label-md font-label-md">
              <Link className="hover:text-primary transition-colors" href="/">Home</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-primary">User Listing</span>
            </nav>
          </FadeUp>
        </div>
      </section>

      {/* Horizontal Dashboard Navigation */}
      <section className="bg-surface-container-low border-b border-surface-container-highest sticky top-20 z-40">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max gap-4 py-6">
            <Link className="flex flex-col items-center gap-2 min-w-[100px] text-on-surface-variant hover:text-primary transition-all group" href="/dashboard">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">dashboard</span>
              </div>
              <span className="text-label-md font-label-md">Dashboard</span>
            </Link>
            <Link className="flex flex-col items-center gap-2 min-w-[100px] text-primary transition-all group" href="/dashboard">
              <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center shadow-[0_0_20px_rgba(255,152,0,0.3)] transition-colors">
                <span className="material-symbols-outlined text-on-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>calendar_month</span>
              </div>
              <span className="text-label-md font-label-md font-bold">My Listing</span>
            </Link>
            <Link className="flex flex-col items-center gap-2 min-w-[100px] text-on-surface-variant hover:text-primary transition-all group" href="#">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">reviews</span>
              </div>
              <span className="text-label-md font-label-md">Reviews</span>
            </Link>
            <Link className="flex flex-col items-center gap-2 min-w-[100px] text-on-surface-variant hover:text-primary transition-all group" href="#">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <span className="text-label-md font-label-md">Wishlist</span>
            </Link>
            <Link className="flex flex-col items-center gap-2 min-w-[100px] text-on-surface-variant hover:text-primary transition-all group" href="#">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span className="text-label-md font-label-md">Messages</span>
            </Link>
            <Link className="flex flex-col items-center gap-2 min-w-[100px] text-on-surface-variant hover:text-primary transition-all group" href="#">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <span className="text-label-md font-label-md">My Wallet</span>
            </Link>
            <Link className="flex flex-col items-center gap-2 min-w-[100px] text-on-surface-variant hover:text-primary transition-all group" href="#">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <span className="text-label-md font-label-md">Payments</span>
            </Link>
            <Link className="flex flex-col items-center gap-2 min-w-[100px] text-on-surface-variant hover:text-primary transition-all group" href="#">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </div>
              <span className="text-label-md font-label-md">Settings</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 relative z-10">
        <FadeUp delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <h2 className="text-headline-md font-headline-md text-on-surface">My Listing</h2>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex bg-surface-container-high p-1 rounded-lg">
                <button className="p-2 bg-primary-container text-on-primary-container rounded-md hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-sm block">grid_view</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm block">calendar_today</span>
                </button>
              </div>
              <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-[#e68900] transition-all active:scale-95 text-label-md font-label-md">
                <span className="material-symbols-outlined">add</span>
                Add Listing
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="flex flex-wrap gap-2">
              <button className="px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container font-bold text-label-md font-label-md hover:bg-[#e68900] transition-colors">All Listing</button>
              <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary font-bold text-label-md font-label-md transition-colors">Upcoming</button>
              <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary font-bold text-label-md font-label-md transition-colors">Inprogress</button>
              <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary font-bold text-label-md font-label-md transition-colors">Completed</button>
              <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary font-bold text-label-md font-label-md transition-colors">Cancelled</button>
            </div>
            <div className="flex gap-4">
              <div className="relative min-w-[160px]">
                <select className="w-full bg-surface-container-high border-none rounded-lg py-2.5 px-4 text-label-md font-label-md text-on-surface appearance-none focus:ring-1 focus:ring-primary outline-none">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="relative min-w-[180px]">
                <select className="w-full bg-surface-container-high border-none rounded-lg py-2.5 px-4 text-label-md font-label-md text-on-surface appearance-none focus:ring-1 focus:ring-primary outline-none">
                  <option>Sort By Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Bookings Table Container */}
        <FadeUp delay={0.2} yOffset={40}>
          <div className="bg-surface-container-low rounded-2xl border border-surface-container-highest overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-surface-container-highest flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="text-headline-md font-headline-md">All Listing</h3>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">40</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-high/50 text-label-md font-label-md text-on-surface uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-5 w-12"><input className="rounded bg-surface-container-high border-outline text-primary focus:ring-primary" type="checkbox" /></th>
                    <th className="px-6 py-5 whitespace-nowrap">Listing ID <span className="material-symbols-outlined text-xs align-middle ml-1">unfold_more</span></th>
                    <th className="px-6 py-5 whitespace-nowrap">Car Name <span className="material-symbols-outlined text-xs align-middle ml-1">unfold_more</span></th>
                    <th className="px-6 py-5 whitespace-nowrap">Rental Type <span className="material-symbols-outlined text-xs align-middle ml-1">unfold_more</span></th>
                    <th className="px-6 py-5 whitespace-nowrap">Pickup / Delivery Location <span className="material-symbols-outlined text-xs align-middle ml-1">unfold_more</span></th>
                    <th className="px-6 py-5 whitespace-nowrap">Dropoff Location <span className="material-symbols-outlined text-xs align-middle ml-1">unfold_more</span></th>
                    <th className="px-6 py-5 whitespace-nowrap">Booked On <span className="material-symbols-outlined text-xs align-middle ml-1">unfold_more</span></th>
                    <th className="px-6 py-5 whitespace-nowrap">Cancel Listing <span className="material-symbols-outlined text-xs align-middle ml-1">unfold_more</span></th>
                  </tr>
                </thead>
                {cars?.map((car) => (
                <tbody key={car?._id} className="divide-y divide-surface-container-highest">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-high/20 transition-colors group">
                    
                    <td className="px-6 py-6"><input className="rounded bg-surface-container-high border-outline text-primary focus:ring-primary" type="checkbox" /></td>
                    <td className="px-6 py-6 font-bold text-primary group-hover:text-primary-container transition-colors">#0808</td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-10 rounded-lg overflow-hidden bg-surface-container-highest relative shrink-0">
                          <img alt="Ferrari 458 MM Speciale" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={car?.img} />
                        </div>
                        <div>
                          <div className="font-bold text-on-surface group-hover:text-primary transition-colors">{car?.brand}</div>
                          <div className="text-xs text-on-surface-variant">Delivery</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-on-surface-variant">Hourly</td>
                    <td className="px-6 py-6">
                      <div className="text-sm">{car?.location}, USA</div>
                      <div className="text-xs text-primary">{new Date(car?.createdAt).toDateString()}</div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-sm">{car?.location}, USA</div>
                      <div className="text-xs text-on-surface-variant">{new Date(car?.createdAt).toDateString()}</div>
                    </td>
                    <td className="px-6 py-6 text-sm text-on-surface-variant">{new Date(car?.createdAt).toDateString()}</td>
                    <td className="px-6 py-6 text-sm text-on-surface-variant"><CancelListingBtn listingId={car?._id} token={token} /></td>
                  </tr>
                  
                </tbody>
                ))}
                      
              </table>
            </div>
            <div className="p-6 border-t border-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-low">
              <div className="text-sm text-on-surface-variant">
                Showing <span className="text-on-surface font-bold">1 to 4</span> of <span className="text-on-surface font-bold">40</span> entries
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors disabled:opacity-50">
                  <span className="material-symbols-outlined block">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container font-bold">1</button>
                <button className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors">2</button>
                <button className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors">3</button>
                <span className="text-on-surface-variant">...</span>
                <button className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors">10</button>
                <button className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined block">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </main>

      <Footer />
    </main>
  );
}
