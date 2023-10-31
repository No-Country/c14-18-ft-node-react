export const fetchCitas = async (userId) => {
    
    const patientId = { documentId: userId }

    try {
        const res = await fetch("http://localhost:8080/api/appointment/getAppointment", 
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