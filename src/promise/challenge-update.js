import fetch from "node-fetch";

const id=205;

const API = "https://api.escuelajs.co/api/v1";

function putData(urlApi) {
    const response = fetch(urlApi, {
        method: 'PUT', //METODO
        mode: 'cors',   //PERMISOS
        credentials: 'same-origin', //CREDENCIALES
        headers: { //ENCABEZADOS PARA EL SERVIDOR
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Curso de Node con expreess.js",
    "price": 1000,
    "description": "Probando un post",
    "categoryId": 1,
    "images": ["https://cdn-icons-png.flaticon.com/512/5968/5968322.png"]
}

putData(`${API}/products/${id}`, data)
    .then(response =>response.json())
    .then(data=>console.log(data));
