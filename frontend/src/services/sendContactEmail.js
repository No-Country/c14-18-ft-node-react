export const sendEmail = async (client) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(client),
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
};