export async function FetchMeals() {
    const reponseRaw = await fetch('http://localhost:3000/meals')

    try {
        const responseData = await reponseRaw.json();
        if (!reponseRaw.ok) {
            throw new Error('Failed to get meal');
        }

        return responseData;
    } catch (error) {
        throw new Error(error);
    }
}

export async function FetchImage(nameImage) {
    const reponseRaw = await fetch('http://localhost:3000/getimage?name=' + nameImage)

    try {
        const responseData = reponseRaw.json();
        if (!reponseRaw.ok) {
            throw new Error('Failed to get image');
        }

        return responseData;
    } catch (error) {
        throw new Error(error);
    }
}

export async function Orders(order) {
    const reponseRaw = await fetch('http://localhost:3000/orders',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });

    try {
        const responseData = reponseRaw.json();
        if (!reponseRaw.ok) {
            throw new Error('Failed to get image');
        }

        return responseData;
    } catch (error) {
        throw new Error(error);
    }
}