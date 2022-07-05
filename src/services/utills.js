export const handleData = async (response) => {
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

   return data;
}

export const baseURL = 'http://127.0.0.1:8000';