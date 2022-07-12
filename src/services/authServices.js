import { baseURL, handleData } from "./utills";


export const register = async (data) => {
    // if (data.password !== data.repeatPassword) {
    //     throw new Error('Passwords must match!');
    // }

    const reqBody = { 
        username: data.username, 
        password: data.password, 
        profile: {
            email: data.email,
        }
    };

    const response = await fetch(`${baseURL}/auth/register/`, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    });


    const responseData = await response.json();
    localStorage.setItem('user', JSON.stringify(responseData));

    if (!response.ok) {
        throw new Error(responseData.username);
    }

    return responseData;
}

export const login = async (data) => {
    const response = await fetch(`${baseURL}/auth/login/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const responseData = await response.json();
    
    if (!response.ok) {
        throw new Error(responseData);
    }
    
    localStorage.setItem('user', JSON.stringify(responseData));
    return responseData;
}

export const profile = async (userId, userToShowId, token) => {
    const response = await fetch(`${baseURL}/auth/profile/${userId}/${userToShowId}/`, {
        headers: {
            'Authorization': `Token ${token}`
        }
    });
    await handleData(response);
}
