// Asincrónico con Axios
async function getNombre() {
    try {
        const datos = await axios(`https://randomuser.me/api`)
        console.log(datos); //traemos el objeto completo

        //Mostramos el nombre
        let texto = `${datos.data.results[0].name.last}, ${datos.data.results[0].name.first}`
        console.log(texto)
        contenido.innerHTML += texto + "<br>";
                
    } catch (error) {
        console.log('Ocurrió un error grave', error);
    }
}
