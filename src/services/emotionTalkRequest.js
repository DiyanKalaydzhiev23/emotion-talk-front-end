import { baseURL, handleData } from "./utills";


export const sendRecording = async (formData, audioLength) => {
    const response = await fetch(`${baseURL}/emotion-recognize/`, {
        method: 'POST',
        body: formData
    });

    const data = await handleData(response);
    console.log(data);
}

export const searchForUsersView = async (userId, searchedUsername, token) => {
    const response = await fetch(`${baseURL}/search-for-users/${userId}?username=${searchedUsername}`, {
        headers: {
            'Authorization': `Token ${token}`
        }
    });
    await handleData(response);
}

export const sendUserRequest = async (userId, userToSendRequestId, token) => {
    const response = await fetch(`${baseURL}/send-user-request/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify({
            'user_id': userId,
            'user_to_send_request_id': userToSendRequestId
        })
    });
    await handleData(response);
}

export const getPendingUserRequests = async (userId, token) => {
    const response = await fetch(`${baseURL}/pending-user-requests/${userId}`, {
        headers: {
            'Authorization': `Token ${token}`
        }
    });
    await handleData(response);
}

export const handlePendingUserRequest = async (userId, userToHandleId, choice, token) => {
    const response = await fetch(`${baseURL}/pending-user-requests/${userId}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify({
            'user_id': userToHandleId,
            'choice': choice
        })
    });
    await handleData(response);
}

export const receiveDataFromUsers = async (userId, token) => {
    const response = await fetch(`${baseURL}/receive-data-users/${userId}`, {
        headers: {
            'Authorization': `Token ${token}`
        }
    });
    await handleData(response);
}
