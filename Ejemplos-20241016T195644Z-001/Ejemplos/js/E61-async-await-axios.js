// Asincrónico con Axios
const getNombre = async () => {
    try {
        const datos = await axios(`https://randomuser.me/api`)
        console.log(datos); //traemos el objeto completo

        //Mostramos el nombre
        let texto = `${datos.data.results[0].name.last}, ${datos.data.results[0].name.first}`
        contenido.innerHTML += `
        <div class="tarjeta">
            <!-- Muestra una imagen obtenida de los datos de la API. -->
            <img src="${datos.data.results[0].picture.large}"</img><br>

            <!-- Muestra el nombre obtenido de los datos de la API. -->
            Nombre: ${datos.data.results[0].name.last}, ${datos.data.results[0].name.first}<br>

            <!-- Muestra el nombre de usuario obtenido de los datos de la API. -->
            User: ${datos.data.results[0].login.username}<br>

            <!-- Muestra la contraseña obtenida de los datos de la API. -->
            Pass: ${datos.data.results[0].login.password}<br>

            <!-- Muestra la dirección de correo electrónico obtenida de los datos de la API. -->
            ${datos.data.results[0].email}
        </div>`;
                
    } catch (error) {
        console.log('Ocurrió un error grave', error);
    }
}
