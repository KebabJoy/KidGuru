import axios from "axios";

const API_URL = "https://kidgurufinal.herokuapp.com"

async function getMenu(){
    const obj = await axios.get(`${API_URL}/main_page`)
    return obj
}

async function getMathGuru(nextt){
    const obj = await axios.get(`${API_URL}/math_guru`, {params: {next: nextt} })
    return obj
}

async function getAnimal(aid){
    const obj = await axios.get(`${API_URL}/g_animal`, {params: {id: aid}})
    return obj
}


export default { getMenu, getMathGuru, getAnimal };
