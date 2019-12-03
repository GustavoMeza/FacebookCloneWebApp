let baseUrl = 'https://127.0.0.1:5001';

let getCookie = name => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
    else return null;
}

let getJwt = () => getCookie("jwt");

let getFromApi = resource => {
    let jwt = getJwt();
    let config = {
        headers: {
            "Authorization": `Bearer ${jwt}`,
        }
    }
    return fetch(`${resource}`, config)
        .then( res => {
            if(res.status == 401) {
                window.location.href = "http://127.0.0.1:8000/signin.html";
            }
            return res;
        });
}

let getUserId = () => {};

let validateAuth = () => {
    return getFromApi('https://127.0.0.1:5001/Authentication/Validate')
        .then(res => {
            return res.text();
        })
        .then(userId => {
            getUserId = () => userId;
        });
}

let getJsonFromApi = resource => {
    return getFromApi(resource)
        .then(res => res.json());
}

let postJsonToApi = (resource, data) => {
    let jwt = getJwt();
    let configs = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${jwt}`,
        },
    };
    return fetch(`${resource}`, configs);
}
