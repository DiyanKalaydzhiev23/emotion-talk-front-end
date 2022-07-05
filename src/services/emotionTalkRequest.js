import { baseURL, handleData } from "./utills";

export const sendRecording = async (formData, audioLength) => {
    const response = await fetch(`${baseURL}/emotion-recognize/`, {
        method: 'POST',
        body: formData
    });

    const data = await handleData(response);

    setTimeout(
        getLastEmotion,
        audioLength / 2,
        data.data.owner_id,
        data.current_emotions_count
    );
}

export const getLastEmotion = async (userId, lastEmotionsCount) => {
    const response = await fetch(`${baseURL}/get-last-emotion/${userId}/${lastEmotionsCount}/`);
    console.log(await handleData(response));
}