import axios from "axios"

const api = axios.create({
    baseURL: "https://barperks-backend.onrender.com/",
    timeout: 20000
})

const apiMercadoPago = axios.create({
    baseURL: "https://api.mercadopago.com/checkout/preferences",
    timeout: 20000
})

export { api, apiMercadoPago }
