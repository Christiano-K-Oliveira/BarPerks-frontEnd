import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 20000
})

const apiMercadoPago = axios.create({
    baseURL: "https://api.mercadopago.com/checkout/preferences",
    timeout: 20000
})

export { api, apiMercadoPago }