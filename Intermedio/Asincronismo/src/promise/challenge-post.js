import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPI, data){
    //GET obtener
    //PUT actualizar
    //POST enviar
    //Delete eliminar
    const response = fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const datos = 
{
    "title": "Caloventor",
    "price": 5000,
    "description": "Exelente caloventor pa el invierno",
    "categoryId": 5,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`,datos)
    .then(response => response.json())
    .then(data => console.log(data));