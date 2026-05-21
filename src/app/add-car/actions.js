'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';


export const addCar = async (formData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const modifiedData = Object.fromEntries(formData.entries());
  const res = await fetch(`${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/cars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(modifiedData),
  });
  if (!res.ok) return null;
  const data = await res.json();

  return data;
};
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