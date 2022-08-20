var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = `https://api.escuelajs.co/api/v1`;

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open(`GET`, urlApi, true);
    xhttp.onreadystatechange = function (event) {
            //0 -> No se ha realizado
            //1 -> Todavia no se ha llamado al valor
            //2 -> Cuando ya se ejecuto el valor de send
            //3 -> Interactuando con la solicitud
            //4 -> Cuando se ha completado la llamada
        if (xhttp.readyState == 4){
            //200 -> La solicitud ha sido correcta
            if(xhttp.status == 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`Error` + urlApi);
                return callback(error, null);
            }
        }
    }

    xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1){
    if (error1) return console.error(error1);

    fetchData(`${API}/products/${data1[1].id}`, function (error2, data2){
        if (error2) return console.error(error2);

        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){
            if (error3) return console.log(error3)

            console.log(data1[1]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});