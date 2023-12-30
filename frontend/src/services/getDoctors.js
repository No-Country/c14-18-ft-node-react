export const fetchDoctors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctor/doctor`);
    const data = await res.json()

    return data.payload
}