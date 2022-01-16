export function requestRegistration(username, password, email) {
  // a real registration request would go here but in the meantime, we'll fake it
    return fakeResponse(username, password, email);
}

function fakeResponse(username, password) {
    return new Promise((resolve, reject) => {
        if (username && password) {
            resolve({ auth_token: "faketoken12345678" });
    }
    reject(new Error("Authentication failed!"));
});
}
