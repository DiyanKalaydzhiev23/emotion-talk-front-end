import { baseURL } from "./utills";


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

    console.log(reqBody)

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