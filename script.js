const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'b182e2f17e6ad95bf1cf4b22ee3ec927'
let gradosKelvin = 273.15


// Agregamos en el boton de buscar la funcion de traer la temperatura de la ciudad
document.getElementById("botonBusqueda").addEventListener("click", () => {
    const ciudad = document.getElementById("ciudadEntrada").value
    if (ciudad) {
        fetchdatosClima(ciudad)
    }

    function fetchdatosClima(ciudad) {
        fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
            .then(data => data.json())
            .then(data => mostrarDatosClima(data))
    }


    function mostrarDatosClima(data) {
        console.log(data)
        const divDatosClima = document.getElementById("datosClima")
        divDatosClima.innerHTML = ''

        const ciudadNombre = data.name
        const temperatura = data.main.temp
        const descripcion = data.weather[0].descripcion

        const ciudadTitulo = document.createElement("h2")
        ciudadTitulo.textContent = ciudadNombre

        const temperaturaInfo = document.createElement("p")
        temperaturaInfo.textContent = `Temperatura: ${temperatura - gradosKelvin}°C`

        const descripcionInfo = document.createElement("p")
        descripcionInfo.textContent = `Descripción meteorologica: ${descripcion}`

        // Agregamos los elementos al div
        divDatosClima.appendChild(ciudadTitulo)
        divDatosClima.appendChild(temperaturaInfo)
        divDatosClima.appendChild(descripcionInfo)

    }




























