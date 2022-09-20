const API = 'https://api.github.com/users/Digruttola2468/repos'
const content = null || document.getElementById('content')

const options = {
	method: 'GET'
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

/*Sentencia que automaticamente cuando esta cargando el codigo
ejecutar nuestra funcion*/ 
(async () => {
    try {
        const github = await fetchData(API);

        let view = `
        ${github.map(githublo => `
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${githublo.owner.avatar_url}" alt="Avatar image" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <a href="${githublo.html_url}">${githublo.name}</a>
                
            </div>
            </div>
        
        `).slice(0,5).join('')}

        `;

        console.log(view)

        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
}) ();