// "use client";

// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// const UpdateForm = ({ car, token }) => {

//   const router = useRouter();

//   const handleUpdate = async (e) => {

//     e.preventDefault();

//     const form = e.target;

//     const updatedCar = {
//       brand: form.brand.value,
//       location: form.location.value,
//       image: form.image.value,
//     };

//     try {

//       const res = await fetch(
//   `${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/cars/${car?._id}`,
//   {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     },
//     body: JSON.stringify(updatedCar)
//   }
// );

//       const data = await res.json();

//       if (res.ok) {

//         toast.success("Listing updated");

//         router.push("/listing");

//         router.refresh();

//       } else {

//         toast.error(data?.message);

//       }

//     } catch (error) {

//       console.log(error);

//       toast.error("Something went wrong");

//     }

//   };

//   return (

//     <form
//       onSubmit={handleUpdate}
//       className="space-y-4"
//     >

//       <input
//         type="text"
//         name="brand"
//         defaultValue={car?.brand}
//         placeholder="Brand"
//         className="border p-3 w-full"
//       />

//       <input
//         type="text"
//         name="location"
//         defaultValue={car?.location}
//         placeholder="Location"
//         className="border p-3 w-full"
//       />

//       <input
//         type="text"
//         name="image"
//         defaultValue={car?.image}
//         placeholder="Image URL"
//         className="border p-3 w-full"
//       />

//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-6 py-3 rounded"
//       >
//         Update Listing
//       </button>

//     </form>

//   );
// };

// export default UpdateForm;