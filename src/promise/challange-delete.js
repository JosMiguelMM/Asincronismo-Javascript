import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function deleteDate(urlApi){
    const response= fetch(urlApi,{
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            ContentType: 'application/json'
        }
    });
    return response;
}

deleteDate(`${API}/products/205`)
    .then(response => response.json())
    .then(data => console.log(data));
