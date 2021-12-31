const API_KEY = "E30e51xp_rCJ0f1PCW5ug2xPqmA"
const API_URL = "http://ci-jshint.herokuapp.com/"
const resultsModal = new bootstrap.Modal(document.getElementById("resultModal"))

document.getElementById("status").addEventListener("click", e => getStatus(e))

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`

    const response = await fetch(queryString)

    const data = await response.json()

    if (response.ok) {
        console.log(data)
    }
}