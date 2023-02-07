import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
}

/*fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.log(error);
    })*/

//PARA MULTIPLES LLAMADOS

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(category => {
        console.log(category.name, "f");
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally");
    });
