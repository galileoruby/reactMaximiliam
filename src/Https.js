export async function FetchMeals() {
    const reponseRaw = await fetch('http://localhost:3000/meals')

    try {
        const responseData = await reponseRaw.json();
        if (!reponseRaw.ok) {
            throw new Error('Failed to get meal');
        }

        console.log('getting data from FetchMeals')
        return responseData;
    } catch (error) {
        throw new Error(error);
    }
}

export async function FetchImage(nameImage){
    const reponseRaw = await fetch('http://localhost:3000/getimage?name='+ nameImage)

    try {
        const responseData =   reponseRaw.json();
        if (!reponseRaw.ok) {
            throw new Error('Failed to get image');
        }

        console.log('getting data from FetchMeals ', responseData)
        return responseData;
    } catch (error) {
        throw new Error(error);
    }
}