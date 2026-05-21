import React from "react";
import Link from "next/link";
import { Select, ListBox, ListBoxItem } from "@heroui/react";
import { addCar } from "./actions";
import { redirect } from "next/navigation";

export default function AddCarPage() {


  const handleAddCar = async (formData) => {
        "use server"
        const data = await addCar(formData)
        if (data?.insertedId) {
            redirect("/cars")
        }

    }
  return (
    <div className="bg-background text-on-surface font-body-md overflow-hidden flex h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 bg-surface-container-low border-r border-surface-container-highest flex-col hidden md:flex">
        <div className="p-6 flex items-center justify-between">
          <div className="text-headline-md font-headline-md font-black text-on-surface uppercase tracking-tighter">
            DREAMS <span className="text-primary-container">RENT</span>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">menu_open</span>
          </button>
        </div>
        <div className="px-4 mb-6">
          <button className="w-full bg-primary-container text-on-primary-container font-label-md py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary-container/20">
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            <span>New Reservation</span>
          </button>
        </div>
        <div className="px-4 mb-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
            <input className="w-full bg-surface-container-high border-none rounded-lg py-2 pl-10 pr-4 text-label-md focus:ring-1 focus:ring-primary-container placeholder:text-on-surface-variant/50" placeholder="Search" type="text"/>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto sidebar-scroll px-2">
          <div className="mb-4">
            <p className="px-4 text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-2">Main</p>
            <ListBox aria-label="Main Navigation">
              <ListBoxItem id="dashboard" className="text-on-surface-variant hover:bg-primary-container/10 hover:text-primary flex items-center gap-3 px-4 py-3 rounded-lg">
                <span className="material-symbols-outlined text-[20px]">dashboard</span> Dashboard
              </ListBoxItem>
            </ListBox>
          </div>
          <div className="mb-4">
            <p className="px-4 text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-2">Bookings</p>
            <ListBox aria-label="Bookings Navigation">
              <ListBoxItem id="reservations" className="text-on-surface-variant hover:bg-primary-container/10 hover:text-primary flex items-center gap-3 px-4 py-3 rounded-lg">
                <span className="material-symbols-outlined text-[20px]">event_note</span> Reservations
              </ListBoxItem>
              <ListBoxItem id="calendar" className="text-on-surface-variant hover:bg-primary-container/10 hover:text-primary flex items-center gap-3 px-4 py-3 rounded-lg">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span> Calendar
              </ListBoxItem>
              <ListBoxItem id="quotations" className="text-on-surface-variant hover:bg-primary-container/10 hover:text-primary flex items-center gap-3 px-4 py-3 rounded-lg">
                <span className="material-symbols-outlined text-[20px]">request_quote</span> Quotations
              </ListBoxItem>
            </ListBox>
          </div>
          <div className="mb-4">
            <p className="px-4 text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-2">Rentals</p>
            <ListBox aria-label="Rentals Navigation">
              <ListBoxItem id="cars" className="bg-primary-container text-on-primary-container font-bold flex items-center gap-3 px-4 py-3 rounded-lg">
                <span className="material-symbols-outlined text-[20px]">directions_car</span> Cars
              </ListBoxItem>
              <ListBoxItem id="attributes" className="text-on-surface-variant hover:bg-primary-container/10 hover:text-primary flex justify-between items-center px-4 py-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px]">tune</span> Car Attributes
                </div>
              </ListBoxItem>
              <ListBoxItem id="maintenance" className="text-on-surface-variant hover:bg-primary-container/10 hover:text-primary flex items-center gap-3 px-4 py-3 rounded-lg">
                <span className="material-symbols-outlined text-[20px]">construction</span> Maintenance
              </ListBoxItem>
            </ListBox>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <form action={handleAddCar} className="flex-1 flex flex-col h-full bg-background overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-margin-desktop bg-background/80 backdrop-blur-md border-b border-surface-container-highest sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="text-label-md">Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-surface-container-highest">
              <span className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center">
                <img alt="English" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3UMbwF0mmLuvoG2s0s-tYhxHGt5KTukDIEk8EWxhghlmSQzuumMByfglULIZMSu-gC6UgLqHWv_19Zq5b9rUAnbDhoaPRUEK7pCU38t6_UcxSq6yofvyJflkCWviYBqmuHcreKF6wYyftAb52Q-BTLZz1CN02a4mpQa9TwxvQaUpqMLVGSC9s35TQRB714l88O7xDcrXkc2nCTHQLEGp-Ce8MUHKUYRZWeBbNZiK-oRQOVGZvOWVgppz3Idea0ap-eejZuEFcy04"/>
              </span>
              <span className="text-label-md">EN</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary">dark_mode</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary relative">
                notifications
                <span className="absolute top-0 right-0 w-2 h-2 bg-primary-container rounded-full border border-background"></span>
              </span>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center cursor-pointer overflow-hidden border border-primary-container/30">
                <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_QhDLtIqU0OcYeBNXiWrcqYi5WiXE5HIJdqEqJzXWXZR-E-BZJccn7Tl8Ylz8gNBFwfT0WHWqEPe-MpsldVD1qffi8xhJj82Vdanb_FcM6WA8STueGbPrfYF4-ISrltKy3gw53v_ZF3MsNFX7rI9K_6wqCAz5ZC3B7BhLn3EfLp8Z-g-vRu-37ClKiuFOels3GkXQsyybIA6U3iyy49bVfIE4JK2BCwYEuA7gZmgs4Gk3x7BkKMLJO41ickja3bzFg-2IPsYot1o"/>
              </div>
            </div>
          </div>
        </header>

        {/* Form Scroll Container */}
        <div className="flex-1 overflow-y-auto p-margin-desktop sidebar-scroll">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button className="px-6 py-2 bg-primary-container/10 text-primary border border-primary/20 rounded-lg flex items-center gap-2 font-label-md transition-all">
                <span className="material-symbols-outlined text-[18px]">info</span> Basic
              </button>
              <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant border border-surface-container-highest rounded-lg flex items-center gap-2 font-label-md hover:bg-surface-container-highest transition-all">
                <span className="material-symbols-outlined text-[18px]">featured_play_list</span> Features
              </button>
              <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant border border-surface-container-highest rounded-lg flex items-center gap-2 font-label-md hover:bg-surface-container-highest transition-all">
                <span className="material-symbols-outlined text-[18px]">payments</span> Pricing
              </button>
              <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant border border-surface-container-highest rounded-lg flex items-center gap-2 font-label-md hover:bg-surface-container-highest transition-all">
                <span className="material-symbols-outlined text-[18px]">add_task</span> Extra Services
              </button>
              <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant border border-surface-container-highest rounded-lg flex items-center gap-2 font-label-md hover:bg-surface-container-highest transition-all">
                <span className="material-symbols-outlined text-[18px]">upload_file</span> Uploads
              </button>
            </div>

            {/* Section: Basic Info Header */}
            <div className="relative overflow-hidden bg-surface-container-low rounded-xl border border-surface-container-highest p-6 flex items-center justify-between">
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 bg-primary-container/20 rounded-lg flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">info</span>
                </div>
                <h2 className="text-headline-md font-headline-md">Basic Info</h2>
              </div>
              <div className="flex items-center gap-2 bg-background/40 px-3 py-1.5 rounded-lg border border-surface-container-highest">
                <span className="text-label-md text-on-surface-variant">Default Language:</span>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <img alt="" className="w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDmivb8El1FHQpESwF6HOfSS3I7Zzzmkme1VnTU4eVJ0K-uaG_FfxGaa_fHpJVg2D2lExIHDxEB813YzSge79iH92R8F86oeg41nl3QdVGmgiu2xCTMoC4RqwqeqeRWmPWfaTKFJhlbwtr09qP7TRrZmaTgn18Tgpn51A4OvfUlXkdx12JI0i4EoTtBDdfuaRex_INqfj2mQk52fnnJQqa1se06vc7Z6YmHA1HxOPQ72CqjWcQeoRUkMmgdpqRAzc-_aLi_Msq0Kk"/>
                  <span>English</span>
                  <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary-container/5 to-transparent"></div>
            </div>

            {/* Featured Image URL */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              <div className="md:col-span-1">
                <h3 className="text-label-md font-bold mb-1">Featured Image URL</h3>
                <p className="text-[12px] text-on-surface-variant">Add an image via URL</p>
              </div>
              <div className="md:col-span-3 flex items-center gap-6">
                <div className="w-full">
                  <label className="block text-label-md mb-2">Image Link</label>
                  <input name="img" className="w-full bg-surface-container-low border border-surface-container-highest rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all" placeholder="https://example.com/image.jpg" type="url"/>
                </div>
              </div>
            </div>

            <hr className="border-surface-container-highest"/>

            {/* Main Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              <div className="md:col-span-1">
                <h3 className="text-label-md font-bold mb-1">Car Info</h3>
                <p className="text-[12px] text-on-surface-variant">Add detailed technical and descriptive information about the vehicle.</p>
              </div>
              <div className="md:col-span-3 space-y-6">
                
                {/* Name & Permalink */}
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-label-md mb-2">Name <span className="text-primary-container">*</span></label>
                    <input  name="name" className="w-full bg-surface-container-low border border-surface-container-highest rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all" placeholder="e.g. Porsche 911 Carrera" type="text"/>
                  </div>
                  
                </div>

                {/* 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-label-md">Car Type <span className="text-primary-container">*</span></label>
                      <button className="text-primary text-[12px] hover:underline">Add New</button>
                    </div>
                    <Select className="w-full">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select Type" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="sports" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Sports Car</ListBoxItem>
                          <ListBoxItem id="luxury" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Luxury Sedan</ListBoxItem>
                          <ListBoxItem id="suv" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">SUV</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-label-md">Brand <span className="text-primary-container">*</span></label>
                      <button className="text-primary text-[12px] hover:underline">Add New</button>
                    </div>
                    <Select name="brand" className="w-full">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select Brand" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="porsche" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Porsche</ListBoxItem>
                          <ListBoxItem id="lamborghini" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Lamborghini</ListBoxItem>
                          <ListBoxItem id="ferrari" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Ferrari</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-label-md">Model <span className="text-primary-container">*</span></label>
                      <button className="text-primary text-[12px] hover:underline">Add New</button>
                    </div>
                    <Select name="model" className="w-full">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select Model" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="911" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">911 Carrera</ListBoxItem>
                          <ListBoxItem id="huracan" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Huracán</ListBoxItem>
                          <ListBoxItem id="f8" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">F8 Tributo</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                </div>

                {/* Another 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-label-md mb-2">Category <span className="text-primary-container">*</span></label>
                    <Select className="w-full">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select Category" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="premium" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Premium</ListBoxItem>
                          <ListBoxItem id="executive" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Executive</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2">Plate Number</label>
                    <input className="w-full bg-surface-container-low border border-surface-container-highest rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container" placeholder="e.g. DX-9988-P" type="text"/>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2">Price</label>
                    <input name="price" className="w-full bg-surface-container-low border border-surface-container-highest rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container" placeholder="Price $$" type="text"/>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-label-md mb-2">Main Location <span className="text-primary-container">*</span></label>
                    <Select className="w-full">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select City" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="la" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Los Angeles</ListBoxItem>
                          <ListBoxItem id="miami" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Miami</ListBoxItem>
                          <ListBoxItem id="ny" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">New York</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2">Link Other Location</label>
                    <div className="relative">
                      <input className="w-full bg-surface-container-low border border-surface-container-highest rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container" placeholder="Search locations..." type="text"/>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">map</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2">Fuel <span className="text-primary-container">*</span></label>
                    <Select name="fuel" className="w-full">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select Fuel" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="petrol" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Petrol (Premium)</ListBoxItem>
                          <ListBoxItem id="diesel" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Diesel</ListBoxItem>
                          <ListBoxItem id="electric" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Electric</ListBoxItem>
                          <ListBoxItem id="hybrid" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Hybrid</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                </div>

                {/* Technical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-label-md mb-2">Odometer</label>
                    <div className="flex">
                      <input className="flex-1 bg-surface-container-low border border-surface-container-highest rounded-l-lg py-3 px-4 focus:ring-1 focus:ring-primary-container" placeholder="0" type="number"/>
                      <span className="inline-flex items-center px-4 rounded-r-lg border border-l-0 border-surface-container-highest bg-surface-container-high text-on-surface-variant">km</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2">Color <span className="text-primary-container">*</span></label>
                    <Select className="w-full" defaultSelectedKey="red">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select Color" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="black" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Jet Black Metallic</ListBoxItem>
                          <ListBoxItem id="red" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Guards Red</ListBoxItem>
                          <ListBoxItem id="white" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Carrara White</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2">Year of Car <span className="text-primary-container">*</span></label>
                    <Select className="w-full" defaultSelectedKey="2023">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select Year" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="2024" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">2024</ListBoxItem>
                          <ListBoxItem id="2023" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">2023</ListBoxItem>
                          <ListBoxItem id="2022" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">2022</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                </div>

                {/* Final Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-label-md mb-2">Transmission</label>
                    <Select name="transmission" className="w-full">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select Transmission" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="auto" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">PDK Automatic</ListBoxItem>
                          <ListBoxItem id="manual" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">Manual 7-Speed</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2">Mileage</label>
                    <input className="w-full bg-surface-container-low border border-surface-container-highest rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container" placeholder="e.g. 18 mpg city" type="text"/>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2">Passengers</label>
                    <input className="w-full bg-surface-container-low border border-surface-container-highest rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container" placeholder="2" type="number"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-label-md mb-2">No. of Seats</label>
                    <Select name="seats" className="w-full">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select Seats" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="2" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">2 Seats</ListBoxItem>
                          <ListBoxItem id="4" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">4 Seats</ListBoxItem>
                          <ListBoxItem id="5" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">5 Seats</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2">No. of Doors</label>
                    <Select className="w-full">
                      <Select.Trigger className="bg-surface-container-low border border-surface-container-highest py-3 rounded-lg flex items-center justify-between px-4 hover:bg-surface-container-high transition-colors text-label-md">
                        <Select.Value placeholder="Select Doors" />
                      </Select.Trigger>
                      <Select.Popover className="bg-surface-container-high rounded-xl border border-surface-container-highest shadow-xl">
                        <ListBox className="p-2 space-y-1">
                          <ListBoxItem id="2" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">2 Doors</ListBoxItem>
                          <ListBoxItem id="4" className="px-4 py-2 rounded-lg hover:bg-primary-container/20 hover:text-primary transition-colors cursor-pointer outline-none">4 Doors</ListBoxItem>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2">No. of Air Bags</label>
                    <input className="w-full bg-surface-container-low border border-surface-container-highest rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container" placeholder="6" type="number"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pb-12">
              <button className="px-8 py-3 text-on-surface-variant font-label-md hover:bg-surface-container-high rounded-lg transition-all">Cancel</button>
              <button className="px-8 py-3 bg-primary-container text-on-primary-container font-headline-md rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-95 shadow-xl shadow-primary-container/20">
                Add Features <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <footer className="bg-surface-container-lowest border-t border-surface-container-highest px-margin-desktop py-4 flex flex-col md:flex-row justify-between items-center text-on-surface-variant text-label-md gap-4">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
          <div>
            Copyright © 2025 <span className="text-primary font-bold">Dreams Rent</span>. Made with <span className="text-red-500">♥</span> by Dreams
          </div>
        </footer>
      </form>
    </div>
  );
}
