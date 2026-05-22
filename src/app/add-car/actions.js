'use server';

// import { auth } from '@/lib/auth';
// import { headers } from 'next/headers';


// export const addCar = async (formData) => {
//   const { token } = await auth.api.getToken({
//     headers: await headers(),
//   });

//   const modifiedData = Object.fromEntries(formData.entries());
//   const res = await fetch(`${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/cars`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(modifiedData),
//   });
//   if (!res.ok) return null;
//   const data = await res.json();

//   return data;
// };


//////
// export const deletecar = async (id) => {
//   const { token } = await auth.api.getToken({
//     headers: await headers(),
//   });

//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${id}`, {
//     method: 'DELETE',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   if (!res.ok) return null;
//   const data = await res.json();
//   //   console.log(data);

//   return data;
// };



import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const addCar = async (formData) => {

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const carData = {
        userId: session?.user?.id,

        name: formData.get("name"),
        img: formData.get("img"),
        brand: formData.get("brand"),
        model: formData.get("model"),
        fuel: formData.get("fuel"),
        transmission: formData.get("transmission"),
        seats: formData.get("seats"),
        price: formData.get("price"),

        carType: formData.get("carType"),
        category: formData.get("category"),
        plateNumber: formData.get("plateNumber"),
        location: formData.get("location"),
        color: formData.get("color"),
        year: formData.get("year"),
        doors: formData.get("doors"),
        mileage: formData.get("mileage"),
        passengers: formData.get("passengers"),
        airbags: formData.get("airbags"),

        createdAt: new Date()
    };

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/cars`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(carData)
        }
    );

    return res.json();
};