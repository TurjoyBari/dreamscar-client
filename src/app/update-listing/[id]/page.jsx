
// import UpdateForm from "@/components/sections/UpdateForm";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";

// const UpdateListingPage = async ({ params }) => {

//   const { id } = params;

//   const { token } = await auth.api.getToken({
//     headers: await headers()
//   });

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/cars/${id}`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       },
//       cache: "no-store"
//     }
//   );

//  const res = await fetch(
//   `${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/cars/${id}`,
//   {
//     headers: {
//       Authorization: `Bearer ${token}`
//     },
//     cache: "no-store"
//   }
// );

// if (!res.ok) {
//   const errorText = await res.text();
//   console.log("API ERROR:", errorText);
//   throw new Error("Failed to fetch car");
// }

// const car = await res.json();

//   return (

//     <div className="max-w-3xl mx-auto py-20">

//       <h1 className="text-3xl font-bold mb-10">
//         Update Listing
//       </h1>

//       <UpdateForm
//         car={car}
//         token={token}
//       />

//     </div>

//   );
// };

// export default UpdateListingPage;