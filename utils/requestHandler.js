let baseUrl = 'https://127.0.0.1:5001';

let getCookie = name => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
    else return null;
}

let getJwt = () => getCookie("jwt");

getFromApi = resource => {
    let jwt = getJwt();
    let config = {
        headers: {
            "Authorization": `Bearer ${jwt}`,
        }
    }
    return fetch(`${resource}`, config);
}

getJsonFromApi = resource => {
    return getFromApi(resource)
        .then(res => res.json());
}

postJsonToApi = (resource, data) => {
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
