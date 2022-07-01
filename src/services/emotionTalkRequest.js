export const sendRecording = async (formData) => {

    const response = await fetch('http://127.0.0.1:8000/emotion-recognize/1/', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    console.log(data);
}