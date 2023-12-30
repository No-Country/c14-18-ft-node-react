export const createAppointment = async (appointment) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointment/createAppointment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(appointment),
        });

        if (!response.ok) {
            const errorRes = await response.json()
            console.error('Error enviando el formulario:', errorRes)
            throw new Error(`${errorRes.error}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error enviando el email:', error);
        throw error
    }
}