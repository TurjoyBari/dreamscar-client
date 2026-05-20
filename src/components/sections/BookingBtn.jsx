"use client";


import { authClient, useSession } from '@/lib/auth-client';
import { image } from 'framer-motion/client';
import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

const BookingBtn = ({cars}) => {


    const { data: session } = useSession()
    const router = useRouter();
    

    const handleBooking = async () => {
        const { data: jwtData } = await authClient.token();
        const token = jwtData?.token;
        if (!token) {
            toast.error("authentication falid. Car not add.")
            return;
        }
        const updatedData = {
            userId: session?.user?.id,
            clientName: session?.user?.name,
            clientEmail: session?.user?.email,
            carBrand: cars?.brand,
            image: cars?.img
        }


        const res = await fetch(`${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/booking/${cars?._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updatedData)
        })

        const data = await res.json();


        if (!data) {
            toast.error("Something went wrong")
            return
        }
        router.push("/dashboard")




    }

    return (
        <div>
            <button 
                onClick = {handleBooking} 
                className="w-full py-4 bg-primary-container text-on-primary-container rounded-xl font-black text-body-lg hover:scale-95 transition-transform shadow-[0_0_20px_rgba(255,152,0,0.3)] hover:shadow-[0_0_30px_rgba(255,152,0,0.5)]">
                    Book Now
            </button>
        </div>
    );
};

export default BookingBtn;