export const fetchCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/cars`);
  const data = res.json();
  return data || [];
}