import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FadeUp from "@/components/animations/FadeUp";
import Link from "next/link";

export const metadata = {
  title: "Blog List | DREAMS RENT",
};

export default function BlogListPage() {
  return (
    <main className="bg-background min-h-screen text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      {/* Page Header */}
      <header className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Luxury dark sports car hero background" className="w-full h-full object-cover opacity-30 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyNM2JWEbtHWS_2c1DD9mpqzPgpJ9-MJWROYACWd0YAof3AarCmCxvLxWUtOav_VtLl9FPgY_MlEohlzHRH6Y4A6kw_OodPwUarrLIPVIwbr_C0xioj8pPqQFrtX4w7lYDnmVZVUK2YsH7JYAtGmu3M3t0br8ub5k8U-Sstyytu-XnxMP9zGDn_b8v7GDxZYC5kEQ06SzOs1j5tldn5U9C5ojDYhwTWyijYgJsAth5OodxlQJ1UOF0ZSITonB5lEtqeMtWDwVsX-I" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        </div>
        <div className="relative z-10 text-center space-y-4">
          <FadeUp>
            <h1 className="text-display-lg font-display-lg text-on-surface uppercase tracking-tight">Blog List</h1>
            <nav className="flex justify-center items-center gap-2 text-on-surface-variant font-label-md">
              <Link className="hover:text-primary transition-colors" href="/">Home</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-primary">Blog List</span>
            </nav>
          </FadeUp>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          
          {/* Blog Posts Column */}
          <div className="lg:col-span-8 space-y-gutter">
            {/* Post 1 */}
            <FadeUp delay={0.1} yOffset={40}>
              <article className="group bg-surface-container-low border border-surface-container-highest rounded-xl overflow-hidden hover:border-primary/50 transition-colors shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img alt="Modern blue executive sedan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8aDpVpg1eSqrEpU0B9CMXkQ96_uwRe26IpkqO9yaSaIt39buZHeyXzoGCi264EQVhFLE3yxq4THKGuIFQiKX8DG4qosB_Ygqidr5JJ32EEZDOQ0ebAOBtWbjmhDHYizOhGVhKHyslDhVl3gQlw4LeogSJGuV4x1h5XgweKyNrmS-rATXvWkWee5ciBTws5dlMJYVIi1uQPe1LMZMQ1esytQ1RAmOtdKOjZ6e3HRlq1ZH6gyMeTMgxzEOPEcoXQMA5gRWkyTCjwsg" />
                </div>
                <div className="p-gutter space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-label-md text-label-md">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">person</span> Alphonsa Daniel</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">calendar_today</span> Feb 6, 2023</span>
                    <div className="flex gap-2">
                      <span className="bg-surface-container-highest text-on-surface px-3 py-1 rounded text-[12px] font-bold uppercase">Dealers</span>
                      <span className="bg-surface-container-highest text-on-surface px-3 py-1 rounded text-[12px] font-bold uppercase">Car Showcase</span>
                    </div>
                  </div>
                  <h2 className="text-headline-md font-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">Tesla Model S: Top Secret Car Collector's Garage</h2>
                  <p className="text-on-surface-variant line-clamp-2">Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, either alone...</p>
                  <button className="bg-primary-container text-on-primary-fixed font-bold px-8 py-3 rounded-lg hover:scale-95 active:scale-90 transition-transform flex items-center gap-2 group/btn shadow-lg">
                    Read More
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </article>
            </FadeUp>

            {/* Post 2 */}
            <FadeUp delay={0.2} yOffset={40}>
              <article className="group bg-surface-container-low border border-surface-container-highest rounded-xl overflow-hidden hover:border-primary/50 transition-colors shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img alt="Luxury teal sports coupe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATrKjdhQxH-bQEUrEdfpAaQHC_44vtBUVaBxnI7UmLoIti6p6SKLunsCQxpSfn85uXYhkcJSxyJ5oGJT1RsQ2zQFk_6IrcW6bh7kLjyhj4C6apnHcdLl2PQJbGQwpRYG7vvgCE6_wYSpKkkMac4KbLPZTmDkOV51KB61gfiv7okyMen7cU25beRwBlSesQsbc7WluhLYOktiN9ndLVRCI-2OXPFkWnWo4WiJtXG23A9Cc1XXlQvjqez_4axfv7IXh5P9lwogEkLwI" />
                </div>
                <div className="p-gutter space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-label-md text-label-md">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">person</span> Helan</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">calendar_today</span> Feb 15, 2023</span>
                    <div className="flex gap-2">
                      <span className="bg-surface-container-highest text-on-surface px-3 py-1 rounded text-[12px] font-bold uppercase">Dealers</span>
                      <span className="bg-surface-container-highest text-on-surface px-3 py-1 rounded text-[12px] font-bold uppercase">Car Showcase</span>
                    </div>
                  </div>
                  <h2 className="text-headline-md font-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">Innovations in Electric Drive Systems for 2024</h2>
                  <p className="text-on-surface-variant line-clamp-2">The automotive industry is pivoting faster than ever towards sustainable performance. We take a look at the latest breakthroughs in high-voltage batteries...</p>
                  <button className="bg-primary-container text-on-primary-fixed font-bold px-8 py-3 rounded-lg hover:scale-95 active:scale-90 transition-transform flex items-center gap-2 group/btn shadow-lg">
                    Read More
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </article>
            </FadeUp>

            {/* Post 3 */}
            <FadeUp delay={0.3} yOffset={40}>
              <article className="group bg-surface-container-low border border-surface-container-highest rounded-xl overflow-hidden hover:border-primary/50 transition-colors shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img alt="Silver performance convertible" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF5RLR50yDAVo9LwHH5SrmZPwUEuEFMxWO2LOyi1425eIRmkFyqPi_sMx2BrvcZt-VWVNjStrxXrNEUDnOhsAmddXB0I9zCqX36LYO07b3dN00yufVrH2UFchZ6GMRHu5oLf033VOLDEPhcHlN8o5wFOA81id0UKrlkItyyvLJjSrmN5jlIz9ZdQ2bkw4-17sQoWv531iUrHhE49bEsVK8pKDdOBptl6kvmlDvFmnAZqYDdxO2h_lBkY8CXvOGbb_Gp3UdpXXoRGk" />
                </div>
                <div className="p-gutter space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-label-md text-label-md">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">person</span> Valerie L. Ellis</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">calendar_today</span> Mar 10, 2023</span>
                    <div className="flex gap-2">
                      <span className="bg-surface-container-highest text-on-surface px-3 py-1 rounded text-[12px] font-bold uppercase">Dealers</span>
                      <span className="bg-surface-container-highest text-on-surface px-3 py-1 rounded text-[12px] font-bold uppercase">Car Showcase</span>
                    </div>
                  </div>
                  <h2 className="text-headline-md font-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">8 Amazing Tricks About Automotive Business</h2>
                  <p className="text-on-surface-variant line-clamp-2">Understanding the resale market is key to luxury car ownership. From maintenance schedules to seasonal trends, here are the top industry secrets...</p>
                  <button className="bg-primary-container text-on-primary-fixed font-bold px-8 py-3 rounded-lg hover:scale-95 active:scale-90 transition-transform flex items-center gap-2 group/btn shadow-lg">
                    Read More
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </article>
            </FadeUp>

            {/* Pagination */}
            <FadeUp delay={0.4}>
              <div className="flex items-center justify-center gap-2 py-unit mt-section-gap">
                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-surface-container-highest hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-surface-container-highest hover:bg-primary-container/10 transition-colors">1</button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-container text-on-primary-fixed font-bold shadow-lg shadow-primary/20">2</button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-surface-container-highest hover:bg-primary-container/10 transition-colors">3</button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-surface-container-highest hover:bg-primary-container/10 transition-colors">4</button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-surface-container-highest hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </FadeUp>
          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-gutter relative z-30">
            <div className="sticky top-28 space-y-gutter">
              {/* Search Widget */}
              <FadeUp delay={0.1} yOffset={40}>
                <div className="bg-surface-container-low border border-surface-container-highest rounded-xl p-gutter shadow-xl">
                  <h3 className="text-headline-md font-headline-md mb-gutter flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">search</span> Filter
                  </h3>
                  <div className="relative group">
                    <input className="w-full bg-surface-container-highest border border-transparent rounded-lg p-4 pl-12 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" placeholder="To Search type and hit enter" type="text" />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
                  </div>
                </div>
              </FadeUp>

              {/* Categories Widget */}
              <FadeUp delay={0.2} yOffset={40}>
                <div className="bg-surface-container-low border border-surface-container-highest rounded-xl p-gutter shadow-xl">
                  <h3 className="text-headline-md font-headline-md mb-gutter flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">category</span> Categories
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { name: 'Accept Credit Cards', count: 12 },
                      { name: 'Smoking Allowed', count: '08' },
                      { name: 'Bike Parking', count: 24 },
                      { name: 'Street Parking', count: 15 },
                      { name: 'Wireless Internet', count: 19 },
                      { name: 'Pet Friendly', count: '04' }
                    ].map((cat, i) => (
                      <li key={i} className="flex items-center justify-between group cursor-pointer text-on-surface-variant hover:text-primary transition-colors">
                        <span className="flex items-center gap-2"><span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">•</span> {cat.name}</span>
                        <span className="text-xs bg-surface-container-highest text-on-surface px-2 py-1 rounded group-hover:bg-primary/20 group-hover:text-primary transition-colors">{cat.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* Tags Widget */}
              <FadeUp delay={0.3} yOffset={40}>
                <div className="bg-surface-container-low border border-surface-container-highest rounded-xl p-gutter shadow-xl">
                  <h3 className="text-headline-md font-headline-md mb-gutter flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">sell</span> Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['AIR', 'ENGINE', 'ITEM', 'ON ROAD', 'RIMS', 'SPEED', 'MAKE', 'TRANSMISSION'].map((tag) => (
                      <span key={tag} className="bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary-fixed px-4 py-2 rounded text-[12px] font-bold cursor-pointer transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* Top Article Widget */}
              <FadeUp delay={0.4} yOffset={40}>
                <div className="bg-surface-container-low border border-surface-container-highest rounded-xl p-gutter shadow-xl">
                  <h3 className="text-headline-md font-headline-md mb-gutter flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_stories</span> Top Article
                  </h3>
                  <div className="space-y-4">
                    <div className="relative group rounded-lg overflow-hidden h-40 cursor-pointer">
                      <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKrjamFtPD3qXoqse1Rjqb9eUiaAtYKR2r9kxVQozgLtTRHApotAjHuemgVifQb73IiOMtKSOW2nFGOk8DDwxk_F8t3h9QdyDXJmoXU2ekri9deUZLdKurFEFKKvSQf57jFCnFWPU3Lbss9f7O2ZHaYiTNgE_CjUqlHwvaRQYXmqlF0cotVnQCMOtwdOKtPbq_keDYYQlkONOMIsVIP9p04hrY71pOXrXhQgz3g1RYH3jqDmQIwoJze9VRWxsYnIKe50A_Hh1OgWQ" alt="Top article 1" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                        <h4 className="text-white font-bold leading-tight group-hover:text-primary transition-colors">Great Business Tips in 2023</h4>
                        <p className="text-white/60 text-[10px] flex items-center gap-1 mt-1">
                          <span className="material-symbols-outlined text-[12px]">calendar_today</span> Jan 6, 2023
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 group cursor-pointer hover:bg-surface-container-highest/50 p-2 -mx-2 rounded-lg transition-colors">
                      <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-surface-container-highest">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq6NtFQYeqfjgtYP33WquvQ4Us47hrAjpdCiZL-h2VzwCnNkSfDcHyMN-Rv7die-CntcfXcXdz8gRH8Te6MwHuilvBLk2swafEDTTrsLCfNSmOVMu2KscMUvmKgYEaDeyxSWDVmqYehaPq-4z-ZmoyxTPcm7MEn6X7R9UisRCDmrbBv_NGmFvfmIU-5lheBzvi_F4iuSuflM1xFVDAnN8qijihP4NBsQVV4cyg8orGKlgFnubI-30XCRojlQ8llCAJrcwJzUoV1oA" alt="Top article 2" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-on-surface font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">Excited News About Cars.</h4>
                        <p className="text-on-surface-variant text-[10px] flex items-center gap-1 mt-1">
                          <span className="material-symbols-outlined text-[12px]">calendar_today</span> Feb 5, 2023
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 group cursor-pointer hover:bg-surface-container-highest/50 p-2 -mx-2 rounded-lg transition-colors">
                      <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-surface-container-highest">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXLKaLMy6ykiu75NJOjnXvIy1o-poRtEMkw1v4a4FFPCSjfGUTg_-I2BsbY5401ZlQjhJtyz2J-9W9ZKOCCYtxOP9JJrruTn6F6EhPoxgRhubtPATF6cX7qDsVQM1UTOAIpZ3M4YjKhseECxYJKDc7HA-BpkcrLr2dQp1uSTFdRpVszeuOzfh8CmOvgfYyfIxl12NfVx_tCEV7sZL7I8zEqf47PPX8unGmfB7-X_pCKuU7ko7uDpLX6TV0mVbaXa_mUUc40FKUufQ" alt="Top article 3" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-on-surface font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">8 Amazing Tricks About Business</h4>
                        <p className="text-on-surface-variant text-[10px] flex items-center gap-1 mt-1">
                          <span className="material-symbols-outlined text-[12px]">calendar_today</span> March 10, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </main>
  );
}
