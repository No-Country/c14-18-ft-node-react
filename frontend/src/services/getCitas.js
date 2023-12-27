export const fetchCitas = async (userId) => {
    const apiHost = process.env.NEXT_PUBLIC_API_URL;

    const patientId = { documentId: userId }

    try {
        const res = await fetch(`${apiHost}/api/appointment/getAppointment`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(patientId),
            })

        const data = await res.json()

        return data.payload

    } catch (error) {
        console.log(error)
    }
}