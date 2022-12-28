export const handleData = async (response) => {
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

   return data;
}


const debug = false

const baseURL = debug ? 'http://127.0.0.1:8000' : 'https://emotion-talk.azurewebsites.net';

const emotionsTextData = {
    'angry1': 'I hear that you are angry.',
    'angry2': 'You sound angry.',
    'angry3': 'I think that you are angry.',
    'angry4': 'I am most certain that you are angry.',
    'happy1': 'I hear that you are happy.',
    'happy2': 'You sound happy.',
    'happy3': 'I think that you are happy.',
    'happy4': 'I am most certain that you are happy.',
    'sad1': 'I hear that you are sad.',
    'sad2': 'You sound sad.',
    'sad3': 'I think that you are sad.',
    'sad4': 'I am most certain that you are sad.',
    'neutral': 'You sound neutral to me.',
    'listening': 'I am listening.'
}

export {
    baseURL,
    emotionsTextData,
}