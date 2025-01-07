const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'b182e2f17e6ad95bf1cf4b22ee3ec927'
let gradosKelvin = 273.15


// Agregamos en el boton de buscar la funcion de traer la temperatura de la ciudad
document.getElementById("botonBusqueda").addEventListener("click", () => {
    const ciudad = document.getElementById("ciudadEntrada").value
    if (ciudad) {
        fetchdatosClima(ciudad)
    } else {
        alert("Ingrese una ciudad")
    }
})

function fetchdatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}


function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById("datosClima")
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const pais = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const viento = data.wind.speed
    const icono = data.weather[0].icon
    const descripcion = data.weather[0].description

    const ciudadTitulo = document.createElement("h2")
    ciudadTitulo.textContent = ciudadNombre

    const paisTitulo = document.createElement("h2")
    paisTitulo.textContent = "Pais: " + pais

    const temperaturaInfo = document.createElement("p")
    temperaturaInfo.textContent = `Temperatura: ${Math.floor(temperatura - gradosKelvin)}°C`

    const humedadInfo = document.createElement("p")
    humedadInfo.textContent = "Humedad: " + humedad + "%"

    const vientoInfo = document.createElement("p")
    vientoInfo.textContent = "Velocidad del viento: " + viento + " km/h"

    const iconoInfo = document.createElement("img")
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement("p")
    descripcionInfo.textContent = `Descripción meteorologica: ${descripcion}`

    // Agregamos los elementos al div
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(paisTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(vientoInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)

}




























