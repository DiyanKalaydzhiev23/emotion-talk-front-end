export const handleData = async (response) => {
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

   return data;
}


const debug = true
export const baseURL = debug ? 'http://127.0.0.1:8000' : 'https://emotion-talk.herokuapp.com';